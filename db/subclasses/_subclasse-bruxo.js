/* ============================================================
   SUBCLASSES — BRUXO (Patronos)
   Fonte: Livro do Jogador (2024)
   Todas: características em 3, 6, 10, 14
   ============================================================ */

/* ---------- PATRONO ARQUIFADA ---------- */
window.registrarSubclasse({
  id: "patrono-arquifada", nome: "Patrono Arquifada", classeId: "bruxo", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 10, 14],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Acalmar Emoções","Fogo das Fadas","Força Espectral","Passo Nebuloso","Sono"] },
    { nivel: 5, magias: ["Crescimento de Plantas","Piscar"] },
    { nivel: 7, magias: ["Dominar Fera","Invisibilidade Maior"] },
    { nivel: 9, magias: ["Dominar Pessoa","Similaridade"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Passos Feéricos", descricao: "Conjura Passo Nebuloso sem espaço (usos = mod. Carisma, mín. 1). Ao conjurar, escolha: Passo Provocante (criaturas a até 1,5m do espaço deixado: salv. Sabedoria ou Desvantagem em ataques contra alvos que não sejam você até o início do próximo turno delas) ou Passo Revigorante (você ou criatura a até 3m ganha 1d10 PV Temporários)." },
    { nivel: 6, nome: "Fuga em Névoa", descricao: "Pode conjurar Passo Nebuloso como Reação ao sofrer dano. Novas opções: Passo Desvanecedor (Invisível até o início do próximo turno ou até atacar/conjurar) e Passo Terrível (criaturas a até 1,5m do espaço deixado: salv. Sabedoria ou 2d10 Psíquico)." },
    { nivel: 10, nome: "Defesas Sedutoras", descricao: "Imunidade à condição Enfeitiçado. Reação (após ser atingido por criatura à vista): reduz o dano pela metade e força o atacante a salv. Sabedoria; se falhar, sofre dano Psíquico igual ao dano que você sofreu. 1×/Descanso Longo, ou gaste espaço de Magia de Pacto para restaurar." },
    { nivel: 14, nome: "Magia Sedutora", descricao: "Imediatamente após conjurar magia de Encantamento ou Ilusão usando ação e espaço, pode conjurar Passo Nebuloso como parte da mesma ação, sem gastar espaço." }
  ]
});

/* ---------- PATRONO CELESTIAL ---------- */
window.registrarSubclasse({
  id: "patrono-celestial", nome: "Patrono Celestial", classeId: "bruxo", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 10, 14],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Auxílio","Chama Sagrada","Curar Ferimentos","Luz","Raio Guia","Restauração Menor"] },
    { nivel: 5, magias: ["Luz do Dia","Revivificar"] },
    { nivel: 7, magias: ["Defensor da Fé","Muralha de Fogo"] },
    { nivel: 9, magias: ["Convocar Celestial","Restauração Maior"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Luz Medicinal", descricao: "Reserva de d6s = 1 + nível de Bruxo. Ação Bônus: cura a si ou criatura à vista a até 18m gastando dados (máx. por uso = mod. Carisma, mín. 1). Recupera todos em Descanso Longo." },
    { nivel: 6, nome: "Alma Radiante", descricao: "Resistência a dano Radiante. 1×/turno ao conjurar magia que cause dano Ígneo ou Radiante, adiciona mod. Carisma ao dano contra um dos alvos." },
    { nivel: 10, nome: "Resiliência Celestial", descricao: "Ao usar Astúcia Mágica ou completar Descanso Curto/Longo: você ganha PV Temporários = nível de Bruxo + mod. Carisma. Até 5 criaturas à vista também ganham metade do nível de Bruxo + mod. Carisma em PV Temporários." },
    { nivel: 14, nome: "Vingança Calcinante", descricao: "Quando você ou aliado a até 18m está prestes a fazer Salvaguarda Contra Morte: criatura recupera metade dos PV máximos e pode encerrar Caído. Criaturas à escolha em até 9m da criatura sofrem dano Radiante = 2d8 + mod. Carisma e ficam Cegas até o fim do turno atual. 1×/Descanso Longo." }
  ]
});

/* ---------- PATRONO O GRANDE ANTIGO ---------- */
window.registrarSubclasse({
  id: "patrono-grande-antigo", nome: "Patrono O Grande Antigo", classeId: "bruxo", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 10, 14],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Detectar Pensamentos","Força Espectral","Gargalhada Nefasta de Tasha","Sussurros Dissonantes"] },
    { nivel: 5, magias: ["Clarividência","Fome de Hadar"] },
    { nivel: 7, magias: ["Confusão","Invocar Aberração"] },
    { nivel: 9, magias: ["Modificar Memória","Telecinese"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Magias Psíquicas", descricao: "Ao conjurar magia de Bruxo que cause dano, pode mudar o tipo de dano para Psíquico. Pode conjurar magias de Bruxo de Encantamento ou Ilusão sem componentes Verbais ou Somáticos." },
    { nivel: 3, nome: "Mente Desperta", descricao: "Ação Bônus: escolha criatura à vista a até 9m. Comunicação telepática a até mod. Carisma × 1,5 km (mín. 1,5 km) por nível de Bruxo em minutos. Pode encerrar para se conectar com outra criatura." },
    { nivel: 6, nome: "Combatente Clarividente", descricao: "Ao formar ligação telepática com Mente Desperta, pode forçar salv. Sabedoria (CD magia). Se falhar: Desvantagem em ataques contra você e você tem Vantagem em ataques contra ela enquanto durar a ligação. 1×/Descanso Curto/Longo ou gastando espaço de Magia de Pacto." },
    { nivel: 10, nome: "Danação Mística", descricao: "Sempre tem Danação preparada. Ao conjurá-la e escolher atributo, o alvo também tem Desvantagem em salvaguardas desse atributo pela duração." },
    { nivel: 10, nome: "Escudo Mental", descricao: "Pensamentos não podem ser lidos por telepatia ou outros meios sem seu consentimento. Resistência a dano Psíquico; quando criatura causa dano Psíquico a você, sofre a mesma quantidade." },
    { nivel: 14, nome: "Criar Servo", descricao: "Ao conjurar Invocar Aberração, pode modificá-la para não exigir Concentração; duração vira 1 min e a Aberração ganha PV Temporários = nível de Bruxo + mod. Carisma. Na primeira vez a cada turno que a Aberração atinge criatura sob sua Danação, causa dano Psíquico adicional igual ao dano bônus da magia." }
  ]
});

/* ---------- PATRONO ÍNFERO ---------- */
window.registrarSubclasse({
  id: "patrono-infero", nome: "Patrono Ínfero", classeId: "bruxo", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 10, 14],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Comando","Mãos Flamejantes","Raio Ardente","Sugestão"] },
    { nivel: 5, magias: ["Bola de Fogo","Nuvem Fétida"] },
    { nivel: 7, magias: ["Escudo Ardente","Muralha de Fogo"] },
    { nivel: 9, magias: ["Missão","Praga de Insetos"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Bênção do Tenebroso", descricao: "Ao reduzir inimigo a 0 PV, ganha PV Temporários = mod. Carisma + nível de Bruxo (mín. 1). Também recebe se alguém reduzir inimigo a até 3m a 0 PV." },
    { nivel: 6, nome: "A Sorte do Próprio Tenebroso", descricao: "Ao realizar teste de atributo ou salvaguarda, pode adicionar 1d10 (após ver a jogada, antes do efeito). Usos = mod. Carisma (mín. 1), máx. 1×/jogada. Recupera em Descanso Longo." },
    { nivel: 10, nome: "Resistência Ínfera", descricao: "Ao completar Descanso Curto/Longo, escolha um tipo de dano (exceto Energético). Resistência a esse tipo até escolher outro." },
    { nivel: 14, nome: "Lançar no Inferno", descricao: "1×/turno ao acertar com ataque: alvo faz salv. Carisma (CD magia). Se falhar: 8d10 Psíquico (se não for Ínfero) e fica Incapacitado até o fim do próximo turno, retornando ao espaço que ocupava (ou o mais próximo). 1×/Descanso Longo, ou gaste espaço de Magia de Pacto para restaurar." }
  ]
});

console.log('[DND] Subclasses do Bruxo carregadas.');