/* ============================================================
   CLASSE — CLÉRIGO
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.registrarClasse({
  id: "clerigo",
  nome: "Clérigo",
  fonte: "PHB 2024",
  dadoDeVida: 8,
  atributoPrincipal: ["Sabedoria"],
  testesDeResistencia: ["Sabedoria", "Carisma"],

  proficiencias: {
    armaduras: ["Leve", "Média", "Escudos"],
    armas: ["Simples"],
    ferramentas: [],
    pericias: {
      quantidade: 2,
      lista: ["História","Intuição","Medicina","Persuasão","Religião"]
    }
  },

  equipamentoInicial: {
    opcaoA: ["Cota de Malha Parcial","Escudo","Maça","Símbolo Sagrado","Kit de Sacerdote","7 PO"],
    opcaoB: ["110 PO"]
  },

  multiclasse: {
    requisitos: { sabedoria: 13 },
    profGanhas: ["Armaduras Leve e Média","Escudos"]
  },

  conjuracao: {
    modelo: "preparada",
    atributo: "Sabedoria",
    foco: "Símbolo Sagrado",
    truquesConhecidos: [
      { nivel: 1, valor: 3 },
      { nivel: 4, valor: 4 },
      { nivel: 10, valor: 5 }
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
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Conjuração","Ordem Divina"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Canalizar Divindade"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Subclasse de Clérigo"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: ["Fulminar Mortos-Vivos"] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: ["Golpes Abençoados"] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: [] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Intervenção Divina"] },
    { nivel: 11, bonusProf: 4, caracteristicas: [] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: [] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Golpes Abençoados Aprimorados"] },
    { nivel: 15, bonusProf: 5, caracteristicas: [] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 18, bonusProf: 6, caracteristicas: [] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Intervenção Divina Maior"] }
  ],

  recursos: [
    {
      nome: "Canalizar Divindade",
      tipo: "usos",
      recuperacao: "1 em Descanso Curto; todos em Descanso Longo",
      progressao: [
        { nivel: 2, valor: 2 }, { nivel: 6, valor: 3 }, { nivel: 18, valor: 4 }
      ]
    }
  ],

  listaDeMagias: {
    "0": ["Acudir os Moribundos","Badalar Fúnebre","Chama Sagrada","Luz","Orientação","Palavra de Radiância","Reparar","Resistência","Taumaturgia"],
    "1": ["Bênção","Comando","Criar ou Destruir Água","Curar Ferimentos","Detectar Magia","Detectar o Bem e o Mal","Detectar Veneno e Doença","Escudo da Fé","Infligir Ferimentos","Palavra Curativa","Perdição","Proteção Contra o Bem e o Mal","Purificar Alimentos e Bebidas","Raio Guia","Santuário"],
    "2": ["Acalmar Emoções","Aprimorar Atributo","Arma Espiritual","Augúrio","Auxílio","Cegueira/Surdez","Chama Contínua","Encontrar Armadilhas","Localizar Objeto","Oração de Cura","Paralisar Pessoa","Proteção Contra Veneno","Repouso Tranquilo","Restauração Menor","Silêncio","Vínculo de Proteção","Zona da Verdade"],
    "3": ["Animar Mortos","Aura de Vitalidade","Caminhar Sobre as Águas","Círculo Mágico","Clarividência","Criar Comida e Água","Dissipar Magia","Falar com Mortos","Glifo de Proteção","Guardiões Espirituais","Línguas","Luz do Dia","Mesclar-se às Rochas","Palavra Curativa em Massa","Proteção contra Energia","Remeter","Remover Maldição","Revivificar","Rogar Maldição","Simular Morte","Sinal de Esperança"],
    "4": ["Aura de Pureza","Aura de Vida","Banimento","Controlar Água","Defensor da Fé","Localizar Criatura","Moldar Rochas","Movimentação Livre","Presságio","Proteção Contra a Morte"],
    "5": ["Âncora Planar","Círculo de Poder","Coluna de Chamas","Comunhão","Consagrar","Contágio","Convocar Celestial","Curar Ferimentos em Massa","Dissipar o Bem e o Mal","Lendas e Histórias","Missão","Praga de Insetos","Restauração Maior","Reviver os Mortos","Vidência"],
    "6": ["Aliado Extraplanar","Banquete de Heróis","Barreira de Lâminas","Criar Mortos-Vivos","Cura Completa","Encontrar o Caminho","Moléstia","Palavra de Regresso","Proibição","Raio Solar","Visão da Verdade"],
    "7": ["Forma Etérea","Invocar Celestial","Palavra de Poder: Fortificar","Palavra Sagrada","Regeneração","Ressurreição","Símbolo","Tempestade de Fogo","Transição Planar"],
    "8": ["Aura Sagrada","Campo Antimagia","Controlar o Clima","Explosão Solar","Terremoto"],
    "9": ["Cura Completa em Massa","Palavra de Poder: Salvar","Portal","Projeção Astral","Ressurreição Verdadeira"]
  },

  descricoes: {
    "Conjuração": "Truques: 3 (→4 nv. 4, →5 nv. 10). Foco: Símbolo Sagrado. Pode substituir 1 truque ao subir de nível; pode trocar qualquer magia preparada ao completar um Descanso Longo.",
    "Ordem Divina": "Escolha: Protetor (proficiência com armas Marciais e treinamento com armadura Pesada) ou Taumaturgo (1 truque adicional de Clérigo; adiciona mod. Sabedoria (mín. +1) em testes de Inteligência (Arcanismo ou Religião)).",
    "Canalizar Divindade": "2 usos (→3 nv. 6, →4 nv. 18). Efeitos: Centelha Divina (ação Usar Magia; cura ou causa 1d8 + mod. Sab; dados aumentam nos nv. 7/13/18) e Expulsar Mortos-Vivos (ação Usar Magia; mortos-vivos a até 9m fazem salv. Sabedoria ou Amedrontado + Incapacitado por 1 min).",
    "Fulminar Mortos-Vivos": "Ao usar Expulsar Mortos-Vivos, jogue um nº de d8s igual ao mod. Sabedoria (mín. 1d8) e some; cada morto-vivo que falhar sofre dano Radiante igual ao total (não encerra o Expulsar).",
    "Golpes Abençoados": "Escolha: Conjuração Poderosa (adiciona mod. Sabedoria ao dano de truques de Clérigo) ou Golpe Divino (1×/turno, ao acertar com arma, +1d8 Necrótico ou Radiante).",
    "Golpes Abençoados Aprimorados": "Conjuração Poderosa: ao causar dano com truque de Clérigo, concede PV Temporários = 2× mod. Sabedoria. Golpe Divino: +2d8.",
    "Intervenção Divina": "Ação Usar Magia: escolha uma magia de Clérigo de 5º círculo ou inferior que não exija Reação; conjura sem gastar espaço nem componentes Materiais. 1×/Descanso Longo.",
    "Dádiva Épica": "Escolha uma Dádiva Épica. Recomendada: Dádiva do Destino.",
    "Intervenção Divina Maior": "Ao usar Intervenção Divina, pode escolher Desejo como magia. Se fizer, não pode usar Intervenção Divina novamente até completar 2d4 Descansos Longos."
  },

  subclasses: ["dominio-guerra","dominio-luz","dominio-trapaca","dominio-vida"]
});

console.log('[DND] Classe Clérigo carregada.');