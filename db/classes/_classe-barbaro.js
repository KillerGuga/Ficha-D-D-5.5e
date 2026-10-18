/* ============================================================
   CLASSE — BÁRBARO
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.registrarClasse({
  id: "barbaro",
  nome: "Bárbaro",
  fonte: "PHB 2024",
  dadoDeVida: 12,
  atributoPrincipal: ["Força"],
  testesDeResistencia: ["Força", "Constituição"],

  proficiencias: {
    armaduras: ["Leve", "Média", "Escudos"],
    armas: ["Simples", "Marciais"],
    ferramentas: [],
    pericias: {
      quantidade: 2,
      lista: ["Atletismo","Intimidação","Lidar com Animais","Natureza","Percepção","Sobrevivência"]
    }
  },

  equipamentoInicial: {
    opcaoA: ["4 Machadinhas","Machado Grande","Kit de Aventureiro","15 PO"],
    opcaoB: ["75 PO"]
  },

  multiclasse: {
    requisitos: { forca: 13 },
    profGanhas: ["Armas Marciais","Escudos"]
  },

  conjuracao: null,

  progressao: [
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Defesa sem Armadura","Fúria","Maestria em Arma"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Ataque Imprudente","Sentido de Perigo"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Conhecimento Primordial","Subclasse de Bárbaro"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: ["Ataque Extra","Movimento Rápido"] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: ["Bote Instintivo","Institutos Primitivos"] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: ["Golpe Brutal"] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 11, bonusProf: 4, caracteristicas: ["Fúria Implacável"] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: ["Golpe Brutal Fortalecido"] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 15, bonusProf: 5, caracteristicas: ["Fúria Persistente"] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: ["Golpe Brutal Fortalecido"] },
    { nivel: 18, bonusProf: 6, caracteristicas: ["Força Indomável"] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Campeão Primitivo"] }
  ],

  // Fúrias: 2/3/3/3/3... → 3 (nv.3) → 4 (nv.6) → 5 (nv.12) → 6 (nv.17)
  recursos: [
    {
      nome: "Fúria",
      tipo: "usos",
      recuperacao: "1 por Descanso Curto, todos em Descanso Longo",
      progressao: [
        { nivel: 1, valor: 2 }, { nivel: 3, valor: 3 },
        { nivel: 6, valor: 4 }, { nivel: 12, valor: 5 },
        { nivel: 17, valor: 6 }
      ]
    },
    {
      nome: "Dano da Fúria",
      tipo: "dano-bonus",
      progressao: [
        { nivel: 1, valor: "+2" }, { nivel: 9, valor: "+3" }, { nivel: 16, valor: "+4" }
      ]
    },
    {
      nome: "Maestria em Arma (armas)",
      tipo: "quantidade",
      progressao: [
        { nivel: 1, valor: 2 }, { nivel: 4, valor: 3 }, { nivel: 10, valor: 4 }
      ]
    }
  ],

  descricoes: {
    "Fúria": "Duração: até 10 min, extensível rodada a rodada. Como Ação Bônus (se não estiver de armadura Pesada), ganha: Resistência a dano Contundente/Cortante/Perfurante; bônus de dano em ataques de Força (ver Dano da Fúria); Vantagem em testes e salvaguardas de Força. Não pode manter Concentração nem conjurar magias. Termina se vestir armadura Pesada, se ficar Incapacitado ou após 1 min sem estender.",
    "Defesa sem Armadura": "Sem armadura, CA base = 10 + mod. Destreza + mod. Constituição. Pode usar Escudo.",
    "Maestria em Arma": "Escolha 2 tipos de armas Corpo a Corpo Simples ou Marciais para usar as propriedades de maestria. Ao terminar um Descanso Longo, pode trocar uma das escolhas.",
    "Ataque Imprudente": "No primeiro ataque do seu turno, pode decidir atacar imprudentemente: ganha Vantagem em jogadas de ataque com Força até o início do próximo turno; ataques contra você também ganham Vantagem.",
    "Sentido de Perigo": "Vantagem em salvaguardas de Destreza, a menos que esteja Incapacitado.",
    "Conhecimento Primordial": "Adquire proficiência em outra perícia da lista de Bárbaro. Enquanto em Fúria, pode usar Força em vez do atributo padrão em testes de Acrobacia, Furtividade, Intimidação, Percepção ou Sobrevivência.",
    "Ataque Extra": "Ataca duas vezes em vez de uma ao usar a ação Atacar.",
    "Movimento Rápido": "Deslocamento +3 m (se não estiver de armadura Pesada).",
    "Bote Instintivo": "Como parte da Ação Bônus que ativa a Fúria, move até metade do Deslocamento.",
    "Institutos Primitivos": "Vantagem em Iniciativa.",
    "Golpe Brutal": "Ao usar Ataque Imprudente, pode renunciar à Vantagem de uma jogada de ataque (sem Desvantagem) para causar +1d10 do tipo da arma e escolher um efeito: Golpe Debilitador (Deslocamento −4,5 m) ou Golpe Poderoso (empurra 4,5 m + move metade em direção sem provocar Ataques de Oportunidade).",
    "Fúria Implacável": "Se cair a 0 PV em Fúria sem morrer, salvaguarda de Constituição CD 10 → PV viram 2× nível de Bárbaro. CD +5 por uso subsequente; reseta em Descanso Curto/Longo.",
    "Golpe Brutal Fortalecido": "Adiciona Golpe Atordoante (Desvantagem na próxima salvaguarda; sem Ataques de Oportunidade) e Golpe Destruidor (bônus de +5 para a próxima jogada de ataque de outra criatura). No nv. 17, o dano adicional vira 2d10 e pode usar dois efeitos ao mesmo tempo.",
    "Fúria Persistente": "Ao jogar Iniciativa, recupera todos os usos de Fúria (1× por Descanso Longo). Fúria passa a durar 10 min sem precisar estender; só encerra com Inconsciente (não Incapacitado) ou armadura Pesada.",
    "Força Indomável": "Se o total do teste/salvaguarda de Força for menor que o valor de Força, use o valor.",
    "Dádiva Épica": "Escolha uma Dádiva Épica. Recomendada: Dádiva do Ataque Irresistível.",
    "Campeão Primitivo": "Força e Constituição +4 (máx. 25)."
  },

  subclasses: ["trilha-arvore-do-mundo","trilha-do-berserker","trilha-coracao-selvagem","trilha-do-fanatico"]
});

console.log('[DND] Classe Bárbaro carregada.');