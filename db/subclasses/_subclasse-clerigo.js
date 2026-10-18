/* ============================================================
   SUBCLASSES — CLÉRIGO (Domínios)
   Fonte: Livro do Jogador (2024)
   Todas: características em 3, 6, 17
   ============================================================ */

/* ---------- DOMÍNIO DA GUERRA ---------- */
window.registrarSubclasse({
  id: "dominio-guerra", nome: "Domínio da Guerra", classeId: "clerigo", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 17],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Arma Espiritual","Arma Mágica","Escudo da Fé","Raio Guia"] },
    { nivel: 5, magias: ["Guardiões Espirituais","Manto do Cruzado"] },
    { nivel: 7, magias: ["Escudo Ardente","Movimentação Livre"] },
    { nivel: 9, magias: ["Golpe de Arço","Paralisar Monstro"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Ataque Direcionado", descricao: "Reação: quando você ou criatura a até 9m erra uma jogada de ataque, gaste um uso de Canalizar Divindade para dar +10 à jogada, potencialmente virando acerto." },
    { nivel: 3, nome: "Sacerdote da Guerra", descricao: "Ação Bônus: um ataque com arma ou Ataque Desarmado. Usos = mod. Sabedoria (mín. 1); recupera em Descanso Curto/Longo." },
    { nivel: 6, nome: "Bênção do Deus da Guerra", descricao: "Gaste um uso de Canalizar Divindade para conjurar Arma Espiritual ou Escudo da Fé sem espaço e sem Concentração. Dura 1 min; encerra se conjurar novamente, ficar Incapacitado ou morrer." },
    { nivel: 17, nome: "Avatar da Guerra", descricao: "Resistência a dano Contundente, Cortante e Perfurante." }
  ]
});

/* ---------- DOMÍNIO DA LUZ ---------- */
window.registrarSubclasse({
  id: "dominio-luz", nome: "Domínio da Luz", classeId: "clerigo", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 17],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Fogo das Fadas","Mãos Flamejantes","Raio Ardente","Ver o Invisível"] },
    { nivel: 5, magias: ["Bola de Fogo","Luz do Dia"] },
    { nivel: 7, magias: ["Muralha de Fogo","Olho Arcano"] },
    { nivel: 9, magias: ["Coluna de Chamas","Vidência"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Brilho do Amanhecer", descricao: "Ação Usar Magia: gasta Canalizar Divindade para emitir luz em Emanação de 9m. Dissipa Escuridão mágica na área. Cada criatura à escolha faz salv. Constituição, sofrendo 2d10 + nível de Clérigo de dano Radiante em falha, ou metade em sucesso." },
    { nivel: 3, nome: "Labareda Protetora", descricao: "Reação: quando criatura à vista a até 9m faz jogada de ataque, impõe Desvantagem. Usos = mod. Sabedoria (mín. 1); recupera em Descanso Longo." },
    { nivel: 6, nome: "Labareda Protetora Aprimorada", descricao: "Recupera usos de Labareda Protetora em Descanso Curto/Longo. Ao usar Labareda Protetora, pode conceder ao alvo atacado PV Temporários = 2d6 + mod. Sabedoria." },
    { nivel: 17, nome: "Coroa de Luz", descricao: "Ação Usar Magia: aura de luz solar por 1 min (ou até encerrar). Emite Luz Plena em 18m + Meia-luz por mais 9m. Inimigos na Luz Plena têm Desvantagem em salvaguardas contra seu Brilho do Amanhecer e magias que causem dano Ígneo ou Radiante. Usos = mod. Sabedoria (mín. 1); recupera em Descanso Longo." }
  ]
});

/* ---------- DOMÍNIO DA TRAPAÇA ---------- */
window.registrarSubclasse({
  id: "dominio-trapaca", nome: "Domínio da Trapaça", classeId: "clerigo", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 17],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Disfarçar-se","Enfeitiçar Pessoa","Invisibilidade","Passo Sem Rastro"] },
    { nivel: 5, magias: ["Indetectável","Padrão Hipnótico"] },
    { nivel: 7, magias: ["Confusão","Porta Dimensional"] },
    { nivel: 9, magias: ["Dominar Pessoa","Modificar Memória"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Bênção do Trapaceiro", descricao: "Ação Usar Magia: você ou criatura voluntária a até 9m ganha Vantagem em testes de Destreza (Furtividade). Dura até Descanso Longo ou até usar novamente." },
    { nivel: 3, nome: "Invocar Duplicidade", descricao: "Ação Bônus: gasta Canalizar Divindade para criar ilusão perfeita de si em espaço desocupado a até 9m. Dura 1 min ou até Incapacitado/encerrar. Pode conjurar magias como se estivesse no espaço da ilusão (usando seus sentidos); você e a ilusão a até 1,5m de criatura dão Vantagem em ataques contra ela; Ação Bônus: move a ilusão até 9m para espaço desocupado a até 36m." },
    { nivel: 6, nome: "Transposição do Trapaceiro", descricao: "Ao criar ou mover a ilusão de Invocar Duplicidade, você pode se teleportar trocando de lugar com ela." },
    { nivel: 17, nome: "Duplicidade Aprimorada", descricao: "A ilusão fica mais poderosa: Distração Compartilhada (aliados também têm Vantagem em ataques contra criatura a até 1,5m da ilusão) e Ilusão de Cura (ao encerrar, você ou criatura a até 1,5m recupera PV = nível de Clérigo)." }
  ]
});

/* ---------- DOMÍNIO DA VIDA ---------- */
window.registrarSubclasse({
  id: "dominio-vida", nome: "Domínio da Vida", classeId: "clerigo", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 17],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Auxílio","Bênção","Curar Ferimentos","Restauração Menor"] },
    { nivel: 5, magias: ["Palavra Curativa em Massa","Revivificar"] },
    { nivel: 7, magias: ["Aura de Vida","Proteção Contra a Morte"] },
    { nivel: 9, magias: ["Curar Ferimentos em Massa","Restauração Maior"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Discípulo da Vida", descricao: "Ao conjurar magia com espaço que restaure PV em criatura, essa criatura recupera PV adicionais no turno da conjuração. Bônus = 2 + nível do espaço de magia." },
    { nivel: 3, nome: "Preservar a Vida", descricao: "Ação Usar Magia: gasta Canalizar Divindade para restaurar PV = 5 × nível de Clérigo. Distribua entre criaturas Sangrando a até 9m (pode se incluir). Nenhuma criatura pode receber mais que metade dos PV máximos." },
    { nivel: 6, nome: "Curandeiro Abençoado", descricao: "Ao conjurar magia com espaço que restaure PV em outra criatura, você recupera PV = 2 + círculo do espaço." },
    { nivel: 17, nome: "Cura Suprema", descricao: "Ao usar magia ou Canalizar Divindade para restaurar PV, não jogue dados — use o maior resultado de cada dado. Ex: 2d6 → 12." }
  ]
});

console.log('[DND] Subclasses do Clérigo carregadas.');