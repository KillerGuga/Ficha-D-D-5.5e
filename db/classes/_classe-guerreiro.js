/* ============================================================
   CLASSE — GUERREIRO
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.registrarClasse({
  id: "guerreiro",
  nome: "Guerreiro",
  fonte: "PHB 2024",
  dadoDeVida: 10,
  atributoPrincipal: ["Força", "Destreza"],
  testesDeResistencia: ["Força", "Constituição"],

  proficiencias: {
    armaduras: ["Leve", "Média", "Pesada", "Escudos"],
    armas: ["Simples", "Marciais"],
    ferramentas: [],
    pericias: {
      quantidade: 2,
      lista: ["Acrobacia","Atletismo","História","Intimidação","Intuição","Investigação","Lidar com Animais","Percepção","Persuasão"]
    }
  },

  equipamentoInicial: {
    opcaoA: ["Cota de Malha","Espada Longa","Escudo","Kit de Explorador de Masmorras","16 PO"],
    opcaoB: ["175 PO"]
  },

  multiclasse: {
    requisitos: { forca: 13, destreza: 13 },  // exige 13 em Força OU Destreza
    profGanhas: ["Armas Marciais","Armaduras Leve e Média","Escudos"]
  },

  conjuracao: null,

  progressao: [
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Estilo de Luta","Maestria em Arma","Recuperar Fôlego"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Mente Tática","Surto de Ação"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Subclasse de Guerreiro"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: ["Ajuste Tático","Ataque Extra"] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: ["Indomável","Mestre Tático"] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 11, bonusProf: 4, caracteristicas: ["Dois Ataques Extras"] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: ["Ataques Estudados","Indomável"] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 15, bonusProf: 5, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: ["Indomável","Surto de Ação"] },
    { nivel: 18, bonusProf: 6, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Três Ataques Extras"] }
  ],

  recursos: [
    {
      nome: "Recuperar Fôlego",
      tipo: "usos",
      recuperacao: "1 em Descanso Curto; todos em Descanso Longo",
      progressao: [
        { nivel: 1, valor: 2 }, { nivel: 4, valor: 3 }, { nivel: 10, valor: 4 }
      ]
    },
    {
      nome: "Indomável",
      tipo: "usos",
      recuperacao: "todos em Descanso Longo",
      progressao: [
        { nivel: 9, valor: 1 }, { nivel: 13, valor: 2 }, { nivel: 17, valor: 3 }
      ]
    },
    {
      nome: "Maestria em Arma (armas)",
      tipo: "quantidade",
      progressao: [
        { nivel: 1, valor: 3 }, { nivel: 4, valor: 4 }, { nivel: 10, valor: 5 }, { nivel: 16, valor: 6 }
      ]
    }
  ],

  descricoes: {
    "Estilo de Luta": "Adquire um talento da categoria Estilo de Luta (ver arquivo de talentos): Arquearia, Combate com Armas de Arremesso, Combate com Armas Grandes, Combate com Duas Armas, Combate Desarmado, Defensivo, Duelismo, Interceptação, Luta às Cegas ou Protetivo.",
    "Maestria em Arma": "Escolha 3 tipos de arma com as quais tem proficiência para usar as propriedades de maestria. Ao completar um Descanso Longo, pode trocar as escolhas.",
    "Recuperar Fôlego": "Ação Bônus: recupera PV = 1d10 + nível de Guerreiro. Usos = coluna Recuperar Fôlego; recupera em Descanso Curto/Longo.",
    "Mente Tática": "Ao falhar em um teste de atributo, pode gastar um uso de Recuperar Fôlego; em vez de recuperar PV, joga 1d10 e adiciona ao d20, potencialmente virando sucesso.",
    "Surto de Ação": "1×/Descanso Curto/Longo (→2× no nv. 17): no seu turno, ganha uma ação adicional. Não pode ser a ação Usar Magia.",
    "Ajuste Tático": "Ao executar a Ação Bônus de Recuperar Fôlego, pode se mover até metade do Deslocamento sem provocar Ataques de Oportunidade.",
    "Ataque Extra": "Ataca duas vezes em vez de uma ao usar a ação Atacar.",
    "Indomável": "Ao falhar em salvaguarda, pode jogá-la novamente com bônus igual ao nível de Guerreiro. Usos = coluna Indomável; recupera em Descanso Longo.",
    "Mestre Tático": "Ao atacar com arma cuja propriedade de maestria você pode usar, pode substituir por Empurrar, Drenar ou Lentidão para esse ataque.",
    "Dois Ataques Extras": "Ataca três vezes em vez de uma ao usar a ação Atacar.",
    "Ataques Estudados": "Se você erra uma jogada de ataque contra criatura, tem Vantagem na próxima jogada de ataque contra ela antes do fim do seu próximo turno.",
    "Dádiva Épica": "Escolha uma Dádiva Épica. Recomendada: Dádiva da Proeza em Combate.",
    "Três Ataques Extras": "Ataca quatro vezes em vez de uma ao usar a ação Atacar."
  },

  subclasses: ["campeao","cavaleiro-mistico","combatente-psiquico","mestre-da-batalha"]
});

console.log('[DND] Classe Guerreiro carregada.');