/* ============================================================
   CLASSE — BRUXO
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.registrarClasse({
  id: "bruxo",
  nome: "Bruxo",
  fonte: "PHB 2024",
  dadoDeVida: 8,
  atributoPrincipal: ["Carisma"],
  testesDeResistencia: ["Sabedoria", "Carisma"],

  proficiencias: {
    armaduras: ["Leve"],
    armas: ["Simples"],
    ferramentas: [],
    pericias: {
      quantidade: 2,
      lista: ["Arcanismo","Enganação","História","Intimidação","Investigação","Natureza","Religião"]
    }
  },

  equipamentoInicial: {
    opcaoA: ["Armadura de Couro","Foice","2 Adagas","Foco Arcano (orbe)","Livro (conhecimento oculto)","Kit de Erudito","15 PO"],
    opcaoB: ["100 PO"]
  },

  multiclasse: {
    requisitos: { carisma: 13 },
    profGanhas: ["Armadura Leve"]
  },

  conjuracao: {
    modelo: "pacto",                 // espaços voltam em Descanso Curto; todos no mesmo círculo
    atributo: "Carisma",
    foco: "Foco Arcano",
    truquesConhecidos: [
      { nivel: 1, valor: 2 }, { nivel: 4, valor: 3 }, { nivel: 10, valor: 4 }
    ],
    magiasPreparadas: [
      { nivel: 1, valor: 2 },  { nivel: 2, valor: 3 },  { nivel: 3, valor: 4 },
      { nivel: 4, valor: 5 },  { nivel: 5, valor: 6 },  { nivel: 6, valor: 7 },
      { nivel: 7, valor: 8 },  { nivel: 8, valor: 9 },  { nivel: 9, valor: 10 },
      { nivel: 10, valor: 10 }, { nivel: 11, valor: 11 }, { nivel: 12, valor: 11 },
      { nivel: 13, valor: 12 }, { nivel: 14, valor: 12 }, { nivel: 15, valor: 13 },
      { nivel: 16, valor: 13 }, { nivel: 17, valor: 14 }, { nivel: 18, valor: 14 },
      { nivel: 19, valor: 15 }, { nivel: 20, valor: 15 }
    ],
    // Cada linha: quantos espaços de qual círculo (todos do mesmo círculo)
    espacosDeMagia: [
      { nivel: 1,  slots: { 1: 1 } },
      { nivel: 2,  slots: { 1: 2 } },
      { nivel: 3,  slots: { 2: 2 } },
      { nivel: 4,  slots: { 2: 2 } },
      { nivel: 5,  slots: { 3: 2 } },
      { nivel: 6,  slots: { 3: 2 } },
      { nivel: 7,  slots: { 4: 2 } },
      { nivel: 8,  slots: { 4: 2 } },
      { nivel: 9,  slots: { 5: 2 } },
      { nivel: 10, slots: { 5: 2 } },
      { nivel: 11, slots: { 5: 3 } },
      { nivel: 12, slots: { 5: 3 } },
      { nivel: 13, slots: { 5: 3 } },
      { nivel: 14, slots: { 5: 3 } },
      { nivel: 15, slots: { 5: 3 } },
      { nivel: 16, slots: { 5: 3 } },
      { nivel: 17, slots: { 5: 4 } },
      { nivel: 18, slots: { 5: 4 } },
      { nivel: 19, slots: { 5: 4 } },
      { nivel: 20, slots: { 5: 4 } }
    ]
  },

  progressao: [
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Invocações Místicas","Magia de Pacto"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Astúcia Mágica"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Subclasse de Bruxo"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: [] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: [] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: ["Contatar Patrono"] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 11, bonusProf: 4, caracteristicas: ["Arcana Mística (6º círculo)"] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: ["Arcana Mística (7º círculo)"] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 15, bonusProf: 5, caracteristicas: ["Arcana Mística (8º círculo)"] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: ["Arcana Mística (9º círculo)"] },
    { nivel: 18, bonusProf: 6, caracteristicas: [] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Mestre Místico"] }
  ],

  recursos: [
    {
      nome: "Invocações Místicas",
      tipo: "quantidade",
      progressao: [
        { nivel: 1, valor: 1 }, { nivel: 2, valor: 2 }, { nivel: 4, valor: 3 },
        { nivel: 7, valor: 4 }, { nivel: 10, valor: 5 }, { nivel: 14, valor: 6 },
        { nivel: 17, valor: 7 }, { nivel: 20, valor: 8 }
      ],
      fonte: "invocacoes-bruxo"
    },
    {
      nome: "Arcana Mística",
      tipo: "especial",
      progressao: [
        { nivel: 11, valor: "6º círculo" }, { nivel: 13, valor: "7º círculo" },
        { nivel: 15, valor: "8º círculo" }, { nivel: 17, valor: "9º círculo" }
      ]
    }
  ],

  // Lista de magias por círculo (índice: "0" para truques, "1".."9")
  listaDeMagias: {
    "0": ["Amigos","Badalar Fúnebre","Golpe Certeiro","Ilusão Menor","Mãos Mágicas","Prestidigitação Arcana","Proteção Contra Lâminas","Raio Místico","Rajada de Veneno","Talho Mental","Toque Necrótico","Trovão"],
    "1": ["Armadura de Agathys","Braços de Hadar","Compreender Idiomas","Danação","Detectar Magia","Enfeitiçar Pessoa","Escrita Ilusória","Falar com Animais","Gargalhada Nefasta de Tasha","Perdição","Proteção Contra o Bem e o Mal","Raio de Bruxa","Repreensão Diabólica","Retirada Acelerada","Servo Invisível"],
    "2": ["Cativar","Coroa da Loucura","Escalada de Aranha","Escuridão","Espinho Mental","Invisibilidade","Nuvem de Adagas","Paralisar Pessoa","Passo Nebuloso","Raio do Enfraquecimento","Reflexos","Sugestão"],
    "3": ["Círculo Mágico","Contramagia","Convocar Feérico","Dissipar Magia","Fome de Hadar","Forma Gasosa","Imagem Maior","Invocar Morto-vivo","Línguas","Medo","Padrão Hipnótico","Remover Maldição","Toque Vampírico","Voo"],
    "4": ["Banimento","Enfeitiçar Monstro","Invocar Aberração","Malogro","Porta Dimensional","Terreno Alucinatório"],
    "5": ["Âncora Planar","Círculo de Teleporte","Contato Extraplanar","Despistar","Estática Sináptica","Paralisar Monstro","Sonho","Tempestade Radiante de Jallarzi","Vidência"],
    "6": ["Caldeirão Borbulhante de Tasha","Círculo da Morte","Criar Mortos-Vivos","Invocar Ínfero","Mau Olhado","Portais Arcanos","Visão da Verdade"],
    "7": ["Cárcere de Energia","Dedo da Morte","Forma Etérea","Transição Planar"],
    "8": ["Dominar Monstro","Loquacidade","Palavra de Poder: Atordoar","Semiplano","Suplício"],
    "9": ["Aprisionamento","Encarnação Fantasmagórica","Palavra de Poder: Matar","Polimorfia Total","Portal","Projeção Astral","Sexto Sentido"]
  },

  descricoes: {
    "Invocações Místicas": "Você aprende fragmentos de conhecimento proibido. Ver arquivo _invocacoes-bruxo.js. Pode substituir uma invocação ao ganhar um nível de Bruxo; não pode substituir se ela for pré-requisito de outra que você tenha.",
    "Magia de Pacto": "Truques: 2 (→3 nv. 4, →4 nv. 10). Espaços: todos do mesmo círculo (ver tabela), recuperados em Descanso Curto ou Longo. Foco: Foco Arcano. Pode substituir 1 magia preparada ao subir de nível.",
    "Astúcia Mágica": "Ao final de um rito de 1 minuto, recupera espaços de Magia de Pacto gastos em número igual à metade do máximo (arred. cima). 1×/Descanso Longo.",
    "Contatar Patrono": "Sempre tem Contato Extraplanar preparada. Pode conjurá-la sem espaço para contatar seu patrono, com sucesso automático na salvaguarda. 1×/Descanso Longo.",
    "Arcana Mística": "Escolha uma magia de Bruxo do círculo indicado (6º/7º/8º/9º). Conjure-a 1× sem espaço; recupera em Descanso Longo. Ao subir de nível, pode substituir uma arcanum por outra do mesmo círculo.",
    "Dádiva Épica": "Escolha uma Dádiva Épica. Recomendada: Dádiva do Destino.",
    "Mestre Místico": "Ao usar Astúcia Mágica, restaura TODOS os espaços de Magia de Pacto gastos."
  },

  subclasses: ["patrono-arquifada","patrono-celestial","patrono-grande-antigo","patrono-infero"]
});

console.log('[DND] Classe Bruxo carregada.');