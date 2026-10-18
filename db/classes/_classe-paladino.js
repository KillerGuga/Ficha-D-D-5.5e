/* ============================================================
   CLASSE — PALADINO
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.registrarClasse({
  id: "paladino", nome: "Paladino", fonte: "PHB 2024",
  dadoDeVida: 10,
  atributoPrincipal: ["Força", "Carisma"],
  testesDeResistencia: ["Sabedoria", "Carisma"],

  proficiencias: {
    armaduras: ["Leve", "Média", "Pesada", "Escudos"],
    armas: ["Simples", "Marciais"],
    ferramentas: [],
    pericias: {
      quantidade: 2,
      lista: ["Atletismo","Intimidação","Intuição","Medicina","Persuasão","Religião"]
    }
  },

  equipamentoInicial: {
    opcaoA: ["Cota de Malha","Escudo","Espada Longa","6 Azagaias","Símbolo Sagrado","Kit de Sacerdote","9 PO"],
    opcaoB: ["150 PO"]
  },

  multiclasse: {
    requisitos: { forca: 13, carisma: 13 },
    profGanhas: ["Armas Marciais","Armaduras Leve e Média","Escudos"]
  },

  conjuracao: {
    modelo: "meia",
    atributo: "Carisma",
    foco: "Símbolo Sagrado",
    truquesConhecidos: [],  // apenas via Estilo de Luta → Combatente Abençoado
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
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Conjuração","Maestria em Arma","Mãos Consagradas"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Destruição do Paladino","Estilo de Luta"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Canalizar Divindade","Subclasse de Paladino"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: ["Ataque Extra","Montaria Fiel"] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Aura de Proteção"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: ["Repudiar Inimigos"] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Aura de Coragem"] },
    { nivel: 11, bonusProf: 4, caracteristicas: ["Golpes Radiantes"] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: [] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Toque Restaurador"] },
    { nivel: 15, bonusProf: 5, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: [] },
    { nivel: 18, bonusProf: 6, caracteristicas: ["Aura Expandida"] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Característica de Subclasse"] }
  ],

  recursos: [
    {
      nome: "Canalizar Divindade",
      tipo: "usos",
      recuperacao: "1 em Descanso Curto; todos em Descanso Longo",
      progressao: [{ nivel: 3, valor: 2 }, { nivel: 11, valor: 3 }]
    },
    {
      nome: "Mãos Consagradas (reserva de cura)",
      tipo: "pontos-de-vida",
      recuperacao: "todos em Descanso Longo",
      formula: "5 × nível de Paladino"
    },
    {
      nome: "Maestria em Arma (armas)",
      tipo: "quantidade",
      progressao: [{ nivel: 1, valor: 2 }, { nivel: 4, valor: 3 }, { nivel: 10, valor: 4 }]
    }
  ],

  listaDeMagias: {
    "0": [],
    "1": ["Bênção","Comando","Curar Ferimentos","Destruição Cauterizante","Destruição Colérica","Destruição Divina","Destruição Estrondosa","Detectar Magia","Detectar o Bem e o Mal","Detectar Veneno e Doença","Duelo Compelido","Escudo da Fé","Favor Divino","Heroísmo","Proteção Contra o Bem e o Mal","Purificar Alimentos e Bebidas"],
    "2": ["Arma Mágica","Auxílio","Convocar Montaria","Destruição Radiante","Localizar Objeto","Oração de Cura","Proteção Contra Veneno","Repouso Tranquilo","Restauração Menor","Vínculo de Proteção","Zona da Verdade"],
    "3": ["Arma Elemental","Aura de Vitalidade","Círculo Mágico","Criar Comida e Água","Destruição Cegante","Dissipar Magia","Luz do Dia","Manto do Cruzado","Remover Maldição","Revivificar"],
    "4": ["Aura de Pureza","Aura de Vida","Banimento","Destruição Atordoante","Localizar Criatura","Proteção Contra a Morte"],
    "5": ["Círculo de Poder","Convocar Celestial","Destruição Banidora","Dissipar o Bem e o Mal","Missão","Onda Destrutiva","Restauração Maior","Reviver os Mortos"]
  },

  descricoes: {
    "Conjuração": "Foco: Símbolo Sagrado. Sem truques na lista base. Pode substituir 1 magia preparada em Descanso Longo.",
    "Maestria em Arma": "Escolha 2 tipos de arma com as quais tem proficiência para usar as propriedades de maestria. Pode trocar as escolhas em Descanso Longo.",
    "Mãos Consagradas": "Ação Bônus: toca criatura (pode ser você) e retira PV da reserva de cura (5 × nível de Paladino). Pode gastar 5 pontos da reserva para remover Envenenado (não restaura PV nesse uso).",
    "Destruição do Paladino": "Sempre tem Destruição Divina preparada. 1× sem espaço (recupera em Descanso Longo); também pode conjurá-la com espaço.",
    "Estilo de Luta": "Adquire um talento de Estilo de Luta (Arquearia, Combate com Armas Grandes, Combate Desarmado, Defensivo, Duelismo, Interceptação, Luta às Cegas, Protetivo). OU escolha Combatente Abençoado: aprende 2 truques de Clérigo (Chama Sagrada e Orientação recomendados); contam como magias de Paladino; Carisma é o atributo de conjuração; pode substituir 1 truque ao subir de nível.",
    "Canalizar Divindade": "2 usos (→3 no nv. 11). Efeito inicial: Sentido Divino (Ação Bônus: por 10 min, sabe a localização de qualquer Celestial, Ínfero ou Morto-Vivo a até 18 m; também detecta locais/objetos consagrados ou profanados).",
    "Ataque Extra": "Ataca duas vezes ao usar ação Atacar.",
    "Montaria Fiel": "Sempre tem Convocar Montaria preparada. 1× sem espaço (recupera em Descanso Longo).",
    "Aura de Proteção": "Emanação de 3 m originada em você. Você e aliados têm bônus em salvaguardas = mod. Carisma (mín. +1). Se outro Paladino estiver presente, criatura escolhe qual aura usar.",
    "Repudiar Inimigos": "Ação Usar Magia: gasta Canalizar Divindade; cada criatura à escolha em até 18 m faz salv. Sabedoria ou Amedrontada 1 min (repete; encerra com dano).",
    "Aura de Coragem": "Você e aliados na Aura de Proteção têm Imunidade a Amedrontado enquanto nela.",
    "Golpes Radiantes": "Ao acertar com arma Corpo a Corpo ou Ataque Desarmado: +1d8 Radiante.",
    "Toque Restaurador": "Ação Usar Magia: gasta 5 PV da reserva de Mãos Consagradas por condição a remover (Amedrontado, Atordoado, Cego, Enfeitiçado, Paralisado, Surdo).",
    "Aura Expandida": "Aura de Proteção vira Emanação de 9 m.",
    "Dádiva Épica": "Escolha uma Dádiva Épica. Recomendada: Dádiva da Visão Verdadeira."
  },

  subclasses: ["juramento-devocao","juramento-gloria","juramento-vinganca","juramento-ancioes"]
});

console.log('[DND] Classe Paladino carregada.');