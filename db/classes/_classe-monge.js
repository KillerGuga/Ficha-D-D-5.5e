/* ============================================================
   CLASSE — MONGE
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.registrarClasse({
  id: "monge", nome: "Monge", fonte: "PHB 2024",
  dadoDeVida: 8,
  atributoPrincipal: ["Destreza", "Sabedoria"],
  testesDeResistencia: ["Força", "Destreza"],

  proficiencias: {
    armaduras: [],
    armas: ["Simples", "Marciais com propriedade Leve"],
    ferramentas: ["1 tipo de Ferramentas de Artesão ou 1 Instrumento Musical"],
    pericias: {
      quantidade: 2,
      lista: ["Acrobacia","Atletismo","Furtividade","História","Intuição","Religião"]
    }
  },

  equipamentoInicial: {
    opcaoA: ["Lança","5 Adagas","Ferramentas de Artesão ou Instrumento Musical (o mesmo da proficiência)","Kit de Aventureiro","11 PO"],
    opcaoB: ["50 PO"]
  },

  multiclasse: {
    requisitos: { destreza: 13, sabedoria: 13 },
    profGanhas: []
  },

  conjuracao: null,

  progressao: [
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Artes Marciais","Defesa sem Armadura"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Foco do Monge","Metabolismo Incomum","Movimento sem Armadura"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Defletir Ataques","Subclasse de Monge"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Aumento no Valor de Atributo","Queda Lenta"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: ["Ataque Extra","Golpe Atordoante"] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Golpes Potencializados","Característica de Subclasse"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: ["Evasão"] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: ["Movimento Acrobático"] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Autocura","Foco Aprimorado"] },
    { nivel: 11, bonusProf: 4, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: ["Defletir Energia"] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Sobrevivente Disciplinado"] },
    { nivel: 15, bonusProf: 5, caracteristicas: ["Foco Perfeito"] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Aumento no Valor de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 18, bonusProf: 6, caracteristicas: ["Defesa Superior"] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Corpo e Mente"] }
  ],

  recursos: [
    {
      nome: "Pontos de Foco",
      tipo: "pontos",
      recuperacao: "todos em Descanso Curto/Longo",
      progressao: [
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
      nome: "Dado de Artes Marciais",
      tipo: "dado-variavel",
      progressao: [
        { nivel: 1,  valor: "1d6" }, { nivel: 5,  valor: "1d8" },
        { nivel: 11, valor: "1d10" }, { nivel: 17, valor: "1d12" }
      ]
    },
    {
      nome: "Movimento sem Armadura",
      tipo: "deslocamento-bonus",
      progressao: [
        { nivel: 2,  valor: "+3 m" }, { nivel: 6,  valor: "+4,5 m" },
        { nivel: 10, valor: "+6 m" }, { nivel: 14, valor: "+7,5 m" },
        { nivel: 18, valor: "+9 m" }
      ]
    }
  ],

  descricoes: {
    "Artes Marciais": "Armas de Monge: Simples Corpo a Corpo; Marciais Corpo a Corpo com propriedade Leve. Desarmado ou com armas de Monge sem armadura e sem Escudo: Ataque Desarmado como Ação Bônus; dado de dano = Dado de Artes Marciais; pode usar Destreza em ataques/dano e em CD de Empurrar/Imobilizar.",
    "Defesa sem Armadura": "Sem armadura e sem Escudo: CA base = 10 + mod. Destreza + mod. Sabedoria.",
    "Foco do Monge": "Pontos de Foco (ver tabela). Recupera todos em Descanso Curto/Longo. Três opções iniciais:\n• Defesa Paciente (Ação Bônus: Desengajar; ou 1 Ponto para Desengajar + Esquivar)\n• Passo do Vento (Ação Bônus: Correr; ou 1 Ponto para Correr + Desengajar, com salto dobrado)\n• Torrente de Golpes (1 Ponto: 2 Ataques Desarmados como Ação Bônus).",
    "Metabolismo Incomum": "Ao jogar Iniciativa, pode restaurar todos os Pontos de Foco gastos; recupera PV = nível de Monge + rolagem do Dado de Artes Marciais. 1×/Descanso Longo.",
    "Movimento sem Armadura": "Deslocamento aumenta em +3 m (nível 2) escalonando até +9 m (nível 18), desde que sem armadura e sem Escudo.",
    "Defletir Ataques": "Reação: reduz dano Contundente/Cortante/Perfurante em 1d10 + mod. Destreza + nível de Monge. Se reduzir a 0, gaste 1 Ponto de Foco para redirecionar: uma criatura à vista (1,5 m se corpo a corpo, 18 m se à distância) faz salv. Destreza ou sofre 2 × Dado de Artes Marciais + mod. Destreza do mesmo tipo.",
    "Queda Lenta": "Reação: em queda, reduz dano em 5 × nível de Monge.",
    "Ataque Extra": "Ataca duas vezes ao usar ação Atacar.",
    "Golpe Atordoante": "1×/turno ao acertar: gasta 1 Ponto de Foco; alvo faz salv. Constituição ou Atordoado até o início do seu próximo turno. Sucesso: Deslocamento reduzido à metade e próxima jogada de ataque contra o alvo tem Vantagem.",
    "Golpes Potencializados": "Ataques Desarmados podem causar Energético em vez de Contundente.",
    "Evasão": "Em efeito com salv. Destreza por metade: sem dano em sucesso, metade em falha. Requer não Incapacitado.",
    "Movimento Acrobático": "Sem armadura e sem Escudo: move-se por superfícies verticais e líquidos sem cair durante o movimento.",
    "Autocura": "No fim de cada turno: remove Amedrontado, Enfeitiçado ou Envenenado de si. Não sofre Exaustão por fome/sede.",
    "Foco Aprimorado": "Defesa Paciente: ao gastar Ponto, ganha PV Temporários = 2 × Dado de Artes Marciais. Passo do Vento: ao gastar Ponto, pode levar criatura voluntária Grande ou menor com você. Torrente de Golpes: pode fazer 3 Ataques Desarmados em vez de 2 ao gastar Ponto.",
    "Defletir Energia": "Defletir Ataques passa a funcionar contra qualquer tipo de dano.",
    "Sobrevivente Disciplinado": "Proficiência em todas as salvaguardas. Ao falhar em salvaguarda, gasta 1 Ponto de Foco para jogar novamente (usa o novo resultado).",
    "Foco Perfeito": "Ao jogar Iniciativa sem usar Metabolismo Incomum: recupera Pontos de Foco até ter 4 (se tiver 3 ou menos).",
    "Defesa Superior": "Início do turno: gasta 3 Pontos de Foco para Resistência a todos os tipos de dano (exceto Energético) por 1 min ou até Incapacitado.",
    "Dádiva Épica": "Escolha uma Dádiva Épica. Recomendada: Dádiva do Ataque Irresistível.",
    "Corpo e Mente": "Destreza e Sabedoria +4 (máx. 25)."
  },

  subclasses: ["mao-espalmada","misericordia","sombras","elementos"]
});

console.log('[DND] Classe Monge carregada.');