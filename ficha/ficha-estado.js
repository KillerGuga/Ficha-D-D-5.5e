/* ============================================================
   ESTADO — persistência e modelo de dados da ficha
   Multi-ficha via localStorage (chave: dnd_ficha_<id>)
   ============================================================ */
(function(){

const CHAVE_LISTA = 'dnd_fichas_ids';

function uuid() {
  return 'f' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function padrao(id) {
  return {
    versao: 1,
    id: id || uuid(),
    criadoEm: Date.now(),
    atualizadoEm: Date.now(),
   meta: {
      nome: '', jogador: '',
      classeId: null, subclasseId: null,
      especieId: null, antecedenteId: null,
      alinhamento: '', nivel: 1, xp: 0,
      retrato: null,

      // Antecedente
      antecedenteBonus: null,
      antecedenteBonusAplicado: null,
      antecedentePericiasEscolhidas: [],
      antecedenteFerramentaEscolhida: '',
      antecedenteTalentoEscolhido: '',

      // NOVO: Idiomas escolhidos pelo jogador
      idiomasEscolhidos: [],
      idiomasConfirmados: false,

      // Perícias de classe          ← NOVO
      classePericiasEscolhidas: [],
      classePericiasConfirmadas: false,

      // Ferramentas / instrumentos escolhidos da classe  ← NOVO
      classeFerramentasEscolhidas: [],
      classeFerramentasConfirmadas: false,

      // Espécie
      especieEscolhas: {},
      especiePericiasEscolhidas: [],
      especieTalentoEscolhido: '',
      especieConfirmada: false,
      especieMagiasGastas: {},
    
    // NOVO: multiclasses (até 2)
      // { id, nivel, subclasseId, periciasEscolhidas, periciasConfirmadas }
      multiclasses: []  

    },
    atributos: {
      forca: 10, destreza: 10, constituicao: 10,
      inteligencia: 10, sabedoria: 10, carisma: 10
    },
    hp: { atual: 0, max: 0, temp: 0, dadosVida: { total: 1, gastos: 0 } },
    salvaguardas: { proficientes: [] },
    pericias:     { proficientes: [], especializadas: [] },
    proficiencias: { armaduras: [], armas: [], ferramentas: [], idiomas: [] }, // ← extra
    ataques: [],
    magias: {
      atributo: null,
      espacos: {},
      truquesPorClasse: {},       // { classeId: [nomes] }
      preparadasPorClasse: {},    // { classeId: [nomes] } (também usado p/ "conhecidas")
      grimorio: [],                // só para Mago
      arcanaMistica: {}
    },
    magiasExpandidas: {},
    inventario: {
      itens: [],
      moedas: { pc: 0, pp: 0, pe: 0, po: 0, pl: 0 }
    },
    sintonizacao: [],
    recursos: [],
    notas: { organizacoes: '', aliados: '', inimigos: '', backstory: '', outras: '' }
  };
}

function getIds() {
  try { return JSON.parse(localStorage.getItem(CHAVE_LISTA)) || []; }
  catch { return []; }
}
function setIds(v) { localStorage.setItem(CHAVE_LISTA, JSON.stringify(v)); }

function chaveDe(id) { return 'dnd_ficha_' + id; }

function carregar(id) {
  const raw = localStorage.getItem(chaveDe(id));
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

function salvar(ficha) {
  ficha.atualizadoEm = Date.now();
  localStorage.setItem(chaveDe(ficha.id), JSON.stringify(ficha));
  const ids = getIds();
  if (!ids.includes(ficha.id)) { ids.push(ficha.id); setIds(ids); }
}

function excluir(id) {
  localStorage.removeItem(chaveDe(id));
  setIds(getIds().filter(x => x !== id));
}

function listar() {
  return getIds().map(carregar).filter(Boolean);
}

function criarNova() {
  const f = padrao();
  salvar(f);
  return f;
}

window.DND_FICHA = {
  padrao, uuid, carregar, salvar, excluir, listar, criarNova,
  get idAtual() { return new URLSearchParams(location.search).get('id'); }
};
})();