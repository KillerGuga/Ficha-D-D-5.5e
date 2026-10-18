/* ============================================================
   CONFIG — escolhas de espécie e listas auxiliares
   ============================================================ */
(function(){

const TODAS_PERICIAS = [
  'Acrobacia','Lidar com Animais','Arcanismo','Atletismo','Atuação','Enganação',
  'Furtividade','História','Intimidação','Intuição','Investigação','Medicina',
  'Natureza','Percepção','Persuasão','Prestidigitação','Religião','Sobrevivência'
];

const TODAS_FERRAMENTAS = [
  'Ferramentas de Ladrão','Ferramentas de Funileiro',
  'Suprimentos de Calígrafo','Ferramentas de Cartógrafo',
  'Ferramentas de Carpinteiro','Ferramentas de Ferreiro',
  'Ferramentas de Navegador','Kit de Disfarce','Kit de Falsificação',
  'Kit de Herbalismo','Kit de Veneno','Kit de Jogos',
  'Instrumento Musical','Ferramentas de Artesão'
];

/* Nomes específicos de instrumentos musicais (PHB 2024) */
const INSTRUMENTOS_MUSICAIS = [
  'Alaúde','Cítara','Flauta','Flauta de Pã','Gaita de Foles',
  'Harpa','Lira','Oboé','Tambor','Trombeta','Violino'
];

/* Idiomas Comuns e Raros (PHB 2024) */
const IDIOMAS_COMUNS = [
  'Comum', 'Língua de Sinais Comum', 'Dracônico', 'Anão', 'Élfico', 
  'Gigante', 'Gnômico', 'Goblin', 'Pequenino', 'Orc'
];

const IDIOMAS_RAROS = [
  'Abissal', 'Celestial', 'Dialeto Obscuro', 'Druídico', 'Gíria dos Ladrões', 
  'Infernal', 'Primordial', 'Silvestre', 'Subcomum'
];

const TODOS_IDIOMAS = [...IDIOMAS_COMUNS, ...IDIOMAS_RAROS];

/* Idioma extra concedido automaticamente por espécie */
const IDIOMAS_POR_ESPECIE = {
  aasimar:   ['Celestial'],
  anao:      ['Anão'],
  draconato: ['Dracônico'],
  elfo:      ['Élfico'],
  gnomo:     ['Gnômico'],
  golias:    ['Gigante'],
  humano:    [],
  orc:       ['Orc'],
  tiferino:  ['Infernal']
};

/* Fallback: classes que exigem escolha de ferramentas/instrumentos
   (usado quando a classe no DB não define proficiencias.ferramentas) */
const FERRAMENTAS_POR_CLASSE = {
  bardo: { quantidade: 3, categoria: 'Instrumentos Musicais' }
};

/* Helper: devolve { quantidade, lista } se a classe exigir escolha,
   ou null se for fixa / não houver escolha. */
function listaFerramentasClasse(c) {
  if (!c) return null;

  const ferr = c.proficiencias?.ferramentas;
  if (ferr && !Array.isArray(ferr)) {
    const qtd = ferr.quantidade || ferr.escolha || 0;
    if (qtd) {
      let lista = ferr.lista || ferr.de || ferr.categoria || ferr.opcoes;
      if (typeof lista === 'string') {
        lista = /instrumento/i.test(lista)
          ? INSTRUMENTOS_MUSICAIS
          : TODAS_FERRAMENTAS;
      }
      if (!Array.isArray(lista)) lista = TODAS_FERRAMENTAS;
      return { quantidade: qtd, lista };
    }
  }

  // Fallback por id
  const fb = FERRAMENTAS_POR_CLASSE[c.id];
  if (fb) {
    const lista = /instrumento/i.test(fb.categoria)
      ? INSTRUMENTOS_MUSICAIS
      : TODAS_FERRAMENTAS;
    return { quantidade: fb.quantidade, lista };
  }
  return null;
}

// Opções padrão de atributo de conjuração (Espécies PHB 2024)
const ATRIBUTOS_CONJURACAO = [
  { valor:'int', nome:'Inteligência' },
  { valor:'sab', nome:'Sabedoria' },
  { valor:'car', nome:'Carisma' }
];

/* ============================================================
   ESPÉCIES — escolhas (inalterado)
   ============================================================ */
const ESPECIES_CONFIG = {
  elfo: {
    atributoConjuracao: true,
    subescolhas: [{
      id: 'linhagem', titulo: 'Linhagem Élfica', obrigatorio: true,
      opcoes: [
        { valor:'alto', nome:'Alto Elfo',
          desc:'Prestidigitação Arcana; Detectar Magia (nv.3); Passo Nebuloso (nv.5).',
          magias: [
            { nivel:1, nome:'Prestidigitação Arcana', tipo:'truque',
              nota:'Pode trocar por outro truque da lista de Mago em Descanso Longo.' },
            { nivel:3, nome:'Detectar Magia',    tipo:'1', livre:true },
            { nivel:5, nome:'Passo Nebuloso',    tipo:'2', livre:true }
          ]
        },
        { valor:'drow', nome:'Drow',
          desc:'Visão no Escuro 36m; Luzes Dançantes; Fogo das Fadas (nv.3); Escuridão (nv.5).',
          magias: [
            { nivel:1, nome:'Luzes Dançantes', tipo:'truque' },
            { nivel:3, nome:'Fogo das Fadas',  tipo:'1', livre:true },
            { nivel:5, nome:'Escuridão',       tipo:'2', livre:true }
          ]
        },
        { valor:'silvestre', nome:'Elfo Silvestre',
          desc:'Deslocamento +1,5m; Arte Druídica; Passos Largos (nv.3); Passo Sem Rastro (nv.5).',
          magias: [
            { nivel:1, nome:'Arte Druídica',   tipo:'truque' },
            { nivel:3, nome:'Passos Largos',   tipo:'1', livre:true },
            { nivel:5, nome:'Passo Sem Rastro',tipo:'2', livre:true }
          ]
        }
      ]
    }],
    pericias: { quantidade: 1, lista: ['Intuição','Percepção','Sobrevivência'] }
  },

  tiferino: {
    atributoConjuracao: true,
    subescolhas: [{
      id: 'legado', titulo: 'Legado Ínfero', obrigatorio: true,
      opcoes: [
        { valor:'abissal', nome:'Abissal',
          desc:'Resist. Venenoso · Rajada de Veneno · Raio Nauseante (nv.3) · Paralisar Pessoa (nv.5).',
          magias: [
            { nivel:1, nome:'Rajada de Veneno', tipo:'truque' },
            { nivel:3, nome:'Raio Nauseante',   tipo:'1', livre:true },
            { nivel:5, nome:'Paralisar Pessoa', tipo:'2', livre:true }
          ]
        },
        { valor:'ctonico', nome:'Ctônico',
          desc:'Resist. Necrótico · Toque Necrótico · Vitalidade Vazia (nv.3) · Raio do Enfraquecimento (nv.5).',
          magias: [
            { nivel:1, nome:'Toque Necrótico',           tipo:'truque' },
            { nivel:3, nome:'Vitalidade Vazia',          tipo:'1', livre:true },
            { nivel:5, nome:'Raio do Enfraquecimento',   tipo:'2', livre:true }
          ]
        },
        { valor:'infernal', nome:'Infernal',
          desc:'Resist. Ígneo · Raio de Fogo · Repreensão Diabólica (nv.3) · Escuridão (nv.5).',
          magias: [
            { nivel:1, nome:'Raio de Fogo',         tipo:'truque' },
            { nivel:3, nome:'Repreensão Diabólica', tipo:'1', livre:true },
            { nivel:5, nome:'Escuridão',            tipo:'2', livre:true }
          ]
        }
      ]
    }]
  },

  gnomo: {
    atributoConjuracao: true,
    subescolhas: [{
      id: 'linhagem', titulo: 'Linhagem Gnômica', obrigatorio: true,
      opcoes: [
        { valor:'rochas', nome:'Gnomo das Rochas',
          desc:'Prestidigitação Arcana + Reparar; dispositivos mecânicos Minúsculos.',
          magias: [
            { nivel:1, nome:'Prestidigitação Arcana', tipo:'truque' },
            { nivel:1, nome:'Reparar',                tipo:'truque' }
          ]
        },
        { valor:'bosque', nome:'Gnomo do Bosque',
          desc:'Ilusão Menor + Falar com Animais (usos = BP).',
          magias: [
            { nivel:1, nome:'Ilusão Menor', tipo:'truque' },
            { nivel:1, nome:'Falar com Animais', tipo:'1',
              livre:true, usos:"BP", nota:"Usos = Bônus de Proficiência; recupera em Descanso Longo." }
          ]
        }
      ]
    }]
  },

  draconato: {
    subescolhas: [{
      id: 'heranca', titulo: 'Herança Dracônica', obrigatorio: true,
      opcoes: [
        { valor:'azul',     nome:'Azul',     desc:'Dano Elétrico · Linha' },
        { valor:'bronze',   nome:'Bronze',   desc:'Dano Elétrico · Linha' },
        { valor:'branco',   nome:'Branco',   desc:'Dano Gélido · Cone' },
        { valor:'prata',    nome:'Prata',    desc:'Dano Gélido · Cone' },
        { valor:'negro',    nome:'Negro',    desc:'Dano Ácido · Linha' },
        { valor:'cobre',    nome:'Cobre',    desc:'Dano Ácido · Linha' },
        { valor:'ouro',     nome:'Ouro',     desc:'Dano Ígneo · Cone' },
        { valor:'vermelho', nome:'Vermelho', desc:'Dano Ígneo · Cone' },
        { valor:'latao',    nome:'Latão',    desc:'Dano Ígneo · Linha' },
        { valor:'verde',    nome:'Verde',    desc:'Dano Venenoso · Cone' }
      ]
    }]
  },

  golias: {
    subescolhas: [{
      id: 'ancestralidade', titulo: 'Ancestralidade Gigante', obrigatorio: true,
      opcoes: [
        { valor:'gelo',       nome:'Gigante do Gelo',       desc:'Arrepio do Gelo: +1d6 Gélido e reduz Deslocamento.' },
        { valor:'fogo',       nome:'Gigante de Fogo',       desc:'Queimadura de Fogo: +1d10 Ígneo.' },
        { valor:'pedra',      nome:'Gigante da Pedra',      desc:'Resistência da Pedra: 1d12 + Con reduz dano (Reação).' },
        { valor:'nuvem',      nome:'Gigante das Nuvens',    desc:'Salto da Nuvem: teleporte 9m (Ação Bônus).' },
        { valor:'colina',     nome:'Gigante da Colina',     desc:'Tombo da Colina: impõe Caído.' },
        { valor:'tempestade', nome:'Gigante da Tempestade', desc:'Trovão da Tempestade: 1d8 Trovejante (Reação).' }
      ]
    }]
  },

  aasimar: {
    atributoConjuracao: true,
    magiasFixas: [
      { nivel:1, nome:'Luz', tipo:'truque' }
    ]
  },

  humano: {
    pericias: { quantidade: 1, lista: 'qualquer' },
    talentoOrigem: true
  }
};

/* Normaliza a lista de perícias de uma classe.
   Aceita: undefined | 'qualquer' | 'any' | ['qualquer'] | [] → todas as perícias.
   Aceita lista concreta → devolve como veio. */
function normalizarListaPericias(lista) {
  if (!lista) return TODAS_PERICIAS;

  if (typeof lista === 'string') {
    return /qualquer|any|todas|all/i.test(lista) ? TODAS_PERICIAS : TODAS_PERICIAS;
  }

  if (Array.isArray(lista)) {
    if (!lista.length) return TODAS_PERICIAS;
    const soPlaceholder = lista.every(x =>
      /^(qualquer|any|todas|all)$/i.test(String(x).trim()));
    return soPlaceholder ? TODAS_PERICIAS : lista;
  }

  return TODAS_PERICIAS;
}

/* Devolve { quantidade, lista } se a classe tiver escolha de perícia,
   ou null caso contrário. */
function listaPericiasClasse(c) {
  if (!c) return null;
  const info = c.proficiencias?.pericias;
  if (!info) return null;

  const quantidade = info.quantidade || 0;
  if (!quantidade) return null;

  return { quantidade, lista: normalizarListaPericias(info.lista) };
}

/* ============================================================
   CONJURAÇÃO — progressão, tipo e atributo por classe
   ============================================================ */
const CONJURACAO_PROGRESSAO = {
  bardo:'full', clerigo:'full', druida:'full', feiticeiro:'full', mago:'full',
  paladino:'half', guardiao:'half', patrulheiro:'half', ranger:'half',
  artificie:'half', artifice:'half',
  guerreiro:'third', ladino:'third',   // só com subclasse conjuradora
  bruxo:'pact', warlock:'pact'
};

const CONJURACAO_TIPO = {
  bardo:'conhecida', bruxo:'conhecida', warlock:'conhecida', feiticeiro:'conhecida',
  clerigo:'preparada', druida:'preparada', paladino:'preparada',
  guardiao:'preparada', patrulheiro:'preparada', ranger:'preparada',
  artificie:'preparada', artifice:'preparada',
  mago:'grimorio'
};

const CONJURACAO_ATRIBUTO = {
  bardo:'carisma', bruxo:'carisma', warlock:'carisma', feiticeiro:'carisma',
  clerigo:'sabedoria', druida:'sabedoria', paladino:'carisma',
  guardiao:'sabedoria', patrulheiro:'sabedoria', ranger:'sabedoria',
  mago:'inteligencia', artificie:'inteligencia', artifice:'inteligencia',
  guerreiro:'inteligencia', ladino:'inteligencia'
};

/* Truques conhecidos por nível (índice 0 = nível 1) */
const CONJURACAO_TRUQUES = {
  bardo:[2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
  bruxo:[2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
  warlock:[2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
  feiticeiro:[4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6],
  clerigo:[3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5],
  druida:[2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
  mago:[3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5]
};

/* Tabela de espaços para CONJURADOR MULTICLASSE (PHB 2024) */
const TABELA_SLOTS_MULTICLASSE = [
  null,
  [2,0,0,0,0,0,0,0,0],
  [3,0,0,0,0,0,0,0,0],
  [4,2,0,0,0,0,0,0,0],
  [4,3,0,0,0,0,0,0,0],
  [4,3,2,0,0,0,0,0,0],
  [4,3,3,0,0,0,0,0,0],
  [4,3,3,1,0,0,0,0,0],
  [4,3,3,2,0,0,0,0,0],
  [4,3,3,3,1,0,0,0,0],
  [4,3,3,3,2,0,0,0,0],
  [4,3,3,3,2,1,0,0,0],
  [4,3,3,3,2,1,0,0,0],
  [4,3,3,3,2,1,1,0,0],
  [4,3,3,3,2,1,1,0,0],
  [4,3,3,3,2,1,1,1,0],
  [4,3,3,3,2,1,1,1,0],
  [4,3,3,3,2,1,1,1,1],
  [4,3,3,3,3,1,1,1,1],
  [4,3,3,3,3,2,1,1,1],
  [4,3,3,3,3,2,2,1,1]
];

window.FICHA_CONFIG = {
  TODAS_PERICIAS,
  TODAS_FERRAMENTAS,
  INSTRUMENTOS_MUSICAIS,
  TODOS_IDIOMAS,
  IDIOMAS_COMUNS,
  IDIOMAS_RAROS,
  IDIOMAS_POR_ESPECIE,
  FERRAMENTAS_POR_CLASSE,
  ATRIBUTOS_CONJURACAO,
  ESPECIES_CONFIG,
  especieConfig(id) { return ESPECIES_CONFIG[id] || null; },
  listaFerramentasClasse,
  listaPericiasClasse,        
  normalizarListaPericias,
  CONJURACAO_PROGRESSAO,
  CONJURACAO_TIPO,
  CONJURACAO_ATRIBUTO,
  CONJURACAO_TRUQUES,
  TABELA_SLOTS_MULTICLASSE, 
};
})();