/* ============================================================
   SUBCLASSES — BARDO
   Fonte: Livro do Jogador (2024)
   Todas: características em 3, 6, 14
   ============================================================ */

window.registrarSubclasse({
  id: "colegio-bravura",
  nome: "Colégio da Bravura",
  classeId: "bardo",
  fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 14],
  caracteristicas: [
    { nivel: 3, nome: "Inspiração em Combate", descricao: "Criatura com seu dado de Inspiração pode usá-lo: Defensivo (Reação, soma à CA contra um ataque) ou Ofensivo (soma ao dano após acertar)." },
    { nivel: 3, nome: "Treinamento Marcial", descricao: "Proficiência com armas Marciais, armaduras Médias e Escudos. Pode usar arma Simples ou Marcial como Foco de Conjuração de Bardo." },
    { nivel: 6, nome: "Ataque Extra", descricao: "Ataca duas vezes em vez de uma ao usar a ação Atacar. Pode trocar um ataque pela conjuração de um truque com tempo de conjuração de 1 ação." },
    { nivel: 14, nome: "Magia de Batalha", descricao: "Após conjurar magia com tempo de conjuração de 1 ação, pode fazer um ataque com arma como Ação Bônus." }
  ]
});

window.registrarSubclasse({
  id: "colegio-danca",
  nome: "Colégio da Dança",
  classeId: "bardo",
  fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 14],
  caracteristicas: [
    { nivel: 3, nome: "Ginga Fascinante", descricao: "Sem armadura nem Escudo: Vantagem em Carisma (Atuação) dançando; pode usar Destreza em Ataques Desarmados; dano Desarmado = dado de Inspiração + mod. Destreza; CA base = 10 + Des + Car; pode fazer Ataque Desarmado como parte da ação que gasta Inspiração." },
    { nivel: 6, nome: "Gingado Coordenado", descricao: "Ao jogar Iniciativa, gaste uso de Inspiração (sem Incapacitado); joga o dado: você e aliados a até 9m que possam ver/ouvir ganham bônus na Iniciativa igual ao resultado." },
    { nivel: 6, nome: "Movimento Inspirador", descricao: "Reação: quando inimigo à vista termina o turno a até 1,5m de você, gasta Inspiração para se mover até metade do Deslocamento; depois um aliado a até 9m pode fazer o mesmo com a Reação dele. Sem Ataques de Oportunidade." },
    { nivel: 14, nome: "Evasão Liderada", descricao: "Se for alvo de efeito com salv. Destreza por metade do dano, não sofre dano em sucesso e metade em falha. Compartilha com criaturas a até 1,5m. Requer não estar Incapacitado." }
  ]
});

window.registrarSubclasse({
  id: "colegio-conhecimento",
  nome: "Colégio do Conhecimento",
  classeId: "bardo",
  fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 14],
  caracteristicas: [
    { nivel: 3, nome: "Palavras de Interrupção", descricao: "Reação: quando criatura à vista a até 18m faz jogada de dano, teste ou ataque bem-sucedido, gaste Inspiração; joga o dado e subtrai do resultado." },
    { nivel: 3, nome: "Proficiências Bônus", descricao: "Proficiência em três perícias à sua escolha." },
    { nivel: 6, nome: "Descobertas Mágicas", descricao: "Aprende duas magias da lista de Clérigo, Druida ou Mago (truques ou de círculo que tenha espaço). Sempre preparadas; pode substituir uma ao subir de nível." },
    { nivel: 14, nome: "Perícia Inigualável", descricao: "Ao falhar em teste de atributo ou jogada de ataque, gaste Inspiração; joga o dado e soma ao d20. Se ainda falhar, não gasta o dado." }
  ]
});

window.registrarSubclasse({
  id: "colegio-glamour",
  nome: "Colégio do Glamour",
  classeId: "bardo",
  fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 14],
  caracteristicas: [
    { nivel: 3, nome: "Magia Fascinante", descricao: "Sempre tem Enfeitiçar Pessoa e Reflexos preparadas. Após conjurar magia de Encantamento/Ilusão com espaço, uma criatura à vista a até 18m faz salv. Sabedoria (CD magia) ou fica Amedrontada ou Enfeitiçada (escolha) 1 min (repete). 1×/Descanso Longo, ou gaste Inspiração para restaurar." },
    { nivel: 3, nome: "Manto de Inspiração", descricao: "Ação Bônus: usa Inspiração e escolhe até mod. Carisma criaturas a até 18m. Cada uma ganha PV Temporários = 2× resultado do dado e pode usar Reação para se mover até o Deslocamento sem provocar Ataques de Oportunidade." },
    { nivel: 6, nome: "Manto de Majestade", descricao: "Sempre tem Comando preparada. Ação Bônus: conjura Comando sem espaço e assume aparência sobrenatural por 1 min (concentração); pode conjurar Comando como Ação Bônus sem espaço durante esse tempo. Enfeitiçados falham automaticamente. 1×/Descanso Longo, ou gaste espaço de 3º+ para restaurar." },
    { nivel: 14, nome: "Majestade Inquebrável", descricao: "Ação Bônus: por 1 min (ou até Incapacitado), sempre que criatura te acertar com ataque pela primeira vez no turno, faz salv. Carisma (CD magia) ou o ataque falha. 1×/Descanso Curto/Longo." }
  ]
});

console.log('[DND] Subclasses do Bardo carregadas.');