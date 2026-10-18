/* ============================================================
   SUBCLASSES — ARTÍFICE
   Fonte: Eberron: Forge of the Artificer
   ============================================================ */

window.registrarSubclasse({
  id: "alquimista",
  nome: "Alquimista",
  classeId: "artifice",
  fonte: "Eberron: Forge of the Artificer",
  niveisDeCaracteristica: [3, 5, 9, 15],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Palavra Curativa","Raio Nauseante"] },
    { nivel: 5, magias: ["Esfera Flamejante","Flecha Ácida de Melf"] },
    { nivel: 9, magias: ["Forma Gasosa","Palavra Curativa em Massa"] },
    { nivel: 13, magias: ["Proteção Contra a Morte","Esfera Vitriólica"] },
    { nivel: 17, magias: ["Nuvem Mortal","Reviver os Mortos"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Ferramentas do Ofício", descricao: "Proficiência com Suprimentos de Alquimista. Se já tiver, escolha outro tipo de Ferramentas de Artesão." },
    { nivel: 3, nome: "Elixir Experimental", descricao: "Ao terminar um Descanso Longo empunhando Suprimentos de Alquimista, produz 2 elixires mágicos. Ação Bônus para beber ou administrar. Jogue 1d6 para o efeito:\n1. Cura: Recupera 2d8 + mod. Int PV (aumenta nos níveis 9 e 15).\n2. Rapidez: Deslocamento +3m por 1 hora.\n3. Resiliência: +1 CA por 10 minutos.\n4. Ousadia: +1d4 em ataques e salvaguardas por 1 minuto.\n5. Voo: Deslocamento de Voo de 3m por 10 minutos.\n6. Você escolhe o efeito.\nAção Mágica: gaste um espaço de magia para criar outro elixir (você escolhe o efeito)." },
    { nivel: 5, nome: "Sábio Alquímico", descricao: "Ao conjurar magia usando Suprimentos de Alquimista como Foco, ganha bônus igual ao mod. de Inteligência (mín. +1) em uma rolagem que restaure PV ou cause dano Ácido, Ígneo ou Venenoso." },
    { nivel: 9, nome: "Reagentes Restauradores", descricao: "Conjura Restauração Menor sem gastar espaço nem preparar, usando Suprimentos de Alquimista. Usos = mod. Int (mín. 1); recupera em Descanso Longo." },
    { nivel: 15, nome: "Maestria Química", descricao: "Erupção Alquímica: ao conjurar magia de Artífice que cause Ácido, Ígneo ou Venenoso, causa +2d8 de dano de Força ao alvo (1x por turno). Resistência Química: Resistência a Ácido e Venenoso; Imunidade a Envenenado. Caldeirão Conjurado: conjura Caldeirão Borbulhante de Tasha sem gastar espaço (1x por Descanso Longo)." }
  ]
});

window.registrarSubclasse({
  id: "armaduras",
  nome: "Armaduras",
  classeId: "artifice",
  fonte: "Eberron: Forge of the Artificer",
  niveisDeCaracteristica: [3, 5, 9, 15],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Mísseis Mágicos","Onda Trovejante"] },
    { nivel: 5, magias: ["Imagem Espelhada","Despedaçar"] },
    { nivel: 9, magias: ["Padrão Hipnótico","Relâmpago"] },
    { nivel: 13, magias: ["Escudo Ardente","Invisibilidade Maior"] },
    { nivel: 17, magias: ["Passagem","Muralha de Energia"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Ferramentas do Ofício", descricao: "Treinamento com armadura Pesada. Proficiência com Ferramentas de Ferreiro. Criar armadura leva metade do tempo." },
    { nivel: 3, nome: "Armadura Arcana", descricao: "Ação Mágica com Ferramentas de Ferreiro: transforma a armadura que veste em Armadura Arcana (não exige Força, pode vestir/tirar como Ação Utilizar, serve como Foco de Conjuração)." },
    { nivel: 3, nome: "Modelo de Armadura", descricao: "Escolha ao terminar um Descanso Curto/Longo:\n• Couraçado (Dreadnaught): Arma 1d10 Força com alcance de 3m; Ação Bônus para ficar Grande por 1 min (alcance +1,5m).\n• Guardião: Pulso Trovejante 1d8 (impõe Desvantagem em ataques contra outros); Ação Bônus enquanto Sangrando para ganhar PV Temporários = nível de Artífice.\n• Infiltrador: Lançador de relâmpago 1d6 (alcance 27/90m); Deslocamento +1,5m; Vantagem em Furtividade." },
    { nivel: 5, nome: "Ataque Extra", descricao: "Ataca duas vezes em vez de uma quando usa a ação Atacar." },
    { nivel: 9, nome: "Armadureiro Aprimorado", descricao: "Você adquire os seguintes benefícios: (1) Pode trocar o modelo de armadura com uma Ação Bônus (em vez de Descanso). (2) Os ataques do seu modelo ignoram Resistência a dano." },
    { nivel: 15, nome: "Armaduras Perfeitas", descricao: "Sua Armadura Arcana atinge a perfeição. Você ganha Resistência a dano Contundente, Cortante e Perfurante enquanto estiver usando-a. Além disso, o dano do seu modelo (Couraçado, Guardião, Infiltrador) aumenta em 1d6." }
  ]
});

window.registrarSubclasse({
  id: "artilheiro",
  nome: "Artilheiro",
  classeId: "artifice",
  fonte: "Eberron: Forge of the Artificer",
  niveisDeCaracteristica: [3, 5, 9, 15],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Escudo Arcano","Onda Trovejante"] },
    { nivel: 5, magias: ["Raio Ardente","Despedaçar"] },
    { nivel: 9, magias: ["Bola de Fogo","Muralha de Vento"] },
    { nivel: 13, magias: ["Escudo Ardente","Tempestade Glacial"] },
    { nivel: 17, magias: ["Coluna de Chamas","Muralha de Energia"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Ferramentas do Ofício", descricao: "Proficiência com Ferramentas de Entalhador. Criar bastões, cajados, varinhas ou armas à distância marciais leva metade do tempo." },
    { nivel: 3, nome: "Canhão Eldritch", descricao: "Ação Mágica: cria um canhão Pequeno/Miúsculo em espaço a até 1,5m. Escolha: Chamas (cone 4,5m, 2d8 Ígneo, salv. Des), Balista de Força (ataque à distância 36m, 2d8 Força + empurra 1,5m), Protetor (PV temporários 1d8 + mod. Int para criaturas em 3m). Ação Bônus para ativar. Dura 1 hora." },
    { nivel: 5, nome: "Arma de Fogo Arcana", descricao: "Ao terminar Descanso Longo, com Ferramentas de Entalhador, transforma um Bastão, Cajado, Varinha ou arma Marcial à distância em sua Arma de Fogo Arcana (serve como Foco). Ao conjurar magia por ela, role 1d8 e adicione o resultado a uma rolagem de dano." },
    { nivel: 9, nome: "Canhão Explosivo", descricao: "Detonar: Reação se a até 18m, destrói o canhão e força criaturas em 6m a salv. Des ou 3d10 Força (metade se sucesso). Poder de Fogo: rolagens de dano do canhão e PV temporários do Protetor aumentam em 1d8." },
    { nivel: 15, nome: "Posição Fortificada", descricao: "Pode ter 2 canhões ao mesmo tempo (criados com a mesma Ação Mágica). Pode ativar ambos com a mesma Ação Bônus. Campo Cintilante: você e aliados têm Cobertura Parcial a até 3m do canhão." }
  ]
});

window.registrarSubclasse({
  id: "ferreiro-de-batalha",
  nome: "Ferreiro de Batalha",
  classeId: "artifice",
  fonte: "Eberron: Forge of the Artificer",
  niveisDeCaracteristica: [3, 5, 9, 15],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Heroísmo","Escudo Arcano"] },
    { nivel: 5, magias: ["Destruição Radiante","Vínculo de Proteção"] },
    { nivel: 9, magias: ["Aura de Vitalidade","Conjurar Saraivada"] },
    { nivel: 13, magias: ["Aura de Pureza","Escudo Ardente"] },
    { nivel: 17, magias: ["Destruição Banidora","Cura Completa em Massa"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Ferramentas do Ofício", descricao: "Proficiência com Ferramentas de Ferreiro. Criar arma mágica ou não leva metade do tempo." },
    { nivel: 3, nome: "Pronto para a Batalha", descricao: "Empoderamento Arcano: ao atacar com arma mágica, use Int em vez de For/Des. Conhecimento de Armas: proficiência com armas Marciais; pode usar qualquer arma com que tenha proficiência como Foco de Conjuração." },
    { nivel: 3, nome: "Defensor de Aço", descricao: "Construto Médio leal que obedece a você. Age no seu turno, usa a ação Esquivar por padrão (Ação Bônus para comandar). Restaurar: Ação Mágica + gasto de espaço para reviver. Recriar: ao terminar Descanso Longo." },
    { nivel: 5, nome: "Ataque Extra", descricao: "Ataca duas vezes em vez de uma quando usa a ação Atacar. Pode trocar um dos ataques para comandar o Defensor a usar Ataque de Força." },
    { nivel: 9, nome: "Arco Arcano", descricao: "Ao acertar com arma mágica ou quando o Defensor acerta, canaliza energia: Energia Destrutiva (+2d6 Força) ou Energia Restauradora (cura 2d6 em criatura a até 9m). Usos = mod. Int (mín. 1), 1x por turno." },
    { nivel: 15, nome: "Defensor Aprimorado", descricao: "Arco Melhorado: dano/cura do Arco Arcano viram 4d6. Deflexão Melhorada: quando o Defensor usa Deflect Attack, o atacante leva 1d4 + mod. Int de Força." }
  ]
});

window.registrarSubclasse({
  id: "cartografo",
  nome: "Cartógrafo",
  classeId: "artifice",
  fonte: "Eberron: Forge of the Artificer",
  niveisDeCaracteristica: [3, 5, 9, 15],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Fogo das Fadas","Raio Guia","Palavra Curativa"] },
    { nivel: 5, magias: ["Localizar Objeto","Espinho Mental"] },
    { nivel: 9, magias: ["Convocar Relâmpagos","Clarividência"] },
    { nivel: 13, magias: ["Banimento","Localizar Criatura"] },
    { nivel: 17, magias: ["Vidência","Círculo de Teleporte"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Ferramentas do Ofício", descricao: "Proficiência com Suprimentos de Calígrafo e Ferramentas de Cartógrafo. Escrever Pergaminho de Magia leva metade do tempo." },
    { nivel: 3, nome: "Atlas do Aventureiro", descricao: "Ao terminar um Descanso Longo com Ferramentas de Cartógrafo, cria mapas mágicos para até 1 + mod. Int criaturas (mín. 2). Cada portador: +1d4 em Iniciativa; sabe a localização de todos os outros portadores no mesmo plano; pode mirar outro portador sem precisar vê-lo, desde que esteja no alcance do efeito." },
    { nivel: 5, nome: "Precisão Guiada", descricao: "1x por turno, ao conjurar magia da lista de Cartógrafo ou acertar criatura afetada por seu Fogo das Fadas, adiciona mod. Int a uma rolagem de dano. Além disso, sofrer dano não quebra Concentração em Fogo das Fadas." },
    { nivel: 9, nome: "Movimento Engenhoso", descricao: "Ao usar Lampejo de Gênio, você ou criatura voluntária à vista a até 9m pode teleportar até 9m para espaço desocupado à vista, como parte da mesma Reação." },
    { nivel: 15, nome: "Atlas Superior", descricao: "Refúgio Seguro: ao ser reduzido a 0 PV (sem morte instantânea), portador pode destruir seu mapa — PV viram 2 × nível de Artífice e teleporta para perto de você ou de outro portador. Caminho Infalível: conjura Encontrar o Caminho sem espaço, sem preparar e sem componentes (1x por Descanso Longo)." }
  ]
});

console.log('[DND] Subclasses do Artífice carregadas.');