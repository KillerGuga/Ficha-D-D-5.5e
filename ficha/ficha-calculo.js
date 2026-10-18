/* ============================================================
   CÁLCULO — funções puras sobre o estado + DB
   ============================================================ */
(function(){

const MOD = v => Math.floor((v - 10) / 2);
const fmt = n => (n >= 0 ? '+' : '') + n;

// Tabela XP — PHB 2024
const XP_PROX = [0,300,900,2700,6500,14000,23000,34000,48000,64000,
                 85000,100000,120000,140000,165000,195000,225000,265000,305000,355000];

function nivelPorXP(xp) {
  let n = 1;
  for (let i = 0; i < XP_PROX.length; i++) if (xp >= XP_PROX[i]) n = i + 1;
  return n;
}
function xpProximoNivel(xp) {
  const nv = nivelPorXP(xp);
  return nv >= 20 ? null : XP_PROX[nv];
}
function xpNivelAtual(xp) {
  return XP_PROX[nivelPorXP(xp) - 1] || 0;
}

function bonusProficiencia(nivel) { return Math.floor((nivel - 1) / 4) + 2; }

function dadosVidaDaClasse(classeId) {
  const c = window.acharClasse?.(classeId);
  return c?.dadoDeVida || 8;
}

function nivelClassePrincipal(ficha) {
  const totalMulti = (ficha.meta.multiclasses || [])
    .reduce((s, mc) => s + (mc.nivel || 0), 0);
  return Math.max(1, (ficha.meta.nivel || 1) - totalMulti);
}

function pvMaximo(ficha) {
  const modCon = MOD(ficha.atributos.constituicao);

  const totalMulti = (ficha.meta.multiclasses || [])
    .reduce((s, mc) => s + (mc.nivel || 0), 0);
  const nvPrimaria = Math.max(1, (ficha.meta.nivel || 1) - totalMulti);

  let pv = 0;

  if (ficha.meta.classeId) {
    const dv = dadosVidaDaClasse(ficha.meta.classeId);
    pv += dv + modCon;
    for (let i = 2; i <= nvPrimaria; i++) {
      pv += Math.floor(dv / 2) + 1 + modCon;
    }
  } else {
    pv = 8 + modCon;
  }

  (ficha.meta.multiclasses || []).forEach(mc => {
    if (!mc.id) return;
    const dv = dadosVidaDaClasse(mc.id);
    for (let i = 1; i <= (mc.nivel || 0); i++) {
      pv += Math.floor(dv / 2) + 1 + modCon;
    }
  });

  return Math.max(1, pv);
}

// Função auxiliar para checar proficiência em armadura/escudo
function temProficienciaArmadura(f, tipoArmadura, isEscudo) {
  const c = window.acharClasse?.(f.meta.classeId);
  const profs = c?.proficiencias?.armaduras || [];
  
  if (isEscudo) {
    return profs.some(p => /escudo/i.test(p));
  }
  
  if (!tipoArmadura) return false;
  return profs.some(p => new RegExp(tipoArmadura, 'i').test(p)) || profs.some(p => /todas/i.test(p));
}

function ca(ficha) {
  const itens = ficha.inventario.itens.filter(i => i.equipado);
  
  // Identifica Escudo e Armadura usando o tipo/subtipo do banco de dados (mais seguro que regex)
  const isEscudo = i => (i.tipo === 'Armadura' && i.subtipo === 'Escudo') || /escudo/i.test(i.nome);
  const isArmadura = i => (i.tipo === 'Armadura' && i.subtipo !== 'Escudo') || (/armadura|cota|gibão|couro|camisão|malha|placa|acolchoada/i.test(i.nome) && !/escudo/i.test(i.nome));

  const temEscudoItem = itens.find(isEscudo);
  const temEscudo = temEscudoItem && temProficienciaArmadura(ficha, null, true);
  
  const armaduraItem = itens.find(isArmadura);
  
  if (armaduraItem) {
    let tipo = 'Leve';
    let base = 11;
    const nome = armaduraItem.nome.toLowerCase();
    const sub = (armaduraItem.subtipo || '').toLowerCase();

    // Identifica a categoria e a base de CA
    if (sub === 'pesada' || (/placa/i.test(nome) && !/parcial/i.test(nome)) || (/cota de malha/i.test(nome) && !/parcial/i.test(nome))) {
      tipo = 'Pesada';
      base = 18;
      if (/cota de malha/i.test(nome)) base = 16;
      if (/cota de anéis/i.test(nome)) base = 14;
      if (/talas/i.test(nome)) base = 17;
    } else if (sub === 'média' || (/parcial/i.test(nome)) || /gibão/i.test(nome) || /escamas/i.test(nome) || /peitoral/i.test(nome)) {
      tipo = 'Média';
      base = 12;
      if (/placa/i.test(nome)) base = 15;
      if (/cota de malha/i.test(nome)) base = 13;
      if (/escamas/i.test(nome) || /peitoral/i.test(nome)) base = 14;
    } else {
      tipo = 'Leve';
      base = 11;
      if (/batido/i.test(nome)) base = 12;
    }

    const proficiente = temProficienciaArmadura(ficha, tipo, false);
    const modDes = MOD(ficha.atributos.destreza);
    const bônusEscudo = temEscudo ? 2 : 0;

    if (proficiente) {
      if (tipo === 'Leve') return base + modDes + bônusEscudo;
      if (tipo === 'Média') return base + Math.min(2, modDes) + bônusEscudo;
      if (tipo === 'Pesada') return base + bônusEscudo;
    } else {
      // Se não for proficiente, perde o bônus da armadura (usa CA de sem armadura)
      return 10 + modDes + bônusEscudo;
    }
  }
  
  // Sem armadura (Defesa sem Armadura de Bárbaro, Monge, etc.)
  const classeId = ficha.meta.classeId;
  const modDes = MOD(ficha.atributos.destreza);
  const bônusEscudo = temEscudo ? 2 : 0;

  if (classeId === 'barbaro')
    return 10 + modDes + MOD(ficha.atributos.constituicao) + bônusEscudo;
  if (classeId === 'monge')
    return 10 + modDes + MOD(ficha.atributos.sabedoria) + bônusEscudo;
  if (classeId === 'feiticeiro' && ficha.meta.subclasseId === 'feiticeiro-draconico')
    return 10 + modDes + MOD(ficha.atributos.carisma) + bônusEscudo;
  
  return 10 + modDes + bônusEscudo;
}

function iniciativa(ficha) {
  let b = MOD(ficha.atributos.destreza);
  return b;
}

function deslocamento(ficha) {
  const e = window.acharEspecie?.(ficha.meta.especieId);
  return e?.deslocamento ?? 9;
}

function cdMagia(ficha) {
  const atr = ficha.magias.atributo || atributoConjuracaoDaClasse(ficha.meta.classeId);
  if (!atr) return null;
  return 8 + bonusProficiencia(ficha.meta.nivel) + MOD(ficha.atributos[atr]);
}
function ataqueMagia(ficha) {
  const atr = ficha.magias.atributo || atributoConjuracaoDaClasse(ficha.meta.classeId);
  if (!atr) return null;
  return bonusProficiencia(ficha.meta.nivel) + MOD(ficha.atributos[atr]);
}
function atributoConjuracaoDaClasse(classeId) {
  const c = window.acharClasse?.(classeId);
  if (!c?.conjuracao) return null;
  const map = { 'Inteligência':'inteligencia','Sabedoria':'sabedoria','Carisma':'carisma' };
  return map[c.conjuracao.atributo] || null;
}

function periciasDoAntecedente(f) {
  const b = window.acharAntecedente?.(f.meta.antecedenteId);
  if (!b) return [];
  if (b.tipo === 'generico') return f.meta.antecedentePericiasEscolhidas || [];
  return Array.isArray(b.proficienciasPericias) ? b.proficienciasPericias : [];
}

function ferramentaDoAntecedente(f) {
  const b = window.acharAntecedente?.(f.meta.antecedenteId);
  if (!b) return '';
  if (b.tipo === 'generico') return f.meta.antecedenteFerramentaEscolhida || '';
  return typeof b.proficienciaFerramenta === 'string' ? b.proficienciaFerramenta : '';
}

function periciasDaEspecie(f) {
  const e = window.acharEspecie?.(f.meta.especieId);
  if (!e) return [];
  if (e.id === 'humano') return f.meta.especiePericiasEscolhidas || [];
  return [];
}

function periciasDaClasse(f) {
  return f.meta.classePericiasEscolhidas || [];
}

function atributoConjuracaoEspecie(f) {
  const e = window.acharEspecie?.(f.meta.especieId);
  if (!e) return null;
  const cfg = window.FICHA_CONFIG?.especieConfig?.(e.id);
  if (!cfg?.atributoConjuracao) return null;
  const escolha = f.meta.especieEscolhas?.atributo;
  const mapa = { int:'inteligencia', sab:'sabedoria', car:'carisma' };
  return escolha ? mapa[escolha] : null;
}

function cdMagiaEspecie(f) {
  const atr = atributoConjuracaoEspecie(f);
  if (!atr) return null;
  return 8 + bonusProficiencia(f.meta.nivel) + MOD(f.atributos[atr]);
}
function ataqueMagiaEspecie(f) {
  const atr = atributoConjuracaoEspecie(f);
  if (!atr) return null;
  return bonusProficiencia(f.meta.nivel) + MOD(f.atributos[atr]);
}

function magiasDaEspecie(f) {
  const e = window.acharEspecie?.(f.meta.especieId);
  if (!e) return [];
  const cfg = window.FICHA_CONFIG?.especieConfig?.(e.id);
  if (!cfg) return [];

  const nv = f.meta.nivel;
  const escolhas = f.meta.especieEscolhas || {};
  const out = [];

  (cfg.magiasFixas || []).forEach(m => {
    if (nv >= m.nivel) out.push({ ...m, fonte:'especie', origem:e.nome });
  });

  (cfg.subescolhas || []).forEach(sub => {
    const valor = escolhas[sub.id];
    if (!valor) return;
    const opcao = sub.opcoes.find(o => o.valor === valor);
    if (!opcao?.magias) return;
    opcao.magias.forEach(m => {
      if (nv >= m.nivel) out.push({ ...m, fonte:'especie', origem:opcao.nome });
    });
  });

  const vistos = new Set();
  return out.filter(m => {
    if (vistos.has(m.nome)) return false;
    vistos.add(m.nome);
    return true;
  });
}

function periciasCompletas(f) {
  const LISTA = [
    ['Acrobacia','destreza'], ['Lidar com Animais','sabedoria'], ['Arcanismo','inteligencia'],
    ['Atletismo','forca'], ['Atuação','carisma'], ['Enganação','carisma'],
    ['Furtividade','destreza'], ['História','inteligencia'], ['Intimidação','carisma'],
    ['Intuição','sabedoria'], ['Investigação','inteligencia'], ['Medicina','sabedoria'],
    ['Natureza','inteligencia'], ['Percepção','sabedoria'], ['Persuasão','carisma'],
    ['Prestidigitação','destreza'], ['Religião','inteligencia'], ['Sobrevivência','sabedoria']
  ];
  const bp = bonusProficiencia(f.meta.nivel);
  const profsAntec = periciasDoAntecedente(f);
  const profsEsp   = periciasDaEspecie(f);
  const profsClasse = periciasDaClasse(f);
  const profsManuais = f.pericias.proficientes;
  const todas = new Set([...profsManuais, ...profsAntec, ...profsEsp, ...profsClasse]);

  return LISTA.map(([nome, atr]) => {
    const prof = todas.has(nome);
    const esp  = f.pericias.especializadas.includes(nome);
    const mod  = MOD(f.atributos[atr]);
    const bonus = mod + (prof ? (esp ? bp * 2 : bp) : 0);

    const origem = profsAntec.includes(nome) ? 'antecedente'
                 : profsEsp.includes(nome)   ? 'especie'
                 : profsClasse.includes(nome)? 'classe'
                 : null;

    return { nome, atributo: atr, prof, esp, bonus, mod, origem };
  });
}

function salvaguardas(ficha) {
  const bp = bonusProficiencia(ficha.meta.nivel);
  return ['forca','destreza','constituicao','inteligencia','sabedoria','carisma'].map(a => ({
    atributo: a,
    mod: MOD(ficha.atributos[a]),
    proficiente: ficha.salvaguardas.proficientes.includes(a),
    bonus: MOD(ficha.atributos[a]) + (ficha.salvaguardas.proficientes.includes(a) ? bp : 0)
  }));
}

function percepcaoPassiva(ficha) {
  const p = periciasCompletas(ficha).find(x => x.nome === 'Percepção');
  return 10 + p.bonus;
}

function recursoDoNivel(classeId, nomeRecurso, nivel) {
  const c = window.acharClasse?.(classeId);
  if (!c?.recursos) return null;
  const r = c.recursos.find(x => x.nome === nomeRecurso);
  if (!r?.progressao) return null;
  let valor = null;
  for (const p of r.progressao) if (nivel >= p.nivel) valor = p.valor;
  return valor;
}

function progressaoConjurador(classeId, subclasseId) {
  if (!classeId) return null;
  const cfg = window.FICHA_CONFIG?.CONJURACAO_PROGRESSAO || {};
  let p = cfg[classeId];
  if (!p) return null;
  if (p === 'third') {
    if (classeId === 'guerreiro' && subclasseId && /cavalheiro|eldritch|mistico/i.test(subclasseId)) return 'third';
    if (classeId === 'ladino'    && subclasseId && /trapaceiro|arcano|mistico/i.test(subclasseId)) return 'third';
    return null;
  }
  return p;
}

function classesConjuradoras(f) {
  const out = [];
  const principalNivel = nivelClassePrincipal(f);
  const push = (classeId, subId, nivel) => {
    if (!classeId) return;
    const c = window.acharClasse?.(classeId);
    if (!c?.conjuracao) return;
    const prog = progressaoConjurador(classeId, subId);
    if (!prog) return;
    const tipo = (window.FICHA_CONFIG?.CONJURACAO_TIPO || {})[classeId] || 'preparada';
    const atributo = (window.FICHA_CONFIG?.CONJURACAO_ATRIBUTO || {})[classeId]
      || atributoConjuracaoDaClasse(classeId);
    out.push({
      id: classeId,
      nome: c.nome,
      tipo,
      atributo,
      nivel,
      progressao: prog,
      subclasseId: subId || null,
      ehPrincipal: nivel === principalNivel && classeId === f.meta.classeId
    });
  };
  push(f.meta.classeId, f.meta.subclasseId, principalNivel);
  (f.meta.multiclasses || []).forEach(mc => push(mc.id, mc.subclasseId, mc.nivel || 0));
  return out;
}

function nivelConjurador(f) {
  return classesConjuradoras(f)
    .filter(c => c.progressao !== 'pact')
    .reduce((s, c) => s + (
      c.progressao === 'full'  ? c.nivel :
      c.progressao === 'half'  ? Math.ceil(c.nivel / 2) :
      c.progressao === 'third' ? Math.floor(c.nivel / 3) : 0
    ), 0);
}

function slotsMagia(f) {
  const classes = classesConjuradoras(f).filter(c => c.progressao !== 'pact');
  if (!classes.length) return {};
  if (classes.length === 1) {
    const c = window.acharClasse?.(classes[0].id);
    const s = c?.conjuracao?.espacosDeMagia?.find(x => x.nivel === classes[0].nivel)?.slots;
    if (s) {
      const out = {};
      Object.entries(s).forEach(([k, v]) => { if (v > 0) out[k] = v; });
      return out;
    }
  }
  const nv = Math.min(20, nivelConjurador(f));
  if (nv < 1) return {};
  const linha = (window.FICHA_CONFIG?.TABELA_SLOTS_MULTICLASSE || [])[nv] || [];
  const out = {};
  linha.forEach((v, i) => { if (v > 0) out[String(i + 1)] = v; });
  return out;
}

// --- LEITURA DIRETA DO DB: Truques ---
function maxTruquesClasse(classeId, nivel) {
  const c = window.acharClasse?.(classeId);
  if (c?.conjuracao?.truquesConhecidos) {
    let max = 0;
    for (const t of c.conjuracao.truquesConhecidos) {
      if (nivel >= t.nivel) max = t.valor;
    }
    return max;
  }
  // Fallback se o DB não tiver a tabela
  const tbl = (window.FICHA_CONFIG?.CONJURACAO_TRUQUES || {})[classeId];
  if (!tbl) return 0;
  return tbl[Math.min(19, Math.max(0, nivel - 1))] || 0;
}

// --- LEITURA DIRETA DO DB: Preparadas ---
function maxPreparadasClasse(f, cl) {
  const c = window.acharClasse?.(cl.id);
  
  if (c?.conjuracao?.magiasPreparadas) {
    let max = 0;
    for (const p of c.conjuracao.magiasPreparadas) {
      if (cl.nivel >= p.nivel) max = p.valor;
    }
    return max;
  }

  // Fallback matemático
  const mod = MOD(f.atributos[cl.atributo] || 10);
  const tipo = cl.tipo;
  if (tipo === 'conhecida') return null; 
  if (tipo === 'grimorio')  return Math.max(1, mod + cl.nivel);
  const fator = cl.progressao === 'half' ? Math.floor(cl.nivel / 2) : cl.nivel;
  return Math.max(1, mod + fator);
}

// --- LEITURA DIRETA DO DB: Círculo Máximo ---
function maxNivelMagiaClasse(cl) {
  if (!cl || !cl.progressao) return 0;
  const c = window.acharClasse?.(cl.id);
  
  if (c?.conjuracao?.espacosDeMagia) {
    const row = c.conjuracao.espacosDeMagia.find(x => x.nivel === cl.nivel)
             || c.conjuracao.espacosDeMagia.filter(x => x.nivel <= cl.nivel).pop();
    if (!row || !row.slots) return 0;
    const circulos = Object.keys(row.slots).map(Number).filter(k => row.slots[k] > 0);
    return circulos.length ? Math.max(...circulos) : 0;
  }

  if (cl.tipo === 'pact') return Math.min(5, Math.ceil(cl.nivel / 2));
  if (cl.progressao === 'full') return Math.ceil(cl.nivel / 2);
  if (cl.progressao === 'half') return Math.ceil(cl.nivel / 2); 
  if (cl.progressao === 'third') return Math.max(0, Math.ceil(cl.nivel / 6));
  return 0;
}

// --- LEITURA DIRETA DO DB: Magias da Classe ---
function magiasDaClasse(classeId) {
  const c = window.acharClasse?.(classeId);
  if (!c) return [];
  const todas = window.DND_DATA?.SPELLS || [];
  
  // Lista específica do Artífice
  if (classeId === 'artifice') {
    const listaArtifice = [
      'Absorver Elementos', 'Alarme', 'Amizade Animal', 'Arma Mágica', 'Armadura Arcana', 'Armadura de Agathys', 'Arrombar', 'Auxílio', 'Bola de Fogo', 'Cativar', 'Cegueira/Surdez', 'Clarividência', 'Compreender Idiomas', 'Contramagia', 'Criar ou Destruir Água', 'Curar Ferimentos', 'Despedaçar', 'Detectar Magia', 'Detectar Veneno e Doença', 'Disco Flutuante de Tenser', 'Disfarçar-se', 'Dissipar Magia', 'Emaranhar', 'Escudo Arcano', 'Escudo da Fé', 'Esfera Flamejante', 'Faca de Gelo', 'Falar com Animais', 'Falso Refúgio', 'Flecha Ácida de Melf', 'Fogo das Fadas', 'Força Espectral', 'Glifo de Proteção', 'Graxa', 'Heroísmo', 'Identificar', 'Imagem Silenciosa', 'Infligir Ferimentos', 'Invisibilidade', 'Invisibilidade Maior', 'Lentidão', 'Levitação', 'Localizar Objeto', 'Lufada de Vento', 'Luz', 'Luz do Dia', 'Mãos Flamejantes', 'Mísseis Mágicos', 'Névoa Obscurecente', 'Onda Trovejante', 'Palavra Curativa', 'Palavra Curativa em Massa', 'Passo Nebuloso', 'Pele-Rocha', 'Pequeno Refúgio de Leomund', 'Prestidigitação Arcana', 'Proteção contra Energia', 'Proteção Contra Veneno', 'Purificar Alimentos e Bebidas', 'Queda Suave', 'Raio de Fogo', 'Raio de Gelo', 'Raio Nauseante', 'Relâmpago', 'Remeter', 'Reparar', 'Repouso Tranquilo', 'Resistência', 'Restauração Menor', 'Revivificar', 'Salto', 'Santuário', 'Servo Invisível', 'Similaridade', 'Sono', 'Teia', 'Toque Chocante', 'Tranca Arcana', 'Trovão', 'Vidência', 'Vitalidade Vazia', 'Voo', 'Servo Homúnculo'
    ];
    return todas.filter(m => listaArtifice.includes(m.n));
  }
  
  return todas.filter(m => Array.isArray(m.cl) && m.cl.includes(c.nome));
}

window.CALC = {
  MOD, fmt, nivelPorXP, xpProximoNivel, xpNivelAtual,
  bonusProficiencia, dadosVidaDaClasse, pvMaximo, ca, iniciativa,
  deslocamento, cdMagia, ataqueMagia, atributoConjuracaoDaClasse,
  periciasCompletas, salvaguardas, percepcaoPassiva, recursoDoNivel,
  periciasDoAntecedente, ferramentaDoAntecedente, periciasDaEspecie,
  periciasDaClasse,
  atributoConjuracaoEspecie, cdMagiaEspecie, ataqueMagiaEspecie, magiasDaEspecie,
  nivelClassePrincipal, maxNivelMagiaClasse,
  progressaoConjurador, classesConjuradoras, nivelConjurador,
  slotsMagia, maxTruquesClasse, maxPreparadasClasse, magiasDaClasse
};
})();