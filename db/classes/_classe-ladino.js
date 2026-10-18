/* ============================================================
   CLASSE — LADINO
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.registrarClasse({
  id: "ladino", nome: "Ladino", fonte: "PHB 2024",
  dadoDeVida: 8,
  atributoPrincipal: ["Destreza"],
  testesDeResistencia: ["Destreza", "Inteligência"],

  proficiencias: {
    armaduras: ["Leve"],
    armas: ["Simples", "Marciais que tenham Acuidade ou Leve"],
    ferramentas: ["Ferramentas de Ladrão"],
    idiomas: ["Gíria dos Ladrões"],
    pericias: {
      quantidade: 4,
      lista: ["Acrobacia","Atletismo","Enganação","Furtividade","Intimidação","Intuição","Investigação","Percepção","Persuasão","Prestidigitação"]
    }
  },

  equipamentoInicial: {
    opcaoA: ["Armadura de Couro","2 Adagas","Espada Curta","Arco Curto","20 Flechas","Aljava","Ferramentas de Ladrão","Kit de Assaltante","8 PO"],
    opcaoB: ["100 PO"]
  },

  multiclasse: {
    requisitos: { destreza: 13 },
    profGanhas: ["1 perícia à escolha","Ferramentas de Ladrão","Armadura Leve"]
  },

  conjuracao: null,

  progressao: [
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Ataque Furtivo","Especialização","Gíria dos Ladrões","Maestria em Arma"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Ação Ardilosa"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Mira Firme","Subclasse de Ladino"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: ["Esquiva Sobrenatural","Golpe Astuto"] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Especialista"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: ["Evasão","Talento Confiável"] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 11, bonusProf: 4, caracteristicas: ["Golpe Astuto Aprimorado"] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Golpes Sujos"] },
    { nivel: 15, bonusProf: 5, caracteristicas: ["Mente Escorregadia"] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 18, bonusProf: 6, caracteristicas: ["Elusivo"] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Golpe de Sorte"] }
  ],

  recursos: [
    {
      nome: "Ataque Furtivo",
      tipo: "dano-variavel",
      progressao: [
        { nivel: 1,  valor: "1d6" }, { nivel: 3,  valor: "2d6" },
        { nivel: 5,  valor: "3d6" }, { nivel: 7,  valor: "4d6" },
        { nivel: 9,  valor: "5d6" }, { nivel: 11, valor: "6d6" },
        { nivel: 13, valor: "7d6" }, { nivel: 15, valor: "8d6" },
        { nivel: 17, valor: "9d6" }, { nivel: 19, valor: "10d6" }
      ]
    },
    {
      nome: "Maestria em Arma (armas)",
      tipo: "quantidade",
      progressao: [{ nivel: 1, valor: 2 }, { nivel: 4, valor: 3 }, { nivel: 10, valor: 4 }]
    }
  ],

  descricoes: {
    "Ataque Furtivo": "1×/turno, ao acertar com Vantagem usando arma com Acuidade ou à Distância, causa dano adicional do tipo da arma. Não precisa de Vantagem se pelo menos um aliado não Incapacitado estiver a até 1,5 m do alvo — e você não tiver Desvantagem.",
    "Especialização": "Especialização em 2 perícias já proficientes. No nv. 6, mais 2.",
    "Gíria dos Ladrões": "Conhece a Gíria dos Ladrões e 1 idioma à escolha.",
    "Maestria em Arma": "Escolha 2 tipos de arma com as quais tem proficiência para usar as propriedades de maestria. Pode trocar as escolhas em Descanso Longo.",
    "Ação Ardilosa": "Ação Bônus: Correr, Desengajar ou Esconder.",
    "Mira Firme": "Ação Bônus: ganha Vantagem no próximo ataque do turno, se não se moveu. Após usar, Deslocamento = 0 até o fim do turno.",
    "Esquiva Sobrenatural": "Reação: quando atacante à vista acerta você, reduz o dano pela metade.",
    "Golpe Astuto": "Ao causar Ataque Furtivo, gaste dados para adicionar efeitos. Envenenar (1d6): toxina, requer Kit de Veneno; salv. Constituição ou Envenenado 1 min (repete). Retirada (1d6): move metade do Deslocamento sem provocar. Tropeço (1d6): salv. Destreza ou Caído. CD = 8 + Des + BP.",
    "Evasão": "Em efeito com salv. Destreza por metade: sem dano em sucesso, metade em falha. Requer não Incapacitado.",
    "Talento Confiável": "Em teste com proficiência, resultado 9 ou menos no d20 vira 10.",
    "Golpe Astuto Aprimorado": "Pode usar até 2 efeitos de Golpe Astuto por Ataque Furtivo.",
    "Golpes Sujos": "Novos efeitos de Golpe Astuto: Aturdir (2d6) — salv. Constituição ou apenas 1 ação/ação bônus no próximo turno; Nocaute (6d6) — salv. Constituição ou Inconsciente 1 min (repete; acorda com dano); Obscurecer (3d6) — salv. Destreza ou Cego até o fim do próximo turno.",
    "Mente Escorregadia": "Proficiência em salvaguardas de Sabedoria e Carisma.",
    "Elusivo": "Nenhuma jogada de ataque pode ter Vantagem contra você, a menos que você esteja Incapacitado.",
    "Dádiva Épica": "Escolha uma Dádiva Épica. Recomendada: Dádiva do Espírito da Noite.",
    "Golpe de Sorte": "Ao falhar em Teste de D20, transforma em 20. 1×/Descanso Curto/Longo."
  },

  subclasses: ["adaga-espiritual","assassino","ladrao","trapaceiro-arcano"]
});

console.log('[DND] Classe Ladino carregada.');