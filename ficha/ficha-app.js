/* ============================================================
   APP — navegação, eventos, swipe, dropdowns, persistência
   ============================================================ */
(function(){

const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

let ficha = null;
let abaAtual = 0;

const ABAS = [
  { id:'ficha',           nome:'Ficha',           render: () => RENDER.renderFicha(ficha) },
  { id:'pericias',        nome:'Perícias',        render: () => RENDER.renderPericias(ficha) },
  { id:'combate',         nome:'Combate',         render: () => RENDER.renderCombate(ficha) },
  { id:'magias',          nome:'Magias',          render: () => RENDER.renderMagias(ficha) },
  { id:'inventario',      nome:'Inventário',      render: () => RENDER.renderInventario(ficha) },
  { id:'caracteristicas', nome:'Características', render: () => RENDER.renderCaracteristicas(ficha) },
  { id:'proficiencias',   nome:'Proficiências',   render: () => RENDER.renderProficiencias(ficha) },
  { id:'notas',           nome:'Notas',           render: () => RENDER.renderNotas(ficha) }
];

const MAPA_ATRIBUTOS = {
  'Força':'forca', 'Destreza':'destreza', 'Constituição':'constituicao',
  'Inteligência':'inteligencia', 'Sabedoria':'sabedoria', 'Carisma':'carisma'
};

// ============================================================
//  INIT
// ============================================================
function init() {
  const id = DND_FICHA.idAtual;
  ficha = id ? DND_FICHA.carregar(id) : DND_FICHA.criarNova();
  if (!ficha) { ficha = DND_FICHA.criarNova(); location.href = '?id=' + ficha.id; return; }

  const base = DND_FICHA.padrao(ficha.id);
  for (const k in base) {
    if (typeof base[k] === 'object' && !Array.isArray(base[k]) && base[k] !== null) {
      ficha[k] = Object.assign({}, base[k], ficha[k] || {});
    } else if (!(k in ficha)) {
      ficha[k] = base[k];
    }
  }
  ficha.meta = Object.assign({}, base.meta, ficha.meta || {});

  if (ficha.meta.classeId && (!ficha.salvaguardas.proficientes?.length)) {
    aplicarSalvaguardasDaClasse(ficha, ficha.meta.classeId);
  }

  recalcularRecursos();

  const pvCalc = CALC.pvMaximo(ficha);
  if (!ficha.hp.max || ficha.hp.max < 1) ficha.hp.max = pvCalc;
  if (ficha.hp.atual > ficha.hp.max)    ficha.hp.atual = ficha.hp.max;

  montarAbasMenu();
  renderAba(0);
  bindEventosGlobais();
  bindSwipe();

  if ('serviceWorker' in navigator) navigator.serviceWorker.register('../sw.js').catch(() => {});
}

// ============================================================
//  MENU
// ============================================================
function montarAbasMenu() {
  const menu = document.getElementById('menuAbas');
  menu.innerHTML = ABAS.map((a, i) =>
    `<button data-aba="${i}" class="${i===abaAtual?'ativo':''}">${a.nome}</button>`
  ).join('');
  menu.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    renderAba(parseInt(b.dataset.aba, 10));
    fecharMenu();
  }));
}
function abrirMenu()  { document.body.classList.add('menu-aberto'); }
function fecharMenu() { document.body.classList.remove('menu-aberto'); }

// ============================================================
//  RENDER DE ABA
// ============================================================
function renderAba(idx) {
  const main = document.getElementById('conteudo');
  const mudouDeAba = idx !== abaAtual;

  const yJanela = window.scrollY;
  const yMain = main.scrollTop;
  const yListas = Array.from(main.querySelectorAll('.grade-pericias-escolha'))
    .map(el => el.scrollTop);

  abaAtual = idx;
  main.innerHTML = ABAS[idx].render();
  document.getElementById('tituloAba').textContent = ABAS[idx].nome;
  $$('#menuAbas button').forEach((b, i) => b.classList.toggle('ativo', i === idx));

  if (mudouDeAba) {
    main.scrollTop = 0;
    window.scrollTo(0, 0);
  } else {
    main.scrollTop = yMain;
    window.scrollTo(0, yJanela);
    main.querySelectorAll('.grade-pericias-escolha').forEach((el, i) => {
      if (yListas[i] != null) el.scrollTop = yListas[i];
    });
  }

  bindAba(idx);
}

// ============================================================
//  GLOBAIS
// ============================================================
function bindEventosGlobais() {
  document.getElementById('fabMenu').addEventListener('click', abrirMenu);
  document.getElementById('overlayMenu').addEventListener('click', fecharMenu);
}

// ============================================================
//  SWIPE
// ============================================================
function bindSwipe() {
  const main = document.getElementById('conteudo');
  let x0 = 0, y0 = 0, t0 = 0, ativo = false;

  main.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return;
    x0 = e.touches[0].clientX;
    y0 = e.touches[0].clientY;
    t0 = Date.now();
    ativo = true;
  }, { passive: true });

  main.addEventListener('touchcancel', () => { ativo = false; });

  main.addEventListener('touchend', e => {
    if (!ativo) return;
    ativo = false;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    const dt = Date.now() - t0;
    if (dt < 600 && Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0 && abaAtual < ABAS.length - 1) renderAba(abaAtual + 1);
      if (dx > 0 && abaAtual > 0)               renderAba(abaAtual - 1);
    }
  }, { passive: true });
}

// ============================================================
//  PERSISTÊNCIA
// ============================================================
function atualizar(caminho, valor) {
  const partes = caminho.split('.');
  let obj = ficha;
  for (let i = 0; i < partes.length - 1; i++) obj = obj[partes[i]];
  obj[partes[partes.length - 1]] = valor;
  DND_FICHA.salvar(ficha);
}

// ============================================================
//  REGRAS AUXILIARES
// ============================================================

function aplicarSalvaguardasDaClasse(f, classeId) {
  const c = window.acharClasse?.(classeId);
  if (!c?.testesDeResistencia) return;
  f.salvaguardas.proficientes = c.testesDeResistencia
    .map(n => MAPA_ATRIBUTOS[n]).filter(Boolean);
}

function nivelClassePrincipal() {
  const totalMulti = (ficha.meta.multiclasses || [])
    .reduce((s, mc) => s + (mc.nivel || 0), 0);
  return Math.max(1, (ficha.meta.nivel || 1) - totalMulti);
}

function recalcularRecursos() {
  const recursos = [];

  const c = window.acharClasse?.(ficha.meta.classeId);
  const nvP = CALC.nivelClassePrincipal(ficha);
  if (c?.recursos) {
    c.recursos.forEach(r => {
      let max = 0;
      if ((r.tipo === 'usos' || r.tipo === 'pontos') && r.progressao) {
        for (const p of r.progressao) if (nvP >= p.nivel) max = p.valor;
      }
      const exist = (ficha.recursos || []).find(x => x.nome === r.nome && x.classe === c.nome);
      recursos.push({ nome: r.nome, atual: exist?.atual ?? max, max, classe: c.nome });
    });
  }

  (ficha.meta.multiclasses || []).forEach(mc => {
    const cm = window.acharClasse?.(mc.id);
    if (!cm?.recursos) return;
    cm.recursos.forEach(r => {
      let max = 0;
      if ((r.tipo === 'usos' || r.tipo === 'pontos') && r.progressao) {
        for (const p of r.progressao) if (mc.nivel >= p.nivel) max = p.valor;
      }
      const exist = (ficha.recursos || []).find(x => x.nome === r.nome && x.classe === cm.nome);
      recursos.push({ nome: r.nome, atual: exist?.atual ?? max, max, classe: cm.nome });
    });
  });

  ficha.recursos = recursos;
}

function aplicarBonusAntecedente(f, novoBonus) {
  const anterior = f.meta.antecedenteBonusAplicado || {};
  for (const [a, v] of Object.entries(anterior)) {
    f.atributos[a] = (f.atributos[a] || 10) - v;
  }
  for (const [a, v] of Object.entries(novoBonus.valores || {})) {
    f.atributos[a] = (f.atributos[a] || 10) + v;
  }
  f.meta.antecedenteBonusAplicado = { ...(novoBonus.valores || {}) };
}

function limparAntecedente(f) {
  const aplicado = f.meta.antecedenteBonusAplicado || {};
  for (const [a, v] of Object.entries(aplicado)) {
    f.atributos[a] = (f.atributos[a] || 10) - v;
  }
  f.meta.antecedenteBonus = null;
  f.meta.antecedenteBonusAplicado = null;
  f.meta.antecedentePericiasEscolhidas = [];
  f.meta.antecedenteFerramentaEscolhida = '';
  f.meta.antecedenteTalentoEscolhido = '';
}

function limparEspecie(f) {
  f.meta.especieEscolhas = {};
  f.meta.especiePericiasEscolhidas = [];
  f.meta.especieTalentoEscolhido = '';
  f.meta.especieConfirmada = false;
  f.meta.especieMagiasGastas = {};
}

// ============================================================
//  BIND POR ABA
// ============================================================
function bindAba(idx) {
  const main = document.getElementById('conteudo');

  // --------------------------------------------------------
  // 1) Campos genéricos
  // --------------------------------------------------------
  main.querySelectorAll('[data-campo]').forEach(inp => {
    inp.addEventListener('change', e => {
      const campo = e.target.dataset.campo;
      let v = e.target.value;
      if (e.target.type === 'number') v = parseInt(v, 10) || 0;

      if (campo === 'meta.classeId') {
        ficha.meta.classeId = v;
        ficha.meta.subclasseId = null;
        ficha.meta.classePericiasEscolhidas = [];
        ficha.meta.classePericiasConfirmadas = false;
        ficha.meta.classeFerramentasEscolhidas = [];      
        ficha.meta.classeFerramentasConfirmadas = false;
        aplicarSalvaguardasDaClasse(ficha, v);
        ficha.hp.max = CALC.pvMaximo(ficha);
        if (ficha.hp.atual > ficha.hp.max) ficha.hp.atual = ficha.hp.max;
        recalcularRecursos();
        DND_FICHA.salvar(ficha);
        renderAba(abaAtual);
        return;
      }

      if (campo === 'meta.antecedenteId') {
        limparAntecedente(ficha);
        ficha.meta.antecedenteId = v;
        DND_FICHA.salvar(ficha);
        renderAba(abaAtual);
        return;
      }

      if (campo === 'meta.especieId') {
        limparEspecie(ficha);
        ficha.meta.especieId = v;
        ficha.meta.especieConfirmada = false;
        DND_FICHA.salvar(ficha);
        renderAba(abaAtual);
        return;
      }

      if (campo === 'meta.nivel') {
        const totalMulti = (ficha.meta.multiclasses || [])
          .reduce((s, mc) => s + (mc.nivel || 0), 0);
        const minimo = 1 + totalMulti;
        ficha.meta.nivel = Math.max(minimo, Math.min(20, v));
        if (CALC.nivelClassePrincipal(ficha) < 3) ficha.meta.subclasseId = null;
        ficha.hp.max = CALC.pvMaximo(ficha);
        if (ficha.hp.atual > ficha.hp.max) ficha.hp.atual = ficha.hp.max;
        recalcularRecursos();
        DND_FICHA.salvar(ficha);
        renderAba(abaAtual);
        return;
      }

      if (campo === 'meta.subclasseId') {
        ficha.meta.subclasseId = v || null;
        DND_FICHA.salvar(ficha);
        return;
      }

      atualizar(campo, v);
      if (/atributos\./.test(campo)) renderAba(abaAtual);
    });
  });

  // --------------------------------------------------------
  // M) Multiclasses
  // --------------------------------------------------------
  main.querySelectorAll('[data-add-mc]').forEach(b => b.addEventListener('click', () => {
    ficha.meta.multiclasses = ficha.meta.multiclasses || [];
    if (ficha.meta.multiclasses.length >= 2) return;
    if ((ficha.meta.nivel || 1) >= 20) {
    alert('O nível total já está em 20.');
    return;
    }
    ficha.meta.multiclasses.push({
      id: null,
      nivel: 1,
      subclasseId: null,
      periciasEscolhidas: [],
      periciasConfirmadas: false
    });
    ficha.meta.nivel = (ficha.meta.nivel || 1) + 1;
    if (CALC.nivelClassePrincipal(ficha) < 3) ficha.meta.subclasseId = null;
    ficha.hp.max = CALC.pvMaximo(ficha);
    if (ficha.hp.atual > ficha.hp.max) ficha.hp.atual = ficha.hp.max;
    recalcularRecursos();
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  }));

  main.querySelectorAll('[data-del-mc]').forEach(b => b.addEventListener('click', () => {
    const i = parseInt(b.dataset.delMc, 10);
    const mc = ficha.meta.multiclasses[i];
    if (!mc) return;
    ficha.meta.nivel = Math.max(1, (ficha.meta.nivel || 1) - (mc.nivel || 0));
    ficha.meta.multiclasses.splice(i, 1);
    if (CALC.nivelClassePrincipal(ficha) < 3) ficha.meta.subclasseId = null;
    ficha.hp.max = CALC.pvMaximo(ficha);
    if (ficha.hp.atual > ficha.hp.max) ficha.hp.atual = ficha.hp.max;
    recalcularRecursos();
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  }));

  main.querySelectorAll('[data-mc-campo]').forEach(inp => inp.addEventListener('change', e => {
    const i = parseInt(inp.dataset.mcIdx, 10);
    const campo = inp.dataset.mcCampo;
    const mc = ficha.meta.multiclasses[i];
    if (!mc) return;

    if (campo === 'nivel') {
      const anterior = mc.nivel || 1;
      const digitado = parseInt(inp.value, 10) || 1;
      const maxPermitido = anterior + (20 - (ficha.meta.nivel || 1));
      const novo = Math.max(1, Math.min(maxPermitido, digitado));
      mc.nivel = novo;
      ficha.meta.nivel = (ficha.meta.nivel || 1) + (novo - anterior);
      if (novo < 3) mc.subclasseId = null;
    } else if (campo === 'id') {
      mc.id = inp.value || null;
      mc.subclasseId = null;
      mc.periciasEscolhidas = [];
      mc.periciasConfirmadas = false;
    } else if (campo === 'subclasseId') {
      mc.subclasseId = inp.value || null;
    }

    if (CALC.nivelClassePrincipal(ficha) < 3) ficha.meta.subclasseId = null;
    ficha.hp.max = CALC.pvMaximo(ficha);
    if (ficha.hp.atual > ficha.hp.max) ficha.hp.atual = ficha.hp.max;
    recalcularRecursos();
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  }));

  // --------------------------------------------------------
  // 2) HP +/- e XP +/-
  // --------------------------------------------------------
  main.querySelectorAll('[data-hp]').forEach(b => b.addEventListener('click', () => {
    const d = parseInt(b.dataset.hp, 10);
    ficha.hp.atual = Math.max(0, Math.min(ficha.hp.max, ficha.hp.atual + d));
    DND_FICHA.salvar(ficha); renderAba(0);
  }));

  main.querySelectorAll('[data-xp-acao]').forEach(btn => btn.addEventListener('click', () => {
    const input = main.querySelector('.xp-input');
    const valor = Math.abs(parseInt(input.value, 10) || 0);
    if (!valor) return;
    if (btn.dataset.xpAcao === 'add') ficha.meta.xp += valor;
    else                              ficha.meta.xp = Math.max(0, ficha.meta.xp - valor);

    const totalMulti = (ficha.meta.multiclasses || [])
      .reduce((s, mc) => s + (mc.nivel || 0), 0);
    ficha.meta.nivel = Math.max(1 + totalMulti, Math.min(20, CALC.nivelPorXP(ficha.meta.xp)));

    if (CALC.nivelClassePrincipal(ficha) < 3) ficha.meta.subclasseId = null;
    ficha.hp.max = CALC.pvMaximo(ficha);
    if (ficha.hp.atual > ficha.hp.max) ficha.hp.atual = ficha.hp.max;
    recalcularRecursos();
    DND_FICHA.salvar(ficha); renderAba(0);
  }));

  // --------------------------------------------------------
  // 3) Antecedente: Atributos
  // --------------------------------------------------------
  main.querySelectorAll('[data-modo-atr]').forEach(btn => btn.addEventListener('click', () => {
    const modo = btn.dataset.modoAtr;
    const bonus = ficha.meta.antecedenteBonus || { modo, valores: {}, confirmado: false };
    if (bonus.modo !== modo) { bonus.modo = modo; bonus.valores = {}; }
    bonus.confirmado = false;
    aplicarBonusAntecedente(ficha, bonus);
    ficha.meta.antecedenteBonus = bonus;
    DND_FICHA.salvar(ficha); renderAba(0);
  }));

  main.querySelectorAll('[data-atr-ant]').forEach(btn => btn.addEventListener('click', () => {
    const atr = btn.dataset.atrAnt;
    const bonus = ficha.meta.antecedenteBonus || { modo:'2+1', valores:{}, confirmado:false };
    const modo = bonus.modo || '2+1';
    const val = bonus.valores || {};
    const presentes = Object.keys(val);

    if (modo === '2+1') {
      if (val[atr]) delete val[atr];
      else if (presentes.length === 0) val[atr] = 2;
      else if (presentes.length === 1) val[atr] = 1;
      else { bonus.valores = { [atr]: 2 }; }
    } else {
      if (val[atr]) delete val[atr];
      else if (presentes.length < 3) val[atr] = 1;
      else { bonus.valores = { [atr]: 1 }; }
    }

    bonus.confirmado = false;
    aplicarBonusAntecedente(ficha, bonus);
    ficha.meta.antecedenteBonus = bonus;
    DND_FICHA.salvar(ficha); renderAba(0);
  }));

  main.querySelectorAll('[data-confirmar-atr-ant]').forEach(b => b.addEventListener('click', () => {
    const bonus = ficha.meta.antecedenteBonus;
    if (!bonus) return;
    const esperado = bonus.modo === '2+1' ? 2 : 3;
    if (Object.keys(bonus.valores).length !== esperado) return;
    bonus.confirmado = true;
    DND_FICHA.salvar(ficha); renderAba(0);
  }));

  main.querySelectorAll('[data-editar-atr-ant]').forEach(b => b.addEventListener('click', () => {
    if (ficha.meta.antecedenteBonus) ficha.meta.antecedenteBonus.confirmado = false;
    DND_FICHA.salvar(ficha); renderAba(0);
  }));

  // --------------------------------------------------------
  // 4) Antecedente Personalizado
  // --------------------------------------------------------
  main.querySelectorAll('[data-bg-pericia]').forEach(b => b.addEventListener('click', () => {
    const p = b.dataset.bgPericia;
    const lista = ficha.meta.antecedentePericiasEscolhidas || [];
    const i = lista.indexOf(p);
    if (i >= 0) lista.splice(i, 1);
    else if (lista.length < 2) lista.push(p);
    else { lista.shift(); lista.push(p); }
    ficha.meta.antecedentePericiasEscolhidas = lista;
    DND_FICHA.salvar(ficha); renderAba(0);
  }));

  main.querySelectorAll('[data-bg-ferramenta]').forEach(sel => sel.addEventListener('change', () => {
    ficha.meta.antecedenteFerramentaEscolhida = sel.value;
    DND_FICHA.salvar(ficha); renderAba(0);
  }));

  main.querySelectorAll('[data-bg-talento]').forEach(sel => sel.addEventListener('change', () => {
    ficha.meta.antecedenteTalentoEscolhido = sel.value;
    DND_FICHA.salvar(ficha); renderAba(0);
  }));

  // --------------------------------------------------------
  // 5) Espécie
  // --------------------------------------------------------
  main.querySelectorAll('[data-esp-opcao]').forEach(b => b.addEventListener('click', () => {
    const id = b.dataset.espOpcao;
    const valor = b.dataset.espValor;
    ficha.meta.especieEscolhas = ficha.meta.especieEscolhas || {};
    ficha.meta.especieEscolhas[id] = valor;
    DND_FICHA.salvar(ficha); renderAba(0);
  }));

  main.querySelectorAll('[data-esp-pericia]').forEach(b => b.addEventListener('click', () => {
    const p = b.dataset.espPericia;
    const cfg = FICHA_CONFIG.especieConfig(ficha.meta.especieId);
    const qtd = cfg?.pericias?.quantidade || 1;
    const lista = ficha.meta.especiePericiasEscolhidas || [];
    const i = lista.indexOf(p);
    if (i >= 0) lista.splice(i, 1);
    else if (lista.length < qtd) lista.push(p);
    else { lista.shift(); lista.push(p); }
    ficha.meta.especiePericiasEscolhidas = lista;
    DND_FICHA.salvar(ficha); renderAba(0);
  }));

  main.querySelectorAll('[data-esp-talento]').forEach(sel => sel.addEventListener('change', () => {
    ficha.meta.especieTalentoEscolhido = sel.value;
    DND_FICHA.salvar(ficha); renderAba(0);
  }));

  // --------------------------------------------------------
  // 5.1) Perícias de Classe
  // --------------------------------------------------------
  main.querySelectorAll('[data-classe-pericia]').forEach(b => b.addEventListener('click', () => {
    const p = b.dataset.classePericia;
    const c = window.acharClasse?.(ficha.meta.classeId);
    const qtd = c?.proficiencias?.pericias?.quantidade || 1;
    const lista = ficha.meta.classePericiasEscolhidas || [];
    const i = lista.indexOf(p);
    if (i >= 0) lista.splice(i, 1);
    else if (lista.length < qtd) lista.push(p);
    else { lista.shift(); lista.push(p); }
    ficha.meta.classePericiasEscolhidas = lista;
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  }));

  main.querySelectorAll('[data-confirmar-pericias-classe]').forEach(b => b.addEventListener('click', () => {
    const c = window.acharClasse?.(ficha.meta.classeId);
    const qtd = c?.proficiencias?.pericias?.quantidade || 1;
    if ((ficha.meta.classePericiasEscolhidas || []).length !== qtd) return;
    ficha.meta.classePericiasConfirmadas = true;
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  }));

  // --------------------------------------------------------
  // 5.1.b) Ferramentas de Classe
  // --------------------------------------------------------
  main.querySelectorAll('[data-classe-ferramenta]').forEach(b => b.addEventListener('click', () => {
    const nome = b.dataset.classeFerramenta;
    const c = window.acharClasse?.(ficha.meta.classeId);
    const info = FICHA_CONFIG.listaFerramentasClasse(c);
    if (!info) return;
    const lista = ficha.meta.classeFerramentasEscolhidas || [];
    const i = lista.indexOf(nome);
    if (i >= 0) lista.splice(i, 1);
    else if (lista.length < info.quantidade) lista.push(nome);
    else { lista.shift(); lista.push(nome); }
    ficha.meta.classeFerramentasEscolhidas = lista;
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  }));

  main.querySelectorAll('[data-confirmar-ferramentas-classe]').forEach(b => b.addEventListener('click', () => {
    const c = window.acharClasse?.(ficha.meta.classeId);
    const info = FICHA_CONFIG.listaFerramentasClasse(c);
    if (!info) return;
    if ((ficha.meta.classeFerramentasEscolhidas || []).length !== info.quantidade) return;
    ficha.meta.classeFerramentasConfirmadas = true;
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  }));

  // --------------------------------------------------------
  // 5.2) Confirmar Espécie
  // --------------------------------------------------------
  main.querySelectorAll('[data-confirmar-especie]').forEach(b => b.addEventListener('click', () => {
    ficha.meta.especieConfirmada = true;
    DND_FICHA.salvar(ficha);
    renderAba(0);
  }));

  main.querySelectorAll('[data-editar-especie]').forEach(b => b.addEventListener('click', () => {
    ficha.meta.especieConfirmada = false;
    DND_FICHA.salvar(ficha);
    renderAba(0);
  }));

  // --------------------------------------------------------
  // 5.x) Magias de Espécie
  // --------------------------------------------------------
  main.querySelectorAll('[data-esp-magia-livre]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const nome = b.dataset.espMagiaLivre;
    ficha.meta.especieMagiasGastas = ficha.meta.especieMagiasGastas || {};
    ficha.meta.especieMagiasGastas[nome] = !ficha.meta.especieMagiasGastas[nome];
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  }));

  // --- Escolha e Confirmação de Idiomas ---
  main.querySelectorAll('[data-idioma]').forEach(b => b.addEventListener('click', () => {
    const idioma = b.dataset.idioma;
    const lista = ficha.meta.idiomasEscolhidos || [];
    const idx = lista.indexOf(idioma);
    
    if (idx >= 0) {
      lista.splice(idx, 1); 
      b.classList.remove('ativa');
    } else {
      lista.push(idioma);   
      b.classList.add('ativa');
    }
    
    ficha.meta.idiomasEscolhidos = lista;
    DND_FICHA.salvar(ficha);

    // Atualiza o contador e o botão na tela sem recarregar tudo
    const topo = b.closest('.painel-escolhas').querySelector('.painel-escolhas-topo span');
    if (topo) {
      topo.textContent = `${lista.length}/2`;
      topo.className = lista.length === 2 ? 'check' : 'pendente';
    }

    const btn = document.querySelector('[data-confirmar-idiomas]');
    if (btn) {
      const faltam = 2 - lista.length;
      btn.disabled = lista.length !== 2;
      btn.textContent = lista.length === 2 ? 'Confirmar Idiomas' : `Escolha ${faltam} idioma(s) restante(s)`;
    }
  }));

  main.querySelectorAll('[data-confirmar-idiomas]').forEach(b => b.addEventListener('click', () => {
    // Só confirma se tiver exatamente 2 idiomas escolhidos
    if ((ficha.meta.idiomasEscolhidos || []).length !== 2) return; 
    
    ficha.meta.idiomasConfirmados = true;
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  }));

  main.querySelectorAll('[data-editar-idiomas]').forEach(b => b.addEventListener('click', () => {
    ficha.meta.idiomasConfirmados = false;
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  }));

  // --------------------------------------------------------
  // 6) Salvaguardas e perícias (Toggle)
  // --------------------------------------------------------
  main.querySelectorAll('[data-toggle="salv"]').forEach(d => d.addEventListener('click', () => {
    const atr = d.dataset.atr;
    const i = ficha.salvaguardas.proficientes.indexOf(atr);
    if (i >= 0) ficha.salvaguardas.proficientes.splice(i, 1);
    else        ficha.salvaguardas.proficientes.push(atr);
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));

  main.querySelectorAll('[data-toggle="pericia"]').forEach(d => d.addEventListener('click', () => {
    const nome = d.dataset.nome;
    if (ficha.pericias.especializadas.includes(nome)) {
      ficha.pericias.especializadas = ficha.pericias.especializadas.filter(x => x !== nome);
    } else if (ficha.pericias.proficientes.includes(nome)) {
      ficha.pericias.especializadas.push(nome);
    } else {
      ficha.pericias.proficientes.push(nome);
    }
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));

  // --------------------------------------------------------
  // 7) Magias: Lógica Completa
  // --------------------------------------------------------
  main.querySelectorAll('.magia-item').forEach(m => m.addEventListener('click', () => {
    m.classList.toggle('aberto');
  }));

  // Slots de magia
  main.querySelectorAll('[data-esp]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const cir = b.dataset.cir;
    const d = parseInt(b.dataset.esp, 10);
    const slots = CALC.slotsMagia(ficha);
    ficha.magias.espacos[cir] = ficha.magias.espacos[cir] || { atual: 0, max: 0 };
    if (!ficha.magias.espacos[cir].max && slots[cir]) {
      ficha.magias.espacos[cir].max   = slots[cir];
      ficha.magias.espacos[cir].atual = slots[cir];
    }
    const at = ficha.magias.espacos[cir].atual;
    const mx = ficha.magias.espacos[cir].max;
    ficha.magias.espacos[cir].atual = Math.max(0, Math.min(mx, at + d));
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));

  // Filtro de Classes / Espécie (Aba Magias)
  const chipsMagias = main.querySelectorAll('.chips-circulos .chip[data-c]');
  chipsMagias.forEach(chip => chip.addEventListener('click', () => {
    chipsMagias.forEach(c => c.classList.remove('ativo'));
    chip.classList.add('ativo');
    const c = chip.dataset.c;

    main.querySelectorAll('[data-classe-bloco]').forEach(b => { b.style.display = ''; });

    if (c === 'especie') {
      main.querySelectorAll('[data-classe-bloco]').forEach(b => {
        b.style.display = b.dataset.classeBloco === 'especie' ? '' : 'none';
      });
      return;
    }
    if (c !== 'all') {
      main.querySelectorAll('[data-classe-bloco]').forEach(b => {
        b.style.display = b.dataset.classeBloco === c ? '' : 'none';
      });
    }
    const bl = main.querySelector('[data-bloco="especie"]');
    if (bl && c !== 'all') bl.style.display = 'none';
  }));

  // Busca de Magias
  const buscaMag = main.querySelector('.busca-magias');
  if (buscaMag) buscaMag.addEventListener('input', () => {
    const t = buscaMag.value.toLowerCase().trim();
    main.querySelectorAll('.magia-item, .magia-add-row').forEach(m => {
      const nome = (m.dataset.nome || m.querySelector('.magia-nome')?.textContent || '').toLowerCase();
      m.style.display = (!t || nome.includes(t)) ? '' : 'none';
    });
  });

  // Expandir/Recolher por nível
  main.querySelectorAll('[data-toggle-nivel]').forEach(b => b.addEventListener('click', () => {
    const chave = b.dataset.toggleNivel;
    ficha.meta.magiasExpandidas = ficha.meta.magiasExpandidas || {};
    ficha.meta.magiasExpandidas[chave] = !ficha.meta.magiasExpandidas[chave];
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));

  // --- Adicionar / remover TRUQUE (Com Trava de Limite) ---
  main.querySelectorAll('[data-add-truque]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const classeId = b.dataset.addTruque;
    const nome = b.dataset.magiaNome;
    ficha.magias.truquesPorClasse = ficha.magias.truquesPorClasse || {};
    const lista = ficha.magias.truquesPorClasse[classeId] || [];
    
    const cl = CALC.classesConjuradoras(ficha).find(c => c.id === classeId);
    const max = CALC.maxTruquesClasse(classeId, cl ? cl.nivel : 1);
    
    if (lista.length >= max && !lista.includes(nome)) {
      alert(`Você já atingiu o limite de ${max} truques para esta classe.`);
      return;
    }

    if (!lista.includes(nome)) lista.push(nome);
    ficha.magias.truquesPorClasse[classeId] = lista;
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));

  main.querySelectorAll('[data-rem-truque]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const classeId = b.dataset.remTruque;
    const nome = b.dataset.magiaNome;
    const lista = ficha.magias.truquesPorClasse?.[classeId] || [];
    ficha.magias.truquesPorClasse[classeId] = lista.filter(x => x !== nome);
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));

  // --- Adicionar / remover PREPARADA (Com Trava de Limite) ---
  main.querySelectorAll('[data-add-prep]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const classeId = b.dataset.addPrep;
    const nome = b.dataset.magiaNome;
    ficha.magias.preparadasPorClasse = ficha.magias.preparadasPorClasse || {};
    const lista = ficha.magias.preparadasPorClasse[classeId] || [];
    
    const cl = CALC.classesConjuradoras(ficha).find(c => c.id === classeId);
    if (cl && cl.tipo !== 'conhecida' && cl.tipo !== 'grimorio') {
       const max = CALC.maxPreparadasClasse(ficha, cl);
       if (max !== null && lista.length >= max && !lista.includes(nome)) {
         alert(`Você já atingiu o limite de ${max} magias preparadas para esta classe.`);
         return;
       }
    }

    if (!lista.includes(nome)) lista.push(nome);
    ficha.magias.preparadasPorClasse[classeId] = lista;
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));

  main.querySelectorAll('[data-rem-prep]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const classeId = b.dataset.remPrep;
    const nome = b.dataset.magiaNome;
    const lista = ficha.magias.preparadasPorClasse?.[classeId] || [];
    ficha.magias.preparadasPorClasse[classeId] = lista.filter(x => x !== nome);
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));

  // --- Grimório (Mago) ---
  main.querySelectorAll('[data-add-grimorio]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const nome = b.dataset.addGrimorio;
    ficha.magias.grimorio = ficha.magias.grimorio || [];
    if (!ficha.magias.grimorio.includes(nome)) ficha.magias.grimorio.push(nome);
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));

  main.querySelectorAll('[data-rem-grimorio]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const nome = b.dataset.remGrimorio;
    ficha.magias.grimorio = (ficha.magias.grimorio || []).filter(x => x !== nome);
    Object.keys(ficha.magias.preparadasPorClasse || {}).forEach(cid => {
      ficha.magias.preparadasPorClasse[cid] =
        (ficha.magias.preparadasPorClasse[cid] || []).filter(x => x !== nome);
    });
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));
  
  // --- Arcana Mística (Bruxo) ---
  main.querySelectorAll('[data-add-arcana]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const nivel = parseInt(b.dataset.addArcana, 10);
    const nome = b.dataset.magiaNome;
    
    ficha.magias.arcanaMistica = ficha.magias.arcanaMistica || {};
    ficha.magias.arcanaMistica[nivel] = nome; // Substitui automaticamente se já houver uma
    
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  }));

  main.querySelectorAll('[data-rem-arcana]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const nivel = parseInt(b.dataset.remArcana, 10);
    
    if (ficha.magias.arcanaMistica) {
      delete ficha.magias.arcanaMistica[nivel];
    }
    
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  }));

    // --- Adicionar Magia ao Combate ---
  main.querySelectorAll('[data-add-combate]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const nome = b.dataset.addCombate;
    
    // Evita duplicatas no combate
    if (!ficha.ataques.some(a => a.nome === nome)) {
      ficha.ataques.push({
        nome,
        atributo: ficha.magias.atributo || 'carisma',
        proficiente: true,
        dadoDano: '',
        tipoDano: '',
        alcance: 'À distância',
        notas: 'Magia'
      });
      DND_FICHA.salvar(ficha);
      b.textContent = '✅';
      b.style.opacity = '0.5';
      b.disabled = true;
    }
  }));

  // --------------------------------------------------------
  // 8) Inventário (Mochila + Catálogo + Custom)
  // --------------------------------------------------------
  
  // Filtro de Busca da Mochila (Não recarrega a tela, apenas esconde as linhas)
  const buscaInv = main.querySelector('.busca-inv');
  if (buscaInv) {
    buscaInv.addEventListener('input', () => {
      const termo = buscaInv.value.toLowerCase();
      main.querySelectorAll('.item-row').forEach(row => {
        const nome = row.dataset.nome || '';
        row.style.display = nome.includes(termo) ? '' : 'none';
      });
    });
  }

  // Filtros de Chip da Mochila (Equipados / Sintonizados)
  main.querySelectorAll('.chips-inv .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      main.querySelectorAll('.chips-inv .chip').forEach(c => c.classList.remove('ativo'));
      chip.classList.add('ativo');
      const filtro = chip.dataset.inv;
      
      main.querySelectorAll('.item-row').forEach(row => {
        let show = true;
        if (filtro === 'equip') show = row.dataset.equipado === '1';
        else if (filtro === 'attune') show = row.dataset.sintonizado === '1';
        row.style.display = show ? '' : 'none';
      });
    });
  });

  // Botão Equipar
  main.querySelectorAll('[data-toggle-equip]').forEach(b => b.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = ficha.inventario.itens.find(x => x.id === b.dataset.toggleEquip);
    if (item) { 
      item.equipado = !item.equipado; 
      DND_FICHA.salvar(ficha); 
      renderAba(abaAtual); 
    }
  }));

  // Botão Sintonizar
  main.querySelectorAll('[data-toggle-sint]').forEach(b => b.addEventListener('click', (e) => {
    e.stopPropagation();
    const id = b.dataset.toggleSint;
    const idx = ficha.sintonizacao.indexOf(id);
    if (idx >= 0) {
      ficha.sintonizacao.splice(idx, 1);
    } else {
      if (ficha.sintonizacao.length >= 3) { alert('Limite de 3 itens sintonizados.'); return; }
      ficha.sintonizacao.push(id);
    }
    DND_FICHA.salvar(ficha); 
    renderAba(abaAtual);
  }));

  // Quantidade e exclusão
  main.querySelectorAll('[data-qtd]').forEach(inp => inp.addEventListener('change', () => {
    const item = ficha.inventario.itens.find(x => x.id === inp.dataset.qtd);
    if (item) { item.qtd = parseInt(inp.value, 10) || 1; DND_FICHA.salvar(ficha); renderAba(abaAtual); }
  }));
  
  main.querySelectorAll('[data-del-item]').forEach(b => b.addEventListener('click', () => {
    ficha.inventario.itens = ficha.inventario.itens.filter(x => x.id !== b.dataset.delItem);
    ficha.sintonizacao     = ficha.sintonizacao.filter(x => x !== b.dataset.delItem);
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));
  
  main.querySelectorAll('[data-moeda]').forEach(inp => inp.addEventListener('change', () => {
    ficha.inventario.moedas[inp.dataset.moeda] = parseInt(inp.value, 10) || 0;
    DND_FICHA.salvar(ficha);
  }));

  // Toggle do Form de Item Customizado
  main.querySelectorAll('[data-toggle-custom-inv]').forEach(b => b.addEventListener('click', () => {
    ficha.meta._invCustomAberto = !ficha.meta._invCustomAberto;
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));

  // Salvar Item Customizado
  const btnSalvarCustom = document.getElementById('btn-salvar-custom');
  if (btnSalvarCustom) btnSalvarCustom.addEventListener('click', () => {
    const nome = document.getElementById('custom-item-nome').value.trim();
    if (!nome) { alert('O nome do item é obrigatório.'); return; }
    
    const tipo = document.getElementById('custom-item-tipo').value;
    const custo = parseFloat(document.getElementById('custom-item-custo').value) || 0;
    const peso = parseFloat(document.getElementById('custom-item-peso').value) || 0;
    const raridade = document.getElementById('custom-item-raridade').value;
    const propriedades = document.getElementById('custom-item-prop').value.trim();
    const notas = document.getElementById('custom-item-notas').value.trim();

    ficha.inventario.itens.push({
      id: DND_FICHA.uuid(), nome, tipo, subtipo: '', custo, peso, qtd: 1, equipado: false, raridade, sintonizacao: false, propriedades, descricao: notas, notas
    });

    ficha.meta._invCustomAberto = false;
    DND_FICHA.salvar(ficha);
    renderAba(abaAtual);
  });

    // --- Filtros do Catálogo (Busca, Tipo, Raridade) ---
  const aplicarFiltrosCatalogo = () => {
    const termo = (main.querySelector('.busca-cat')?.value || '').toLowerCase();
    ficha.meta._invFiltro = termo; // <-- AQUI: Salva o termo para não perder ao re-renderizar
    
    const tipoFiltro = ficha.meta._invTipoFiltro || 'all';
    const rarFiltro = ficha.meta._invRaridadeFiltro || 'all';

    main.querySelectorAll('.catalogo-item-row').forEach(row => {
      const nome = row.dataset.nome || '';
      const tipo = row.dataset.tipo || '';
      const raridade = row.dataset.raridade || '';
      const isMagico = row.dataset.magico === '1';

      const matchBusca = nome.includes(termo);
      const matchTipo = tipoFiltro === 'all' ? true : (tipoFiltro === 'Magico' ? isMagico : tipo === tipoFiltro);
      const matchRar = rarFiltro === 'all' ? true : raridade === rarFiltro;

      row.style.display = (matchBusca && matchTipo && matchRar) ? '' : 'none';
    });
  };

  const buscaCat = main.querySelector('.busca-cat');
  if (buscaCat) buscaCat.addEventListener('input', aplicarFiltrosCatalogo);

  main.querySelectorAll('[data-cat-tipo]').forEach(chip => chip.addEventListener('click', () => {
    main.querySelectorAll('[data-cat-tipo]').forEach(c => c.classList.remove('ativo'));
    chip.classList.add('ativo');
    ficha.meta._invTipoFiltro = chip.dataset.catTipo;
    aplicarFiltrosCatalogo();
  }));

  main.querySelectorAll('[data-cat-raridade]').forEach(chip => chip.addEventListener('click', () => {
    main.querySelectorAll('[data-cat-raridade]').forEach(c => c.classList.remove('ativo'));
    chip.classList.add('ativo');
    ficha.meta._invRaridadeFiltro = chip.dataset.catRaridade;
    aplicarFiltrosCatalogo();
  }));

  // --- NOVO: Aplica o filtro logo que a aba é renderizada ---
  if (buscaCat) {
    // Define o valor do input baseado no que estava salvo
    buscaCat.value = ficha.meta._invFiltro || '';
    aplicarFiltrosCatalogo();
  }
  
  // Adicionar do Catálogo
  main.querySelectorAll('[data-add-catalogo]').forEach(b => b.addEventListener('click', () => {
    try {
      const itemBase = JSON.parse(b.dataset.addCatalogo.replace(/&#39;/g, "'"));
      ficha.inventario.itens.push({
        id: DND_FICHA.uuid(),
        nome: itemBase.nome,
        tipo: itemBase.tipo,
        subtipo: itemBase.subtipo || '',
        custo: itemBase.custo || 0,
        peso: itemBase.peso || 0,
        qtd: 1,
        equipado: false,
        raridade: itemBase.raridade || '',
        sintonizacao: itemBase.sintonizacao || false,
        propriedades: itemBase.propriedades || '',
        descricao: itemBase.descricao || '',
        notas: itemBase.descricao || itemBase.propriedades || ''
      });
      DND_FICHA.salvar(ficha);
      renderAba(abaAtual);
    } catch (e) {
      console.error('Erro ao adicionar item do catálogo', e);
    }
  }));

  // --------------------------------------------------------
  // 9) Combate
  // --------------------------------------------------------
  
  // Escolha de atributo para armas com Acuidade
  main.querySelectorAll('[data-arma-atr]').forEach(b => b.addEventListener('click', (e) => {
    e.stopPropagation();
    const armaId = b.dataset.armaId;
    const novoAtr = b.dataset.armaAtr;
    const item = ficha.inventario.itens.find(x => x.id === armaId);
    
    if (item) {
      item.atributoAtaque = novoAtr;
      DND_FICHA.salvar(ficha);
      renderAba(abaAtual);
    }
  }));

  main.querySelectorAll('.btn-del[data-idx]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    ficha.ataques.splice(parseInt(b.dataset.idx, 10), 1);
    DND_FICHA.salvar(ficha); renderAba(abaAtual);
  }));

  main.querySelectorAll('[data-move-up]').forEach(b => b.addEventListener('click', (e) => {
    e.stopPropagation();
    const i = parseInt(b.dataset.moveUp, 10);
    if (i > 0) {
      const temp = ficha.ataques[i - 1];
      ficha.ataques[i - 1] = ficha.ataques[i];
      ficha.ataques[i] = temp;
      DND_FICHA.salvar(ficha); renderAba(abaAtual);
    }
  }));

  main.querySelectorAll('[data-move-down]').forEach(b => b.addEventListener('click', (e) => {
    e.stopPropagation();
    const i = parseInt(b.dataset.moveDown, 10);
    if (i < ficha.ataques.length - 1) {
      const temp = ficha.ataques[i + 1];
      ficha.ataques[i + 1] = ficha.ataques[i];
      ficha.ataques[i] = temp;
      DND_FICHA.salvar(ficha); renderAba(abaAtual);
    }
  }));

  // --------------------------------------------------------
  // 10) Retrato
  // --------------------------------------------------------
  const inpRetrato = document.getElementById('inpRetrato');
  if (inpRetrato) {
    const retratoEl = document.querySelector('.cab-retrato');
    if (retratoEl) retratoEl.addEventListener('click', () => inpRetrato.click());
    inpRetrato.addEventListener('change', e => {
      const file = e.target.files[0]; if (!file) return;
      const r = new FileReader();
      r.onload = () => { ficha.meta.retrato = r.result; DND_FICHA.salvar(ficha); renderAba(0); };
      r.readAsDataURL(file);
    });
  }
}

// ============================================================
//  EXPORTS
// ============================================================
window.APP = {
  aplicarSalvaguardasDaClasse,
  aplicarBonusAntecedente,
  recalcularRecursos,
  nivelClassePrincipal,
  renderAba
};

window.addEventListener('DOMContentLoaded', init);
})();