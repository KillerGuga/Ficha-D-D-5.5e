/* ============================================================
   SUBCLASSES — LADINO
   Fonte: Livro do Jogador (2024)
   Todas: características em 3, 9, 13, 17 (com exceção do Trapaceiro Arcano)
   ============================================================ */

/* ---------- ADAGA ESPIRITUAL ---------- */
window.registrarSubclasse({
  id:"adaga-espiritual", nome:"Adaga Espiritual", classeId:"ladino", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 9, 13, 17],
  tabelaDadosEnergia: [
    { nivel:3,  dado:"d6",  quantidade:4 }, { nivel:5,  dado:"d8",  quantidade:6 },
    { nivel:9,  dado:"d8",  quantidade:8 }, { nivel:11, dado:"d10", quantidade:8 },
    { nivel:13, dado:"d10", quantidade:10 }, { nivel:17, dado:"d12", quantidade:12 }
  ],
  caracteristicas: [
    { nivel:3, nome:"Lâminas Psíquicas", descricao:"Ao executar a ação Atacar ou Ataque de Oportunidade, manifesta Lâmina Psíquica em mão livre. Arma: Simples Corpo a Corpo, 1d6 Psíquico + mod. atributo, Acuidade, Arremesso (18/36 m), Maestria Afligir. Desaparece após o ataque. Após atacar com uma no turno, pode fazer um ataque de Ação Bônus com uma segunda lâmina (dano 1d4)." },
    { nivel:3, nome:"Poder Psiónico", descricao:"Dados de Energia Psionica (ver tabela). Recupera 1 dado em Descanso Curto; todos em Descanso Longo. Aptidão Reforçada Psiquicamente: ao falhar em teste com perícia/ferramenta proficiente, joga um dado e adiciona ao resultado (gasta só se virar sucesso). Sussurros Psíquicos: ação Usar Magia — até BP criaturas à vista ganham telepatia (1,5 km) pelo resultado do dado em horas. 1º uso do dia é grátis." },
    { nivel:9, nome:"Lâminas da Alma", descricao:"Golpes Teleguiados: ao errar com Lâmina Psíquica, joga um dado e adiciona ao ataque (gasta se virar acerto). Teleporte Psíquico: Ação Bônus — gasta um dado, joga e arremessa a lâmina em espaço desocupado a até 3 m × resultado; teleporta-se para lá." },
    { nivel:13, nome:"Véu Psíquico", descricao:"Ação Usar Magia: Invisível por 1 h ou até encerrar. Encerra se causar dano ou forçar salvaguarda. 1×/Descanso Longo, ou gaste um Dado de Energia Psionica para restaurar." },
    { nivel:17, nome:"Rasgar Mente", descricao:"Ao causar dano de Ataque Furtivo com Lâmina Psíquica: salv. Sabedoria (CD = 8 + Des + BP) ou Atordoado 1 min (repete). 1×/Descanso Longo, ou gaste 3 Dados de Energia Psionica." }
  ]
});

/* ---------- ASSASSINO ---------- */
window.registrarSubclasse({
  id:"assassino", nome:"Assassino", classeId:"ladino", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 9, 13, 17],
  caracteristicas: [
    { nivel:3, nome:"Assassinar", descricao:"Vantagem em Iniciativa. Durante a primeira rodada de cada combate, tem Vantagem em ataques contra criaturas que ainda não agiram. Se o Ataque Furtivo acertar qualquer alvo na primeira rodada, sofre dano adicional do tipo da arma = nível de Ladino." },
    { nivel:3, nome:"Ferramentas de Assassino", descricao:"Proficiência com Kit de Disfarce e Kit de Veneno." },
    { nivel:9, nome:"Especialista em Infiltração", descricao:"Mimetismo Magistral: após 1 h estudando, imita perfeitamente fala/caligrafia de outra pessoa. Mira Móvel: ao usar Mira Firme, Deslocamento não é reduzido a 0." },
    { nivel:13, nome:"Armas Venenosas", descricao:"Ao usar Envenenar do Golpe Astuto: alvo também sofre 2d6 Venenoso sempre que falhar na salvaguarda (ignora Resistência a Venenoso)." },
    { nivel:17, nome:"Golpe Mortal", descricao:"Ao acertar com Ataque Furtivo na 1ª rodada de combate: alvo faz salv. Constituição (CD = 8 + Des + BP) ou dano do ataque é dobrado." }
  ]
});

/* ---------- LADRÃO ---------- */
window.registrarSubclasse({
  id:"ladrao", nome:"Ladrão", classeId:"ladino", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 9, 13, 17],
  caracteristicas: [
    { nivel:3, nome:"Andarilho de Telhados", descricao:"Deslocamento de Escalada = Deslocamento. Distância de salto usa Destreza em vez de Força." },
    { nivel:3, nome:"Mão Leve", descricao:"Ação Bônus: Prestidigitação (teste de Destreza (Prestidigitação) para abrir fechadura/desarmar armadilha com Ferramentas de Ladrão, ou roubar bolso) OU Usar Objeto/Usar Magia com item mágico que exija essa ação." },
    { nivel:9, nome:"Furtividade Suprema", descricao:"Novo Golpe Astuto: Ataque Escondido (1d6) — se estiver Invisível pela ação Esconder, este ataque não encerra essa condição se você encerrar o turno atrás de Cobertura de Três Quartos ou Total." },
    { nivel:13, nome:"Usar Dispositivo Mágico", descricao:"Sintonização: até 4 itens mágicos. Cargas: ao usar propriedade que gaste cargas, joga 1d6; em 6, não gasta. Pergaminhos: usa qualquer Pergaminho Mágico com Inteligência. Truques/1º círculo confiáveis; círculos maiores exigem teste de Inteligência (Arcanismo) CD 10 + círculo (falha → desintegra)." },
    { nivel:17, nome:"Reflexos de Ladrão", descricao:"Em combate, realiza dois turnos na primeira rodada: um na Iniciativa normal, outro em Iniciativa −10." }
  ]
});

/* ---------- TRAPACEIRO ARCANO ---------- */
window.registrarSubclasse({
  id:"trapaceiro-arcano", nome:"Trapaceiro Arcano", classeId:"ladino", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 9, 13, 17],
  conjuracao: {
    modelo:"terco", atributo:"Inteligência", foco:"Foco Arcano",
    listasPermitidas:["Mago"],
    truquesConhecidos: [{ nivel:3, valor:3 }, { nivel:10, valor:4 }],
    // Truques obrigatórios: Mãos Mágicas + 2 da lista de Mago
    truquesFixos: ["Mãos Mágicas"],
    magiasPreparadas: [
      { nivel:3, valor:3 }, { nivel:4, valor:4 }, { nivel:5, valor:4 },
      { nivel:6, valor:4 }, { nivel:7, valor:5 }, { nivel:8, valor:6 },
      { nivel:9, valor:6 }, { nivel:10, valor:7 }, { nivel:11, valor:8 },
      { nivel:12, valor:8 }, { nivel:13, valor:9 }, { nivel:14, valor:10 },
      { nivel:15, valor:10 }, { nivel:16, valor:11 }, { nivel:17, valor:11 },
      { nivel:18, valor:11 }, { nivel:19, valor:12 }, { nivel:20, valor:13 }
    ],
    espacosDeMagia: [
      { nivel:3,  slots:{1:2} }, { nivel:4,  slots:{1:3} }, { nivel:5,  slots:{1:3} },
      { nivel:6,  slots:{1:3} }, { nivel:7,  slots:{1:4, 2:2} }, { nivel:8,  slots:{1:4, 2:2} },
      { nivel:9,  slots:{1:4, 2:2} }, { nivel:10, slots:{1:4, 2:3} }, { nivel:11, slots:{1:4, 2:3} },
      { nivel:12, slots:{1:4, 2:3} }, { nivel:13, slots:{1:4, 2:3, 3:2} }, { nivel:14, slots:{1:4, 2:3, 3:2} },
      { nivel:15, slots:{1:4, 2:3, 3:2} }, { nivel:16, slots:{1:4, 2:3, 3:3} }, { nivel:17, slots:{1:4, 2:3, 3:3} },
      { nivel:18, slots:{1:4, 2:3, 3:3} }, { nivel:19, slots:{1:4, 2:3, 3:3, 4:1} }, { nivel:20, slots:{1:4, 2:3, 3:3, 4:1} }
    ]
  },
  caracteristicas: [
    { nivel:3, nome:"Conjuração", descricao:"Truques: Mãos Mágicas + 2 da lista de Mago (→ +1 no nv. 10). Foco: Foco Arcano. Pode substituir 1 truque ao subir de nível (exceto Mãos Mágicas)." },
    { nivel:3, nome:"Mãos Mágicas Ligeiras", descricao:"Ao conjurar Mãos Mágicas: pode conjurá-la como Ação Bônus, tornar a mão Invisível, controlá-la com Ação Bônus e fazer testes de Destreza (Prestidigitação) através dela." },
    { nivel:9, nome:"Emboscada Mágica", descricao:"Se você estiver Invisível ao conjurar magia em uma criatura, ela tem Desvantagem na salvaguarda contra essa magia no mesmo turno." },
    { nivel:13, nome:"Trapaceiro Versátil", descricao:"Ao usar Golpe Astuto em Ataque Furtivo, também pode usar a opção em outra criatura a até 1,5 m da mão espectral." },
    { nivel:17, nome:"Ladrão de Magias", descricao:"Reação: quando criatura conjura magia que te afeta, force salv. Inteligência (CD sua). Se falhar: anula o efeito em você e rouba a magia (se for de 1º círculo ou de círculo que você possa conjurar, não precisa ser de Mago). A magia fica preparada para você por 8 h; a criatura não pode conjurá-la nesse tempo. 1×/Descanso Longo." }
  ]
});

console.log('[DND] Subclasses do Ladino carregadas.');