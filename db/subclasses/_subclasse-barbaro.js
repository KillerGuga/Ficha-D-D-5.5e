/* ============================================================
   SUBCLASSES — BÁRBARO
   Fonte: Livro do Jogador (2024)
   Todas: características em 3, 6, 10, 14
   ============================================================ */

window.registrarSubclasse({
  id: "trilha-arvore-do-mundo",
  nome: "Trilha da Árvore do Mundo",
  classeId: "barbaro",
  fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 10, 14],
  caracteristicas: [
    { nivel: 3, nome: "Vitalidade da Árvore", descricao: "Força Revigorante: no início de cada turno em Fúria, escolha uma criatura a até 3m para receber PV Temporários = bônus de Dano da Fúria em d6. Surto de Vitalidade: ao ativar a Fúria, ganha PV Temporários iguais ao seu nível de Bárbaro." },
    { nivel: 6, nome: "Ramos da Árvore", descricao: "Reação: quando criatura à vista começa o turno a até 9m em sua Fúria, teleporta-a (salv. Força CD 8+mod For+BP) para espaço desocupado a até 1,5m de você e pode reduzir seu Deslocamento a 0." },
    { nivel: 10, nome: "Raízes Devastadoras", descricao: "Alcance +3m com armas Corpo a Corpo Pesadas ou Versáteis. Ao acertar, pode ativar Derrubar ou Empurrar além de outra propriedade de maestria da arma." },
    { nivel: 14, nome: "Percorrer a Árvore", descricao: "Ao ativar a Fúria e como Ação Bônus em Fúria, teleporta até 18m para espaço desocupado à vista. 1×/Fúria pode estender para 45m e levar até 6 criaturas voluntárias a até 3m." }
  ]
});

window.registrarSubclasse({
  id: "trilha-do-berserker",
  nome: "Trilha do Berserker",
  classeId: "barbaro",
  fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 10, 14],
  caracteristicas: [
    { nivel: 3, nome: "Frenesi", descricao: "Em Ataque Imprudente durante a Fúria, causa dano adicional ao primeiro alvo atingido no turno: bônus de Dano da Fúria em d6, do mesmo tipo da arma/Ataque Desarmado." },
    { nivel: 6, nome: "Fúria Irracional", descricao: "Imunidade às condições Amedrontado e Enfeitiçado durante a Fúria; se já afetado ao entrar, a condição encerra." },
    { nivel: 10, nome: "Retaliação", descricao: "Reação: quando sofre dano de criatura a até 1,5m, faz um ataque corpo a corpo com arma ou Ataque Desarmado contra ela." },
    { nivel: 14, nome: "Presença Intimidante", descricao: "Ação Bônus: cada criatura escolhida em Emanação de 9m faz salv. Sabedoria (CD 8+For+BP) ou fica Amedrontada 1 min (repete no fim do turno). 1×/Descanso Longo, ou gaste um uso de Fúria para restaurar." }
  ]
});

window.registrarSubclasse({
  id: "trilha-coracao-selvagem",
  nome: "Trilha do Coração Selvagem",
  classeId: "barbaro",
  fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 10, 14],
  caracteristicas: [
    { nivel: 3, nome: "Arauto da Fauna", descricao: "Conjura Falar com Animais e Sentido Feral apenas como Rituais; Sabedoria é o atributo de conjuração." },
    { nivel: 3, nome: "Fúria dos Selvagens", descricao: "Ao ativar a Fúria, escolha: Águia (Correr + Desengajar como parte da Ação Bônus; repetível como Ação Bônus em Fúria), Lobo (aliados têm Vantagem contra inimigos seus a até 1,5m), ou Urso (Resistência a todos os danos exceto Energético, Necrótico, Psíquico e Radiante)." },
    { nivel: 6, nome: "Aspecto dos Selvagens", descricao: "Escolha por Descanso Longo: Coruja (Visão no Escuro 18m; empilha se já tiver), Pantera (Deslocamento de Escalada = Deslocamento) ou Salmão (Deslocamento de Natação = Deslocamento)." },
    { nivel: 10, nome: "Arauto da Natureza", descricao: "Conjura Comunhão com a Natureza apenas como Ritual; Sabedoria é o atributo de conjuração." },
    { nivel: 14, nome: "Poder dos Selvagens", descricao: "Ao ativar a Fúria, escolha: Carneiro (pode impor Caído em criatura Grande ou menor ao acertar), Falcão (Deslocamento de Voo = Deslocamento se sem armadura) ou Leão (inimigos a até 1,5m têm Desvantagem em ataques que não sejam contra você)." }
  ]
});

window.registrarSubclasse({
  id: "trilha-do-fanatico",
  nome: "Trilha do Fanático",
  classeId: "barbaro",
  fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 10, 14],
  caracteristicas: [
    { nivel: 3, nome: "Campeão dos Deuses", descricao: "Reserva de 4d12. Ação Bônus: gaste dados da reserva para recuperar PV. Recupera todos em Descanso Longo. Dados aumentam: 5 (nv.6), 6 (nv.12), 7 (nv.17)." },
    { nivel: 3, nome: "Fúria Divina", descricao: "Em Fúria, uma vez por turno, a primeira criatura atingida com arma ou Ataque Desarmado sofre +1d6 + metade do nível de Bárbaro (arred. baixo) de dano Necrótico ou Radiante (escolha a cada dano)." },
    { nivel: 6, nome: "Concentração Fanática", descricao: "1×/Fúria: se falhar em uma salvaguarda, pode jogá-la novamente com bônus = Dano da Fúria; usa o novo resultado." },
    { nivel: 10, nome: "Presença Zelosa", descricao: "Ação Bônus: até 10 criaturas a até 18m ganham Vantagem em ataques e salvaguardas até o início do seu próximo turno. 1×/Descanso Longo; gaste uso de Fúria para restaurar." },
    { nivel: 14, nome: "Fúria dos Deuses", descricao: "Ao ativar a Fúria, assume forma divina por 1 min ou até cair a 0 PV (1×/Descanso Longo): Resistência a Necrótico, Psíquico e Radiante; Reação para gastar uso de Fúria e mudar PV de criatura a até 9m que caiu a 0 para valor igual ao seu nível de Bárbaro; Deslocamento de Voo = Deslocamento e pode pairar." }
  ]
});

console.log('[DND] Subclasses do Bárbaro carregadas.');