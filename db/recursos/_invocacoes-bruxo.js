/* ============================================================
   INVOCAÇÕES MÍSTICAS — BRUXO
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.DND_DATA = window.DND_DATA || {};
window.DND_DATA.INVOCACOES = window.DND_DATA.INVOCACOES || [];

window.registrarInvocacao = function (inv) {
  if (!inv || !inv.id) return console.warn('[DND] Invocação sem id:', inv);
  const idx = window.DND_DATA.INVOCACOES.findIndex(i => i.id === inv.id);
  if (idx >= 0) window.DND_DATA.INVOCACOES[idx] = inv;
  else          window.DND_DATA.INVOCACOES.push(inv);
};

window.registrarInvocacao({ id:"armadura-de-sombras", nome:"Armadura de Sombras", prerequisitos:null, repetivel:false,
  descricao:"Você pode conjurar Armadura Arcana em si mesmo sem gastar um espaço de magia." });

window.registrarInvocacao({ id:"explosao-agonizante", nome:"Explosão Agonizante", prerequisitos:"Bruxo nv. 2+, um truque de Bruxo que cause dano", repetivel:true,
  descricao:"Escolha um truque de Bruxo que cause dano. Adicione seu mod. de Carisma às jogadas de dano dessa magia. Pode escolher um truque diferente a cada aquisição." });

window.registrarInvocacao({ id:"explosao-repulsiva", nome:"Explosão Repulsiva", prerequisitos:"Bruxo nv. 2+, um truque de Bruxo com jogada de ataque que cause dano", repetivel:true,
  descricao:"Escolha um truque de Bruxo com jogada de ataque. Ao atingir criatura Grande ou menor, pode empurrá-la 3 m para longe. Pode escolher um truque diferente a cada aquisição." });

window.registrarInvocacao({ id:"investimento-mestre-corrente", nome:"Investimento do Mestre da Corrente", prerequisitos:"Bruxo nv. 5+, Pacto da Corrente", repetivel:false,
  descricao:"Ao conjurar Convocar Familiar, o familiar ganha: Deslocamento de Voo ou Natação (escolha) de 12 m; atacar como Ação Bônus sob seu comando; usa sua CD para evitar magia; pode causar dano Necrótico/Radiante em vez de Contundente/Cortante/Perfurante; Reação para conceder Resistência ao dano sofrido." });

window.registrarInvocacao({ id:"lamento-das-sepulturas", nome:"Lamento das Sepulturas", prerequisitos:"Bruxo nv. 7+", repetivel:false,
  descricao:"Você pode conjurar Falar com Mortos sem gastar um espaço de magia." });

window.registrarInvocacao({ id:"lamina-devoradora", nome:"Lâmina Devoradora", prerequisitos:"Bruxo nv. 12+, Lâmina Sedenta", repetivel:false,
  descricao:"O Ataque Extra da sua Lâmina Sedenta concede dois ataques extras em vez de um." });

window.registrarInvocacao({ id:"lamina-sedenta", nome:"Lâmina Sedenta", prerequisitos:"Bruxo nv. 5+, Pacto da Lâmina", repetivel:false,
  descricao:"Você adquire a característica Ataque Extra apenas para sua arma de pacto: ataca duas vezes em vez de uma ao usar a ação Atacar." });

window.registrarInvocacao({ id:"lanca-mistica", nome:"Lança Mística", prerequisitos:"Bruxo nv. 2+, um truque de Bruxo que cause dano", repetivel:true,
  descricao:"Escolha um truque de Bruxo que cause dano e tenha alcance de 3 m ou mais. Ao conjurá-lo, o alcance aumenta em 9 m × seu nível de Bruxo. Pode escolher um truque diferente a cada aquisição." });

window.registrarInvocacao({ id:"licoes-dos-grandes-antigos", nome:"Lições dos Grandes Antigos", prerequisitos:"Bruxo nv. 2+", repetivel:true,
  descricao:"Você recebe um talento de Origem à sua escolha. Pode escolher um talento diferente a cada aquisição." });

window.registrarInvocacao({ id:"mascara-das-muitas-faces", nome:"Máscara das Muitas Faces", prerequisitos:"Bruxo nv. 2+", repetivel:false,
  descricao:"Você pode conjurar Disfarçar-se sem gastar um espaço de magia." });

window.registrarInvocacao({ id:"mente-mistica", nome:"Mente Mística", prerequisitos:null, repetivel:false,
  descricao:"Você tem Vantagem em salvaguardas de Constituição para manter a Concentração." });

window.registrarInvocacao({ id:"mestre-das-infindaveis-formas", nome:"Mestre das Infindáveis Formas", prerequisitos:"Bruxo nv. 5+", repetivel:false,
  descricao:"Você pode conjurar Alterar-se sem gastar um espaço de magia." });

window.registrarInvocacao({ id:"olhar-de-duas-mentes", nome:"Olhar de Duas Mentes", prerequisitos:"Bruxo nv. 5+", repetivel:false,
  descricao:"Ação Bônus: toque criatura voluntária e perceba através dos sentidos dela até o fim do seu próximo turno. Mantenha com Ação Bônus em turnos subsequentes; enquanto mantida, você se beneficia dos sentidos especiais dela e pode conjurar magias como se estivesse no espaço dela (se estiverem a até 18 m)." });

window.registrarInvocacao({ id:"pacto-da-corrente", nome:"Pacto da Corrente", prerequisitos:null, repetivel:false,
  descricao:"Aprende Convocar Familiar; pode conjurá-la como ação Usar Magia sem gastar espaço. Escolha formas normais ou especiais: Cobra Peçonhenta, Diabrete, Esfinge Maravilhosa, Esqueleto, Pseudodragão, Quasit, Slaad Girino, Sprite. Ao executar a ação Atacar, pode renunciar a um ataque seu para o familiar atacar como Reação dele." });

window.registrarInvocacao({ id:"pacto-da-lamina", nome:"Pacto da Lâmina", prerequisitos:null, repetivel:false,
  descricao:"Ação Bônus: conjure uma arma de pacto (arma Corpo a Corpo Simples ou Marcial à sua escolha com a qual se vincula) ou crie vínculo com arma mágica tocada (não pode ser sintonizada por outra pessoa). Tem proficiência com ela; pode usá-la como Foco de Conjuração; use mod. Carisma em jogadas de ataque e dano; dano pode ser Necrótico, Psíquico ou Radiante. Vínculo encerra se reativar, ficar 1 min longe ou você morrer." });

window.registrarInvocacao({ id:"pacto-do-tomo", nome:"Pacto do Tomo", prerequisitos:null, repetivel:false,
  descricao:"Ao final de um Descanso Curto ou Longo, conjure um Livro das Sombras. Escolha 3 truques e 2 magias de 1º círculo com marcador Ritual (de qualquer lista). Ficam sempre preparadas como magias de Bruxo enquanto você segura o livro. Pode usá-lo como Foco de Conjuração." });

window.registrarInvocacao({ id:"passo-ascendente", nome:"Passo Ascendente", prerequisitos:"Bruxo nv. 5+", repetivel:false,
  descricao:"Você pode conjurar Levitação em si mesmo sem gastar um espaço de magia." });

window.registrarInvocacao({ id:"presente-das-profundezas", nome:"Presente das Profundezas", prerequisitos:"Bruxo nv. 5+", repetivel:false,
  descricao:"Você pode respirar debaixo d'água e adquire Deslocamento de Natação igual ao Deslocamento. Conjura Respirar na Água uma vez sem espaço (recupera em Descanso Longo)." });

window.registrarInvocacao({ id:"presente-dos-protetores", nome:"Presente dos Protetores", prerequisitos:"Bruxo nv. 9+, Pacto do Tomo", repetivel:false,
  descricao:"Uma nova página aparece em seu Livro das Sombras. Com sua permissão, criaturas escrevem seus nomes nela (máx. = mod. Carisma, mín. 1). Quando uma criatura nomeada é reduzida a 0 PV sem morrer, ela fica com 1 PV. 1×/Descanso Longo por magia. Pode apagar um nome com ação Usar Magia." });

window.registrarInvocacao({ id:"punicao-mistica", nome:"Punição Mística", prerequisitos:"Bruxo nv. 5+, Pacto da Lâmina", repetivel:false,
  descricao:"1×/turno ao acertar com arma de pacto: gaste espaço de Magia de Pacto para causar +1d8 Energético + 1d8 por círculo do espaço, e pode impor Caído se o alvo for Enorme ou menor." });

window.registrarInvocacao({ id:"salto-sobrenatural", nome:"Salto Sobrenatural", prerequisitos:"Bruxo nv. 2+", repetivel:false,
  descricao:"Você pode conjurar Salto em si mesmo sem gastar um espaço de magia." });

window.registrarInvocacao({ id:"sorvedouro-de-vida", nome:"Sorvedouro de Vida", prerequisitos:"Bruxo nv. 9+, Pacto da Lâmina", repetivel:false,
  descricao:"1×/turno ao acertar com arma de pacto: cause +1d6 Necrótico/Psíquico/Radiante e gaste um Dado de Pontos de Vida para recuperar PV = resultado + mod. Constituição (mín. 1)." });

window.registrarInvocacao({ id:"uno-com-as-sombras", nome:"Uno com as Sombras", prerequisitos:"Bruxo nv. 5+", repetivel:false,
  descricao:"Em Meia-luz ou Escuridão, você pode conjurar Invisibilidade em si mesmo sem gastar um espaço de magia." });

window.registrarInvocacao({ id:"vigor-infero", nome:"Vigor Ínfero", prerequisitos:"Bruxo nv. 2+", repetivel:false,
  descricao:"Você pode conjurar Vitalidade Vazia em si mesmo sem gastar espaço. Recebe o número máximo de PV Temporários (sem jogar o dado)." });

window.registrarInvocacao({ id:"visao-da-bruxa", nome:"Visão da Bruxa", prerequisitos:"Bruxo nv. 15+", repetivel:false,
  descricao:"Você tem Visão Verdadeira com alcance de 9 m." });

window.registrarInvocacao({ id:"visao-diabolica", nome:"Visão Diabólica", prerequisitos:"Bruxo nv. 2+", repetivel:false,
  descricao:"Você vê normalmente em Meia-luz e Escuridão — mágicas e não mágicas — a até 36 m." });

window.registrarInvocacao({ id:"visoes-de-reinos-distantes", nome:"Visões de Reinos Distantes", prerequisitos:"Bruxo nv. 9+", repetivel:false,
  descricao:"Você pode conjurar Olho Arcano sem gastar um espaço de magia." });

window.registrarInvocacao({ id:"visoes-nebulosas", nome:"Visões Nebulosas", prerequisitos:"Bruxo nv. 2+", repetivel:false,
  descricao:"Você pode conjurar Imagem Silenciosa sem gastar um espaço de magia." });

console.log('[DND] Invocações Místicas carregadas:', window.DND_DATA.INVOCACOES.length);