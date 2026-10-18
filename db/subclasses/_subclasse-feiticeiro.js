/* ============================================================
   SUBCLASSES — FEITICEIRO
   Fonte: Livro do Jogador (2024)
   Todas: características em 3, 6, 14, 18
   ============================================================ */

/* ---------- FEITIÇARIA ABERRANTE ---------- */
window.registrarSubclasse({
  id: "feiticeiro-aberrante", nome: "Feitiçaria Aberrante", classeId: "feiticeiro", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 14, 18],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Acalmar Emoções","Braços de Hadar","Detectar Pensamentos","Sussurros Dissonantes","Talho Mental"] },
    { nivel: 5, magias: ["Fome de Hadar","Remeter"] },
    { nivel: 7, magias: ["Invocar Aberração","Tentáculos Negros de Evard"] },
    { nivel: 9, magias: ["Ligação Telepática de Rary","Telecinese"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Fala Telepática", descricao: "Ação Bônus: escolha criatura à vista a até 9m. Comunicação telepática entre vocês a até 1,5 × mod. Carisma km (mín. 1,5 km), por nível de Feiticeiro em minutos. Encerra se conectar com outra criatura." },
    { nivel: 6, nome: "Defesas Psíquicas", descricao: "Resistência a dano Psíquico. Vantagem em salvaguardas para evitar ou encerrar as condições Amedrontado ou Enfeitiçado." },
    { nivel: 6, nome: "Feitiçaria Psiónica", descricao: "Ao conjurar magia de 1º+ da sua característica Magias Psiônicas, pode conjurá-la gastando um espaço de magia OU pontos de Feitiçaria iguais ao círculo da magia. Se usar pontos: sem componentes Verbais/Somáticos, sem componentes Materiais (exceto se consumidos ou com custo)." },
    { nivel: 14, nome: "Revelação em Carne", descricao: "Ação Bônus: gasta 1+ Ponto de Feitiçaria para alterar o corpo por 10 min. Cada ponto concede um dos benefícios: Adaptação Aquática (Natação = 2× Deslocamento, respira na água); Movimento Vermiforme (passa por espaço de 2,5 cm; 1,5m de movimento escapa de restrição não mágica ou Imobilizado); Ver o Invisível (vê criaturas Invisíveis a até 18m que não estejam atrás de Cobertura Total); Voo Reluzente (Deslocamento de Voo = Deslocamento, paira)." },
    { nivel: 18, nome: "Implosão de Distorção", descricao: "Ação Usar Magia: teleporta para espaço desocupado à vista a até 36m. Criaturas a até 9m do espaço abandonado: salv. Força (CD magia) ou 3d10 Energético e é puxada ao espaço abandonado (espaço desocupado mais próximo); metade do dano em sucesso. 1×/Descanso Longo, ou gaste 5 Pontos de Feitiçaria para restaurar." }
  ]
});

/* ---------- FEITIÇARIA DRACÔNICA ---------- */
window.registrarSubclasse({
  id: "feiticeiro-draconico", nome: "Feitiçaria Dracônica", classeId: "feiticeiro", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 14, 18],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Alterar-se","Comando","Orbe Cromático","Sopro de Dragão"] },
    { nivel: 5, magias: ["Medo","Voo"] },
    { nivel: 7, magias: ["Enfeitiçar Monstro","Olho Arcano"] },
    { nivel: 9, magias: ["Invocar Dragão","Lendas e Histórias"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Resiliência Dracônica", descricao: "PV máximos +3 (e +1 por nível de Feiticeiro subsequente). Sem armadura, CA base = 10 + mod. Destreza + mod. Carisma (escamas finas)." },
    { nivel: 6, nome: "Afinidade Elemental", descricao: "Escolha tipo de dano: Ácido, Elétrico, Gélido, Ígneo ou Venenoso. Resistência a esse tipo; ao conjurar magia que cause dano desse tipo, adiciona mod. Carisma a uma jogada de dano da magia." },
    { nivel: 14, nome: "Asas de Dragão", descricao: "Ação Bônus: asas dracônicas brotam por 1h (ou até encerrar). Deslocamento de Voo 18m. 1×/Descanso Longo, ou gaste 3 Pontos de Feitiçaria para restaurar." },
    { nivel: 18, nome: "Companheiro Dracônico", descricao: "Conjura Invocar Dragão sem componente Material. 1× sem gastar espaço (recupera em Descanso Longo). Ao conjurar, pode modificar para não exigir Concentração; duração vira 1 min." }
  ]
});

/* ---------- FEITIÇARIA MECÂNICA ---------- */
window.registrarSubclasse({
  id: "feiticeiro-mecanico", nome: "Feitiçaria Mecânica", classeId: "feiticeiro", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 14, 18],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Alarme","Auxílio","Proteção Contra o Bem e o Mal","Restauração Menor"] },
    { nivel: 5, magias: ["Dissipar Magia","Proteção contra Energia"] },
    { nivel: 7, magias: ["Invocar Constructo","Movimentação Livre"] },
    { nivel: 9, magias: ["Muralha de Energia","Restauração Maior"] }
  ],
  tabelaManifestacoes: [
    "Engrenagens espectrais pairam atrás de você.",
    "Os ponteiros de um relógio giram em seus olhos.",
    "Sua pele brilha com um reflexo acobreado.",
    "Equações flutuantes e objetos geométricos se sobrepõem ao seu corpo.",
    "Seu Foco de Conjuração assume temporariamente a forma de um mecanismo de relógio Minúsculo.",
    "O tique-taque das engrenagens ou o toque de um relógio podem ser ouvidos por você e pelos afetados por sua magia."
  ],
  caracteristicas: [
    { nivel: 3, nome: "Restaurar Equilíbrio", descricao: "Reação: quando criatura à vista a até 18m está prestes a jogar um d20 com Vantagem ou Desvantagem, cancela ambas. Usos = mod. Carisma (mín. 1); recupera em Descanso Longo." },
    { nivel: 6, nome: "Bastião da Lei", descricao: "Ação Usar Magia: gasta 1–5 Pontos de Feitiçaria para criar proteção em você ou criatura à vista a até 9m. Número de d8s = pontos gastos. Quando sofre dano, criatura pode gastar dados para reduzir. Dura até Descanso Longo ou novo uso." },
    { nivel: 14, nome: "Transe da Ordem", descricao: "Ação Bônus: estado por 1 min. Ataques contra você não podem ter Vantagem; em Testes de D20, resultado 9 ou menos conta como 10. 1×/Descanso Longo, ou gaste 5 Pontos de Feitiçaria para restaurar." },
    { nivel: 18, nome: "Cavalgada Mecânica", descricao: "Ação Usar Magia: espíritos da ordem em Cubo de 9m. Cura (restaura até 100 PV distribuídos entre criaturas à escolha no Cubo); Dissipar (cada magia de 6º círculo ou inferior em criaturas/objetos à escolha no Cubo se encerra); Reparar (objetos danificados por inteiro no Cubo são reparados). 1×/Descanso Longo, ou gaste 7 Pontos de Feitiçaria." }
  ]
});

/* ---------- FEITIÇARIA SELVAGEM ---------- */
window.registrarSubclasse({
  id: "feiticeiro-selvagem", nome: "Feitiçaria Selvagem", classeId: "feiticeiro", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 14, 18],
  caracteristicas: [
    { nivel: 3, nome: "Marés do Caos", descricao: "Vantagem em um Teste de D20 à sua escolha (antes de jogar). Recarrega após conjurar magia de Feiticeiro com espaço ou completar Descanso Longo. Ao conjurar magia de Feiticeiro com espaço antes do próximo Descanso Longo, ocorre automaticamente um Surto de Magia Selvagem e a capacidade de usar esta característica é recarregada." },
    { nivel: 3, nome: "Surto de Magia Selvagem", descricao: "1×/turno, após conjurar magia de Feiticeiro com espaço, jogue 1d20. Em 20, jogue na tabela Surto de Magia Selvagem (1d100). Efeitos de magia do surto ignoram Metamagia." },
    { nivel: 6, nome: "Distorcer a Sorte", descricao: "Reação: quando criatura à vista joga d20 para Teste de D20, gaste 1 Ponto de Feitiçaria e jogue 1d4; aplique como bônus ou penalidade (à sua escolha)." },
    { nivel: 14, nome: "Caos Controlado", descricao: "Ao jogar na tabela Surto de Magia Selvagem, jogue duas vezes e escolha o resultado." },
    { nivel: 18, nome: "Surto Controlado", descricao: "Após conjurar magia de Feiticeiro com espaço, pode escolher qualquer efeito da tabela Surto de Magia Selvagem em vez de jogar (exceto a linha final; se envolver jogada, você a realiza). 1×/Descanso Longo." }
  ]
});

console.log('[DND] Subclasses do Feiticeiro carregadas.');