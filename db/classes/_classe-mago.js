/* ============================================================
   CLASSE — MAGO
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.registrarClasse({
  id: "mago", nome: "Mago", fonte: "PHB 2024",
  dadoDeVida: 6,
  atributoPrincipal: ["Inteligência"],
  testesDeResistencia: ["Inteligência", "Sabedoria"],

  proficiencias: {
    armaduras: [],
    armas: ["Simples"],
    ferramentas: [],
    pericias: {
      quantidade: 2,
      lista: ["Arcanismo","História","Intuição","Investigação","Medicina","Natureza","Religião"]
    }
  },

  equipamentoInicial: {
    opcaoA: ["2 Adagas","Foco Arcano (Cajado)","Kit de Erudito","Livro de Magias","Túnica","5 PO"],
    opcaoB: ["55 PO"]
  },

  multiclasse: {
    requisitos: { inteligencia: 13 },
    profGanhas: []
  },

  conjuracao: {
    modelo: "preparada",
    atributo: "Inteligência",
    foco: "Foco Arcano ou Livro de Magias",
    livroDeMagias: true,   // precisa de um livro; começa com 6 magias de 1º círculo + 2 por nível ganho
    truquesConhecidos: [
      { nivel: 1, valor: 3 }, { nivel: 4, valor: 4 }, { nivel: 10, valor: 5 }
    ],
    magiasPreparadas: [
      { nivel: 1, valor: 4 },  { nivel: 2, valor: 5 },  { nivel: 3, valor: 6 },
      { nivel: 4, valor: 7 },  { nivel: 5, valor: 9 },  { nivel: 6, valor: 10 },
      { nivel: 7, valor: 11 }, { nivel: 8, valor: 12 }, { nivel: 9, valor: 14 },
      { nivel: 10, valor: 15 }, { nivel: 11, valor: 16 }, { nivel: 12, valor: 16 },
      { nivel: 13, valor: 17 }, { nivel: 14, valor: 18 }, { nivel: 15, valor: 19 },
      { nivel: 16, valor: 21 }, { nivel: 17, valor: 22 }, { nivel: 18, valor: 23 },
      { nivel: 19, valor: 24 }, { nivel: 20, valor: 25 }
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
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Adepto de Ritual","Conjuração","Recuperação Arcana"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Acadêmico"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Subclasse de Mago"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: ["Memorizar Magia"] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: [] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: [] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 11, bonusProf: 4, caracteristicas: [] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: [] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 15, bonusProf: 5, caracteristicas: [] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: [] },
    { nivel: 18, bonusProf: 6, caracteristicas: ["Maestria de Magias"] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Assinatura Mágica"] }
  ],

  recursos: [],

  listaDeMagias: {
    "0": ["Amigos","Badalar Fúnebre","Bolha Ácida","Elementalismo","Golpe Certeiro","Ilusão Menor","Luz","Luzes Dançantes","Mãos Mágicas","Mensagem","Prestidigitação Arcana","Proteção Contra Lâminas","Raio de Fogo","Raio de Gelo","Rajada de Veneno","Reparar","Talho Mental","Toque Chocante","Toque Necrótico","Trovão"],
    "1": ["Alarme","Armadura Arcana","Compreender Idiomas","Convocar Familiar","Detectar Magia","Disco Flutuante de Tenser","Disfarçar-se","Enfeitiçar Pessoa","Escrita Ilusória","Escudo Arcano","Faca de Gelo","Gargalhada Nefasta de Tasha","Graxa","Identificar","Imagem Silenciosa","Leque Cromático","Mãos Flamejantes","Mísseis Mágicos","Névoa Obscurecente","Onda Trovejante","Orbe Cromático","Passos Largos","Proteção Contra o Bem e o Mal","Queda Suave","Raio de Bruxa","Raio Nauseante","Retirada Acelerada","Salto","Servo Invisível","Sono","Vitalidade Vazia"],
    "2": ["Alterar-se","Aprimorar Atributo","Arma Mágica","Arrombar","Augúrio","Aumentar/Reduzir","Aura Mágica de Nystul","Boca Encantada","Cegueira/Surdez","Chama Contínua","Corda Extradimensional","Coroa da Loucura","Despedaçar","Detectar Pensamentos","Escalada de Aranha","Escuridão","Esfera Flamejante","Espinho Mental","Flecha Ácida de Melf","Força Espectral","Invisibilidade","Levitação","Localizar Objeto","Lufada de Vento","Nuvem de Adagas","Paralisar Pessoa","Passo Nebuloso","Raio Ardente","Raio do Enfraquecimento","Reflexos","Repouso Tranquilo","Sopro de Dragão","Sugestão","Teia","Tranca Arcana","Turvar","Ver o Invisível","Vigor Arcano","Visão no Escuro"],
    "3": ["Animar Mortos","Bola de Fogo","Celeridade","Círculo Mágico","Clarividência","Contramagia","Convocar Feérico","Dissipar Magia","Falar com Mortos","Forma Gasosa","Glifo de Proteção","Imagem Maior","Indetectável","Invocar Morto-vivo","Lentidão","Línguas","Medo","Montaria Fantasmagórica","Nevasca","Nuvem Fétida","Padrão Hipnótico","Pequeno Refúgio de Leomund","Piscar","Proteção contra Energia","Relâmpago","Remeter","Remover Maldição","Respirar na Água","Rogar Maldição","Simular Morte","Voo"],
    "4": ["Arca Secreta de Leomund","Assassino Fantasmagórico","Banimento","Cão Fiel de Mordenkainen","Confusão","Controlar Água","Convocar Elemental","Enfeitiçar Monstro","Escudo Ardente","Esfera Resiliente de Otiluke","Esfera Vitriólica","Fabricar","Invisibilidade Maior","Invocar Aberração","Invocar Constructo","Invocar Elementais Menores","Localizar Criatura","Malogro","Moldar Rochas","Muralha de Fogo","Olho Arcano","Pele-Rocha","Polimorfia","Porta Dimensional","Presságio","Santuário Particular de Mordenkainen","Tempestade Glacial","Tentáculos Negros de Evard","Terreno Alucinatório"],
    "5": ["Animar Objetos","Círculo de Poder","Círculo de Teleporte","Cone de Frio","Contato Extraplanar","Criação","Estática Sináptica","Invocar Dragão","Invocar Elemental","Lendas e Histórias","Ligação Telepática de Rary","Mão de Bigby","Missão","Modificar Memória","Muralha de Energia","Muralha de Pedra","Névoa Mortal","Paralisar Monstro","Parede de Luz","Praga de Insetos","Presença Régia de Yolande","Similaridade","Sonho","Telecinese","Vidência"],
    "6": ["Caldeirão Borbulhante de Tasha","Círculo da Morte","Contingência","Corrente de Relâmpagos","Criar Mortos-Vivos","De Carne para Pedra","Desintegrar","Esfera Congelante de Otiluke","Globo de Invulnerabilidade","Invocação Instantânea de Drawmij","Invocar Ínfero","Mau Olhado","Mover Terra","Portais Arcanos","Proteger Fortaleza","Raio Solar","Receptáculo Arcano","Sugestão em Massa","Visão da Verdade"],
    "7": ["Bola de Fogo Adiável","Cárcere de Energia","Dedo da Morte","Espada de Mordenkainen","Forma Etérea","Inverter a Gravidade","Mansão Magnífica de Mordenkainen","Miragem Arcana","Projetar Imagem","Rajada Prismática","Refugiar","Símbolo","Simulacro","Teleporte","Transição Planar"],
    "8": ["Antipatia/Simpatia","Campo Antimagia","Clone","Controlar o Clima","Dominar Monstro","Explosão Solar","Labirinto","Limpar a Mente","Nuvem Incendiária","Palavra de Poder: Atordoar","Semiplano","Suplício","Telepatia"],
    "9": ["Aprisionamento","Chuva de Meteoros","Desejo","Encarnação Fantasmagórica","Metamorfose","Muralha Prismática","Palavra de Poder: Matar","Parar o Tempo","Polimorfia Total","Portal","Projeção Astral","Sexto Sentido"]
  },

  descricoes: {
    "Adepto de Ritual": "Pode conjurar magias com marcador Ritual do seu livro sem prepará-las, apenas lendo o livro.",
    "Conjuração": "Truques: 3 (→4 no nv. 4, →5 no nv. 10). Livro de Magias com 6 magias de 1º círculo iniciais; +2 por nível ganho (pesquisa arcana). Pode substituir 1 truque ao subir de nível. Foco: Foco Arcano ou Livro de Magias.",
    "Recuperação Arcana": "Em Descanso Curto, recupera espaços gastos cuja soma de círculos ≤ metade do nível de Mago (arred. cima); nenhum pode ser 6º+. 1×/Descanso Longo.",
    "Acadêmico": "Especialização em uma perícia já proficiente (Arcanismo, História, Investigação, Medicina, Natureza ou Religião).",
    "Memorizar Magia": "Em Descanso Curto, estuda o livro e substitui 1 magia preparada por outra do livro.",
    "Maestria de Magias": "Escolha 1 magia de 1º e 1 de 2º círculo do livro com tempo de conjuração de 1 ação. Sempre preparadas; conjura no círculo mais baixo sem gastar espaço. Pode trocar em Descanso Longo.",
    "Dádiva Épica": "Escolha uma Dádiva Épica. Recomendada: Dádiva da Recordação de Magia.",
    "Assinatura Mágica": "Escolha 2 magias de 3º círculo do livro. Sempre preparadas; conjura cada uma 1× no 3º círculo sem espaço (recupera em Descanso Curto/Longo)."
  },

  subclasses: ["abjurador","adivinhador","evocador","ilusionista"]
});

console.log('[DND] Classe Mago carregada.');