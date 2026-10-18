/* ============================================================
   SUBCLASSES — PALADINO (Juramentos)
   Fonte: Livro do Jogador (2024)
   Todas: características em 3, 7, 15, 20
   ============================================================ */

/* ---------- JURAMENTO DA DEVOÇÃO ---------- */
window.registrarSubclasse({
  id:"juramento-devocao", nome:"Juramento da Devoção", classeId:"paladino", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 7, 15, 20],
  magiasSemprePreparadas: [
    { nivel:3,  magias:["Escudo da Fé","Proteção Contra o Bem e o Mal"] },
    { nivel:5,  magias:["Auxílio","Zona da Verdade"] },
    { nivel:9,  magias:["Dissipar Magia","Sinal de Esperança"] },
    { nivel:13, magias:["Defensor da Fé","Movimentação Livre"] },
    { nivel:17, magias:["Coluna de Chamas","Comunhão"] }
  ],
  caracteristicas: [
    { nivel:3, nome:"Arma Sagrada", descricao:"Ação Atacar: gasta Canalizar Divindade; uma arma Corpo a Corpo empunhada recebe: +mod. Carisma em ataques (mín. +1) por 10 min; dano pode ser normal ou Radiante; emite Luz Plena 6 m + Meia-luz 6 m. Encerra se soltar a arma ou encerrar (sem ação)." },
    { nivel:7, nome:"Aura de Devoção", descricao:"Você e aliados na Aura de Proteção têm Imunidade a Enfeitiçado. Aliados Enfeitiçados que entram na aura têm a condição suprimida." },
    { nivel:15, nome:"Destruição Protetora", descricao:"Ao conjurar Destruição Divina, você e aliados na Aura de Proteção têm Cobertura Parcial até o início do seu próximo turno." },
    { nivel:20, nome:"Resplendor Sagrado", descricao:"Ação Bônus (1×/Descanso Longo, ou gaste espaço de 5º+): por 10 min (ou até encerrar), sua Aura de Proteção concede: Dano Radiante (inimigo que inicia turno na aura sofre mod. Carisma + BP); Luz Solar (Luz Plena); Vigília Consagrada (Vantagem em salvaguardas contra Ínferos/Mortos-Vivos)." }
  ]
});

/* ---------- JURAMENTO DA GLÓRIA ---------- */
window.registrarSubclasse({
  id:"juramento-gloria", nome:"Juramento da Glória", classeId:"paladino", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 7, 15, 20],
  magiasSemprePreparadas: [
    { nivel:3,  magias:["Heroísmo","Raio Guia"] },
    { nivel:5,  magias:["Aprimorar Atributo","Arma Mágica"] },
    { nivel:9,  magias:["Celeridade","Proteção contra Energia"] },
    { nivel:13, magias:["Compulsão","Movimentação Livre"] },
    { nivel:17, magias:["Lendas e Histórias","Presença Régia de Yolande"] }
  ],
  caracteristicas: [
    { nivel:3, nome:"Destruição Inspiradora", descricao:"Ao conjurar Destruição Divina: gasta Canalizar Divindade; distribui PV Temporários = 2d8 + nível de Paladino entre criaturas à escolha a até 9 m (incluindo você)." },
    { nivel:7, nome:"Aura de Vivacidade", descricao:"Deslocamento +3 m. Aliado que entra na Aura de Proteção pela 1ª vez no turno (ou inicia turno nela) ganha +3 m de Deslocamento até o fim do próximo turno dele." },
    { nivel:15, nome:"Defesa Gloriosa", descricao:"Reação: quando você ou criatura à vista a até 3 m é atingida por ataque, concede à CA um bônus = mod. Carisma (mín. +1), podendo fazer o ataque errar. Se errar, pode fazer um ataque com arma contra o atacante (se estiver no alcance). Usos = mod. Carisma (mín. 1); recupera em Descanso Longo." },
    { nivel:20, nome:"Lenda Viva", descricao:"Ação Bônus (1×/Descanso Longo, ou gaste espaço de 5º+): por 10 min, ganha: Carismático (Vantagem em todos os testes de Carisma); Golpe Infalível (1×/turno, ao errar com arma, pode fazer o ataque acertar); Jogar Novamente a Salvaguarda (Reação: rerola salvaguarda falha, usa o novo resultado)." }
  ]
});

/* ---------- JURAMENTO DA VINGANÇA ---------- */
window.registrarSubclasse({
  id:"juramento-vinganca", nome:"Juramento da Vingança", classeId:"paladino", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 7, 15, 20],
  magiasSemprePreparadas: [
    { nivel:3,  magias:["Marca do Predador","Perdição"] },
    { nivel:5,  magias:["Paralisar Pessoa","Passo Nebuloso"] },
    { nivel:9,  magias:["Celeridade","Proteção contra Energia"] },
    { nivel:13, magias:["Banimento","Porta Dimensional"] },
    { nivel:17, magias:["Paralisar Monstro","Vidência"] }
  ],
  caracteristicas: [
    { nivel:3, nome:"Voto de Inimizade", descricao:"Ação Atacar: gasta Canalizar Divindade; escolhe criatura à vista a até 9 m. Você tem Vantagem em ataques contra ela por 1 min ou até usar de novo. Se ela cair a 0 PV antes, o voto pode ser transferido para outra criatura a até 9 m (sem ação)." },
    { nivel:7, nome:"Vingador Implacável", descricao:"Ao atingir criatura com Ataque de Oportunidade: reduz Deslocamento dela a 0 até o fim do turno atual. Depois, move até metade do Deslocamento como parte da mesma Reação, sem provocar Ataques de Oportunidade." },
    { nivel:15, nome:"Alma Vingativa", descricao:"Reação: quando criatura sob seu Voto de Inimizade acerta ou erra um ataque, você pode fazer um ataque corpo a corpo contra ela (se estiver no alcance)." },
    { nivel:20, nome:"Anjo Vingador", descricao:"Ação Bônus (1×/Descanso Longo, ou gaste espaço de 5º+): por 10 min (ou até encerrar), ganha: Aura Amedrontadora (inimigo que inicia turno na Aura de Proteção faz salv. Sabedoria ou Amedrontado 1 min, ou até sofrer dano; ataques contra ele têm Vantagem) e Voo (asas espectrais, Deslocamento de Voo 18 m, pode pairar)." }
  ]
});

/* ---------- JURAMENTO DOS ANCIÕES ---------- */
window.registrarSubclasse({
  id:"juramento-anciaoes", nome:"Juramento dos Anciões", classeId:"paladino", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 7, 15, 20],
  magiasSemprePreparadas: [
    { nivel:3,  magias:["Falar com Animais","Golpe Construtor"] },
    { nivel:5,  magias:["Passo Nebuloso","Raio Lunar"] },
    { nivel:9,  magias:["Crescimento de Plantas","Proteção contra Energia"] },
    { nivel:13, magias:["Pele-Rocha","Tempestade Glacial"] },
    { nivel:17, magias:["Comunhão com a Natureza","Passo Arbóreo"] }
  ],
  caracteristicas: [
    { nivel:3, nome:"Ira da Natureza", descricao:"Ação Usar Magia: gasta Canalizar Divindade; videiras espectrais em criaturas à escolha a até 4,5 m. Cada uma faz salv. Força (CD magia) ou Contida 1 min (repete) e sofre 1d6 Perfurante no início de cada turno enquanto Contida." },
    { nivel:7, nome:"Aura de Resistência", descricao:"Você e aliados na Aura de Proteção têm Resistência a dano Necrótico, Psíquico e Radiante." },
    { nivel:15, nome:"Sentinela Imortal", descricao:"Ao cair a 0 PV sem morrer: recupera PV = 3 × nível de Paladino. 1×/Descanso Longo. Não envelhece magicamente; aparência não envelhece." },
    { nivel:20, nome:"Campeão Ancestral", descricao:"Ação Bônus (1×/Descanso Longo, ou gaste espaço de 5º+): por 1 min (ou até encerrar), ganha: Aliviar Desafio (inimigos na aura têm Desvantagem em salvaguardas contra suas magias e Canalizar Divindade); Magias Ágeis (magias com tempo de 1 ação podem ser conjuradas como Ação Bônus); Regeneração (no início de cada turno, recupera 10 PV)." }
  ]
});

console.log('[DND] Subclasses do Paladino carregadas.');