/* ============================================================
   CLASSE — DRUIDA
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.registrarClasse({
  id: "druida",
  nome: "Druida",
  fonte: "PHB 2024",
  dadoDeVida: 8,
  atributoPrincipal: ["Sabedoria"],
  testesDeResistencia: ["Inteligência", "Sabedoria"],

  proficiencias: {
    armaduras: ["Leve", "Escudos"],
    armas: ["Simples"],
    ferramentas: ["Kit de Herbalismo"],
    idiomas: ["Druídico"],
    pericias: {
      quantidade: 2,
      lista: ["Arcanismo","Lidar com Animais","Intuição","Medicina","Natureza","Percepção","Religião","Sobrevivência"]
    }
  },

  equipamentoInicial: {
    opcaoA: ["Armadura de Couro","Escudo","Foice","Foco Druídico (Cajado)","Kit de Explorador","Kit de Herbalismo","9 PO"],
    opcaoB: ["50 PO"]
  },

  multiclasse: {
    requisitos: { sabedoria: 13 },
    profGanhas: ["Armaduras Leve","Escudos"]
  },

  conjuracao: {
    modelo: "preparada",
    atributo: "Sabedoria",
    foco: "Foco Druídico",
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
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Conjuração","Idioma Druídico","Ordem Primal"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Companheiro Selvagem","Forma Selvagem"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Subclasse de Druida"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: ["Ressurgimento Selvagem"] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: ["Fúria Elemental"] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: [] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 11, bonusProf: 4, caracteristicas: [] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: [] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 15, bonusProf: 5, caracteristicas: ["Fúria Elemental Aprimorada"] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: [] },
    { nivel: 18, bonusProf: 6, caracteristicas: ["Magias Bestiais"] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Arquidruida"] }
  ],

  recursos: [
    {
      nome: "Forma Selvagem",
      tipo: "usos",
      recuperacao: "1 em Descanso Curto; todos em Descanso Longo",
      progressao: [
        { nivel: 2, valor: 2 }, { nivel: 6, valor: 3 }, { nivel: 17, valor: 4 }
      ],
      formasConhecidas: [
        { nivel: 2, valor: 4, ndMax: "1/4", voo: false },
        { nivel: 4, valor: 6, ndMax: "1/2", voo: false },
        { nivel: 8, valor: 8, ndMax: "1",   voo: true  }
      ]
    }
  ],

  listaDeMagias: {
    "0": ["Acudir os Moribundos","Arte Druídica","Bordão Místico","Chicote de Espinhos","Criar Chamas","Elementalismo","Fagulha Estelar","Mensagem","Orientação","Rajada de Veneno","Reparar","Resistência","Trovão"],
    "1": ["Amizade Animal","Bom Fruto","Criar ou Destruir Água","Curar Ferimentos","Detectar Magia","Detectar Veneno e Doença","Emaranhar","Enfeitiçar Pessoa","Faca de Gelo","Falar com Animais","Fogo das Fadas","Névoa Obscurecente","Onda Trovejante","Palavra Curativa","Passos Largos","Proteção Contra o Bem e o Mal","Purificar Alimentos e Bebidas","Salto"],
    "2": ["Aprimorar Atributo","Augúrio","Aumentar/Reduzir","Auxílio","Chama Contínua","Crescer Espinhos","Encontrar Armadilhas","Esfera Flamejante","Esquentar Metal","Invocar Fera","Lâmina Flamejante","Localizar Animais ou Plantas","Localizar Objeto","Lufada de Vento","Mensageiro Animal","Paralisar Pessoa","Passo Sem Rastro","Pele-casca","Proteção Contra Veneno","Raio Lunar","Restauração Menor","Sentido Feral","Visão no Escuro"],
    "3": ["Arma Elemental","Aura de Vitalidade","Caminhar Sobre as Águas","Convocar Feérico","Convocar Relâmpagos","Crescimento de Plantas","Dissipar Magia","Falar com Plantas","Invocar Animais","Luz do Dia","Mesclar-se às Rochas","Muralha de Vento","Nevasca","Proteção contra Energia","Respirar na Água","Revivificar","Simular Morte"],
    "4": ["Confusão","Controlar Água","Convocar Elemental","Dominar Fera","Enfeitiçar Monstro","Escudo Ardente","Fonte do Luar","Inseto Gigante","Invocar Elementais Menores","Invocar Seres da Floresta","Localizar Criatura","Malogro","Moldar Rochas","Movimentação Livre","Muralha de Fogo","Pele-Rocha","Polimorfia","Presságio","Tempestade Glacial","Terreno Alucinatório","Vinha Agarradora"],
    "5": ["Âncora Planar","Comunhão com a Natureza","Cone de Frio","Contágio","Cúpula Antivida","Curar Ferimentos em Massa","Despertar","Invocar Elemental","Missão","Muralha de Pedra","Passo Arbóreo","Praga de Insetos","Reencarnar","Restauração Maior","Vidência"],
    "6": ["Banquete de Heróis","Caminhar no Vento","Cura Completa","De Carne para Pedra","Encontrar o Caminho","Invocar Feérico","Mover Terra","Muralha de Espinhos","Raio Solar","Transporte via Plantas"],
    "7": ["Inverter a Gravidade","Miragem Arcana","Regeneração","Símbolo","Tempestade de Fogo","Transição Planar"],
    "8": ["Antipatia/Simpatia","Controlar o Clima","Explosão Solar","Formas Animais","Nuvem Incendiária","Suplício","Terremoto","Tsunami"],
    "9": ["Metamorfose","Ressurreição Verdadeira","Sexto Sentido","Tempestade da Vingança"]
  },

  descricoes: {
    "Conjuração": "Truques: 2 (→3 nv. 4, →4 nv. 10). Foco: Foco Druídico. Pode substituir 1 truque ao subir de nível; pode trocar qualquer magia preparada em Descanso Longo.",
    "Idioma Druídico": "Aprende Druídico; pode se comunicar com animais; sempre tem Falar com Animais preparada. Pode usar Druídico para deixar mensagens ocultas.",
    "Ordem Primal": "Escolha: Protetor (proficiência com armas Marciais e treinamento com armadura Média) ou Xamã (1 truque adicional de Druida; adiciona mod. Sabedoria (mín. +1) em testes de Inteligência (Arcanismo ou Natureza)).",
    "Companheiro Selvagem": "Ação Usar Magia: gasta espaço de magia ou uso de Forma Selvagem para conjurar Convocar Familiar sem componentes Materiais. O familiar é Feérico e desaparece em Descanso Longo.",
    "Forma Selvagem": "Ação Bônus: multimorfa em Fera aprendida (ver tabela). Dura até metade do nível de Druida em horas; usa novamente para sair. Ao assumir: PV Temporários = nível de Druida. Mantém personalidade, memórias, fala, Int/Sab/Car, proficiências, idiomas e talentos; não pode conjurar magias.",
    "Ressurgimento Selvagem": "1×/turno, se sem usos de Forma Selvagem, gasta espaço de magia para recuperar 1 uso (sem ação). Pode gastar uso de Forma Selvagem (sem ação) para recuperar espaço de 1º círculo — 1×/Descanso Longo.",
    "Fúria Elemental": "Escolha: Ataque Primal (1×/turno, +1d8 Elétrico/Gélido/Ígneo/Trovejante em um acerto) ou Conjuração Poderosa (adiciona mod. Sabedoria ao dano de truques de Druida).",
    "Fúria Elemental Aprimorada": "Ataque Primal: +2d8. Conjuração Poderosa: truques com alcance de 3m ou mais passam a ter 90m.",
    "Magias Bestiais": "Em Forma Selvagem, pode conjurar magias — exceto as que exijam componente Material com custo ou que consumam o componente.",
    "Dádiva Épica": "Escolha uma Dádiva Épica. Recomendada: Dádiva da Viagem Dimensional.",
    "Arquidruida": "Forma Selvagem Eterna (ao jogar Iniciativa e sem usos, recupera 1); Natureza Xamânica (converte usos de Forma Selvagem em espaços: cada uso = espaço de 2º círculo, combináveis — 1×/Descanso Longo); Longevidade (envelhece 1 ano a cada 10)."
  },

  subclasses: ["circulo-lua","circulo-terra","circulo-estrelas","circulo-mar"]
});

console.log('[DND] Classe Druida carregada.');