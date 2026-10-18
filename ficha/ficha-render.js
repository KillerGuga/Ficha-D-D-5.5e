/* ============================================================
   RENDER — desenha cada aba
   Arquivo COMPLETO. Substitui o anterior.
   ============================================================ */
(function(){
const $ = s => document.querySelector(s);

// ============================================================
//  CONSTANTES / MAPAS
// ============================================================
const MAPA_ATRIBUTOS = {
  'Força':'forca', 'Destreza':'destreza', 'Constituição':'constituicao',
  'Inteligência':'inteligencia', 'Sabedoria':'sabedoria', 'Carisma':'carisma'
};
const ABREV_ATR = {
  forca:'FOR', destreza:'DES', constituicao:'CON',
  inteligencia:'INT', sabedoria:'SAB', carisma:'CAR'
};
const NOME_ATR = {
  forca:'Força', destreza:'Destreza', constituicao:'Constituição',
  inteligencia:'Inteligência', sabedoria:'Sabedoria', carisma:'Carisma'
};

// ============================================================
//  HELPERS DE DADOS
// ============================================================
function classesDisponiveis()    { return window.DND_DATA?.CLASSES || []; }
function especiesDisponiveis()   { return window.DND_DATA?.SPECIES || []; }
function antecedentesDisponiveis() { return window.DND_DATA?.BACKGROUNDS || []; }

function subclassesDe(classeId) {
  return (window.DND_DATA?.SUBCLASSES || []).filter(s => s.classeId === classeId);
}

function magiasFiltradas(ficha) {
  const todas = window.DND_DATA?.SPELLS || [];
  const c = window.acharClasse?.(ficha.meta.classeId);
  if (!c) return [];
  return todas.filter(m => m.cl.includes(c.nome));
}

// ============================================================
//  PAINEL — BÔNUS DE ATRIBUTO DO ANTECEDENTE
// ============================================================
function renderPainelAtributosAntecedente(f) {
  const b = window.acharAntecedente?.(f.meta.antecedenteId);
  if (!b) return '';

  const generico = b.tipo === 'generico';
  const atrs = generico
    ? ['forca','destreza','constituicao','inteligencia','sabedoria','carisma']
    : (Array.isArray(b.valoresDeAtributo)
        ? b.valoresDeAtributo.map(n => MAPA_ATRIBUTOS[n]).filter(Boolean)
        : []);

  if (!atrs.length) return '';

  const bonus = f.meta.antecedenteBonus || { modo:'2+1', valores:{}, confirmado:false };
  const modo = bonus.modo || '2+1';
  const valores = bonus.valores || {};
  const confirmado = !!bonus.confirmado;
  const totalEscolhido = Object.keys(valores).length;
  const esperado = modo === '2+1' ? 2 : 3;
  const valido = totalEscolhido === esperado;

  if (confirmado) {
    return `
      <div class="painel-escolhas completo">
        <div class="painel-escolhas-topo">
          <h3>Atributos — ${b.nome}</h3>
          <button class="btn-editar" data-editar-atr-ant>Editar</button>
        </div>
        <div class="resumo-escolhas">
          ${Object.entries(valores).map(([a, v]) =>
            `<span class="tag-resumo">${ABREV_ATR[a]} +${v}</span>`
          ).join('')}
        </div>
      </div>
    `;
  }

  return `
    <div class="painel-escolhas">
      <div class="painel-escolhas-topo">
        <h3>Bônus de Atributo — ${b.nome}</h3>
        <span class="${valido ? 'check' : 'pendente'}">${valido ? '✓' : 'Escolha'}</span>
      </div>

      <div class="atr-modo">
        <button data-modo-atr="2+1"   class="${modo==='2+1'?'ativo':''}">+2 / +1</button>
        <button data-modo-atr="1+1+1" class="${modo==='1+1+1'?'ativo':''}">+1 / +1 / +1</button>
      </div>

      <div class="atr-painel-opcoes">
        ${atrs.map(a => {
          const v = valores[a] || 0;
          return `<button data-atr-ant="${a}" class="chip-atr ${v?'ativo':''}">
            <span class="atr-abrev">${ABREV_ATR[a]}</span>
            <span class="atr-valor-bonus">${v ? '+'+v : '—'}</span>
          </button>`;
        }).join('')}
      </div>

      <button class="btn-confirmar" data-confirmar-atr-ant ${valido ? '' : 'disabled'}>
        ${valido ? 'Confirmar escolha' : `Escolha ${esperado} atributo(s)`}
      </button>
    </div>
  `;
}

// ============================================================
//  PAINEL — IDIOMAS
// ============================================================
function renderPainelIdiomas(f) {
  const escolhidos = f.meta.idiomasEscolhidos || [];
  const confirmado = !!f.meta.idiomasConfirmados;
  const qtdNecessaria = 2; // Define que precisam ser 2 idiomas

  // Se já confirmou, mostra o resumo
  if (confirmado) {
    return `
      <div class="painel-escolhas completo">
        <div class="painel-escolhas-topo">
          <h3>Idiomas Conhecidos</h3>
          <button class="btn-editar" data-editar-idiomas>Editar</button>
        </div>
        <div class="resumo-escolhas">
          <span class="tag-resumo">Comum</span>
          ${escolhidos.map(i => `<span class="tag-resumo">${i}</span>`).join('')}
        </div>
      </div>
    `;
  }

  // Se não confirmou, mostra a grade de escolha
  return `
    <div class="painel-escolhas">
      <div class="painel-escolhas-topo">
        <h3>Escolha de Idiomas</h3>
        <span class="${escolhidos.length === qtdNecessaria ? 'check' : 'pendente'}">
          ${escolhidos.length}/${qtdNecessaria}
        </span>
      </div>
      <p class="hint">Selecione os idiomas extras que seu personagem aprendeu (ex: 2 do antecedente).</p>
      
      <h4 class="mag-cir-titulo" style="margin-top: 10px;">Idiomas Comuns</h4>
      <div class="grade-pericias-escolha">
        ${FICHA_CONFIG.IDIOMAS_COMUNS.filter(i => i !== 'Comum').map(i => `
          <button class="chip-pericia ${escolhidos.includes(i) ? 'ativa' : ''}" 
                  data-idioma="${i}">${i}</button>
        `).join('')}
      </div>

      <h4 class="mag-cir-titulo" style="margin-top: 10px;">Idiomas Raros</h4>
      <div class="grade-pericias-escolha">
        ${FICHA_CONFIG.IDIOMAS_RAROS.map(i => `
          <button class="chip-pericia ${escolhidos.includes(i) ? 'ativa' : ''}" 
                  data-idioma="${i}">${i}</button>
        `).join('')}
      </div>

      <button class="btn-confirmar" data-confirmar-idiomas ${escolhidos.length === qtdNecessaria ? '' : 'disabled'}>
        ${escolhidos.length === qtdNecessaria ? 'Confirmar Idiomas' : `Escolha ${qtdNecessaria - escolhidos.length} idioma(s) restante(s)`}
      </button>
    </div>
  `;
}

// ============================================================
//  PAINEL — ANTECEDENTE PERSONALIZADO
// ============================================================
function renderPainelPersonalizado(f) {
  const b = window.acharAntecedente?.(f.meta.antecedenteId);
  if (!b || b.tipo !== 'generico') return '';

  const periciasEscolhidas = f.meta.antecedentePericiasEscolhidas || [];
  const ferramenta = f.meta.antecedenteFerramentaEscolhida || '';
  const talento = f.meta.antecedenteTalentoEscolhido || '';

  const todasPericias = FICHA_CONFIG.TODAS_PERICIAS;
  const todasFerramentas = FICHA_CONFIG.TODAS_FERRAMENTAS;
  const todosTalentos = (window.DND_DATA?.FEATS || []).filter(t => t.categoria === 'Origem');

  return `
    <div class="painel-escolhas">
      <div class="painel-escolhas-topo">
        <h3>Perícias (escolha 2)</h3>
        <span class="${periciasEscolhidas.length===2?'check':'pendente'}">
          ${periciasEscolhidas.length}/2
        </span>
      </div>
      <div class="grade-pericias-escolha">
        ${todasPericias.map(p => `
          <button class="chip-pericia ${periciasEscolhidas.includes(p)?'ativa':''}"
                  data-bg-pericia="${p}">${p}</button>
        `).join('')}
      </div>
    </div>

    <div class="painel-escolhas">
      <div class="painel-escolhas-topo">
        <h3>Ferramenta (escolha 1)</h3>
        <span class="${ferramenta?'check':'pendente'}">${ferramenta?'✓':'Escolha'}</span>
      </div>
      <select class="select-livre" data-bg-ferramenta>
        <option value="">— escolher —</option>
        ${todasFerramentas.map(x => `
          <option value="${x}" ${x===ferramenta?'selected':''}>${x}</option>
        `).join('')}
      </select>
    </div>

    <div class="painel-escolhas">
      <div class="painel-escolhas-topo">
        <h3>Talento de Origem</h3>
        <span class="${talento?'check':'pendente'}">${talento?'✓':'Escolha'}</span>
      </div>
      <select class="select-livre" data-bg-talento>
        <option value="">— escolher —</option>
        ${todosTalentos.map(t => `
          <option value="${t.id}" ${t.id===talento?'selected':''}>${t.nome}</option>
        `).join('')}
      </select>
    </div>
  `;
}

// ============================================================
//  PAINEL — ESCOLHAS DA ESPÉCIE
// ============================================================
function renderPainelEspecie(f) {
  const e = window.acharEspecie?.(f.meta.especieId);
  if (!e) return '';
  const cfg = FICHA_CONFIG.especieConfig(e.id);
  if (!cfg) return '';

  const escolhas = f.meta.especieEscolhas || {};
  const periciasEscolhidas = f.meta.especiePericiasEscolhidas || [];
  const talento = f.meta.especieTalentoEscolhido || '';
  const confirmada = !!f.meta.especieConfirmada;

  const subOk = (cfg.subescolhas || []).every(s => escolhas[s.id]);
  const atrOk = !cfg.atributoConjuracao || !!escolhas.atributo;
  const perOk = !cfg.pericias || periciasEscolhidas.length === cfg.pericias.quantidade;
  const talOk = !cfg.talentoOrigem || !!talento;
  const tudoOk = subOk && atrOk && perOk && talOk;

  if (confirmada) {
    const tags = [];

    (cfg.subescolhas || []).forEach(sub => {
      const v = escolhas[sub.id];
      const o = sub.opcoes.find(x => x.valor === v);
      if (o) tags.push(o.nome);
    });

    if (cfg.atributoConjuracao && escolhas.atributo) {
      const nome = (FICHA_CONFIG.ATRIBUTOS_CONJURACAO
        .find(a => a.valor === escolhas.atributo) || {}).nome;
      if (nome) tags.push(`Conjuração: ${nome}`);
    }

    periciasEscolhidas.forEach(p => tags.push(p));

    if (talento) {
      const t = (window.DND_DATA?.FEATS || []).find(x => x.id === talento);
      if (t) tags.push(t.nome);
    }

    return `
      <div class="painel-escolhas completo">
        <div class="painel-escolhas-topo">
          <h3>Escolhas — ${e.nome}</h3>
          <button class="btn-editar" data-editar-especie>Editar</button>
        </div>
        <div class="resumo-escolhas">
          ${tags.map(t => `<span class="tag-resumo">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }

  const blocos = [];

  (cfg.subescolhas || []).forEach(sub => {
    const escolhido = escolhas[sub.id];
    blocos.push(`
      <div class="painel-escolhas">
        <div class="painel-escolhas-topo">
          <h3>${sub.titulo}</h3>
          <span class="${escolhido?'check':'pendente'}">${escolhido?'✓':'Escolha'}</span>
        </div>
        <div class="lista-subescolhas">
          ${sub.opcoes.map(o => `
            <button class="opcao-subescolha ${escolhido===o.valor?'ativa':''}"
                    data-esp-opcao="${sub.id}" data-esp-valor="${o.valor}">
              <strong>${o.nome}</strong>
              <small>${o.desc}</small>
            </button>
          `).join('')}
        </div>
      </div>
    `);
  });

  if (cfg.atributoConjuracao) {
    const atr = escolhas.atributo;
    blocos.push(`
      <div class="painel-escolhas">
        <div class="painel-escolhas-topo">
          <h3>Atributo de Conjuração</h3>
          <span class="${atr?'check':'pendente'}">${atr?'✓':'Escolha'}</span>
        </div>
        <div class="lista-subescolhas">
          ${FICHA_CONFIG.ATRIBUTOS_CONJURACAO.map(a => `
            <button class="opcao-subescolha ${atr===a.valor?'ativa':''}"
                    data-esp-opcao="atributo" data-esp-valor="${a.valor}">
              <strong>${a.nome}</strong>
            </button>
          `).join('')}
        </div>
      </div>
    `);
  }

  if (cfg.pericias) {
    const lista = cfg.pericias.lista === 'qualquer'
      ? FICHA_CONFIG.TODAS_PERICIAS
      : cfg.pericias.lista;
    blocos.push(`
      <div class="painel-escolhas">
        <div class="painel-escolhas-topo">
          <h3>Perícia (escolha ${cfg.pericias.quantidade})</h3>
          <span class="${periciasEscolhidas.length===cfg.pericias.quantidade?'check':'pendente'}">
            ${periciasEscolhidas.length}/${cfg.pericias.quantidade}
          </span>
        </div>
        <div class="grade-pericias-escolha">
          ${lista.map(p => `
            <button class="chip-pericia ${periciasEscolhidas.includes(p)?'ativa':''}"
                    data-esp-pericia="${p}">${p}</button>
          `).join('')}
        </div>
      </div>
    `);
  }

  if (cfg.talentoOrigem) {
    const todosTalentos = (window.DND_DATA?.FEATS || []).filter(t => t.categoria === 'Origem');
    blocos.push(`
      <div class="painel-escolhas">
        <div class="painel-escolhas-topo">
          <h3>Talento de Origem (Versátil)</h3>
          <span class="${talento?'check':'pendente'}">${talento?'✓':'Escolha'}</span>
        </div>
        <select class="select-livre" data-esp-talento>
          <option value="">— escolher —</option>
          ${todosTalentos.map(t => `
            <option value="${t.id}" ${t.id===talento?'selected':''}>${t.nome}</option>
          `).join('')}
        </select>
      </div>
    `);
  }

  blocos.push(`
    <button class="btn-confirmar" data-confirmar-especie ${tudoOk ? '' : 'disabled'}>
      ${tudoOk ? 'Confirmar escolhas' : 'Complete as escolhas acima'}
    </button>
  `);

  return blocos.join('');
}

// ============================================================
//  PAINEL — PERÍCIAS DA CLASSE
// ============================================================
function renderPainelPericiasClasse(f) {
  const c = window.acharClasse?.(f.meta.classeId);
  if (!c) return '';
  if (f.meta.classePericiasConfirmadas) return '';

  const info = FICHA_CONFIG.listaPericiasClasse(c);
  if (!info) return '';

  const qtd = info.quantidade;
  const listaCompleta = info.lista;
  const escolhidas = f.meta.classePericiasEscolhidas || [];
  const pronto = escolhidas.length === qtd;

  const aberta = listaCompleta.length === FICHA_CONFIG.TODAS_PERICIAS.length;

  return `
    <div class="painel-escolhas">
      <div class="painel-escolhas-topo">
        <h3>Perícias de ${c.nome} (escolha ${qtd})</h3>
        <span class="${pronto ? 'check' : 'pendente'}">
          ${escolhidas.length}/${qtd}
        </span>
      </div>
      ${aberta ? '<p class="hint">Você pode escolher qualquer perícia.</p>' : ''}
      <div class="grade-pericias-escolha">
        ${listaCompleta.map(p => `
          <button class="chip-pericia ${escolhidas.includes(p)?'ativa':''}"
                  data-classe-pericia="${p}">${p}</button>
        `).join('')}
      </div>
      <button class="btn-confirmar" data-confirmar-pericias-classe ${pronto ? '' : 'disabled'}>
        ${pronto ? 'Confirmar escolha' : `Escolha ${qtd} perícia(s)`}
      </button>
    </div>
  `;
}

// ============================================================
//  PAINEL — FERRAMENTAS/INSTRUMENTOS DA CLASSE
// ============================================================
function renderPainelFerramentasClasse(f) {
  const c = window.acharClasse?.(f.meta.classeId);
  if (!c) return '';
  const info = FICHA_CONFIG.listaFerramentasClasse(c);
  if (!info) return '';
  if (f.meta.classeFerramentasConfirmadas) return '';

  const escolhidas = f.meta.classeFerramentasEscolhidas || [];
  const pronto = escolhidas.length === info.quantidade;

  return `
    <div class="painel-escolhas">
      <div class="painel-escolhas-topo">
        <h3>Ferramentas de ${c.nome} (escolha ${info.quantidade})</h3>
        <span class="${pronto ? 'check' : 'pendente'}">
          ${escolhidas.length}/${info.quantidade}
        </span>
      </div>
      <div class="grade-pericias-escolha">
        ${info.lista.map(x => `
          <button class="chip-pericia ${escolhidas.includes(x)?'ativa':''}"
                  data-classe-ferramenta="${x}">${x}</button>
        `).join('')}
      </div>
      <button class="btn-confirmar" data-confirmar-ferramentas-classe ${pronto ? '' : 'disabled'}>
        ${pronto ? 'Confirmar escolha' : `Escolha ${info.quantidade} ferramenta(s)`}
      </button>
    </div>
  `;
}

// ============================================================
//  PAINEL — MULTICLASSES
// ============================================================
function renderMulticlasses(f) {
  const multiclasses = f.meta.multiclasses || [];
  const totalClasses = 1 + multiclasses.length;
  const podeAdicionar = totalClasses < 3 && (f.meta.nivel || 1) < 20;

  let html = `<div class="multiclasse-secao">`;
  html += `<h3 class="multiclasse-titulo">Multiclasses</h3>`;

  multiclasses.forEach((mc, i) => {
    const subclassesDisp = (window.DND_DATA?.SUBCLASSES || [])
      .filter(s => s.classeId === mc.id);
    const podeSub = (mc.nivel || 0) >= 3;

    html += `
      <div class="multiclasse-card" data-mc-idx="${i}">
        <div class="multiclasse-topo">
          <span class="multiclasse-num">Classe ${i + 2}</span>
          <button class="btn-del-mc" data-del-mc="${i}" title="Remover">✕</button>
        </div>

        <label>Classe
          <select data-mc-campo="id" data-mc-idx="${i}">
            <option value="">— escolher —</option>
            ${classesDisponiveis().map(x =>
              `<option value="${x.id}" ${x.id===mc.id?'selected':''}>${x.nome}</option>`
            ).join('')}
          </select>
        </label>

        <label>Nível nesta classe
          <input type="number" min="1" max="${(mc.nivel || 1) + (20 - f.meta.nivel)}" value="${mc.nivel || 1}"
                data-mc-campo="nivel" data-mc-idx="${i}">
        </label>

        ${podeSub ? `
          <label>Subclasse
            <select data-mc-campo="subclasseId" data-mc-idx="${i}">
              <option value="">— escolher —</option>
              ${subclassesDisp.map(x =>
                `<option value="${x.id}" ${x.id===mc.subclasseId?'selected':''}>${x.nome}</option>`
              ).join('')}
            </select>
          </label>
        ` : `
          <div class="label-disabled">
            <span>Subclasse</span>
            <div class="aviso-nivel">Disponível no nível 3 desta classe</div>
          </div>
        `}
      </div>
    `;
  });

  if (podeAdicionar) {
    html += `
      <button class="btn-add-mc" data-add-mc>
        + Adicionar Multiclasse
      </button>
    `;
  }

  html += `</div>`;
  return html;
}

// ============================================================
//  ABA 1 — FICHA
// ============================================================
function renderFicha(f) {
  const c = window.acharClasse?.(f.meta.classeId);
  const e = window.acharEspecie?.(f.meta.especieId);
  const sub = window.acharSubclasse?.(f.meta.subclasseId);
  const bp = CALC.bonusProficiencia(f.meta.nivel);
  const nvPrincipal = CALC.nivelClassePrincipal(f);
  const podeSubclasse = nvPrincipal >= 3;

  const selClasses = classesDisponiveis().map(x =>
    `<option value="${x.id}" ${x.id===f.meta.classeId?'selected':''}>${x.nome}</option>`).join('');

  const subsDisponiveis = subclassesDe(f.meta.classeId);
  const selSubs = subsDisponiveis.map(x =>
    `<option value="${x.id}" ${x.id===f.meta.subclasseId?'selected':''}>${x.nome}</option>`).join('');

  const selEspecies = especiesDisponiveis().map(x =>
    `<option value="${x.id}" ${x.id===f.meta.especieId?'selected':''}>${x.nome}</option>`).join('');

  const selAntec = antecedentesDisponiveis().map(x =>
    `<option value="${x.id}" ${x.id===f.meta.antecedenteId?'selected':''}>${x.nome}</option>`).join('');

  const atributos = [
    ['forca','FORÇA'], ['destreza','DESTREZA'], ['constituicao','CONSTITUIÇÃO'],
    ['inteligencia','INTELIGÊNCIA'], ['sabedoria','SABEDORIA'], ['carisma','CARISMA']
  ];

  const xpProx = CALC.xpProximoNivel(f.meta.xp);
  const xpAtual = CALC.xpNivelAtual(f.meta.xp);
  const xpPct = xpProx ? Math.min(100, ((f.meta.xp - xpAtual) / (xpProx - xpAtual)) * 100) : 100;

  const salvAuto = (c?.testesDeResistencia || []).map(n => MAPA_ATRIBUTOS[n]).filter(Boolean);

  return `
    <div class="cabecalho">
      <div class="cab-topo">
        <div class="cab-retrato" title="Clique para trocar o retrato">
          ${f.meta.retrato ? `<img src="${f.meta.retrato}">` : '🎲'}
          <input type="file" accept="image/*" id="inpRetrato" hidden>
        </div>
        <div class="cab-info">
          <input class="inp-nome" type="text" value="${f.meta.nome||''}"
                 placeholder="Nome do personagem" data-campo="meta.nome">
          <div class="cab-sub">
            <span>${e?.nome || 'Espécie'}</span> •
            <span>${c?.nome || 'Classe'} ${nvPrincipal}</span>
            ${sub ? ` • <span>${sub.nome}</span>` : ''}
            ${(f.meta.multiclasses || []).length
              ? ` • <span class="tag-total">Total: Nv. ${f.meta.nivel}</span>` : ''}
          </div>
        </div>
        <div class="cab-hp">
          <div class="hp-lbl">PV</div>
          <div class="hp-val">
            <input type="number" class="inp-hp-atual" value="${f.hp.atual}" data-campo="hp.atual">
            <span class="hp-sep">/</span>
            <span class="hp-max">${f.hp.max || CALC.pvMaximo(f)}</span>
          </div>
          <div class="hp-temp">Temp: <input type="number" class="inp-hp-temp" value="${f.hp.temp}" data-campo="hp.temp"></div>
          <div class="hp-botoes">
            <button data-hp="-5">−5</button>
            <button data-hp="-1">−1</button>
            <button data-hp="+1">+1</button>
            <button data-hp="+5">+5</button>
          </div>
        </div>
      </div>

      <div class="cab-nivel-linha">
        <label>
          <span>Nível</span>
          <input type="number"
                min="${1 + (f.meta.multiclasses || []).reduce((s, mc) => s + (mc.nivel || 0), 0)}"
                max="20" value="${f.meta.nivel}" data-campo="meta.nivel" class="inp-nivel">
        </label>
      </div>

      <div class="cab-xp">
        <div class="xp-info">
          <span>XP <strong>${f.meta.xp.toLocaleString('pt-BR')}</strong></span>
          <span class="xp-prox">${xpProx
            ? `Próximo nível em ${(xpProx - f.meta.xp).toLocaleString('pt-BR')} XP`
            : 'Nível máximo'}</span>
        </div>
        <div class="xp-barra">
          <div class="xp-fill" style="width:${xpPct}%"></div>
        </div>
        <div class="xp-add">
          <input type="number" class="xp-input" placeholder="0" min="0" inputmode="numeric">
          <button class="xp-btn xp-add-btn" data-xp-acao="add">+ Adicionar</button>
          <button class="xp-btn xp-sub-btn" data-xp-acao="sub">− Remover</button>
        </div>
      </div>

      <div class="cab-stats">
        <div class="stat-mini"><span class="rot">PROF</span><strong>+${bp}</strong></div>
        <div class="stat-mini"><span class="rot">DESLOC</span><strong>${CALC.deslocamento(f)} m</strong></div>
        <div class="stat-mini"><span class="rot">INIC</span><strong>${CALC.fmt(CALC.iniciativa(f))}</strong></div>
        <div class="stat-mini"><span class="rot">CA</span><strong>${CALC.ca(f)}</strong></div>
      </div>

      <div class="dropdowns">
        <label>Classe
          <select data-campo="meta.classeId" class="sel-classe">
            <option value="">— escolher —</option>${selClasses}
          </select>
        </label>

      ${podeSubclasse ? `
        <label>Subclasse <small class="tag-nv-classe">Nv. ${nvPrincipal}</small>
          <select data-campo="meta.subclasseId" class="sel-subclasse"
                  ${!f.meta.classeId ? 'disabled' : ''}>
            <option value="">— escolher —</option>${selSubs}
          </select>
        </label>
      ` : `
        <label class="label-disabled">
          Subclasse
          <div class="aviso-nivel">
            ${f.meta.classeId
              ? `Disponível com nível 3 em ${c.nome} (atual: ${nvPrincipal})`
              : 'Escolha uma classe primeiro'}
          </div>
        </label>
      `}

        <label>Espécie
          <select data-campo="meta.especieId" class="sel-especie">
            <option value="">— escolher —</option>${selEspecies}
          </select>
        </label>

        <label>Antecedente
          <select data-campo="meta.antecedenteId" class="sel-antecedente">
            <option value="">— escolher —</option>${selAntec}
          </select>
        </label>
      </div>

      ${renderMulticlasses(f)}
      ${renderPainelPericiasClasse(f)}
      ${renderPainelFerramentasClasse(f)}
      ${renderPainelEspecie(f)}
      ${renderPainelAtributosAntecedente(f)}
      ${renderPainelPersonalizado(f)}
      ${renderPainelIdiomas(f)}
    </div>

    <section class="bloco">
      <h2>Atributos</h2>
      <div class="grade-atributos">
        ${atributos.map(([id, nome]) => {
          const bonus = f.meta.antecedenteBonusAplicado?.[id];
          return `
            <div class="card-atr">
              <span class="atr-nome">${nome}</span>
              <input type="number" class="atr-valor" value="${f.atributos[id]}" data-campo="atributos.${id}">
              <span class="atr-mod">${CALC.fmt(CALC.MOD(f.atributos[id]))}</span>
              ${bonus ? `<span class="atr-bonus-tag">+${bonus} antecedente</span>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </section>

    <section class="bloco">
      <h2>Salvaguardas ${c ? `<small>(${c.nome})</small>` : ''}</h2>
      <div class="lista-salvaguardas">
        ${CALC.salvaguardas(f).map(s => {
          const auto = salvAuto.includes(s.atributo);
          return `
            <div class="row-salv ${s.proficiente?'prof':''} ${auto?'auto':''}">
              <span class="dot" data-toggle="salv" data-atr="${s.atributo}">${s.proficiente?'●':'○'}</span>
              <span class="atr-abrev">${ABREV_ATR[s.atributo]}</span>
              <span class="salv-nome">${NOME_ATR[s.atributo]}</span>
              <span class="bonus">${CALC.fmt(s.bonus)}</span>
            </div>
          `;
        }).join('')}
      </div>
    </section>

    <section class="bloco">
      <h2>Sentidos Passivos</h2>
      <div class="grade-passivas">
        <div><span>Percepção</span><strong>${CALC.percepcaoPassiva(f)}</strong></div>
        <div><span>Investigação</span><strong>${10 + CALC.periciasCompletas(f).find(x=>x.nome==='Investigação').bonus}</strong></div>
        <div><span>Intuição</span><strong>${10 + CALC.periciasCompletas(f).find(x=>x.nome==='Intuição').bonus}</strong></div>
      </div>
    </section>
  `;
}

// ============================================================
//  ABA 2 — PERÍCIAS
// ============================================================
function renderPericias(f) {
  const lista = CALC.periciasCompletas(f);
  return `
    <section class="bloco">
      <h2>Perícias</h2>
      <p class="hint">○ sem proficiência → ● proficiente → ★ especialista</p>
      <div class="lista-pericias">
        ${lista.map(p => `
          <div class="row-pericia ${p.prof?'prof':''} ${p.esp?'esp':''}">
            <span class="dot" data-toggle="pericia" data-nome="${p.nome}">${p.esp?'★':(p.prof?'●':'○')}</span>
            <span class="atr-abrev">${ABREV_ATR[p.atributo]}</span>
            <span class="per-nome">
              ${p.nome}
              ${p.origem ? `<span class="tag-origem ${p.origem==='especie'?'esp':''}">${p.origem.slice(0,3).toUpperCase()}</span>` : ''}
            </span>
            <span class="bonus">${CALC.fmt(p.bonus)}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

// ============================================================
//  ABA 3 — COMBATE
// ============================================================
function renderCombate(f) {
  // Puxa armas equipadas diretamente do inventário
  const armasEquipadas = f.inventario.itens.filter(i =>
    i.equipado && (i.tipo === 'Arma' || /espada|adaga|machado|arco|besta|clava|cajado|lança|foice|martelo|rapieira|cimitarra|tridente|zarabatana|funda|dardo/i.test(i.nome)));

  const bp = CALC.bonusProficiencia(f.meta.nivel);
  const todasMagias = window.DND_DATA?.SPELLS || [];

  return `
    <section class="bloco">
      <h2>Armas Equipadas</h2>
      <p class="hint">Baseado nos itens equipados no inventário.</p>
      <div class="lista-ataques">
        ${armasEquipadas.length ? armasEquipadas.map(i => {
          const props = i.propriedades || '';
          const desc = i.descricao || '';

          // Extrai o dado de dano (ex: 1d8, 2d6)
          const diceMatch = props.match(/(\d+d\d+)/);
          const dadoDano = diceMatch ? diceMatch[1] : '1d4';

          // Extrai o tipo de dano
          const tipoMatch = props.match(/(Cortante|Perfurante|Contundente)/i);
          const tipoDano = tipoMatch ? tipoMatch[1] : '';

          // Verifica se tem Acuidade
          const isFinesse = /Acuidade/i.test(props);
          
          // Verifica se é à distância
          const isRanged = /arco|besta|funda|zarabatana|dardo|à Distância/i.test(i.nome + (i.subtipo||'') + props);

          // Define o atributo padrão
          let attrPadrao = isRanged ? 'destreza' : 'forca';
          if (isFinesse) attrPadrao = 'destreza'; 

          // Pega a escolha salva ou o padrão
          const attrUsado = i.atributoAtaque || attrPadrao;
          const modAtributo = CALC.MOD(f.atributos[attrUsado]);
          
          // Cálculos
          const toHit = bp + modAtributo;
          const danoTotal = `${dadoDano}${modAtributo >= 0 ? '+' : ''}${modAtributo}`;

          return `
            <div class="card-ataque" data-id="${i.id}">
              <div class="atk-topo">
                <strong>${i.nome}</strong>
                ${i.raridade ? `<span class="raridade-tag raridade-${i.raridade.toLowerCase().replace(/\s+/g, '-')}">${i.raridade}</span>` : ''}
              </div>

              ${isFinesse ? `
                <div class="atk-escolha-atr">
                  <span>Atributo:</span>
                  <button class="btn-atr ${attrUsado === 'forca' ? 'ativo' : ''}" data-arma-atr="forca" data-arma-id="${i.id}">FOR</button>
                  <button class="btn-atr ${attrUsado === 'destreza' ? 'ativo' : ''}" data-arma-atr="destreza" data-arma-id="${i.id}">DES</button>
                </div>
              ` : ''}

              <div class="atk-linha">
                ${props ? `<span class="tag" title="Propriedades">${props}</span>` : ''}
                <span class="tag tag-atk">ATQ ${CALC.fmt(toHit)}</span>
                <span class="tag tag-dano">DANO ${danoTotal} ${tipoDano}</span>
              </div>
              ${desc ? `<div class="atk-notas">${desc}</div>` : ''}
            </div>
          `;
        }).join('') : '<p class="vazio">Nenhuma arma equipada no inventário.</p>'}
      </div>
    </section>

    <section class="bloco">
      <h2>Magias e Habilidades</h2>
      <p class="hint">Use os botões ▲ e ▼ para ordenar.</p>
      <div class="lista-ataques">
        ${f.ataques.length ? f.ataques.map((a, i) => {
          const atr = a.atributo ? CALC.MOD(f.atributos[a.atributo]) : 0;
          const toHit = (a.proficiente ? bp : 0) + atr;
          
          // Tenta achar a magia no banco de dados
          const magiaInfo = todasMagias.find(m => m.n === a.nome);
          
          // Se for magia, mostra os detalhes completos
          let detalhesMagia = '';
          if (magiaInfo) {
            detalhesMagia = `
              <div class="magia-det" style="display: block; margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--border);">
                <p style="margin-bottom: 8px;">
                  <b>Tempo:</b> ${magiaInfo.t||'—'} &nbsp; 
                  <b>Alcance:</b> ${magiaInfo.a||'—'} &nbsp; 
                  <b>Duração:</b> ${magiaInfo.d||'—'} &nbsp; 
                  <b>Componentes:</b> ${magiaInfo.co||'—'}
                </p>
                <p>${(magiaInfo.ds||'').replace(/\n/g, '<br>')}</p>
                ${magiaInfo.up ? `<p class="magia-up"><b>Em círculos superiores:</b> ${magiaInfo.up}</p>` : ''}
              </div>
            `;
          } else {
            detalhesMagia = a.notas ? `<div class="atk-notas">${a.notas}</div>` : '';
          }

          return `
            <div class="card-ataque" data-idx="${i}">
              <div class="atk-topo">
                <strong>${a.nome}</strong>
                <div class="atk-acoes">
                  <button class="btn-move" data-move-up="${i}" ${i === 0 ? 'disabled' : ''} title="Mover para cima">▲</button>
                  <button class="btn-move" data-move-down="${i}" ${i === f.ataques.length - 1 ? 'disabled' : ''} title="Mover para baixo">▼</button>
                  <button class="btn-del" data-idx="${i}">✕</button>
                </div>
              </div>
              <div class="atk-linha">
                <span class="tag">${a.alcance||'—'}</span>
                ${a.dadoDano ? `<span class="tag tag-atk">ATQ ${CALC.fmt(toHit)}</span>` : ''}
                <span class="tag tag-dano">DANO ${a.dadoDano||'—'}${atr?CALC.fmt(atr):''} ${a.tipoDano||''}</span>
              </div>
              ${detalhesMagia}
            </div>
          `;
        }).join('') : '<p class="vazio">Nenhuma magia ou habilidade adicionada. Vá até a aba Magias e clique no ícone ⚔️.</p>'}
      </div>
    </section>
  `;
}

// ============================================================
//  ABA 4 — MAGIAS
// ============================================================
function renderMagias(f) {
  const classes = CALC.classesConjuradoras(f);
  const magiasEsp = CALC.magiasDaEspecie(f);

  if (!classes.length && !magiasEsp.length) {
    return '<p class="vazio">Sua classe não conjura magias e sua espécie não concede magias.</p>';
  }

  let html = '';

  const nvConj = CALC.nivelConjurador(f);
  html += `
    <section class="bloco">
      <div class="mag-header">
        <div class="mag-nivel-conj">
          <span>Nível de Conjurador</span>
          <strong>${nvConj}</strong>
        </div>
      </div>
      <input type="search" class="busca-magias" placeholder="Buscar magia…">
      <div class="chips-circulos">
        <button class="chip ativo" data-c="all">Todas as Classes</button>
        ${classes.map(c => `<button class="chip" data-c="${c.id}">${c.nome}</button>`).join('')}
        ${magiasEsp.length ? `<button class="chip chip-esp" data-c="especie">Espécie</button>` : ''}
      </div>
    </section>
  `;

  // --- Renderização de Espaços (Normal + Pacto) ---
  const slotsNormal = CALC.slotsMagia(f);
  const wCl = classes.find(c => c.progressao === 'pact');
  
  if (Object.keys(slotsNormal).length > 0 || wCl) {
    html += `<section class="bloco"><h2>Espaços de Magia</h2>`;
    
    // 1. Slots Normais
    if (Object.keys(slotsNormal).length > 0) {
      html += `<p class="hint">${classes.filter(c => c.progressao !== 'pact').length > 1 ? 'Calculado por multiclasse' : 'Tabela da classe'}</p>`;
      html += `<div class="espacos-magia">`;
      Object.entries(slotsNormal).forEach(([cir, qtd]) => {
        const cur = f.magias.espacos[cir]?.atual ?? qtd;
        const max = f.magias.espacos[cir]?.max ?? qtd;
        html += `<div class="slot-row">
          <span class="slot-cir">${cir}º</span>
          <button data-esp="-1" data-cir="${cir}">−</button>
          <span class="slot-val">${cur}/${max}</span>
          <button data-esp="+1" data-cir="${cir}">+</button>
        </div>`;
      });
      html += `</div>`;
    }

    // 2. Pact Magic (Warlock)
    if (wCl) {
      const cData = window.acharClasse(wCl.id);
      let pactLevel = 1;
      let pactMax = 1;
      if (cData && cData.conjuracao && cData.conjuracao.espacosDeMagia) {
        const row = cData.conjuracao.espacosDeMagia.find(x => x.nivel === wCl.nivel) || 
                    cData.conjuracao.espacosDeMagia.filter(x => x.nivel <= wCl.nivel).pop();
        if (row && row.slots) {
          const entries = Object.entries(row.slots).filter(([_, qtd]) => qtd > 0);
          if (entries.length > 0) {
            pactLevel = entries[0][0];
            pactMax = entries[0][1];
          }
        }
      }

      // Inicializa estado do Pacto na ficha
      if (!f.magias.espacos['pacto']) {
        f.magias.espacos['pacto'] = { atual: pactMax, max: pactMax };
      } else if (f.magias.espacos['pacto'].max !== pactMax) {
        f.magias.espacos['pacto'].max = pactMax;
        f.magias.espacos['pacto'].atual = pactMax;
      }

      const curPact = f.magias.espacos['pacto'].atual;

      html += `
        <div style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--border);">
          <p class="hint" style="color: var(--warn); margin-bottom: 8px;">
            <b>Magia de Pacto (${wCl.nome} ${wCl.nivel}):</b> Recarrega em Descanso Curto.
          </p>
          <div class="espacos-magia">
            <div class="slot-row" style="border-color: var(--warn);">
              <span class="slot-cir" style="color: var(--warn);">${pactLevel}º Círculo</span>
              <button data-esp="-1" data-cir="pacto">−</button>
              <span class="slot-val">${curPact}/${pactMax}</span>
              <button data-esp="+1" data-cir="pacto">+</button>
            </div>
          </div>
        </div>
      `;
    }
    
    html += `</section>`;
  }

  classes.forEach(cl => { html += renderBlocoClasseMag(f, cl); });
  if (magiasEsp.length) html += renderBlocoEspecieMag(f, magiasEsp);

  return html;
}

/* ============================================================
   Renderiza um nível de magia (Truque, 1º, 2º, etc)
   ============================================================ */
function renderNivelMag(f, cl, nivel, tipoLista, arraySelecionadas, todasDaClasse, grimorio, modo) {
  const chaveExpansao = `${cl.id}_${tipoLista}_${nivel}`;
  const expandido = !!f.meta.magiasExpandidas?.[chaveExpansao];
  const labelNivel = nivel === 0 ? 'Truques' : `${nivel}º Círculo`;

  const todasMagias = window.DND_DATA?.SPELLS || [];
  const getSpellInfo = nome => {
    return todasMagias.find(x => x.n === nome || x.nome === nome)
      || { n: nome, nome, t: '', a: '', d: '', co: '', ds: 'Descrição não encontrada.', c: 0 };
  };

  // --- EXTRAI MAGIAS DE SUBCLASSE DA CLASSE ATUAL (principal OU multiclasse) ---
  function getSubclassSpells() {
    const sub = window.acharSubclasse?.(cl.subclasseId);
    if (!sub) return [];

    const out = [];
    const seen = new Set();
    const spellNames = new Set(todasMagias.map(m => m.n));

    function extract(obj, defaultReq = 1) {
      if (!obj) return;
      if (typeof obj === 'string') {
        if (spellNames.has(obj) && !seen.has(obj)) {
          seen.add(obj);
          out.push({ nome: obj, req: defaultReq });
        }
        return;
      }
      if (Array.isArray(obj)) {
        obj.forEach(item => extract(item, defaultReq));
        return;
      }
      if (typeof obj === 'object') {
        if (obj.nome && (obj.c !== undefined || obj.circulo !== undefined)) {
          const nome = obj.nome || obj.n;
          if (spellNames.has(nome) && !seen.has(nome)) {
            seen.add(nome);
            out.push({ nome, req: obj.nivelPersonagem || obj.req || obj.nivel || defaultReq });
          }
          return;
        }
        if (obj.magias && obj.nivel) {
          extract(obj.magias, obj.nivel);
          return;
        }
        if (obj.magiasDeSubclasse && obj.nivel) {
          extract(obj.magiasDeSubclasse, obj.nivel);
          return;
        }
        if (obj.magiasSemprePreparadas) extract(obj.magiasSemprePreparadas, defaultReq);
        if (obj.magiasDeSubclasse) extract(obj.magiasDeSubclasse, defaultReq);
        if (obj.magias) extract(obj.magias, defaultReq);
        if (obj.magiasConcedidas) extract(obj.magiasConcedidas, defaultReq);
        if (obj.spells) extract(obj.spells, defaultReq);
        if (obj.tabelaMagias) extract(obj.tabelaMagias, defaultReq);
      }
    }

    extract(sub);
    return out.filter(m => m.req <= f.meta.nivel).map(m => m.nome);
  }

  const subMagias = getSubclassSpells();

  let disponiveis = todasDaClasse.filter(m => m.c === nivel);

  subMagias.forEach(nome => {
    const info = getSpellInfo(nome);
    if (info.c === nivel && !disponiveis.some(m => m.n === nome)) {
      disponiveis.push(info);
    }
  });

  if (modo === 'prep' && cl.tipo === 'grimorio') {
    disponiveis = disponiveis.filter(m => grimorio.includes(m.n));
  }

  let contador = '';
  if (tipoLista === 'truque') {
    const max = CALC.maxTruquesClasse(cl.id, cl.nivel);
    const cls = arraySelecionadas.length === max ? 'completo' : arraySelecionadas.length > max ? 'excesso' : '';
    contador = `<span class="mag-contador ${cls}">${arraySelecionadas.length}/${max}</span>`;
  } else if (modo === 'grimorio') {
    const qtd = arraySelecionadas.filter(n => disponiveis.some(m => m.n === n)).length;
    contador = `<span class="mag-contador">${qtd}</span>`;
  }

  const selNivelSet = new Set();
  arraySelecionadas.forEach(n => {
    const classMatch = todasDaClasse.find(m => m.n === n);
    if (classMatch && classMatch.c === nivel) {
      selNivelSet.add(n);
    } else {
      const info = getSpellInfo(n);
      if (info.c === nivel) selNivelSet.add(n);
    }
  });

  if (tipoLista !== 'grimorio') {
    subMagias.forEach(nome => {
      const info = getSpellInfo(nome);
      if (info.c === nivel) selNivelSet.add(nome);
    });
  }

  const selNivel = Array.from(selNivelSet);

  let htmlChips = '';
  if (selNivel.length) {
    htmlChips = `<div class="magia-selecionadas-list" style="margin-bottom:10px;">`;
    selNivel.forEach(n => {
      const info = getSpellInfo(n);
      const isSub = subMagias.includes(n) && tipoLista !== 'grimorio';
      const attrValue = tipoLista === 'grimorio' ? n : cl.id;

      htmlChips += `
        <div class="magia-item magia-selecionada ${isSub ? 'magia-sub' : ''}" data-nome="${n}">
          <div class="magia-cab" style="padding-right: 30px; display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <strong>${n}</strong>
              <span class="magia-meta">${info.t || ''} · ${info.a || ''}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
              <button class="btn-add-combate" data-add-combate="${n}" title="Adicionar ao Combate">⚔️</button>
              ${isSub
                ? `<span class="magia-escola" style="color:var(--warn); position: static;">Subclasse</span>`
                : `<button class="btn-rem-magia" data-rem-${tipoLista}="${attrValue}" data-magia-nome="${n}" title="Remover" style="position: static;">✕</button>`
              }
            </div>
          </div>
          <div class="magia-det">
            <p><b>Alcance:</b> ${info.a||'—'} &nbsp; <b>Duração:</b> ${info.d||'—'} &nbsp; <b>Componentes:</b> ${info.co||'—'}</p>
            <p>${(info.ds||'').replace(/\n/g, '<br>')}</p>
            ${info.up ? `<p class="magia-up"><b>Em círculos superiores:</b> ${info.up}</p>` : ''}
          </div>
        </div>
      `;
    });
    htmlChips += `</div>`;
  } else {
    htmlChips = '<p class="vazio" style="padding:8px; font-size:12px">Nenhuma magia deste nível adicionada.</p>';
  }

  const btnToggle = `
    <button class="btn-toggle-nivel" data-toggle-nivel="${chaveExpansao}">
      ${expandido ? '↥ Ocultar magias disponíveis' : `↧ Mostrar magias de ${labelNivel}`}
    </button>
  `;

  let htmlExp = '';
  if (expandido) {
    if (disponiveis.length) {
      htmlExp = `<div class="mag-lista-exp">
        ${disponiveis.map(m => {
          const tem = arraySelecionadas.includes(m.n) || (tipoLista !== 'grimorio' && subMagias.includes(m.n));
          const isSub = subMagias.includes(m.n) && tipoLista !== 'grimorio';
          const info = getSpellInfo(m.n);
          let acaoBtn = '';

          if (tipoLista === 'truque') {
            acaoBtn = `<button class="btn-add-mini ${tem ? 'added' : ''}" data-add-truque="${cl.id}" data-magia-nome="${m.n}" ${isSub ? 'disabled' : ''}>${tem ? '✓' : '+'}</button>`;
          } else if (modo === 'grimorio') {
            acaoBtn = `<button class="btn-add-mini ${tem ? 'added' : ''}" data-add-grimorio="${m.n}" data-magia-nome="${m.n}">${tem ? '✓' : '+'}</button>`;
          } else if (modo === 'prep') {
            acaoBtn = `<button class="btn-add-mini ${tem ? 'added' : ''}" data-add-prep="${cl.id}" data-magia-nome="${m.n}" ${isSub ? 'disabled' : ''}>${tem ? '✓' : '+'}</button>`;
          }

          return `<div class="magia-item" data-nome="${m.n}">
            <div class="magia-cab" style="display:flex; justify-content:space-between; align-items:center; padding-right:0;">
              <span class="magia-nome" style="padding-right:0">${m.n} ${isSub ? '<small style="color:var(--warn); margin-left:6px;">(Subclasse)</small>' : ''}</span>
              ${acaoBtn}
            </div>
            <div class="magia-det">
              <p><b>Alcance:</b> ${info.a||'—'} &nbsp; <b>Duração:</b> ${info.d||'—'} &nbsp; <b>Componentes:</b> ${info.co||'—'}</p>
              <p>${(info.ds||'').replace(/\n/g, '<br>')}</p>
              ${info.up ? `<p class="magia-up"><b>Em círculos superiores:</b> ${info.up}</p>` : ''}
            </div>
          </div>`;
        }).join('')}
      </div>`;
    } else {
      htmlExp = `<p class="vazio" style="padding:8px; font-size:12px">Nenhuma magia disponível ${modo === 'prep' && cl.tipo === 'grimorio' ? '(Adicione ao grimório primeiro)' : ''}.</p>`;
    }
  }

  return `
    <div class="mag-nivel-bloco">
      <div class="mag-nivel-topo">
        <span class="mag-nivel-titulo">${labelNivel}</span>
        ${contador}
      </div>
      ${htmlChips}
      ${btnToggle}
      ${htmlExp}
    </div>
  `;
}

/* ============================================================
   Bloco de Arcana Mística (Bruxo)
   ============================================================ */
function renderArcanaMistica(f, cl) {
  if (cl.id !== 'bruxo') return '';
  if (cl.nivel < 11) return '';

  const levels = [];
  if (cl.nivel >= 11) levels.push(6);
  if (cl.nivel >= 13) levels.push(7);
  if (cl.nivel >= 15) levels.push(8);
  if (cl.nivel >= 17) levels.push(9);

  const todasClasse = CALC.magiasDaClasse(cl.id);
  const arcana = f.magias.arcanaMistica || {};
  
  const todasMagias = window.DND_DATA?.SPELLS || [];
  const getSpellInfo = nome => {
    return todasMagias.find(x => x.n === nome || x.nome === nome)
      || { n: nome, nome, t: '', a: '', d: '', co: '', ds: 'Descrição não encontrada.', c: 0 };
  };

  let html = `
    <div class="mag-sub-bloco">
      <div class="mag-sub-topo">
        <h4>Arcana Mística</h4>
      </div>
      <p class="hint" style="margin-bottom:10px;">Escolha 1 magia por círculo. Você pode conjurá-la 1 vez sem gastar espaço de magia.</p>
  `;

  levels.forEach(nv => {
    const disponiveis = todasClasse.filter(m => m.c === nv);
    const escolhida = arcana[nv] || null;
    const contador = escolhida ? '1/1' : '0/1';
    const classeContador = escolhida ? 'completo' : '';
    const chaveExpansao = `arcana_${cl.id}_${nv}`;
    const expandido = !!f.meta.magiasExpandidas?.[chaveExpansao];

    const infoEscolhida = escolhida ? getSpellInfo(escolhida) : null;

    html += `
      <div class="mag-nivel-bloco">
        <div class="mag-nivel-topo">
          <span class="mag-nivel-titulo">${nv}º Círculo</span>
          <span class="mag-contador ${classeContador}">${contador}</span>
        </div>
        
        <div class="magia-selecionadas-list" style="margin-bottom:10px;">
          ${escolhida ? `
            <div class="magia-item magia-selecionada" data-nome="${escolhida}">
              <div class="magia-cab" style="padding-right: 30px; display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                  <strong>${escolhida}</strong>
                  <span class="magia-meta">${infoEscolhida.t || ''} · ${infoEscolhida.a || ''}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 4px;">
                  <button class="btn-add-combate" data-add-combate="${escolhida}" title="Adicionar ao Combate">⚔️</button>
                  <button class="btn-rem-magia" data-rem-arcana="${nv}" title="Remover" style="position: static;">✕</button>
                </div>
              </div>
              <div class="magia-det">
                <p><b>Alcance:</b> ${infoEscolhida.a||'—'} &nbsp; <b>Duração:</b> ${infoEscolhida.d||'—'} &nbsp; <b>Componentes:</b> ${infoEscolhida.co||'—'}</p>
                <p>${(infoEscolhida.ds||'').replace(/\n/g, '<br>')}</p>
                ${infoEscolhida.up ? `<p class="magia-up"><b>Em círculos superiores:</b> ${infoEscolhida.up}</p>` : ''}
              </div>
            </div>
          ` : '<p class="vazio" style="padding:8px; font-size:12px">Nenhuma magia escolhida.</p>'}
        </div>

        <button class="btn-toggle-nivel" data-toggle-nivel="${chaveExpansao}">
          ${expandido ? '↥ Ocultar magias disponíveis' : `↧ Mostrar magias de ${nv}º Círculo`}
        </button>
        
        ${expandido ? `
          <div class="mag-lista-exp">
            ${disponiveis.map(m => {
              const isSelected = escolhida === m.n;
              const info = getSpellInfo(m.n);
              return `
                <div class="magia-item" data-nome="${m.n}">
                  <div class="magia-cab" style="display:flex; justify-content:space-between; align-items:center; padding-right:0;">
                    <span class="magia-nome" style="padding-right:0">${m.n}</span>
                    <div style="display: flex; align-items: center; gap: 4px;">
                      <button class="btn-add-combate" data-add-combate="${m.n}" title="Adicionar ao Combate">⚔️</button>
                      <button class="btn-add-mini ${isSelected ? 'added' : ''}" data-add-arcana="${nv}" data-magia-nome="${m.n}">${isSelected ? '✓' : '+'}</button>
                    </div>
                  </div>
                  <div class="magia-det">
                    <p><b>Alcance:</b> ${info.a||'—'} &nbsp; <b>Duração:</b> ${info.d||'—'} &nbsp; <b>Componentes:</b> ${info.co||'—'}</p>
                    <p>${(info.ds||'').replace(/\n/g, '<br>')}</p>
                    ${info.up ? `<p class="magia-up"><b>Em círculos superiores:</b> ${info.up}</p>` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}
      </div>
    `;
  });

  html += `</div>`;
  return html;
}

/* ============================================================
   Bloco por classe conjuradora
   ============================================================ */
function renderBlocoClasseMag(f, cl) {
  const atributo = cl.atributo;
  const cd = atributo ? 8 + CALC.bonusProficiencia(f.meta.nivel) + CALC.MOD(f.atributos[atributo]) : null;
  const atq = atributo ? CALC.bonusProficiencia(f.meta.nivel) + CALC.MOD(f.atributos[atributo]) : null;

  const sub = cl.subclasseId ? window.acharSubclasse?.(cl.subclasseId) : null;
  const tituloClasse = sub ? `${cl.nome} · ${sub.nome}` : cl.nome;

  const truques = f.magias.truquesPorClasse?.[cl.id] || [];
  const preparadas = f.magias.preparadasPorClasse?.[cl.id] || [];
  const grimorio = f.magias.grimorio || [];

  const maxPrep = CALC.maxPreparadasClasse(f, cl);
  const labelPrep = cl.tipo === 'conhecida' ? 'Conhecidas' : 'Preparadas';
  const cPrep = maxPrep == null ? `${preparadas.length}` : `${preparadas.length}/${maxPrep}`;
  const cPrepCls = maxPrep == null ? '' : preparadas.length === maxPrep ? 'completo' : preparadas.length > maxPrep ? 'excesso' : '';

  const todasClasse = CALC.magiasDaClasse(cl.id);
  const maxLevel = CALC.maxNivelMagiaClasse(cl);

  let html = `<section class="bloco classe-mag-bloco" data-classe-bloco="${cl.id}">`;
  html += `
    <div class="classe-mag-topo">
      <h3>${tituloClasse}</h3>
      <span class="classe-mag-meta">
        ${atributo ? atributo.slice(0,3).toUpperCase() : ''} ·
        CD ${cd ?? '—'} · Ataque ${atq != null ? CALC.fmt(atq) : '—'}
      </span>
    </div>
  `;

  html += `
    <div class="mag-sub-bloco">
      <div class="mag-sub-topo"><h4>Truques</h4></div>
      ${renderNivelMag(f, cl, 0, 'truque', truques, todasClasse, grimorio, 'truque')}
    </div>
  `;

  // PREPARADAS PRIMEIRO
  html += `
    <div class="mag-sub-bloco">
      <div class="mag-sub-topo">
        <h4>${labelPrep}</h4>
        <span class="mag-contador ${cPrepCls}">${cPrep}</span>
      </div>
      ${Array.from({length: maxLevel}).map((_, i) => {
        const nv = i + 1;
        return renderNivelMag(f, cl, nv, 'prep', preparadas, todasClasse, grimorio, 'prep');
      }).join('')}
    </div>
  `;

  // GRIMÓRIO DEPOIS
  if (cl.tipo === 'grimorio') {
    html += `
      <div class="mag-sub-bloco">
        <div class="mag-sub-topo"><h4>📖 Grimório <span class="mag-contador">${grimorio.length} totais</span></h4></div>
        ${Array.from({length: maxLevel}).map((_, i) => {
          const nv = i + 1;
          return renderNivelMag(f, cl, nv, 'grimorio', grimorio, todasClasse, grimorio, 'grimorio');
        }).join('')}
      </div>
    `;
  }

// ADICIONA ARCANA MÍSTICA AQUI
  html += renderArcanaMistica(f, cl);

  html += `</section>`;
  return html;
}

/* ============================================================
   Bloco de magias da ESPÉCIE
   ============================================================ */
function renderBlocoEspecieMag(f, magiasEsp) {
  const gastas = f.meta.especieMagiasGastas || {};
  const atrEsp = CALC.atributoConjuracaoEspecie(f);
  const cdEsp = CALC.cdMagiaEspecie(f);

  const todas = window.DND_DATA?.SPELLS || [];
  const acharTexto = nome => todas.find(x => x.n === nome) || {};

  const porC = { 0: [], 1: [], 2: [] };
  magiasEsp.forEach(m => {
    const circ = m.tipo === 'truque' ? 0 : parseInt(m.tipo, 10);
    if (porC[circ]) porC[circ].push(m);
  });

  return `
    <section class="bloco classe-mag-bloco" data-bloco="especie" data-classe-bloco="especie">
      <div class="classe-mag-topo">
        <h3>Espécie</h3>
        <span class="classe-mag-meta">
          ${atrEsp ? atrEsp.slice(0,3).toUpperCase() : ''} ·
          CD ${cdEsp ?? '—'}
        </span>
      </div>
      ${Object.entries(porC).map(([cir, arr]) => arr.length ? `
        <h4 class="mag-cir-titulo">${cir === '0' ? 'Truques' : cir + 'º Círculo'}</h4>
        <div class="lista-magias lista-magias-esp" data-circulo-esp="${cir}">
          ${arr.map(m => {
            const info = acharTexto(m.nome);
            const usada = !!gastas[m.nome];
            return `
              <div class="magia-item magia-esp ${usada ? 'gasta' : ''}" data-nome="${m.nome}">
                <div class="magia-cab">
                  <strong>${m.nome}</strong>
                  <span class="magia-meta">
                    ${info.t || ''} · ${info.a || ''}
                    ${m.livre ? ` · <span class="badge-livre">1×/DL livre</span>` : ''}
                  </span>
                  <span class="magia-escola">Espécie · ${m.origem}</span>
                </div>
                <div class="magia-det">
                  ${m.nota ? `<p class="magia-nota">${m.nota}</p>` : ''}
                  <p><b>Alcance:</b> ${info.a||'—'} &nbsp; <b>Duração:</b> ${info.d||'—'}</p>
                  <p>${(info.ds||'').replace(/\n/g, '<br>')}</p>
                  ${m.livre ? `
                    <button class="btn-usar-livre ${usada?'usada':''}"
                            data-esp-magia-livre="${m.nome}">
                      ${usada ? '↺ Recuperar uso' : '⚡ Usar 1× sem gastar espaço'}
                    </button>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      ` : '').join('')}
    </section>
  `;
}

// ============================================================
//  ABA 5 — INVENTÁRIO (Com Catálogo do DB e Filtros Combinados)
// ============================================================
function renderInventario(f) {
  const itens = f.inventario.itens;
  const pesoTotal = itens.reduce((s, i) => s + (parseFloat(i.peso)||0) * (i.qtd||1), 0);
  const slotsSint = 3;

  // Estado dos filtros
  f.meta._invFiltro = f.meta._invFiltro || '';
  f.meta._invTipoFiltro = f.meta._invTipoFiltro || 'all';
  f.meta._invRaridadeFiltro = f.meta._invRaridadeFiltro || 'all';
  f.meta._invCustomAberto = f.meta._invCustomAberto || false;

  // Puxa do DB
  const equipamentos = window.DND_DATA?.EQUIPAMENTOS || [];
  const magicos = (window.DND_DATA?.ITENS_MAGICOS || []).map(m => ({ 
    ...m, custo: 0, peso: 0, subtipo: m.tipo, isMagico: true
  }));
  const catalogoCompleto = [...equipamentos, ...magicos];

  return `
    <section class="bloco">
      <div class="inv-topo">
        <h2>Inventário</h2>
        <div class="peso">Peso: ${pesoTotal.toFixed(1)} kg</div>
      </div>

      <div class="moedas">
        ${[
          ['pc', 'PC'], 
          ['pp', 'PP'], 
          ['pe', 'PE'], 
          ['po', 'PO'], 
          ['pl', 'Plat'] // <-- Aqui está a mudança
        ].map(([m, label]) => `
          <label>${label}
            <input type="number" min="0" value="${f.inventario.moedas[m]||0}" data-moeda="${m}">
          </label>`).join('')}
      </div>

      <input type="search" class="busca-inv" placeholder="Buscar item na mochila…">
      <div class="chips-inv">
        <button class="chip ativo" data-inv="all">Todos</button>
        <button class="chip" data-inv="equip">Equipados</button>
        <button class="chip" data-inv="attune">Sintonizados</button>
      </div>

      <div class="lista-itens">
        ${itens.length ? itens.map(i => {
          const isEquipado = i.equipado;
          const isSintonizado = f.sintonizacao.includes(i.id);
          return `
            <div class="item-row ${isEquipado?'equip':''}" 
                 data-nome="${i.nome.toLowerCase()}" 
                 data-equipado="${isEquipado?1:0}" 
                 data-sintonizado="${isSintonizado?1:0}">
              <div class="item-info">
                <strong>${i.nome} ${i.raridade ? `<span class="raridade-tag raridade-${i.raridade.toLowerCase().replace(/\s+/g, '-')}">${i.raridade}</span>` : ''}</strong>
                <small>${i.tipo||''} ${i.subtipo ? '· '+i.subtipo : ''} ${i.propriedades?'· '+i.propriedades:''} ${i.notas?'· '+i.notas:''}</small>
              </div>
              <div class="item-qtd">×<input type="number" min="1" value="${i.qtd||1}" data-qtd="${i.id}"></div>
              <div class="item-peso">${((parseFloat(i.peso)||0)*(i.qtd||1)).toFixed(1)} kg</div>
              
              <!-- NOVOS BOTÕES DE AÇÃO -->
              <div class="item-acoes">
                <button class="btn-acao-item btn-equipar ${isEquipado?'ativo':''}" data-toggle-equip="${i.id}" title="${isEquipado?'Desequipar':'Equipar'}">${isEquipado?'🛡️':'⚔️'}</button>
                <button class="btn-acao-item btn-sintonizar ${isSintonizado?'ativo':''}" data-toggle-sint="${i.id}" title="${isSintonizado?'Dessintonizar':'Sintonizar'}">${isSintonizado?'✨':'🔮'}</button>
                <button class="btn-del-item" data-del-item="${i.id}">✕</button>
              </div>
            </div>
          `;
        }).join('') : '<p class="vazio">Nenhum item ainda.</p>'}
      </div>
    </section>

    <section class="bloco">
      <h2>Espaços de Sintonização</h2>
      <div class="lista-sint">
        ${Array.from({length: slotsSint}).map((_, i) => {
          const id = f.sintonizacao[i];
          const item = id ? itens.find(x => x.id === id) : null;
          return `
            <div class="sint-slot" data-slot="${i}">
              <span class="slot-num">${i+1}</span>
              ${item
                ? `<span class="sint-nome">${item.nome}</span><button class="btn-del-sint" data-del-sint="${i}">✕</button>`
                : '<span class="slot-vazio">Escolha um item</span>'}
            </div>`;
        }).join('')}
      </div>
    </section>

    <!-- ========== GERENCIAR ITENS ========== -->
    <section class="bloco" style="background:var(--surface-2); border:1px solid var(--border); border-radius:var(--raio); padding:12px;">
      <div class="bloco-topo" style="margin-bottom:0;">
        <h2>Adicionar Itens</h2>
        <button class="btn-toggle-nivel" style="width:auto; margin:0; padding:4px 10px;" data-toggle-custom-inv>
          ${f.meta._invCustomAberto ? 'Fechar' : 'Criar Item'}
        </button>
      </div>

      ${f.meta._invCustomAberto ? `
        <div class="custom-item-form">
          <h3>Item Customizado</h3>
          <div class="custom-grid">
            <input type="text" id="custom-item-nome" placeholder="Nome do item" required>
            <select id="custom-item-tipo">
              <option value="Arma">Arma</option>
              <option value="Armadura">Armadura</option>
              <option value="Poção">Poção</option>
              <option value="Equipamento">Equipamento</option>
              <option value="Item Mágico">Item Mágico</option>
              <option value="Outro">Outro</option>
            </select>
            <input type="number" id="custom-item-custo" placeholder="Custo (PO)" step="0.01" min="0">
            <input type="number" id="custom-item-peso" placeholder="Peso (kg)" step="0.1" min="0">
            <select id="custom-item-raridade">
              <option value="">Raridade (Opcional)</option>
              <option value="Comum">Comum</option>
              <option value="Incomum">Incomum</option>
              <option value="Raro">Raro</option>
              <option value="Muito Raro">Muito Raro</option>
              <option value="Lendário">Lendário</option>
              <option value="Artefato">Artefato</option>
            </select>
          </div>
          <input type="text" id="custom-item-prop" placeholder="Propriedades (ex: 1d8 Cortante, Acuidade)" style="width:100%; margin-bottom:8px; background:var(--surface-2); border:1px solid var(--border); color:var(--text); border-radius:6px; padding:8px; font-size:13px;">
          <textarea id="custom-item-notas" placeholder="Descrição / Notas" rows="2"></textarea>
          <button class="btn-primario" id="btn-salvar-custom" style="width:100%; margin-top:8px;">Adicionar Item Customizado</button>
        </div>
      ` : ''}

      <div class="catalogo-section" style="margin-top:12px;">
        <input type="search" class="busca-cat" placeholder="Filtrar itens (ex: Espada, Poção)..." value="${f.meta._invFiltro}">
        
        <div class="chips-circulos" style="margin: 8px 0 4px 0;">
          <button class="chip ${f.meta._invTipoFiltro === 'all' ? 'ativo' : ''}" data-cat-tipo="all">Todos os Tipos</button>
          <button class="chip ${f.meta._invTipoFiltro === 'Arma' ? 'ativo' : ''}" data-cat-tipo="Arma">Armas</button>
          <button class="chip ${f.meta._invTipoFiltro === 'Armadura' ? 'ativo' : ''}" data-cat-tipo="Armadura">Armaduras</button>
          <button class="chip ${f.meta._invTipoFiltro === 'Poção' ? 'ativo' : ''}" data-cat-tipo="Poção">Poções</button>
          <button class="chip ${f.meta._invTipoFiltro === 'Equipamento' ? 'ativo' : ''}" data-cat-tipo="Equipamento">Geral</button>
          <button class="chip ${f.meta._invTipoFiltro === 'Magico' ? 'ativo' : ''}" data-cat-tipo="Magico">Mágicos</button>
        </div>

        <div class="chips-circulos" style="margin: 0 0 8px 0;">
          <button class="chip ${f.meta._invRaridadeFiltro === 'all' ? 'ativo' : ''}" data-cat-raridade="all">Qualquer Raridade</button>
          <button class="chip ${f.meta._invRaridadeFiltro === 'Comum' ? 'ativo' : ''}" data-cat-raridade="Comum">Comum</button>
          <button class="chip ${f.meta._invRaridadeFiltro === 'Incomum' ? 'ativo' : ''}" data-cat-raridade="Incomum">Incomum</button>
          <button class="chip ${f.meta._invRaridadeFiltro === 'Raro' ? 'ativo' : ''}" data-cat-raridade="Raro">Raro</button>
          <button class="chip ${f.meta._invRaridadeFiltro === 'Muito Raro' ? 'ativo' : ''}" data-cat-raridade="Muito Raro">Muito Raro</button>
          <button class="chip ${f.meta._invRaridadeFiltro === 'Lendário' ? 'ativo' : ''}" data-cat-raridade="Lendário">Lendário</button>
        </div>
       
        <div class="catalogo-list">
          ${catalogoCompleto.length ? catalogoCompleto.map(item => `
            <div class="catalogo-item-row" 
                 data-nome="${item.nome.toLowerCase()}" 
                 data-tipo="${item.tipo}" 
                 data-raridade="${item.raridade || ''}"
                 data-magico="${item.isMagico ? '1' : '0'}">
              <div class="catalogo-info">
                <strong>
                  ${item.nome}
                  ${item.raridade ? `<span class="raridade-tag raridade-${item.raridade.toLowerCase().replace(/\s+/g, '-')}">${item.raridade}</span>` : ''}
                </strong>
                <small>${item.tipo} ${item.subtipo ? '· '+item.subtipo : ''} ${item.custo > 0 ? '· '+item.custo+' PO' : ''} ${item.peso > 0 ? '· '+item.peso+' kg' : ''}</small>
                ${item.propriedades ? `<div class="catalogo-notas">${item.propriedades}</div>` : ''}
                ${item.descricao ? `<div class="catalogo-notas">${item.descricao}</div>` : ''}
              </div>
              <button class="btn-add-mini" data-add-catalogo='${JSON.stringify(item).replace(/'/g, "&#39;")}'>+</button>
            </div>
          `).join('') : '<p class="vazio">Nenhum item encontrado.</p>'}
        </div>
      </div>
    </section>
  `;
}

// ============================================================
//  ABA 6 — CARACTERÍSTICAS
// ============================================================
function renderCaracteristicas(f) {
  const c = window.acharClasse?.(f.meta.classeId);
  const sub = window.acharSubclasse?.(f.meta.subclasseId);
  const e = window.acharEspecie?.(f.meta.especieId);
  const b = window.acharAntecedente?.(f.meta.antecedenteId);
  const nv = f.meta.nivel;

  const listaClasse = () => !c ? [] :
    c.progressao.filter(p => p.nivel <= nv).flatMap(p =>
      p.caracteristicas.map(nome => ({
        nome, nivel: p.nivel, desc: c.descricoes?.[nome] || ''
      })));

  let blocoAntec = '';
  if (b) {
    const pericias = Array.isArray(b.proficienciasPericias)
      ? b.proficienciasPericias.join(', ')
      : (b.proficienciasPericias?.quantidade
          ? `Escolha ${b.proficienciasPericias.quantidade} perícia(s)`
          : '—');

    const ferramenta = typeof b.proficienciaFerramenta === 'string'
      ? b.proficienciaFerramenta
      : (b.proficienciaFerramenta?.tipo === 'escolha' ? 'Escolha 1 ferramenta' : '—');

    const equipamento = Array.isArray(b.equipamento?.opcaoA)
      ? b.equipamento.opcaoA.join(', ')
      : (b.equipamento?.opcaoA?.nota || '—');

    blocoAntec = `
      <section class="bloco">
        <h2>Antecedente — ${b.nome}</h2>
        <p class="fonte">${b.fonte || ''}</p>
        ${b.descricao ? `<p>${b.descricao}</p>` : ''}
        ${b.talento ? `<p><b>Talento:</b> ${b.talento.nome || b.talento.tipo}</p>` : ''}
        <p><b>Perícias:</b> ${pericias}</p>
        <p><b>Ferramenta:</b> ${ferramenta}</p>
        <p><b>Equipamento (A):</b> ${equipamento}</p>
      </section>
    `;
  }

  return `
    <section class="bloco">
      <h2>Características de Classe</h2>
      ${c ? listaClasse().map(x => `
        <details class="carac-item">
          <summary><strong>${x.nome}</strong> <span class="tag-nv">Nv. ${x.nivel}</span></summary>
          <p>${x.desc || '<em>Descrição não disponível.</em>'}</p>
        </details>
      `).join('') : '<p class="vazio">Escolha uma classe.</p>'}
    </section>
    ${sub ? `
      <section class="bloco">
        <h2>Características de ${sub.nome}</h2>
        ${sub.caracteristicas.filter(x => x.nivel <= nv).map(x => `
          <details class="carac-item">
            <summary><strong>${x.nome}</strong> <span class="tag-nv">Nv. ${x.nivel}</span></summary>
            <p>${x.descricao}</p>
          </details>
        `).join('')}
      </section>` : ''}
    ${e ? `
      <section class="bloco">
        <h2>Traços de ${e.nome}</h2>
        ${(e.tracos||[]).map(t => `
          <details class="carac-item">
            <summary><strong>${t.nome}</strong></summary>
            <p>${t.descricao}</p>
          </details>
        `).join('')}
      </section>` : ''}
    ${blocoAntec}
  `;
}

// ============================================================
//  ABA 7 — PROFICIÊNCIAS
// ============================================================
function renderProficiencias(f) {
  const c    = window.acharClasse?.(f.meta.classeId);
  const e    = window.acharEspecie?.(f.meta.especieId);
  const b    = window.acharAntecedente?.(f.meta.antecedenteId);
  const mcs  = f.meta.multiclasses || [];

  const armaduras  = new Set();
  const armas      = new Set();
  const ferramentas= new Set();
  const idiomas    = new Set(['Comum']); // Todo mundo começa com Comum

  const addArr = (set, arr) => { if (Array.isArray(arr)) arr.forEach(x => set.add(x)); };

  // 1. CLASSE PRINCIPAL
  if (c?.proficiencias) {
    addArr(armaduras, c.proficiencias.armaduras);
    addArr(armas,     c.proficiencias.armas);
    addArr(idiomas,   c.proficiencias.idiomas); // <-- LÊ IDIOMAS DA CLASSE (Druídico)
    
    if (Array.isArray(c.proficiencias.ferramentas)) {
      c.proficiencias.ferramentas.forEach(x => {
        if (!/^\d+\s|escolha|qualquer|à sua escolha/i.test(x)) {
          ferramentas.add(x);
        }
      });
    }
  }
  (f.meta.classeFerramentasEscolhidas || []).forEach(x => ferramentas.add(x));

  // 2. MULTICLASSES
  mcs.forEach(mc => {
    const cm = window.acharClasse?.(mc.id);
    if (!cm?.proficiencias) return;
    addArr(armaduras, cm.proficiencias.armaduras);
    addArr(armas,     cm.proficiencias.armas);
    addArr(idiomas,   cm.proficiencias.idiomas); // <-- LÊ IDIOMAS DA MULTICLASSE
    
    if (Array.isArray(cm.proficiencias.ferramentas)) {
      cm.proficiencias.ferramentas.forEach(x => {
        if (!/^\d+\s|escolha|qualquer|à sua escolha/i.test(x)) {
          ferramentas.add(x);
        }
      });
    }
  });

  // 3. ANTECEDENTE
  if (b) {
    const ferr = b.proficienciaFerramenta;
    if (typeof ferr === 'string') ferramentas.add(ferr);
    if (Array.isArray(b.idiomas)) addArr(idiomas, b.idiomas); // <-- LÊ IDIOMAS DO ANTECEDENTE
  }
  if (f.meta.antecedenteFerramentaEscolhida) {
    ferramentas.add(f.meta.antecedenteFerramentaEscolhida);
  }

 // 4. IDIOMAS ESCOLHIDOS PELO JOGADOR (Substitui o automático da espécie)
  (f.meta.idiomasEscolhidos || []).forEach(x => idiomas.add(x));

  // 5. TALENTOS (Linguista, etc.)
  // Aqui buscamos se algum talento escolhido (Origem ou Geral) tem a flag de idiomas
  const talentosEscolhidos = [
    f.meta.especieTalentoEscolhido, 
    f.meta.antecedenteTalentoEscolhido
  ].filter(Boolean);

  talentosEscolhidos.forEach(tid => {
    const t = (window.DND_DATA?.FEATS || []).find(x => x.id === tid);
    if (t && Array.isArray(t.idiomas)) {
      addArr(idiomas, t.idiomas);
    }
  });

  // Helper visual dos blocos
  const bloco = (titulo, set, vazio) => `
    <div class="prof-bloco">
      <h3>${titulo}</h3>
      ${set.size
        ? `<div class="prof-tags">${[...set].sort().map(x =>
            `<span class="prof-tag">${x}</span>`).join('')}</div>`
        : `<p class="vazio">${vazio}</p>`}
    </div>
  `;

  return `
    <section class="bloco">
      <h2>Proficiências</h2>
      <p class="hint">
        Tudo o que o personagem ganha automaticamente por classe, espécie e antecedente.
      </p>
      ${bloco('Armaduras',   armaduras,  'Nenhuma proficiência em armadura.')}
      ${bloco('Armas',       armas,      'Nenhuma proficiência em arma.')}
      ${bloco('Ferramentas', ferramentas,'Nenhuma ferramenta.')}
      ${bloco('Idiomas',     idiomas,    '—')}
    </section>
  `;
}

// ============================================================
//  ABA 8 — ANTECEDENTE
// ============================================================
function renderAntecedente(f) {
  const b = window.acharAntecedente?.(f.meta.antecedenteId);
  if (!b) return '<p class="vazio">Escolha um antecedente.</p>';

  const pericias = Array.isArray(b.proficienciasPericias)
    ? b.proficienciasPericias.join(', ')
    : (b.proficienciasPericias?.quantidade
        ? `Escolha ${b.proficienciasPericias.quantidade} perícia(s)`
        : '—');

  const ferramenta = typeof b.proficienciaFerramenta === 'string'
    ? b.proficienciaFerramenta
    : (b.proficienciaFerramenta?.tipo === 'escolha' ? 'Escolha 1 ferramenta' : '—');

  const equipamento = Array.isArray(b.equipamento?.opcaoA)
    ? b.equipamento.opcaoA.join(', ')
    : (b.equipamento?.opcaoA?.nota || '—');

  return `
    <section class="bloco">
      <h2>${b.nome}</h2>
      <p class="fonte">${b.fonte}</p>
      ${b.descricao ? `<p>${b.descricao}</p>` : ''}
      ${b.talento ? `<p><b>Talento:</b> ${b.talento.nome || b.talento.tipo}</p>` : ''}
      <p><b>Perícias:</b> ${pericias}</p>
      <p><b>Ferramenta:</b> ${ferramenta}</p>
      <p><b>Equipamento (A):</b> ${equipamento}</p>
    </section>
  `;
}

// ============================================================
//  ABA 9 — NOTAS
// ============================================================
function renderNotas(f) {
  const n = f.notas;
  const blocos = [
    ['organizacoes','Organizações'],
    ['aliados','Aliados'],
    ['inimigos','Inimigos'],
    ['backstory','História'],
    ['outras','Outras Anotações']
  ];
  return `
    <section class="bloco">
      <h2>Notas</h2>
      ${blocos.map(([k, lbl]) => `
        <label class="nota">
          <span>${lbl}</span>
          <textarea rows="5" data-campo="notas.${k}">${n[k]||''}</textarea>
        </label>
      `).join('')}
    </section>
  `;
}

// ============================================================
//  EXPORT
// ============================================================
window.RENDER = {
  renderFicha, renderPericias, renderCombate, renderMagias,
  renderInventario, renderCaracteristicas, renderAntecedente, renderNotas,
  renderProficiencias,
  renderMulticlasses,
  MAPA_ATRIBUTOS, ABREV_ATR, NOME_ATR
};
})();