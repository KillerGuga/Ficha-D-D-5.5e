/* ============================================================
   SUBCLASSES — GUARDIÃO
   Fonte: Livro do Jogador (2024)
   Todas: características em 3, 7, 11, 15
   ============================================================ */

/* ---------- ANDARILHO FEÉRICO ---------- */
window.registrarSubclasse({
  id: "andarilho-feerico", nome: "Andarilho Feérico", classeId: "guardiao", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 7, 11, 15],
  magiasSemprePreparadas: [
    { nivel: 3,  magias: ["Enfeitiçar Pessoa"] },
    { nivel: 5,  magias: ["Passo Nebuloso"] },
    { nivel: 9,  magias: ["Convocar Feérico"] },
    { nivel: 13, magias: ["Porta Dimensional"] },
    { nivel: 17, magias: ["Despistar"] }
  ],
  tabelaDadivasFaeria: [
    "Borboletas ilusórias flutuam ao seu redor enquanto você realiza um Descanso Curto ou Longo.",
    "Flores desabrocham do seu cabelo a cada amanhecer.",
    "Você cheira levemente a canela, lavanda, noz-moscada ou outra erva ou fragrância natural.",
    "Sua sombra dança enquanto ninguém está olhando diretamente para ela.",
    "Chifres ou galhadas brotam da sua cabeça.",
    "Sua pele e cabelo mudam de cor a cada amanhecer."
  ],
  caracteristicas: [
    { nivel: 3, nome: "Glamour Transcendental", descricao: "Sempre que faz um teste de Carisma, recebe bônus igual ao mod. Sabedoria (mín. +1). Adquire proficiência em uma das perícias à escolha: Atuação, Enganação ou Persuasão." },
    { nivel: 3, nome: "Golpes Terríveis", descricao: "1×/turno ao acertar criatura com arma: +1d4 Psíquico. Dano aumenta para 1d6 no nv. 11." },
    { nivel: 3, nome: "Dádivas de Faéria", descricao: "Escolha ou role 1d6 na tabela Dádivas de Faéria." },
    { nivel: 7, nome: "Detalhe Sedutor", descricao: "Vantagem em salvaguardas para evitar ou encerrar Amedrontado/Enfeitiçado. Reação: quando você ou criatura à vista a até 36m for bem-sucedida em salvaguarda contra uma dessas condições, force outra criatura à vista a até 36m a fazer salv. Sabedoria (CD magia). Se falhar: Amedrontada ou Enfeitiçada (escolha) por 1 min (repete no fim do turno)." },
    { nivel: 11, nome: "Reforços Feéricos", descricao: "Conjura Convocar Feérico sem componente Material. 1× sem gastar espaço (recupera em Descanso Longo). Ao começar a conjurar, pode modificá-la para não exigir Concentração; duração vira 1 min." },
    { nivel: 15, nome: "Andarilho Nebuloso", descricao: "Conjura Passo Nebuloso sem espaço (usos = mod. Sabedoria, mín. 1; recupera em Descanso Longo). Ao conjurá-la, pode levar criatura voluntária a até 1,5m junto — ela aparece em espaço desocupado à sua escolha a até 1,5m do seu destino." }
  ]
});

/* ---------- CAÇADOR ---------- */
window.registrarSubclasse({
  id: "cacador", nome: "Caçador", classeId: "guardiao", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 7, 11, 15],
  caracteristicas: [
    { nivel: 3, nome: "Conhecimento do Caçador", descricao: "Enquanto uma criatura está marcada pela Marca do Predador, você sabe se ela tem Imunidades, Resistências ou Vulnerabilidades — e quais." },
    { nivel: 3, nome: "Presa do Caçador", descricao: "Escolha uma das opções ao completar Descanso Curto/Longo:\n• Assassino de Colossos: ao acertar com arma criatura com PV abaixo do máximo, +1d8 de dano. 1×/turno.\n• Destruidor de Hordas: 1×/turno ao atacar com arma, pode fazer outro ataque com a mesma arma contra criatura diferente a até 1,5m do alvo original, no alcance da arma, ainda não atacada neste turno." },
    { nivel: 7, nome: "Táticas Defensivas", descricao: "Escolha uma das opções ao completar Descanso Curto/Longo:\n• Defesa Contra Ataques Múltiplos: ao ser atingido por criatura, essa criatura tem Desvantagem em todas as outras jogadas de ataque contra você neste turno.\n• Escapar de Hordas: Ataques de Oportunidade têm Desvantagem contra você." },
    { nivel: 11, nome: "Presa do Caçador Superior", descricao: "1×/turno, ao causar dano a criatura marcada pela Marca do Predador, também pode causar dano adicional dessa magia a uma criatura diferente à vista a até 9m da primeira." },
    { nivel: 15, nome: "Defesa do Caçador Superior", descricao: "Reação: quando sofre dano, ganha Resistência a esse dano e a qualquer outro dano do mesmo tipo até o fim do turno atual." }
  ]
});

/* ---------- SENHOR DAS FERAS ---------- */
window.registrarSubclasse({
  id: "senhor-das-feras", nome: "Senhor das Feras", classeId: "guardiao", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 7, 11, 15],
  caracteristicas: [
    { nivel: 3, nome: "Companheiro Primal", descricao: "Invoca Fera Primal (blocos de estatísticas: Fera do Céu, Fera da Terra ou Fera do Mar). Amigável a você e aliados; obedece a comandos. Age no seu turno, pode se mover e usar Reação; por padrão executa Esquivar a menos que use Ação Bônus para comandá-la. Pode sacrificar um ataque para ordená-la a executar Golpe da Fera. Restaurar: ação Usar Magia + gasto de espaço para reviver (se morreu nas últimas 1h). Recriar: Descanso Longo com Ferramentas de Ferreiro." },
    { nivel: 7, nome: "Treinamento Excepcional", descricao: "Ao gastar Ação Bônus para ordenar sua fera, ela também pode executar Ajudar, Correr, Desengajar ou Esquivar com a Ação Bônus dela. Além disso, ao acertar com jogada de ataque e causar dano, a fera pode causar Energético em vez do tipo normal." },
    { nivel: 11, nome: "Fúria Bestial", descricao: "Ao ordenar a fera a executar Golpe da Fera, ela pode usar duas vezes. 1×/turno que acerta criatura sob Marca do Predador, a fera causa dano Energético adicional igual ao dano bônus dessa magia." },
    { nivel: 15, nome: "Compartilhar Magias", descricao: "Ao conjurar magia em si mesmo, também pode afetar a fera se ela estiver a até 9m." }
  ]
});

/* ---------- VIGILANTE DAS SOMBRAS ---------- */
window.registrarSubclasse({
  id: "vigilante-das-sombras", nome: "Vigilante das Sombras", classeId: "guardiao", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 7, 11, 15],
  magiasSemprePreparadas: [
    { nivel: 3,  magias: ["Disfarçar-se"] },
    { nivel: 5,  magias: ["Corda Extradimensional"] },
    { nivel: 9,  magias: ["Medo"] },
    { nivel: 13, magias: ["Invisibilidade Maior"] },
    { nivel: 17, magias: ["Similaridade"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Emboscador das Sombras", descricao: "Bônus de Iniciativa: adicione mod. Sabedoria. Golpe Terrível: ao atacar e atingir criatura com arma, +2d6 Psíquico (1×/turno; usos = mod. Sabedoria, mín. 1; recupera em Descanso Longo). Impulso do Emboscador: no início do seu primeiro turno de cada combate, Deslocamento +3m até o fim do turno." },
    { nivel: 3, nome: "Visão Umbrosa", descricao: "Visão no Escuro 18m (se já tiver, +18m). Em Escuridão total, você tem Invisibilidade contra criaturas que dependem de Visão no Escuro para vê-lo." },
    { nivel: 7, nome: "Mente de Ferro", descricao: "Proficiência em salvaguardas de Sabedoria. Se já tiver, proficiência em salvaguardas de Carisma ou Inteligência (à escolha)." },
    { nivel: 11, nome: "Torrente do Vigilante", descricao: "Dano psíquico do Golpe Terrível vira 2d8. Ao usar Golpe Terrível, pode escolher também: Golpe Repentino (ataque com a mesma arma contra criatura diferente a até 1,5m do alvo original, no alcance da arma) ou Medo em Massa (alvo e criaturas a até 3m dele fazem salv. Sabedoria; falha = Amedrontada até o início do seu próximo turno)." },
    { nivel: 15, nome: "Esquiva Sombria", descricao: "Reação: quando criatura faz jogada de ataque contra você, impõe Desvantagem. Acerte ou erre, você pode se teleportar até 9m para espaço desocupado à vista." }
  ]
});

console.log('[DND] Subclasses do Guardião carregadas.');