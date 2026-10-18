/* ============================================================
   SUBCLASSES — GUERREIRO
   Fonte: Livro do Jogador (2024)
   Todas: características em 3, 7, 10, 15, 18
   ============================================================ */

/* ---------- CAMPEÃO ---------- */
window.registrarSubclasse({
  id: "campeao", nome: "Campeão", classeId: "guerreiro", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 7, 10, 15, 18],
  caracteristicas: [
    { nivel: 3,  nome: "Atleta Extraordinário", descricao: "Vantagem em Iniciativa e em testes de Força (Atletismo). Imediatamente após Acerto Crítico, move-se até metade do Deslocamento sem provocar Ataques de Oportunidade." },
    { nivel: 3,  nome: "Crítico Aprimorado", descricao: "Jogadas de ataque com armas e Ataques Desarmados obtêm Acerto Crítico com resultado 19 ou 20." },
    { nivel: 7,  nome: "Estilo de Luta Adicional", descricao: "Adquire outro talento da categoria Estilo de Luta." },
    { nivel: 10, nome: "Combatente Heroico", descricao: "Durante combate, ao começar o turno sem Inspiração Heroica, pode conceder a si mesmo." },
    { nivel: 15, nome: "Crítico Superior", descricao: "Jogadas de ataque com armas e Ataques Desarmados obtêm Acerto Crítico com resultado 18, 19 ou 20." },
    { nivel: 18, nome: "Sobrevivente", descricao: "Desafie a Morte: Vantagem em Salvaguardas Contra Morte; resultado 18–20 em Salvaguarda Contra Morte conta como 20. Regeneração Heroica: no início de cada turno, recupera 5 + mod. Constituição PV se estiver Sangrando e com 1+ PV." }
  ]
});

/* ---------- CAVALEIRO MÍSTICO ---------- */
window.registrarSubclasse({
  id: "cavaleiro-mistico", nome: "Cavaleiro Místico", classeId: "guerreiro", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 7, 10, 15, 18],
  conjuracao: {
    modelo: "terco",              // 1/3 de conjurador
    atributo: "Inteligência",
    foco: "Foco Arcano",
    listasPermitidas: ["Mago"],
    truquesConhecidos: [
      { nivel: 3, valor: 2 },
      { nivel: 10, valor: 3 }
    ],
    magiasPreparadas: [
      { nivel: 3, valor: 3 },  { nivel: 4, valor: 4 },  { nivel: 5, valor: 4 },
      { nivel: 6, valor: 4 },  { nivel: 7, valor: 5 },  { nivel: 8, valor: 6 },
      { nivel: 9, valor: 6 },  { nivel: 10, valor: 7 }, { nivel: 11, valor: 8 },
      { nivel: 12, valor: 8 }, { nivel: 13, valor: 9 }, { nivel: 14, valor: 10 },
      { nivel: 15, valor: 10 }, { nivel: 16, valor: 11 }, { nivel: 17, valor: 11 },
      { nivel: 18, valor: 11 }, { nivel: 19, valor: 12 }, { nivel: 20, valor: 13 }
    ],
    espacosDeMagia: [
      { nivel: 3,  slots: { 1: 2 } },
      { nivel: 4,  slots: { 1: 3 } },
      { nivel: 5,  slots: { 1: 3 } },
      { nivel: 6,  slots: { 1: 3 } },
      { nivel: 7,  slots: { 1: 4, 2: 2 } },
      { nivel: 8,  slots: { 1: 4, 2: 2 } },
      { nivel: 9,  slots: { 1: 4, 2: 2 } },
      { nivel: 10, slots: { 1: 4, 2: 3 } },
      { nivel: 11, slots: { 1: 4, 2: 3 } },
      { nivel: 12, slots: { 1: 4, 2: 3 } },
      { nivel: 13, slots: { 1: 4, 2: 3, 3: 2 } },
      { nivel: 14, slots: { 1: 4, 2: 3, 3: 2 } },
      { nivel: 15, slots: { 1: 4, 2: 3, 3: 2 } },
      { nivel: 16, slots: { 1: 4, 2: 3, 3: 3 } },
      { nivel: 17, slots: { 1: 4, 2: 3, 3: 3 } },
      { nivel: 18, slots: { 1: 4, 2: 3, 3: 3 } },
      { nivel: 19, slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
      { nivel: 20, slots: { 1: 4, 2: 3, 3: 3, 4: 1 } }
    ]
  },
  caracteristicas: [
    { nivel: 3,  nome: "Conjuração", descricao: "Foco: Foco Arcano. Truques: 2 (→3 no nv. 10), da lista de Mago. Pode substituir 1 truque ao subir de nível; pode substituir 1 magia preparada ao subir de nível." },
    { nivel: 3,  nome: "Vínculo com Arma", descricao: "Ritual de 1h (pode ser em Descanso Curto): vincula-se a uma arma tocada. Não pode ser desarmado se não estiver Incapacitado. Ação Bônus: teleporta a arma para sua mão se estiver no mesmo plano. Máx. 2 vínculos; pode invocar apenas 1 por Ação Bônus." },
    { nivel: 7,  nome: "Magia de Guerra", descricao: "Ao executar a ação Atacar, pode substituir um dos ataques pela conjuração de um truque de Mago com tempo de conjuração de 1 ação." },
    { nivel: 10, nome: "Golpe Místico", descricao: "Ao atingir criatura com ataque de arma, ela tem Desvantagem na próxima salvaguarda contra magia sua antes do fim do seu próximo turno." },
    { nivel: 15, nome: "Investida Mística", descricao: "Ao usar Surto de Ação, pode se teleportar até 9m para espaço desocupado à vista, antes ou depois da ação adicional." },
    { nivel: 18, nome: "Magia de Guerra Aprimorada", descricao: "Ao executar a ação Atacar, pode substituir dois ataques pela conjuração de uma magia de Mago de 1º ou 2º círculo com tempo de conjuração de 1 ação." }
  ]
});

/* ---------- COMBATENTE PSÍQUICO ---------- */
window.registrarSubclasse({
  id: "combatente-psiquico", nome: "Combatente Psíquico", classeId: "guerreiro", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 7, 10, 15, 18],
  tabelaDadosEnergia: [
    { nivel: 3,  dado: "d6",  quantidade: 4 },
    { nivel: 5,  dado: "d8",  quantidade: 6 },
    { nivel: 9,  dado: "d8",  quantidade: 8 },
    { nivel: 11, dado: "d10", quantidade: 8 },
    { nivel: 13, dado: "d10", quantidade: 10 },
    { nivel: 17, dado: "d12", quantidade: 12 }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Poder Psiónico", descricao: "Fonte de energia psionica representada por Dados de Energia Psionica (ver tabela). Recupera 1 dado em Descanso Curto; todos em Descanso Longo.\n• Golpe Psionico: 1×/turno, após acertar e causar dano a até 9m, gaste um dado para causar dano Energético = resultado + mod. Inteligência.\n• Movimento Telecinético: ação Usar Magia para mover objeto solto Grande ou menor, ou criatura voluntária, até 9m. 1×/Descanso Curto/Longo, ou gaste um dado.\n• Vínculo Protetivo: Reação quando você ou criatura à vista a até 9m sofre dano, gaste um dado para reduzir o dano pelo resultado + mod. Inteligência." },
    { nivel: 7, nome: "Adepto Telecinético", descricao: "Estocada Telecinética: ao causar dano com Golpe Psionico, pode forçar salv. Força (CD 8+Int+BP); falha = Caído ou transportado horizontalmente até 3m.\nSalto com Impulsão Psíquica: Ação Bônus, ganha Deslocamento de Voo = 2× Deslocamento até o fim do turno. 1×/Descanso Curto/Longo, ou gaste um dado." },
    { nivel: 10, nome: "Resguardo Mental", descricao: "Resistência a dano Psíquico. Ao iniciar o turno com Amedrontado ou Enfeitiçado, gaste um Dado de Energia Psionica (sem ação) para encerrar todas as condições no você que imponham esses efeitos." },
    { nivel: 15, nome: "Baluarte de Energia", descricao: "Ação Bônus: escolha até mod. Inteligência criaturas (incluindo você) a até 9m; cada uma tem Cobertura Parcial por 1 min ou até você ficar Incapacitado. 1×/Descanso Longo, ou gaste um dado para restaurar." },
    { nivel: 18, nome: "Mestre Telecinético", descricao: "Sempre tem Telecinese preparada. Pode conjurá-la sem espaço nem componentes; Inteligência é o atributo. Em cada turno em Concentração (incl. turno da conjuração), pode fazer um ataque com arma como Ação Bônus. 1×/Descanso Longo, ou gaste um dado." }
  ]
});

/* ---------- MESTRE DA BATALHA ---------- */
window.registrarSubclasse({
  id: "mestre-da-batalha", nome: "Mestre da Batalha", classeId: "guerreiro", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 7, 10, 15, 18],
  tabelaDadosSuperioridade: [
    { nivel: 3,  dado: "d8",  quantidade: 4, manobras: 3 },
    { nivel: 7,  dado: "d8",  quantidade: 5, manobras: 5 },
    { nivel: 10, dado: "d10", quantidade: 5, manobras: 7 },
    { nivel: 15, dado: "d10", quantidade: 6, manobras: 9 },
    { nivel: 18, dado: "d12", quantidade: 6, manobras: 9 }
  ],
  tabelaManobras: [
    { id:"aparar",              nome:"Aparar",              descricao:"Reação (ao receber dano corpo a corpo): gaste 1 Dado de Superioridade para reduzir o dano pelo resultado + mod. Força ou Destreza." },
    { id:"ataque-ameacador",    nome:"Ataque Ameaçador",    descricao:"Ao acertar criatura: gaste 1 Dado. Adicione o resultado ao dano. Alvo faz salv. Sabedoria ou fica Amedrontado até o fim do seu próximo turno." },
    { id:"ataque-de-varredura", nome:"Ataque de Varredura", descricao:"Ao acertar criatura com ataque corpo a corpo: gaste 1 Dado. Escolha outra criatura a até 1,5m do alvo e ao seu alcance. Se a jogada de ataque original atingi-la, ela sofre dano = resultado do Dado (mesmo tipo)." },
    { id:"ataque-estendido",    nome:"Ataque Estendido",    descricao:"Ação Bônus: gaste 1 Dado e executa a ação Correr. Se mover 1,5m em linha reta antes de atacar, pode adicionar o resultado ao dano." },
    { id:"ataque-para-distrair",nome:"Ataque para Distrair",descricao:"Ao acertar criatura: gaste 1 Dado. Adicione o resultado ao dano. A próxima jogada de ataque contra o alvo por outra criatura tem Vantagem antes do início do seu próximo turno." },
    { id:"ataque-preciso",      nome:"Ataque Preciso",      descricao:"Ao errar jogada de ataque: gaste 1 Dado e adicione o resultado à jogada, potencialmente virando acerto." },
    { id:"ataque-provocante",   nome:"Ataque Provocante",   descricao:"Ao acertar criatura: gaste 1 Dado. Adicione o resultado ao dano. Alvo faz salv. Sabedoria ou tem Desvantagem em ataques contra alvos que não sejam você até o fim do seu próximo turno." },
    { id:"avaliacao-tatica",    nome:"Avaliação Tática",    descricao:"Ao fazer teste de Inteligência (História ou Investigação) ou Sabedoria (Intuição): gaste 1 Dado e adicione o resultado." },
    { id:"contra-ataque",       nome:"Contra-ataque",       descricao:"Reação (quando criatura erra ataque corpo a corpo contra você): gaste 1 Dado para realizar um ataque corpo a corpo com arma ou Ataque Desarmado. Se acertar, adicione o resultado ao dano." },
    { id:"desarme",             nome:"Desarme",             descricao:"Ao acertar criatura: gaste 1 Dado. Adicione o resultado ao dano. Alvo faz salv. Força ou solta um objeto à sua escolha que esteja segurando." },
    { id:"emboscada",           nome:"Emboscada",           descricao:"Ao fazer teste de Destreza (Furtividade) ou jogar Iniciativa: gaste 1 Dado e adicione o resultado (não pode estar Incapacitado)." },
    { id:"encontrão",           nome:"Encontrão",           descricao:"Ao acertar criatura: gaste 1 Dado. Adicione o resultado ao dano. Se Grande ou menor, faz salv. Força ou é empurrada até 4,5m para longe." },
    { id:"finta",               nome:"Finta",               descricao:"Ação Bônus: gaste 1 Dado e escolha criatura a até 1,5m. Vantagem no próximo ataque contra ela neste turno. Se acertar, adicione o resultado ao dano." },
    { id:"gato-por-lebre",      nome:"Gato por Lebre",      descricao:"A até 1,5m de criatura no seu turno: gaste 1 Dado e troque de lugar com ela (se voluntária e não Incapacitada) gastando 1,5m de movimento. Sem Ataques de Oportunidade. Depois, role o Dado; até o início do próximo turno, você ou a outra criatura (à sua escolha) ganha bônus de CA = resultado." },
    { id:"golpe-do-comandante", nome:"Golpe do Comandante", descricao:"Ao executar a ação Atacar: substitua um ataque para instruir criatura voluntária que possa vê-lo/ouvi-lo. Ela usa a Reação dela para atacar com arma ou Ataque Desarmado, adicionando o resultado ao dano em caso de acerto." },
    { id:"manobrar",            nome:"Manobrar",            descricao:"Ao acertar criatura: gaste 1 Dado. Adicione o resultado ao dano e escolha criatura voluntária que possa vê-lo/ouvi-lo. Ela usa a Reação dela para se mover até metade do Deslocamento sem provocar Ataques de Oportunidade do alvo." },
    { id:"movimentacao-evasiva",nome:"Movimentação Evasiva",descricao:"Ação Bônus: gaste 1 Dado para executar a ação Desengajar. Jogue o dado: some o resultado à CA até o início do seu próximo turno." },
    { id:"presenca-de-autoridade", nome:"Presença de Autoridade", descricao:"Ao fazer teste de Carisma (Atuação, Intimidação ou Persuasão): gaste 1 Dado e adicione o resultado." },
    { id:"prostrar",            nome:"Prostrar",            descricao:"Ao acertar criatura: gaste 1 Dado. Adicione o resultado ao dano. Se Grande ou menor, faz salv. Força ou fica Caída." },
    { id:"recuperar-energia",   nome:"Recuperar Energia",   descricao:"Ação Bônus: gaste 1 Dado para encorajar aliado a até 9m que possa vê-lo/ouvi-lo. Ele ganha PV Temporários = resultado + metade do seu nível de Guerreiro (arred. baixo)." }
  ],
  caracteristicas: [
    { nivel: 3,  nome: "Estudioso da Guerra", descricao: "Proficiência com um tipo de Ferramentas de Artesão. Proficiência em uma perícia à escolha da lista de Guerreiro do nv. 1." },
    { nivel: 3,  nome: "Superioridade em Combate", descricao: "Aprende 3 manobras (ver tabelaManobras) e tem 4 Dados de Superioridade (d8). Recupera todos em Descanso Curto/Longo. Aprende mais 2 manobras nos nv. 7, 10 e 15; pode substituir uma manobra ao aprender novas. Ganha dados adicionais nos nv. 7 (5 dados), 10 (d10) e 15 (6 dados, d10 → d12 no nv. 18). Salvaguarda de manobra: CD = 8 + mod. Força ou Destreza (escolha) + BP." },
    { nivel: 7,  nome: "Conheça Seu Inimigo", descricao: "Ação Bônus: examine criatura à vista a até 9m; saiba se ela tem Imunidades, Resistências ou Vulnerabilidades — e quais. 1×/Descanso Longo, ou gaste 1 Dado de Superioridade para restaurar." },
    { nivel: 10, nome: "Superioridade em Combate Aprimorada", descricao: "Seu Dado de Superioridade vira d10." },
    { nivel: 15, nome: "Implacável", descricao: "1×/turno, ao usar uma manobra, pode rolar 1d8 e usar o resultado em vez de gastar um Dado de Superioridade." },
    { nivel: 18, nome: "Superioridade em Combate Suprema", descricao: "Seu Dado de Superioridade vira d12." }
  ]
});

console.log('[DND] Subclasses do Guerreiro carregadas.');