/* ============================================================
   CLASSE — FEITICEIRO
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.registrarClasse({
  id: "feiticeiro",
  nome: "Feiticeiro",
  fonte: "PHB 2024",
  dadoDeVida: 6,
  atributoPrincipal: ["Carisma"],
  testesDeResistencia: ["Constituição", "Carisma"],

  proficiencias: {
    armaduras: [],
    armas: ["Simples"],
    ferramentas: [],
    pericias: {
      quantidade: 2,
      lista: ["Arcanismo","Enganação","Intimidação","Intuição","Persuasão","Religião"]
    }
  },

  equipamentoInicial: {
    opcaoA: ["Lança","2 Adagas","Foco Arcano (cristal)","Kit de Explorador de Masmorras","28 PO"],
    opcaoB: ["50 PO"]
  },

  multiclasse: {
    requisitos: { carisma: 13 },
    profGanhas: []
  },

  conjuracao: {
    modelo: "conhecida",
    atributo: "Carisma",
    foco: "Foco Arcano",
    truquesConhecidos: [
      { nivel: 1, valor: 4 },
      { nivel: 4, valor: 5 },
      { nivel: 10, valor: 6 }
    ],
  magiasPreparadas: [
      { nivel: 1, valor: 2 },
      { nivel: 2, valor: 4 },
      { nivel: 3, valor: 6 },
      { nivel: 4, valor: 7 },
      { nivel: 5, valor: 9 },
      { nivel: 6, valor: 10 },
      { nivel: 7, valor: 11 },
      { nivel: 8, valor: 12 },
      { nivel: 9, valor: 14 },
      { nivel: 10, valor: 15 },
      { nivel: 11, valor: 16 },
      { nivel: 12, valor: 16 },
      { nivel: 13, valor: 17 },
      { nivel: 14, valor: 17 },
      { nivel: 15, valor: 18 },
      { nivel: 16, valor: 18 },
      { nivel: 17, valor: 19 },
      { nivel: 18, valor: 20 },
      { nivel: 19, valor: 21 },
      { nivel: 20, valor: 22 }
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
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Conjuração","Feitiçaria Inata"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Fonte de Magia","Metamagia","Opções de Metamagia"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Subclasse de Feiticeiro"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: ["Restauração Feiticeira"] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: ["Feitiçaria Encarnada"] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: [] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Metamagia"] },
    { nivel: 11, bonusProf: 4, caracteristicas: [] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: [] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 15, bonusProf: 5, caracteristicas: [] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: ["Metamagia"] },
    { nivel: 18, bonusProf: 6, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Apoteose Arcana"] }
  ],

  recursos: [
    {
      nome: "Pontos de Feitiçaria",
      tipo: "pontos",
      recuperacao: "todos em Descanso Longo",
      progressao: [
        { nivel: 1,  valor: 0 },
        { nivel: 2,  valor: 2 },  { nivel: 3,  valor: 3 },  { nivel: 4,  valor: 4 },
        { nivel: 5,  valor: 5 },  { nivel: 6,  valor: 6 },  { nivel: 7,  valor: 7 },
        { nivel: 8,  valor: 8 },  { nivel: 9,  valor: 9 },  { nivel: 10, valor: 10 },
        { nivel: 11, valor: 11 }, { nivel: 12, valor: 12 }, { nivel: 13, valor: 13 },
        { nivel: 14, valor: 14 }, { nivel: 15, valor: 15 }, { nivel: 16, valor: 16 },
        { nivel: 17, valor: 17 }, { nivel: 18, valor: 18 }, { nivel: 19, valor: 19 },
        { nivel: 20, valor: 20 }
      ]
    },
    {
      nome: "Metamagia",
      tipo: "quantidade",
      progressao: [
        { nivel: 2, valor: 2 }, { nivel: 10, valor: 4 }, { nivel: 17, valor: 6 }
      ],
      fonte: "metamagia-feiticeiro"
    },
    {
      nome: "Criando Espaços de Magia",
      tipo: "tabela",
      tabela: [
        { circulo: 1, custo: 2, nivelMin: 2 },
        { circulo: 2, custo: 3, nivelMin: 3 },
        { circulo: 3, custo: 5, nivelMin: 5 },
        { circulo: 4, custo: 6, nivelMin: 7 },
        { circulo: 5, custo: 7, nivelMin: 9 }
      ],
      nota: "Espaços criados desaparecem em Descanso Longo."
    }
  ],

  listaDeMagias: {
    "0": ["Amigos","Bolha Ácida","Elementalismo","Explosão Elemental","Golpe Certeiro","Ilusão Menor","Luz","Luzes Dançantes","Mãos Mágicas","Mensagem","Prestidigitação Arcana","Proteção Contra Lâminas","Raio de Fogo","Raio de Gelo","Rajada de Veneno","Reparar","Talho Mental","Toque Chocante","Toque Necrótico","Trovão"],
    "1": ["Armadura Arcana","Compreender Idiomas","Detectar Magia","Disfarçar-se","Enfeitiçar Pessoa","Escudo Arcano","Faca de Gelo","Graxa","Imagem Silenciosa","Leque Cromático","Mãos Flamejantes","Mísseis Mágicos","Névoa Obscurecente","Onda Trovejante","Orbe Cromático","Queda Suave","Raio de Bruxa","Raio Nauseante","Retirada Acelerada","Salto","Sono","Vitalidade Vazia"],
    "2": ["Alterar-se","Aprimorar Atributo","Arma Mágica","Arrombar","Aumentar/Reduzir","Cegueira/Surdez","Coroa da Loucura","Despedaçar","Detectar Pensamentos","Escalada de Aranha","Escuridão","Esfera Flamejante","Espinho Mental","Força Espectral","Invisibilidade","Lâmina Flamejante","Levitação","Lufada de Vento","Nuvem de Adagas","Paralisar Pessoa","Passo Nebuloso","Raio Ardente","Reflexos","Sopro de Dragão","Sugestão","Teia","Turvar","Ver o Invisível","Vigor Arcano","Visão no Escuro"],
    "3": ["Bola de Fogo","Caminhar Sobre as Águas","Celeridade","Clarividência","Contramagia","Dissipar Magia","Forma Gasosa","Imagem Maior","Lentidão","Línguas","Luz do Dia","Medo","Nevasca","Nuvem Fétida","Padrão Hipnótico","Piscar","Proteção contra Energia","Relâmpago","Respirar na Água","Toque Vampírico","Voo"],
    "4": ["Banimento","Confusão","Dominar Fera","Enfeitiçar Monstro","Escudo Ardente","Esfera Vitriólica","Invisibilidade Maior","Malogro","Muralha de Fogo","Pele-Rocha","Polimorfia","Porta Dimensional","Tempestade Glacial"],
    "5": ["Animar Objetos","Círculo de Teleporte","Cone de Frio","Criação","Dominar Pessoa","Estática Sináptica","Mão de Bigby","Muralha de Pedra","Névoa Mortal","Paralisar Monstro","Praga de Insetos","Similaridade","Telecinese"],
    "6": ["Círculo da Morte","Corrente de Relâmpagos","De Carne para Pedra","Desintegrar","Esfera Congelante de Otiluke","Globo de Invulnerabilidade","Mau Olhado","Mover Terra","Portais Arcanos","Raio Solar","Sugestão em Massa","Visão da Verdade"],
    "7": ["Bola de Fogo Adiável","Dedo da Morte","Forma Etérea","Inverter a Gravidade","Rajada Prismática","Teleporte","Tempestade de Fogo","Transição Planar"],
    "8": ["Dominar Monstro","Explosão Solar","Nuvem Incendiária","Palavra de Poder: Atordoar","Semiplano","Terremoto"],
    "9": ["Chuva de Meteoros","Desejo","Palavra de Poder: Matar","Parar o Tempo","Portal"]
  },

  descricoes: {
    "Conjuração": "Truques: 4 (→5 nv. 4, →6 nv. 10). Foco: Foco Arcano. Pode substituir 1 truque ao subir de nível; pode substituir 1 magia preparada ao subir de nível.",
    "Feitiçaria Inata": "Ação Bônus por 1 min: CD para evitar magias aumenta em 1; Vantagem em jogadas de ataque de magias de Feiticeiro. Usos = 2; recupera todos em Descanso Longo.",
    "Fonte de Magia": "Você tem Pontos de Feitiçaria iguais ao nível de Feiticeiro (a partir do nv. 2). Pode gastar espaço de magia para ganhar pontos iguais ao círculo do espaço (sem ação). Ação Bônus: converter pontos em espaço de magia (ver tabela).",
    "Metamagia": "Escolha 2 opções (→4 no nv. 10, →6 no nv. 17). Ver arquivo _metamagia-feiticeiro.js. Pode substituir uma opção ao subir de nível.",
    "Restauração Feiticeira": "Em Descanso Curto, recupera Pontos de Feitiçaria gastos até metade do nível de Feiticeiro (arred. baixo). 1×/Descanso Longo.",
    "Feitiçaria Encarnada": "Se sem usos de Feitiçaria Inata, gaste 2 Pontos de Feitiçaria para ativá-la. Em Feitiçaria Inata, pode usar até 2 opções de Metamagia por magia.",
    "Dádiva Épica": "Escolha uma Dádiva Épica. Recomendada: Dádiva da Viagem Dimensional.",
    "Apoteose Arcana": "Em Feitiçaria Inata, pode usar uma opção de Metamagia em cada turno sem gastar Pontos de Feitiçaria com ela."
  },

  subclasses: ["feiticeiro-aberrante","feiticeiro-draconico","feiticeiro-mecanico","feiticeiro-selvagem"]
});

console.log('[DND] Classe Feiticeiro carregada.');