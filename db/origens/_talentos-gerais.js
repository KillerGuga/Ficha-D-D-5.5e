/* ============================================================
   TALENTOS — CATEGORIA GERAL
   Fonte: Livro do Jogador (2024)
   Pré-requisito comum: Nível 4+ (com variações)
   ============================================================ */

/* ---------- Adepto Elemental (repetível) ---------- */
window.registrarTalento({
  id:"adepto-elemental", nome:"Adepto Elemental", categoria:"Geral",
  prerequisitos:"Nível 4+, Característica Conjuração ou Magia de Pacto", repetivel: true,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Int, Sab ou Car em 1 (máx. 20)." },
    { nome:"Domínio Elemental", descricao:"Escolha um tipo de dano: Ácido, Elétrico, Gélido, Ígneo ou Trovejante. Suas magias ignoram Resistência a esse tipo; ao rolar dano desse tipo, pode tratar qualquer 1 em um dado como 2. Pode escolher tipo diferente a cada aquisição." }
  ]
});

/* ---------- Agressor ---------- */
window.registrarTalento({
  id:"agressor", nome:"Agressor", categoria:"Geral",
  prerequisitos:"Nível 4+, Força ou Destreza 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Corrida Aprimorada", descricao:"Ao executar a ação Correr, Deslocamento +3m." },
    { nome:"Ataque em Investida", descricao:"Se mover 3m+ em linha reta antes de acertar ataque corpo a corpo: escolha +1d8 no dano OU empurra o alvo 3m (se não for maior que você). 1×/turno." }
  ]
});

/* ---------- Analítico ---------- */
window.registrarTalento({
  id:"analitico", nome:"Analítico", categoria:"Geral",
  prerequisitos:"Nível 4+, Inteligência ou Sabedoria 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Int ou Sab em 1 (máx. 20)." },
    { nome:"Observador Atento", descricao:"Escolha: Intuição, Investigação ou Percepção. Se não tiver proficiência, adquire; se já tiver, adquire Especialização." },
    { nome:"Pesquisa Rápida", descricao:"Pode executar a ação Procurar como Ação Bônus." }
  ]
});

/* ---------- Atirador Arcano ---------- */
window.registrarTalento({
  id:"atirador-arcano", nome:"Atirador Arcano", categoria:"Geral",
  prerequisitos:"Nível 4+, Característica Conjuração ou Magia de Pacto", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Int, Sab ou Car em 1 (máx. 20)." },
    { nome:"Ignorar Cobertura", descricao:"Jogadas de ataque com magias ignoram Cobertura Parcial e de Três Quartos." },
    { nome:"Conjuração à Queima-Roupa", descricao:"Estar a 1,5m de inimigo não impõe Desvantagem em ataques mágicos." },
    { nome:"Alcance Aumentado", descricao:"Ao conjurar magia com alcance 3m+ que exija jogada de ataque, alcance +18m." }
  ]
});

/* ---------- Atleta ---------- */
window.registrarTalento({
  id:"atleta", nome:"Atleta", categoria:"Geral",
  prerequisitos:"Nível 4+, Força ou Destreza 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Deslocamento de Escalada", descricao:"Deslocamento de Escalada = Deslocamento." },
    { nome:"Levantar", descricao:"Estando Caído, pode se reerguer com 1,5m de movimento." },
    { nome:"Saltar", descricao:"Pode fazer Salto em Distância ou Altura correndo após 1,5m de movimento." }
  ]
});

/* ---------- Ator ---------- */
window.registrarTalento({
  id:"ator", nome:"Ator", categoria:"Geral",
  prerequisitos:"Nível 4+, Carisma 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Car em 1 (máx. 20)." },
    { nome:"Personificação", descricao:"Enquanto disfarçado como pessoa real/fictícia, Vantagem em Carisma (Atuação ou Enganação) para se passar por ela." },
    { nome:"Mimetismo", descricao:"Pode imitar sons, incluindo fala. Para detectar, criatura deve passar em Sabedoria (Intuição) CD = 8 + mod. Car + BP." }
  ]
});

/* ---------- Aumento no Valor de Atributo (repetível) ---------- */
window.registrarTalento({
  id:"aumento-no-valor-de-atributo", nome:"Aumento no Valor de Atributo", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: true,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta um atributo à sua escolha em 2, ou dois atributos em 1. Nenhum acima de 20." }
  ]
});

/* ---------- Chef ---------- */
window.registrarTalento({
  id:"chef", nome:"Chef", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Con ou Sab em 1 (máx. 20)." },
    { nome:"Utensílios de Cozinheiro", descricao:"Proficiência com Utensílios de Cozinheiro." },
    { nome:"Refeição Satisfatória", descricao:"Como parte de um Descanso Curto, prepara comida para 4 + BP criaturas. Cada uma que comer e gastar Dados de Vida recupera +1d8 PV." },
    { nome:"Guloseimas Revigorantes", descricao:"Com 1 h de trabalho ou em Descanso Longo, cozinha BP guloseimas (duram 8 h). Ação Bônus para comer: PV Temporários = BP." }
  ]
});

/* ---------- Combatente Montado ---------- */
window.registrarTalento({
  id:"combatente-montado", nome:"Combatente Montado", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For, Des ou Sab em 1 (máx. 20)." },
    { nome:"Golpe Montado", descricao:"Montado, Vantagem em ataques contra criaturas desmontadas a até 1,5m da sua montaria que sejam ao menos um tamanho menores que ela." },
    { nome:"Pulo Lateral", descricao:"Se sua montaria é alvo de efeito com salv. Destreza por metade, ela não sofre dano em sucesso, metade em falha." },
    { nome:"Redirecionar Ataque", descricao:"Montado, pode forçar ataque que atinge sua montaria a te atingir (se não estiver Incapacitado)." }
  ]
});

/* ---------- Conjurador Bélico ---------- */
window.registrarTalento({
  id:"conjurador-belico", nome:"Conjurador Bélico", categoria:"Geral",
  prerequisitos:"Nível 4+, Característica Conjuração ou Magia de Pacto", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Int, Sab ou Car em 1 (máx. 20)." },
    { nome:"Concentração", descricao:"Vantagem em salvaguardas de Constituição para manter Concentração." },
    { nome:"Magia Reativa", descricao:"Ao provocarem Ataque de Oportunidade, pode executar Reação para conjurar magia (1 ação, alvo único) contra a criatura em vez de atacar." },
    { nome:"Componentes Somáticos", descricao:"Pode fazer componentes Somáticos mesmo com armas/Escudo em uma ou ambas as mãos." }
  ]
});

/* ---------- Conjurador Ritualista ---------- */
window.registrarTalento({
  id:"conjurador-ritualista", nome:"Conjurador Ritualista", categoria:"Geral",
  prerequisitos:"Nível 4+, Int, Sab ou Car 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Int, Sab ou Car em 1 (máx. 20)." },
    { nome:"Magias Rituais", descricao:"Aprende um número de magias de 1º círculo com marcador Ritual = BP. Sempre preparadas; pode conjurá-las com espaços de magia. Atributo = o aumentado. Sempre que BP aumentar, +1 magia ritual de 1º círculo." },
    { nome:"Ritual Rápido", descricao:"1×/Descanso Longo: pode conjurar magia Ritual preparada com tempo normal (não estendido), sem gastar espaço." }
  ]
});

/* ---------- Duelista Defensivo ---------- */
window.registrarTalento({
  id:"duelista-defensivo", nome:"Duelista Defensivo", categoria:"Geral",
  prerequisitos:"Nível 4+, Destreza 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Des em 1 (máx. 20)." },
    { nome:"Aparar", descricao:"Segurando arma de Acuidade, Reação contra ataque corpo a corpo que te acerte: +BP na CA contra ataques corpo a corpo até o início do próximo turno. Pode fazer o ataque errar." }
  ]
});

/* ---------- Envenenador ---------- */
window.registrarTalento({
  id:"envenenador", nome:"Envenenador", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Des ou Int em 1 (máx. 20)." },
    { nome:"Veneno Potente", descricao:"Ao rolar dano Venenoso, ignora Resistência." },
    { nome:"Preparar Veneno", descricao:"Proficiência com Kit de Veneno. Com 1 h e 50 PO, fabrica doses de veneno = BP. Ação Bônus: aplica veneno a arma/munição (dura 1 min ou até causar dano). Alvo faz salv. Con (CD 8 + mod. aumentado + BP) ou sofre 2d8 Venenoso e fica Envenenado até o fim do próximo turno." }
  ]
});

/* ---------- Esmagador ---------- */
window.registrarTalento({
  id:"esmagador", nome:"Esmagador", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Con em 1 (máx. 20)." },
    { nome:"Empurrar", descricao:"1×/turno, ao atingir criatura com ataque que cause Contundente, pode movê-la 1,5m para espaço desocupado (se não for maior que você)." },
    { nome:"Crítico Melhorado", descricao:"Ao obter Acerto Crítico com dano Contundente, jogadas de ataque contra o alvo têm Vantagem até o início do próximo turno." }
  ]
});

/* ---------- Especialista Ambidestro ---------- */
window.registrarTalento({
  id:"especialista-ambidestro", nome:"Especialista Ambidestro", categoria:"Geral",
  prerequisitos:"Nível 4+, Força ou Destreza 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Combate com Duas Armas Aprimorado", descricao:"Ao usar ação Atacar com arma Leve, Ação Bônus: ataque adicional com outra arma Corpo a Corpo sem Duas Mãos. Não soma mod. ao dano a menos que negativo." },
    { nome:"Saque Rápido", descricao:"Pode sacar/embainhar duas armas sem Duas Mãos em vez de uma." }
  ]
});

/* ---------- Especialista em Armaduras Leves ---------- */
window.registrarTalento({
  id:"especialista-armaduras-leves", nome:"Especialista em Armaduras Leves", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Treinamento com Armadura", descricao:"Adquire treinamento com Armadura Leve e Escudos." }
  ]
});

/* ---------- Especialista em Armaduras Médias ---------- */
window.registrarTalento({
  id:"especialista-armaduras-medias", nome:"Especialista em Armaduras Médias", categoria:"Geral",
  prerequisitos:"Nível 4+, Treinamento com Armadura Leve", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Treinamento com Armadura", descricao:"Adquire treinamento com Armadura Média." }
  ]
});

/* ---------- Especialista em Armaduras Pesadas ---------- */
window.registrarTalento({
  id:"especialista-armaduras-pesadas", nome:"Especialista em Armaduras Pesadas", categoria:"Geral",
  prerequisitos:"Nível 4+, Treinamento com Armadura Média", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Con ou For em 1 (máx. 20)." },
    { nome:"Treinamento com Armadura", descricao:"Adquire treinamento com Armadura Pesada." }
  ]
});

/* ---------- Especialista em Besta ---------- */
window.registrarTalento({
  id:"especialista-em-besta", nome:"Especialista em Besta", categoria:"Geral",
  prerequisitos:"Nível 4+, Destreza 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Des em 1 (máx. 20)." },
    { nome:"Ignorar Recarga", descricao:"Ignora propriedade Recarga de Besta de Mão, Besta Leve e Besta Pesada. Pode carregar munição mesmo sem mão livre." },
    { nome:"Disparo à Queima-Roupa", descricao:"Estar a 1,5m de inimigo não impõe Desvantagem em ataques com bestas." },
    { nome:"Combate com Duas Armas", descricao:"Ao fazer ataque adicional da propriedade Leve, pode somar mod. ao dano se for com besta Leve que você ainda não esteja somando." }
  ]
});

/* ---------- Especialista em Perícia ---------- */
window.registrarTalento({
  id:"especialista-em-pericia", nome:"Especialista em Perícia", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta um atributo à sua escolha em 1 (máx. 20)." },
    { nome:"Proficiência em Perícia", descricao:"Proficiência em uma perícia à sua escolha." },
    { nome:"Especialização", descricao:"Especialização em uma perícia já proficiente que ainda não seja Especialista." }
  ]
});

/* ---------- Exterminador de Conjuradores ---------- */
window.registrarTalento({
  id:"exterminador-de-conjuradores", nome:"Exterminador de Conjuradores", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Quebrador de Concentração", descricao:"Ao causar dano a criatura se concentrando, ela tem Desvantagem na salvaguarda de Concentração." },
    { nome:"Resguardo Mental", descricao:"Ao falhar em salv. Int, Sab ou Car, pode escolher ser bem-sucedido. 1×/Descanso Curto/Longo." }
  ]
});

/* ---------- Imobilizador ---------- */
window.registrarTalento({
  id:"imobilizador", nome:"Imobilizador", categoria:"Geral",
  prerequisitos:"Nível 4+, Força ou Destreza 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Socar e Imobilizar", descricao:"Ao acertar criatura com Ataque Desarmado como parte da ação Atacar, pode usar as opções Dano e Imobilizar na mesma ação (1×/turno)." },
    { nome:"Vantagem no Ataque", descricao:"Vantagem em ataques contra criatura Imobilizada por você." },
    { nome:"Imobilizador Veloz", descricao:"Não gasta movimento adicional para se mover enquanto imobiliza criatura do seu tamanho ou menor." }
  ]
});

/* ---------- Líder Inspirador ---------- */
window.registrarTalento({
  id:"lider-inspirador", nome:"Líder Inspirador", categoria:"Geral",
  prerequisitos:"Nível 4+, Sabedoria ou Carisma 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Sab ou Car em 1 (máx. 20)." },
    { nome:"Atuação Encorajadora", descricao:"Ao completar Descanso Curto/Longo, faz uma atuação (discurso, música, dança). Escolha até 6 aliados (incl. você) a até 9m: cada um ganha PV Temporários = nível de personagem + mod. aumentado." }
  ]
});

/* ---------- Mente Aguçada ---------- */
window.registrarTalento({
  id:"mente-aguçada", nome:"Mente Aguçada", categoria:"Geral",
  prerequisitos:"Nível 4+, Inteligência 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Int em 1 (máx. 20)." },
    { nome:"Conhecimento Vasto", descricao:"Escolha: Arcanismo, História, Investigação, Natureza ou Religião. Se não tiver proficiência, adquire; se já tiver, adquire Especialização." },
    { nome:"Análise Rápida", descricao:"Pode executar a ação Analisar como Ação Bônus." }
  ]
});

/* ---------- Mestre das Armas ---------- */
window.registrarTalento({
  id:"mestre-das-armas", nome:"Mestre das Armas", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Propriedade de Maestria", descricao:"Escolha um tipo de arma Simples ou Marcial com a qual tenha proficiência para usar a propriedade de maestria. Pode trocar em Descanso Longo." }
  ]
});

/* ---------- Mestre em Armaduras Médias ---------- */
window.registrarTalento({
  id:"mestre-armaduras-medias", nome:"Mestre em Armaduras Médias", categoria:"Geral",
  prerequisitos:"Nível 4+, Treinamento com Armadura Média", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Portador Ágil", descricao:"Usando armadura Média, adiciona 3 em vez de 2 à CA se tiver Destreza 16+." }
  ]
});

/* ---------- Mestre em Armaduras Pesadas ---------- */
window.registrarTalento({
  id:"mestre-armaduras-pesadas", nome:"Mestre em Armaduras Pesadas", categoria:"Geral",
  prerequisitos:"Nível 4+, Treinamento com Armadura Pesada", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Con em 1 (máx. 20)." },
    { nome:"Redução de Dano", descricao:"Usando armadura Pesada, ao ser atingido por ataque, dano Contundente/Cortante/Perfurante é reduzido em BP." }
  ]
});

/* ---------- Mestre em Armas de Haste ---------- */
window.registrarTalento({
  id:"mestre-armas-de-haste", nome:"Mestre em Armas de Haste", categoria:"Geral",
  prerequisitos:"Nível 4+, Força ou Destreza 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Golpe de Haste", descricao:"Ação: imediatamente após atacar com Cajado, Lança ou arma com Extensão e Pesada, Ação Bônus: ataque com a extremidade oposta (dano Contundente, dado d4)." },
    { nome:"Golpe Reativo", descricao:"Empunhando Cajado, Lança ou arma com Extensão e Pesada, Reação: ataque contra criatura que entra no seu alcance." }
  ]
});

/* ---------- Mestre em Armas Grandes ---------- */
window.registrarTalento({
  id:"mestre-armas-grandes", nome:"Mestre em Armas Grandes", categoria:"Geral",
  prerequisitos:"Nível 4+, Força 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For em 1 (máx. 20)." },
    { nome:"Maestria em Armas Pesadas", descricao:"Ao acertar criatura com arma Pesada como parte da ação Atacar, causa dano adicional = BP." },
    { nome:"Cortar", descricao:"Imediatamente após Acerto Crítico ou reduzir criatura a 0 PV com arma Corpo a Corpo, Ação Bônus: ataque com a mesma arma." }
  ]
});

/* ---------- Mestre em Escudos ---------- */
window.registrarTalento({
  id:"mestre-em-escudos", nome:"Mestre em Escudos", categoria:"Geral",
  prerequisitos:"Nível 4+, Treinamento com Escudo", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For em 1 (máx. 20)." },
    { nome:"Golpe de Escudo", descricao:"Ao atacar e acertar criatura a até 1,5m com arma Corpo a Corpo, pode atacar imediatamente com Escudo: alvo faz salv. Força (CD 8 + For + BP). Falha = empurra 1,5m ou Caído (sua escolha). 1×/turno." },
    { nome:"Interpor Escudo", descricao:"Em efeito com salv. Destreza por metade, Reação: se passar, não sofre dano (estando com Escudo)." }
  ]
});

/* ---------- Mestre-Atirador ---------- */
window.registrarTalento({
  id:"mestre-atirador", nome:"Mestre-Atirador", categoria:"Geral",
  prerequisitos:"Nível 4+, Destreza 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Des em 1 (máx. 20)." },
    { nome:"Ignorar Cobertura", descricao:"Ataques à distância ignoram Cobertura Parcial e de Três Quartos." },
    { nome:"Disparo à Queima-Roupa", descricao:"Estar a 1,5m de inimigo não impõe Desvantagem em ataques à distância." },
    { nome:"Tiro Longo", descricao:"Atacar no alcance máximo não impõe Desvantagem." }
  ]
});

/* ---------- Perfurador ---------- */
window.registrarTalento({
  id:"perfurador", nome:"Perfurador", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Punção", descricao:"1×/turno, ao acertar criatura com ataque que cause Perfurante, pode rerrolar um dos dados de dano (usa o novo resultado)." },
    { nome:"Crítico Melhorado", descricao:"Ao obter Acerto Crítico com dano Perfurante, rola um dado de dano adicional para o dano extra." }
  ]
});

/* ---------- Resiliente ---------- */
window.registrarTalento({
  id:"resiliente", nome:"Resiliente", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Escolha um atributo sem proficiência em salvaguarda. Aumenta-o em 1 (máx. 20)." },
    { nome:"Proficiência em Salvaguarda", descricao:"Adquire proficiência em salvaguardas com esse atributo." }
  ]
});

/* ---------- Resistente ---------- */
window.registrarTalento({
  id:"resistente", nome:"Resistente", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Con em 1 (máx. 20)." },
    { nome:"Desafie a Morte", descricao:"Vantagem em Salvaguardas Contra Morte." },
    { nome:"Recuperação Rápida", descricao:"Ação Bônus: gasta um Dado de Pontos de Vida, joga e recupera PV = resultado." }
  ]
});

/* ---------- Sentinela ---------- */
window.registrarTalento({
  id:"sentinela", nome:"Sentinela", categoria:"Geral",
  prerequisitos:"Nível 4+, Força ou Destreza 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Diligente", descricao:"Imediatamente após criatura a até 1,5m executar a ação Desengajar ou atacar outro alvo que não você, você pode fazer Ataque de Oportunidade contra ela." },
    { nome:"Deter", descricao:"Ao atingir com Ataque de Oportunidade, Deslocamento da criatura vira 0 pelo resto do turno." }
  ]
});

/* ---------- Sorrateiro ---------- */
window.registrarTalento({
  id:"sorrateiro", nome:"Sorrateiro", categoria:"Geral",
  prerequisitos:"Nível 4+, Destreza 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Des em 1 (máx. 20)." },
    { nome:"Visão às Cegas", descricao:"Visão às Cegas 3m." },
    { nome:"Névoa de Guerra", descricao:"Vantagem em testes de Destreza (Furtividade) como parte da ação Esconder durante combate." },
    { nome:"Atirador", descricao:"Ao atacar escondido e errar, não revela sua localização." }
  ]
});

/* ---------- Talhador ---------- */
window.registrarTalento({
  id:"talhador", nome:"Talhador", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Debilitar", descricao:"1×/turno, ao acertar criatura com ataque que cause Cortante, reduz o Deslocamento dela em 3m até o início do próximo turno." },
    { nome:"Crítico Melhorado", descricao:"Ao obter Acerto Crítico com dano Cortante, alvo tem Desvantagem em jogadas de ataque até o início do próximo turno." }
  ]
});

/* ---------- Telecinético ---------- */
window.registrarTalento({
  id:"telecinetico", nome:"Telecinético", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Int, Sab ou Car em 1 (máx. 20)." },
    { nome:"Telecinese Menor", descricao:"Conhece Mãos Mágicas. Conjura sem componentes V/S; a mão é Invisível; alcance e distância máxima aumentam 9m. Atributo = o aumentado." },
    { nome:"Empurrão Telecinético", descricao:"Ação Bônus: alvo à vista a até 9m faz salv. Força (CD 8 + mod. aumentado + BP) ou é movido 1,5m na sua direção ou para longe." }
  ]
});

/* ---------- Telepático ---------- */
window.registrarTalento({
  id:"telepatico", nome:"Telepático", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Int, Sab ou Car em 1 (máx. 20)." },
    { nome:"Enunciado Telepático", descricao:"Pode falar telepaticamente com qualquer criatura à vista a até 18m. Ela entende se souber o idioma. Não concede capacidade de responder." },
    { nome:"Detectar Pensamentos", descricao:"Sempre tem Detectar Pensamentos preparada. 1× sem espaço nem componentes (recupera em Descanso Longo); também com espaços. Atributo = o aumentado." }
  ]
});

/* ---------- Tocado pelas Sombras ---------- */
window.registrarTalento({
  id:"tocado-pelas-sombras", nome:"Tocado pelas Sombras", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Int, Sab ou Car em 1 (máx. 20)." },
    { nome:"Magia Sombria", descricao:"Escolha uma magia de 1º círculo de Ilusão ou Necromancia. Você tem essa magia e Invisibilidade sempre preparadas; pode conjurá-las sem espaço. Após usar uma delas sem espaço, não pode conjurá-la assim novamente até completar Descanso Longo. Também pode usar espaços. Atributo = o aumentado." }
  ]
});

/* ---------- Tocado pelas Fadas ---------- */
window.registrarTalento({
  id:"tocado-pelas-fadas", nome:"Tocado pelas Fadas", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Int, Sab ou Car em 1 (máx. 20)." },
    { nome:"Magia Feérica", descricao:"Escolha uma magia de 1º círculo de Adivinhação ou Encantamento. Você tem essa magia e Passo Nebuloso sempre preparadas; pode conjurá-las sem espaço. Após usar uma delas sem espaço, não pode conjurá-la assim novamente até completar Descanso Longo. Também pode usar espaços. Atributo = o aumentado." }
  ]
});

/* ---------- Treinamento com Armas Marciais ---------- */
window.registrarTalento({
  id:"treinamento-com-armas-marciais", nome:"Treinamento com Armas Marciais", categoria:"Geral",
  prerequisitos:"Nível 4+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 20)." },
    { nome:"Proficiência com Armas", descricao:"Proficiência com armas Marciais." }
  ]
});

/* ---------- Velocista ---------- */
window.registrarTalento({
  id:"velocista", nome:"Velocista", categoria:"Geral",
  prerequisitos:"Nível 4+, Destreza ou Constituição 13+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Des ou Con em 1 (máx. 20)." },
    { nome:"Aumento de Deslocamento", descricao:"Deslocamento +3m." },
    { nome:"Correr em Terreno Difícil", descricao:"Ao executar a ação Correr, Terreno Difícil não custa movimento adicional pelo resto do turno." },
    { nome:"Movimentação Ágil", descricao:"Ataques de Oportunidade têm Desvantagem contra você." }
  ]
});

console.log('[DND] Talentos Gerais carregados:', talentosPorCategoria("Geral").length);