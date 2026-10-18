/* ============================================================
   CLASSE — BARDO
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.registrarClasse({
  id: "bardo",
  nome: "Bardo",
  fonte: "PHB 2024",
  dadoDeVida: 8,
  atributoPrincipal: ["Carisma"],
  testesDeResistencia: ["Destreza", "Carisma"],

  proficiencias: {
    armaduras: ["Leve"],
    armas: ["Simples"],
    ferramentas: ["3 Instrumentos Musicais"],
    pericias: {
      quantidade: 3,
      lista: ["qualquer"]  // qualquer perícia do capítulo 1
    }
  },

  equipamentoInicial: {
    opcaoA: ["Armadura de Couro","2 Adagas","Instrumento Musical (à escolha)","Kit de Artista","19 PO"],
    opcaoB: ["90 PO"]
  },

  multiclasse: {
    requisitos: { carisma: 13 },
    profGanhas: ["1 perícia à escolha","1 Instrumento Musical","Armadura Leve"]
  },

  conjuracao: {
    modelo: "conhecida",
    atributo: "Carisma",
    foco: "Instrumento Musical",
    truquesConhecidos: [
      { nivel: 1, valor: 2 },
      { nivel: 4, valor: 3 },
      { nivel: 10, valor: 4 }
    ],
    magiasPreparadas: [
      { nivel: 1, valor: 4 },  { nivel: 2, valor: 5 },  { nivel: 3, valor: 6 },
      { nivel: 4, valor: 7 },  { nivel: 5, valor: 9 },  { nivel: 6, valor: 10 },
      { nivel: 7, valor: 11 }, { nivel: 8, valor: 12 }, { nivel: 9, valor: 14 },
      { nivel: 10, valor: 15 }, { nivel: 11, valor: 16 }, { nivel: 12, valor: 16 },
      { nivel: 13, valor: 17 }, { nivel: 14, valor: 17 }, { nivel: 15, valor: 18 },
      { nivel: 16, valor: 18 }, { nivel: 17, valor: 19 }, { nivel: 18, valor: 20 },
      { nivel: 19, valor: 21 }, { nivel: 20, valor: 22 }
    ],
    espacosDeMagia: [
      { nivel: 1,  slots: { 1: 2 } },
      { nivel: 2,  slots: { 1: 3 } },
      { nivel: 3,  slots: { 1: 4, 2: 2 } },
      { nivel: 4,  slots: { 1: 4, 2: 3 } },
      { nivel: 5,  slots: { 1: 4, 2: 3, 3: 2 } },
      { nivel: 6,  slots: { 1: 4, 2: 3, 3: 3 } },
      { nivel: 7,  slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
      { nivel: 8,  slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
      { nivel: 9,  slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
      { nivel: 10, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
      { nivel: 11, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 } },
      { nivel: 12, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 } },
      { nivel: 13, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 } },
      { nivel: 14, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 } },
      { nivel: 15, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 } },
      { nivel: 16, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 } },
      { nivel: 17, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 } },
      { nivel: 18, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 } },
      { nivel: 19, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 } },
      { nivel: 20, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 } }
    ]
  },

  progressao: [
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Inspiração de Bardo","Conjuração"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Especialista","Pau pra Toda Obra"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Subclasse de Bardo"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: ["Fonte de Inspiração"] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: ["Contra-Encantamento"] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: ["Especialização"] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Segredos Mágicos"] },
    { nivel: 11, bonusProf: 4, caracteristicas: [] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: [] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 15, bonusProf: 5, caracteristicas: [] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: [] },
    { nivel: 18, bonusProf: 6, caracteristicas: ["Inspiração Superior"] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Palavras de Criação"] }
  ],

  recursos: [
    {
      nome: "Inspiração de Bardo",
      tipo: "dados",
      recuperacao: "todos em Descanso Longo (Fonte de Inspiração no nv. 5 → também em Descanso Curto)",
      usos: "mod. Carisma (mín. 1)",
      progressaoDado: [
        { nivel: 1,  valor: "d6" },
        { nivel: 5,  valor: "d8" },
        { nivel: 10, valor: "d10" },
        { nivel: 15, valor: "d12" }
      ]
    }
  ],

  // Lista de magias por círculo (índice: "0" = truques)
  listaDeMagias: {
    "0": ["Amigos","Fagulha Estelar","Golpe Certeiro","Ilusão Menor","Luz","Luzes Dançantes","Mãos Mágicas","Mensagem","Prestidigitação Arcana","Proteção Contra Lâminas","Reparar","Trovão","Zombaria Perversa"],
    "1": ["Amizade Animal","Comando","Compreender Idiomas","Curar Ferimentos","Detectar Magia","Disfarçar-se","Enfeitiçar Pessoa","Escrita Ilusória","Falar com Animais","Fogo das Fadas","Gargalhada Nefasta de Tasha","Heroísmo","Identificar","Imagem Silenciosa","Leque Cromático","Onda Trovejante","Palavra Curativa","Passos Largos","Perdição","Queda Suave","Servo Invisível","Sono","Sussurros Dissonantes"],
    "2": ["Acalmar Emoções","Aprimorar Atributo","Arrombar","Aumentar/Reduzir","Auxílio","Boca Encantada","Cativar","Cegueira/Surdez","Coroa da Loucura","Despedaçar","Detectar Pensamentos","Esquentar Metal","Força Espectral","Invisibilidade","Localizar Animais ou Plantas","Localizar Objeto","Mensageiro Animal","Nuvem de Adagas","Paralisar Pessoa","Reflexos","Restauração Menor","Silêncio","Sugestão","Ver o Invisível","Zona da Verdade"],
    "3": ["Clarividência","Crescimento de Plantas","Dissipar Magia","Falar com Mortos","Falar com Plantas","Glifo de Proteção","Imagem Maior","Indetectável","Lentidão","Línguas","Medo","Nuvem Fétida","Padrão Hipnótico","Palavra Curativa em Massa","Pequeno Refúgio de Leomund","Remeter","Rogar Maldição","Simular Morte"],
    "4": ["Assassino Fantasmagórico","Compulsão","Confusão","Enfeitiçar Monstro","Fonte do Luar","Invisibilidade Maior","Localizar Criatura","Movimentação Livre","Polimorfia","Porta Dimensional","Terreno Alucinatório"],
    "5": ["Âncora Planar","Animar Objetos","Círculo de Teleporte","Curar Ferimentos em Massa","Despertar","Despistar","Dominar Pessoa","Estática Sináptica","Lendas e Histórias","Ligação Telepática de Rary","Missão","Modificar Memória","Paralisar Monstro","Presença Régia de Yolande","Restauração Maior","Reviver os Mortos","Similaridade","Sonho","Vidência"],
    "6": ["Banquete de Heróis","Dança Irresistível de Otto","Encontrar o Caminho","Ilusão Programada","Mau Olhado","Proteger Fortaleza","Sugestão em Massa","Visão da Verdade"],
    "7": ["Cárcere de Energia","Espada de Mordenkainen","Forma Etérea","Mansão Magnífica de Mordenkainen","Miragem Arcana","Palavra de Poder: Fortificar","Projetar Imagem","Rajada Prismática","Regeneração","Ressurreição","Símbolo","Teleporte"],
    "8": ["Antipatia/Simpatia","Dominar Monstro","Limpar a Mente","Loquacidade","Palavra de Poder: Atordoar","Suplício"],
    "9": ["Muralha Prismática","Palavra de Poder: Matar","Palavra de Poder: Salvar","Polimorfia Total","Sexto Sentido"]
  },

  descricoes: {
    "Inspiração de Bardo": "Ação Bônus: criatura à vista a até 18m que possa ver/ouvir recebe um dado de Inspiração de Bardo (só um por vez). Em até 1 hora, ela pode gastá-lo após falhar em um Teste de D20, adicionando o resultado ao d20.",
    "Conjuração": "Truques: 2 (→3 nv. 4, →4 nv. 10). Foco: Instrumento Musical. Pode substituir 1 truque ao subir de nível; pode substituir 1 magia preparada ao subir de nível.",
    "Especialista": "Especialização em duas perícias já proficientes. No nv. 9, em mais duas.",
    "Pau pra Toda Obra": "Adiciona metade do BP (arred. baixo) em qualquer teste de perícia que não tenha proficiência nem use o BP.",
    "Fonte de Inspiração": "Recupera usos gastos de Inspiração em Descanso Curto/Longo. Pode gastar espaço de magia para recuperar 1 uso (sem ação).",
    "Contra-Encantamento": "Reação: se você ou criatura a até 9m falhar em salvaguarda contra efeito que imponha Amedrontado/Enfeitiçado, joga novamente com Vantagem.",
    "Segredos Mágicos": "Sempre que ganha nível de Bardo (incl. este) e a quantidade de magias preparadas aumenta, pode escolher da lista de Bardo, Clérigo, Druida ou Mago.",
    "Inspiração Superior": "Ao jogar Iniciativa, se tiver menos de 2 usos de Inspiração, recupera até ter 2.",
    "Palavras de Criação": "Sempre tem Palavra de Poder: Matar e Palavra de Poder: Salvar preparadas. Ao conjurar uma delas, pode escolher uma segunda criatura a até 3m do primeiro alvo."
  },

  subclasses: ["colegio-bravura","colegio-danca","colegio-conhecimento","colegio-glamour"]
});

console.log('[DND] Classe Bardo carregada.');