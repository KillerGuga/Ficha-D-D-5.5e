/* ============================================================
   CLASSE — GUARDIÃO
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.registrarClasse({
  id: "guardiao",
  nome: "Guardião",
  fonte: "PHB 2024",
  dadoDeVida: 10,
  atributoPrincipal: ["Destreza", "Sabedoria"],
  testesDeResistencia: ["Força", "Destreza"],

  proficiencias: {
    armaduras: ["Leve", "Média", "Escudos"],
    armas: ["Simples", "Marciais"],
    ferramentas: [],
    pericias: {
      quantidade: 3,
      lista: ["Atletismo","Furtividade","Intuição","Investigação","Lidar com Animais","Natureza","Percepção","Sobrevivência"]
    }
  },

  equipamentoInicial: {
    opcaoA: ["Armadura de Couro Batido","Cimitarra","Espada Curta","Arco Longo","20 Flechas","Aljava","Foco Druídico (ramo de visco)","Kit de Aventureiro","7 PO"],
    opcaoB: ["150 PO"]
  },

  multiclasse: {
    requisitos: { destreza: 13, sabedoria: 13 },
    profGanhas: ["Armas Marciais","1 perícia à escolha","Armaduras Leve e Média","Escudos"]
  },

  conjuracao: {
    modelo: "meia",
    atributo: "Sabedoria",
    foco: "Foco Druídico",
    truquesConhecidos: [],  // Guardião não tem truques na lista; subclasses/Estilo de Luta podem conceder
    magiasPreparadas: [
      { nivel: 1,  valor: 2 },  { nivel: 2,  valor: 3 },  { nivel: 3,  valor: 4 },
      { nivel: 4,  valor: 5 },  { nivel: 5,  valor: 6 },  { nivel: 6,  valor: 6 },
      { nivel: 7,  valor: 7 },  { nivel: 8,  valor: 7 },  { nivel: 9,  valor: 9 },
      { nivel: 10, valor: 9 },  { nivel: 11, valor: 10 }, { nivel: 12, valor: 10 },
      { nivel: 13, valor: 11 }, { nivel: 14, valor: 11 }, { nivel: 15, valor: 12 },
      { nivel: 16, valor: 12 }, { nivel: 17, valor: 14 }, { nivel: 18, valor: 14 },
      { nivel: 19, valor: 15 }, { nivel: 20, valor: 15 }
    ],
    espacosDeMagia: [
      { nivel: 1,  slots: { 1: 2 } },
      { nivel: 2,  slots: { 1: 2 } },
      { nivel: 3,  slots: { 1: 3 } },
      { nivel: 4,  slots: { 1: 3 } },
      { nivel: 5,  slots: { 1: 4, 2: 2 } },
      { nivel: 6,  slots: { 1: 4, 2: 2 } },
      { nivel: 7,  slots: { 1: 4, 2: 3 } },
      { nivel: 8,  slots: { 1: 4, 2: 3 } },
      { nivel: 9,  slots: { 1: 4, 2: 3, 3: 2 } },
      { nivel: 10, slots: { 1: 4, 2: 3, 3: 2 } },
      { nivel: 11, slots: { 1: 4, 2: 3, 3: 3 } },
      { nivel: 12, slots: { 1: 4, 2: 3, 3: 3 } },
      { nivel: 13, slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
      { nivel: 14, slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
      { nivel: 15, slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
      { nivel: 16, slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
      { nivel: 17, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
      { nivel: 18, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
      { nivel: 19, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
      { nivel: 20, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } }
    ]
  },

  progressao: [
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Conjuração","Inimigo Favorito","Maestria em Arma"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Estilo de Luta","Explorador Hábil"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Subclasse de Guardião"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: ["Ataque Extra"] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Errante"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: ["Especialista"] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Incansável"] },
    { nivel: 11, bonusProf: 4, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: ["Predador Implacável"] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Véu da Natureza"] },
    { nivel: 15, bonusProf: 5, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: ["Caçador Preciso"] },
    { nivel: 18, bonusProf: 6, caracteristicas: ["Sentidos Selvagens"] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Matador de Inimigos Favoritos"] }
  ],

  recursos: [
    {
      nome: "Inimigo Favorito (usos sem espaço)",
      tipo: "usos",
      recuperacao: "todos em Descanso Longo",
      progressao: [
        { nivel: 1, valor: 2 }, { nivel: 5, valor: 3 }, { nivel: 9, valor: 4 },
        { nivel: 13, valor: 5 }, { nivel: 17, valor: 6 }
      ],
      nota: "Usos de Marca do Predador sem gastar espaço de magia."
    },
    {
      nome: "Maestria em Arma (armas)",
      tipo: "quantidade",
      progressao: [
        { nivel: 1, valor: 2 }, { nivel: 4, valor: 3 }, { nivel: 10, valor: 4 }
      ]
    }
  ],

  listaDeMagias: {
    "0": [],   // Guardião não tem truques na lista base
    "1": ["Alarme","Amizade Animal","Bom Fruto","Curar Ferimentos","Detectar Magia","Detectar Veneno e Doença","Emaranhar","Falar com Animais","Golpe Construtor","Marca do Predador","Névoa Obscurecente","Passos Largos","Salto","Saraivada de Espinhos"],
    "2": ["Aprimorar Atributo","Arma Mágica","Auxílio","Cordão de Flechas","Crescer Espinhos","Encontrar Armadilhas","Invocar Fera","Localizar Animais ou Plantas","Localizar Objeto","Lufada de Vento","Mensageiro Animal","Passo Sem Rastro","Pele-casca","Proteção Contra Veneno","Restauração Menor","Sentido Feral","Silêncio","Visão no Escuro"],
    "3": ["Arma Elemental","Caminhar Sobre as Águas","Convocar Feérico","Crescimento de Plantas","Dissipar Magia","Falar com Plantas","Flecha Relâmpago","Indetectável","Invocar Animais","Invocar Barragem","Luz do Dia","Mesclar-se às Rochas","Muralha de Vento","Proteção contra Energia","Respirar na Água","Revivificar"],
    "4": ["Convocar Elemental","Dominar Fera","Invocar Seres da Floresta","Localizar Criatura","Movimentação Livre","Pele-Rocha","Vinha Agarradora"],
    "5": ["Aljava Veloz","Comunhão com a Natureza","Golpe de Arço","Invocar Saraivada","Passo Arbóreo","Restauração Maior"]
  },

  descricoes: {
    "Conjuração": "Foco: Foco Druídico. Pode substituir 1 magia preparada em Descanso Longo. Sem truques na lista base.",
    "Inimigo Favorito": "Sempre tem Marca do Predador preparada. Pode conjurá-la sem espaço (usos = coluna Inimigo Favorito, recupera em Descanso Longo).",
    "Maestria em Arma": "Escolha 2 tipos de arma com as quais tem proficiência para usar as propriedades de maestria. Ao completar um Descanso Longo, pode trocar as escolhas.",
    "Estilo de Luta": "Adquire um talento Estilo de Luta (ver arquivo de talentos) OU escolha Combatente Druídico: aprende 2 truques de Druida (Fagulha Estelar e Orientação recomendados); contam como magias de Guardião para você; Sabedoria é o atributo de conjuração; pode substituir 1 truque ao subir de nível.",
    "Explorador Hábil": "Especialista em uma perícia já proficiente (não pode ser Especialista). Aprende 2 idiomas à escolha.",
    "Ataque Extra": "Ataca duas vezes em vez de uma ao usar a ação Atacar.",
    "Errante": "Deslocamento +3m (se não usar armadura Pesada). Deslocamento de Escalada = Deslocamento. Deslocamento de Natação = Deslocamento.",
    "Especialista": "Especialização em duas perícias já proficientes (não Especialista).",
    "Incansável": "Ação Usar Magia: PV Temporários = 1d8 + mod. Sabedoria (mín. 1). Usos = mod. Sabedoria (mín. 1); recupera em Descanso Longo. Redução de Exaustão: ao completar Descanso Curto, nível de Exaustão reduz em 1.",
    "Predador Implacável": "Sofrer dano não quebra Concentração em Marca do Predador.",
    "Véu da Natureza": "Ação Bônus: Invisível até o final do seu próximo turno. Usos = mod. Sabedoria (mín. 1); recupera em Descanso Longo.",
    "Caçador Preciso": "Vantagem em jogadas de ataque contra a criatura marcada por Marca do Predador.",
    "Sentidos Selvagens": "Visão às Cegas com alcance de 9m.",
    "Dádiva Épica": "Escolha uma Dádiva Épica. Recomendada: Dádiva da Viagem Dimensional.",
    "Matador de Inimigos Favoritos": "O dado de dano da Marca do Predador vira 1d10 em vez de 1d6."
  },

  subclasses: ["andarilho-feerico","cacador","senhor-das-feras","vigilante-das-sombras"]
});

console.log('[DND] Classe Guardião carregada.');