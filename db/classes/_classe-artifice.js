/* ============================================================
   CLASSE — ARTÍFICE
   Fonte: Eberron: Forge of the Artificer (2025)
   ============================================================ */

window.registrarClasse({
  id: "artifice",
  nome: "Artífice",
  fonte: "Eberron: Forge of the Artificer",
  dadoDeVida: 8,
  atributoPrincipal: ["Inteligência"],
  testesDeResistencia: ["Constituição", "Inteligência"],

  proficiencias: {
    armaduras: ["Leve", "Média", "Escudos"],
    armas: ["Simples"],
    ferramentas: ["Ferramentas de Ladrão", "Ferramentas de Funileiro", "1 tipo de Ferramentas de Artesão"],
    pericias: {
      quantidade: 2,
      lista: ["Arcanismo", "História", "Investigação", "Medicina", "Natureza", "Percepção", "Prestidigitação"]
    }
  },

  equipamentoInicial: {
    opcaoA: ["Armadura de Couro Batido", "Adaga", "Ferramentas de Ladrão", "Ferramentas de Funileiro", "Pacote de Aventureiro", "16 PO"],
    opcaoB: ["150 PO"]
  },

  multiclasse: {
    requisitos: { inteligencia: 13 },
    profGanhas: ["Ferramentas de Funileiro", "1 perícia da lista de Artífice", "Armaduras Leve e Média", "Escudos"],
    nota: "Some metade dos seus níveis de Artífice (arredondado para cima) ao calcular espaços de magia."
  },

  conjuracao: {
    modelo: "meia", // Meio conjurador (começa no nível 1)
    atributo: "Inteligência",
    foco: "Ferramentas de Artesão (uma com a qual tenha proficiência)",
    truquesConhecidos: [
      { nivel: 1, valor: 2 },
      { nivel: 10, valor: 3 },
      { nivel: 14, valor: 4 }
    ],
    magiasPreparadas: [
      { nivel: 1, valor: 2 }, { nivel: 2, valor: 3 }, { nivel: 3, valor: 4 },
      { nivel: 4, valor: 5 }, { nivel: 5, valor: 6 }, { nivel: 6, valor: 6 },
      { nivel: 7, valor: 7 }, { nivel: 8, valor: 7 }, { nivel: 9, valor: 9 },
      { nivel: 10, valor: 9 }, { nivel: 11, valor: 10 }, { nivel: 12, valor: 10 },
      { nivel: 13, valor: 11 }, { nivel: 14, valor: 11 }, { nivel: 15, valor: 12 },
      { nivel: 16, valor: 12 }, { nivel: 17, valor: 14 }, { nivel: 18, valor: 14 },
      { nivel: 19, valor: 15 }, { nivel: 20, valor: 15 }
    ],
    espacosDeMagia: [
      { nivel: 1,  slots: { 1: 2 } },
      { nivel: 2,  slots: { 1: 2 } },
      { nivel: 3,  slots: { 1: 3 } },
      { nivel: 4,  slots: { 1: 3 } },
      { nivel: 5,  slots: { 1: 4, 2: 2 } },
      { nivel: 6,  slots: { 1: 4, 2: 2 } },
      { nivel: 7,  slots: { 1: 4, 2: 3 } },
      { nivel: 8,  slots: { 1: 4, 2: 3 } },
      { nivel: 9,  slots: { 1: 4, 2: 3, 3: 2 } },
      { nivel: 10, slots: { 1: 4, 2: 3, 3: 2 } },
      { nivel: 11, slots: { 1: 4, 2: 3, 3: 3 } },
      { nivel: 12, slots: { 1: 4, 2: 3, 3: 3 } },
      { nivel: 13, slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
      { nivel: 14, slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
      { nivel: 15, slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
      { nivel: 16, slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
      { nivel: 17, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
      { nivel: 18, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
      { nivel: 19, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
      { nivel: 20, slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } }
    ]
  },

  progressao: [
    { nivel: 1,  bonusProf: 2, caracteristicas: ["Conjuração","Magia de Funileiro"] },
    { nivel: 2,  bonusProf: 2, caracteristicas: ["Replicar Item Mágico"] },
    { nivel: 3,  bonusProf: 2, caracteristicas: ["Subclasse de Artífice"] },
    { nivel: 4,  bonusProf: 2, caracteristicas: ["Incremento de Atributo"] },
    { nivel: 5,  bonusProf: 3, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 6,  bonusProf: 3, caracteristicas: ["Funileiro de Itens Mágicos"] },
    { nivel: 7,  bonusProf: 3, caracteristicas: ["Lampejo de Gênio"] },
    { nivel: 8,  bonusProf: 3, caracteristicas: ["Incremento de Atributo"] },
    { nivel: 9,  bonusProf: 4, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 10, bonusProf: 4, caracteristicas: ["Adepto de Itens Mágicos"] },
    { nivel: 11, bonusProf: 4, caracteristicas: ["Item Armazenador de Magias"] },
    { nivel: 12, bonusProf: 4, caracteristicas: ["Incremento de Atributo"] },
    { nivel: 13, bonusProf: 5, caracteristicas: [] },
    { nivel: 14, bonusProf: 5, caracteristicas: ["Artifício Avançado"] },
    { nivel: 15, bonusProf: 5, caracteristicas: ["Característica de Subclasse"] },
    { nivel: 16, bonusProf: 5, caracteristicas: ["Incremento de Atributo"] },
    { nivel: 17, bonusProf: 6, caracteristicas: [] },
    { nivel: 18, bonusProf: 6, caracteristicas: ["Mestre de Itens Mágicos"] },
    { nivel: 19, bonusProf: 6, caracteristicas: ["Dádiva Épica"] },
    { nivel: 20, bonusProf: 6, caracteristicas: ["Alma de Artifício"] }
  ],

  descricoes: {
    "Conjuração": "Você aprendeu a canalizar energia mágica através de objetos. Use Ferramentas de Ladrão, de Funileiro ou outro tipo de Ferramentas de Artesão como Foco de Conjuração. Truques: 2 à escolha. Pode trocar 1 truque a cada Descanso Longo. Espaços: recupera todos em Descanso Longo. Preparadas: começa com 2 magias de 1º círculo; a lista cresce conforme a tabela.",
    "Magia de Funileiro": "Você conhece o truque Reparar. Como uma Ação Mágica enquanto segura Ferramentas de Funileiro, você pode criar um item não mágico Minúsculo (CA 5, 1 PV). Você pode ter um número de itens ativos igual ao seu Bônus de Proficiência. Eles duram até você morrer ou até você usar esta ação novamente.",
    "Replicar Item Mágico": "Ao terminar um Descanso Longo, com Ferramentas de Funileiro em mãos, você cria 1 ou 2 itens mágicos diferentes de uma lista de planos que você conhece. Itens criados são mágicos, mas não permanentes: desaparecem 1d4 dias após sua morte. A quantidade de itens e planos disponíveis aumenta conforme você sobe de nível.",
    "Funileiro de Itens Mágicos": "Sua característica Replicar Item Mágico ganha opções: Recarregar Item Mágico (Ação Bônus, gasta espaço de magia), Drenar Item Mágico (Ação Bônus, destrói o item para ganhar um espaço de magia — 1 uso por Descanso Longo), Transmutar Item Mágico (Ação Mágica, transforma o item em outro plano conhecido — 1 uso por Descanso Longo).",
    "Lampejo de Gênio": "Quando você ou uma criatura à sua vista a até 9 metros falha em um teste de atributo ou salvaguarda, você pode usar sua Reação para adicionar seu modificador de Inteligência à rolagem, potencialmente transformando a falha em sucesso. Usos = mod. Int (mín. 1); recupera todos em Descanso Longo.",
    "Adepto de Itens Mágicos": "Você pode sintonizar até 4 itens mágicos ao mesmo tempo.",
    "Item Armazenador de Magias": "Ao terminar um Descanso Longo, toque uma arma Simples ou Marcial (ou item usável como Foco) e armazene uma magia de Artífice de 1º a 3º círculo que tenha tempo de conjuração de 1 ação e não exija componente material consumido. Qualquer criatura segurando o objeto pode usar uma Ação Mágica para conjurar a magia, usando seu modificador de atributo de conjuração. A magia dura até ser usada um número de vezes igual ao dobro do seu mod. de Inteligência.",
    "Artifício Avançado": "Você pode sintonizar até 5 itens mágicos ao mesmo tempo. Além disso, ao terminar um Descanso Curto, recupera 1 uso de Lampejo de Gênio.",
    "Mestre de Itens Mágicos": "Você pode sintonizar até 6 itens mágicos ao mesmo tempo.",
    "Dádiva Épica": "Você ganha uma Dádiva Épica ou outro talento à sua escolha. Recomendado: Dádiva de Resistência à Energia.",
    "Alma de Artifício": "Enganar a Morte: se reduzido a 0 PV, pode desintegrar qualquer número de itens mágicos (Incomuns ou Raros) criados por você para ficar com PV igual a 20 vezes a quantidade desintegrada. Orientação Mágica: ao terminar um Descanso Curto, recupera todos os usos de Lampejo de Gênio se estiver sintonizado a pelo menos 1 item mágico."
  },

  subclasses: ["alquimista", "armaduras", "artilheiro", "ferreiro-de-batalha", "cartografo"]
});

console.log('[DND] Classe Artífice carregada.');