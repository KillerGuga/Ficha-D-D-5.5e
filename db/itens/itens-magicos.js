/* ============================================================
   ITENS MÁGICOS (DMG 2024)
   Formato: nome | tipo | raridade | sintonizacao | descricao
   ============================================================ */

const ITENS_MAGICOS_RAW = String.raw`

# ============================================================
# ARMADURAS MÁGICAS
# ============================================================
Armadura, +1|Armadura|Raro|Não|Você tem um bônus de +1 na Classe de Armadura enquanto estiver usando esta armadura.
Armadura, +2|Armadura|Muito Raro|Não|Você tem um bônus de +2 na Classe de Armadura enquanto estiver usando esta armadura.
Armadura, +3|Armadura|Lendário|Não|Você tem um bônus de +3 na Classe de Armadura enquanto estiver usando esta armadura.
Armadura de Invulnerabilidade|Armadura (Placas)|Lendário|Sim|Você tem Resistência a dano Contundente, Cortante e Perfurante enquanto usa esta armadura. Você pode executar uma ação Usar Magia para obter Imunidade a esses danos por 10 minutos.
Armadura de Mitral|Armadura (Média ou Pesada)|Incomum|Não|Se a armadura impõe Desvantagem em Furtividade ou tem exigência de Força, a versão em mitral ignora essas limitações.
Armadura de Placas das Formas Etéreas|Armadura (Placas)|Lendário|Sim|Você pode usar uma ação Usar Magia para conjurar Forma Etérea. A magia encerra se você remover a armadura.
Armadura de Resistência|Armadura|Raro|Sim|Você tem Resistência a um tipo de dano (determinado pelo Mestre) enquanto usa esta armadura.
Armadura Demoníaca|Armadura|Muito Raro|Sim|Você adquire +1 na CA, conhece Abissal e seus Ataques Desarmados causam 1d8 Cortante. Maldição: Você não pode removê-la sem Remover Maldição.
Armadura do Marinheiro|Armadura|Incomum|Não|Você tem Deslocamento de Natação igual ao seu Deslocamento. Se começar o turno com 0 PV debaixo d'água, recupera 1d4 PV (1x/dia).
Cota de Malha Élfica|Armadura (Cota de Malha)|Raro|Não|Você adquire +1 na CA e é considerado proficiente com esta armadura, mesmo sem treinamento.
Cota de Malha Ifriti|Armadura (Cota de Malha)|Lendário|Sim|Você recebe +3 na CA, Imunidade a dano Ígneo, conhece Primordial e pode andar sobre lava.
Loriga de Escamas Dracônicas|Armadura (Loriga de Escamas)|Muito Raro|Sim|Você adquire +1 na CA, Vantagem contra sopros de dragão e Resistência a um tipo de dano dracônico.
Escudo, +1|Escudo|Incomum|Não|Você tem um bônus de +1 na CA enquanto empunha este escudo.
Escudo, +2|Escudo|Raro|Não|Você tem um bônus de +2 na CA enquanto empunha este escudo.
Escudo, +3|Escudo|Muito Raro|Não|Você tem um bônus de +3 na CA enquanto empunha este escudo.
Escudo Animado|Escudo|Muito Raro|Sim|Você pode usar uma Ação Bônus para animar o escudo, que flutua e o protege, deixando suas mãos livres.
Escudo Apanhador de Flechas|Escudo|Raro|Sim|Você recebe +2 na CA contra ataques à distância. Você pode usar uma Reação para se tornar o alvo de um ataque direcionado a alguém a 1,5m.
Escudo Bloqueador de Magias|Escudo|Muito Raro|Sim|Você tem Vantagem em salvaguardas contra magias e jogadas de ataque mágico têm Desvantagem contra você.
Escudo do Cavaleiro|Escudo|Muito Raro|Sim|Você recebe +2 na CA. Pode usar Campo de Proteção (Reação) e Pancada Forte.

# ============================================================
# POÇÕES
# ============================================================
Poção de Cura|Poção|Comum|Não|Você recupera 2d4 + 2 Pontos de Vida ao beber esta poção.
Poção de Cura (maior)|Poção|Incomum|Não|Você recupera 4d4 + 4 Pontos de Vida ao beber esta poção.
Poção de Cura (superior)|Poção|Raro|Não|Você recupera 8d4 + 8 Pontos de Vida ao beber esta poção.
Poção de Cura (suprema)|Poção|Muito Raro|Não|Você recupera 10d4 + 20 Pontos de Vida ao beber esta poção.
Poção de Amizade Animal|Poção|Incomum|Não|Você conjura Amizade Animal (CD 13).
Poção de Clarividência|Poção|Raro|Não|Você recebe o efeito de Clarividência (sem Concentração).
Poção de Compreensão|Poção|Comum|Não|Você recebe o efeito de Compreender Idiomas por 1 hora.
Poção de Escalada|Poção|Comum|Não|Você adquire Deslocamento de Escalada igual ao seu Deslocamento por 1 hora.
Poção de Formas Gasosas|Poção|Raro|Não|Você adquire o efeito de Forma Gasosa por 1 hora.
Poção de Força de Gigante (da colina)|Poção|Incomum|Não|Sua Força se torna 21 por 1 hora.
Poção de Força de Gigante (de pedra/gelo)|Poção|Raro|Não|Sua Força se torna 23 por 1 hora.
Poção de Força de Gigante (de fogo)|Poção|Raro|Não|Sua Força se torna 25 por 1 hora.
Poção de Força de Gigante (das nuvens)|Poção|Muito Raro|Não|Sua Força se torna 27 por 1 hora.
Poção de Força de Gigante (da tempestade)|Poção|Lendário|Não|Sua Força se torna 29 por 1 hora.
Poção de Heroísmo|Poção|Raro|Não|Você adquire 10 PV Temporários e o efeito de Bênção por 1 hora.
Poção de Invisibilidade|Poção|Raro|Não|Você tem a condição Invisível por 1 hora.
Poção de Invisibilidade Maior|Poção|Muito Raro|Não|Você tem a condição Invisível por 1 hora (não termina ao atacar).
Poção de Invulnerabilidade|Poção|Raro|Não|Você tem Resistência a todos os tipos de dano por 1 minuto.
Poção de Ler Mentes|Poção|Raro|Não|Você recebe o efeito de Detectar Pensamentos (sem Concentração).
Poção de Longevidade|Poção|Muito Raro|Não|Sua idade física é reduzida em 1d6 + 6 anos.
Poção de Pugilismo|Poção|Incomum|Não|Seus Ataques Desarmados causam +1d6 de dano Energético por 10 minutos.
Poção de Resistência|Poção|Incomum|Não|Você tem Resistência a um tipo de dano por 1 hora.
Poção de Respirar na Água|Poção|Incomum|Não|Você pode respirar debaixo d'água por 24 horas.
Poção de Velocidade|Poção|Muito Raro|Não|Você recebe o efeito de Celeridade por 1 minuto, sem letargia.
Poção de Vitalidade|Poção|Muito Raro|Não|Remove Exaustão e Envenenado. Pela próxima hora, o menor dado de cura rola o valor máximo.
Poção de Voo|Poção|Muito Raro|Não|Você adquire Deslocamento de Voo igual ao seu Deslocamento por 1 hora.
Poção do Amor|Poção|Incomum|Não|Você fica Enfeitiçado pela próxima criatura que avistar por 1 hora.
Poção do Crescimento|Poção|Incomum|Não|Você recebe o efeito "aumentar" de Aumentar/Reduzir por 10 minutos.
Poção do Encolhimento|Poção|Raro|Não|Você recebe o efeito "reduzir" de Aumentar/Reduzir por 1d4 horas.

# ============================================================
# ANÉIS
# ============================================================
Anel Afastador de Magias|Anel|Lendário|Sim|Você tem Vantagem em salvaguardas contra magias. Se for bem-sucedido contra uma magia de 7º círculo ou inferior, ela é desviada de volta para o conjurador.
Anel Armazenador de Magias|Anel|Raro|Sim|O anel pode armazenar até 5 círculos de magias. Você pode conjurar qualquer magia armazenada nele.
Anel da Livre Movimentação|Anel|Raro|Sim|Terreno Difícil não custa movimento extra. Nenhuma magia pode reduzir seu Deslocamento ou impor Contido/Paralisado.
Anel das Estrelas Cadentes|Anel|Muito Raro|Sim|Possui 6 cargas. Pode gastar para criar Esferas de Relâmpago ou Estrelas Cadentes.
Anel de Andar Sobre as Águas|Anel|Incomum|Não|Você pode conjurar Caminhar Sobre as Águas em si mesmo à vontade.
Anel de Aquecimento|Anel|Incomum|Sim|Reduz o dano Gélido sofrido em 2d8. Protege contra frio extremo.
Anel de Aríete|Anel|Raro|Sim|Possui 3 cargas. Pode fazer um ataque mágico à distância (2d10 Energético) ou tentar quebrar objetos.
Anel de Comando Elemental|Anel|Lendário|Sim|Ligado a um plano elemental. Permite compulsão elemental, destruição elemental e conjuração de magias elementares.
Anel de Escudo Mental|Anel|Incomum|Sim|Imunidade a leitura de mente, detecção de mentiras e alinhamento. Pode se tornar imperceptível.
Anel de Evasão|Anel|Raro|Sim|Possui 3 cargas. Pode gastar 1 carga para ser bem-sucedido em uma salvaguarda de Destreza.
Anel de Influenciar Animais|Anel|Raro|Não|Possui 3 cargas. Pode conjurar Amizade Animal, Falar com Animais ou Medo (apenas Feras).
Anel de Invisibilidade|Anel|Lendário|Sim|Você pode executar uma ação Usar Magia para se tornar Invisível. Permanece até o anel ser removido ou você atacar.
Anel de Invocar Djinni|Anel|Lendário|Sim|Invoca um Djinni específico por até 1 hora. O Djinni desaparece se o anel for removido ou o portador morrer.
Anel de Natação|Anel|Incomum|Não|Você tem Deslocamento de Natação de 12 metros.
Anel de Proteção|Anel|Raro|Sim|Você recebe +1 na CA e em salvaguardas.
Anel de Queda Suave|Anel|Raro|Sim|Ao cair, você desce 18 metros por rodada e não sofre dano de queda.
Anel de Regeneração|Anel|Muito Raro|Sim|Você recupera 1d6 PV a cada 10 minutos. Partes perdidas do corpo voltam a crescer.
Anel de Resistência|Anel|Raro|Não|Você tem Resistência a um tipo de dano (indicado pela pedra preciosa).
Anel de Saltar|Anel|Incomum|Sim|Você pode conjurar Salto em si mesmo à vontade.
Anel de Telecinese|Anel|Muito Raro|Sim|Você pode conjurar Telecinese à vontade.
Anel de Visão de Raio-X|Anel|Raro|Sim|Você pode usar uma ação Usar Magia para ver através de objetos (30cm de pedra, 2,5cm de metal, 90cm de madeira/terra) por 1 minuto.
Anel dos Três Desejos|Anel|Lendário|Não|Possui 3 cargas. Gastar 1 carga conjura Desejo. O anel se torna não mágico após a última carga.

# ============================================================
# VARINHAS
# ============================================================
Varinha Cuspidora de Fogo|Varinha|Raro|Sim|Possui 7 cargas. Pode conjurar Bola de Fogo gastando 1 a 3 cargas.
Varinha das Maravilhas|Varinha|Raro|Sim|Possui 7 cargas. Gastar 1 carga produz um efeito aleatório (tabela).
Varinha de Detectar Inimigo|Varinha|Raro|Sim|Possui 7 cargas. Gasta 1 carga para saber a direção de criaturas Hostis em 18m por 1 minuto.
Varinha de Mísseis Mágicos|Varinha|Incomum|Não|Possui 7 cargas. Pode conjurar Mísseis Mágicos gastando 1 a 3 cargas.
Varinha de Paralisia|Varinha|Raro|Sim|Possui 7 cargas. Gasta 1 carga para tentar paralisar uma criatura por 1 minuto.
Varinha de Polimorfia|Varinha|Muito Raro|Sim|Possui 7 cargas. Gasta 1 carga para conjurar Polimorfia.
Varinha de Relâmpagos|Varinha|Raro|Sim|Possui 7 cargas. Pode conjurar Relâmpago gastando 1 a 3 cargas.
Varinha de Teia|Varinha|Incomum|Sim|Possui 7 cargas. Gasta 1 carga para conjurar Teia.
Varinha do Mago de Guerra, +1|Varinha|Incomum|Sim|Você adquire +1 em jogadas de ataque mágico. Ignora Cobertura Parcial.
Varinha do Mago de Guerra, +2|Varinha|Raro|Sim|Você adquire +2 em jogadas de ataque mágico. Ignora Cobertura Parcial.
Varinha do Mago de Guerra, +3|Varinha|Muito Raro|Sim|Você adquire +3 em jogadas de ataque mágico. Ignora Cobertura Parcial.
Varinha do Medo|Varinha|Raro|Sim|Possui 7 cargas. Pode conjurar Comando (abaixar/fugir) ou Medo.
Varinha dos Segredos|Varinha|Incomum|Não|Possui 3 cargas. Gasta 1 carga para pulsar e apontar para a porta ou armadilha secreta mais próxima.
Varinha Farejadora de Magias|Varinha|Incomum|Não|Possui 3 cargas. Gasta 1 carga para conjurar Detectar Magia.
Varinha Imobilizadora|Varinha|Raro|Sim|Possui 7 cargas. Pode conjurar Paralisar Monstro (5 cargas) ou Paralisar Pessoa (2 cargas).
Varinha Pirotécnica|Varinha|Comum|Não|Possui 7 cargas. Gasta 1 carga para criar uma explosão inofensiva de luz multicolorida.

# ============================================================
# CAJADOS
# ============================================================
Cajado da Cura|Cajado|Raro|Sim|Possui 10 cargas. Pode conjurar Curar Ferimentos (1 carga/círculo) e Curar Ferimentos em Massa (5 cargas).
Cajado da Piton|Cajado|Incomum|Sim|Pode se transformar em uma Cobra Constritora Gigante sob seu controle.
Cajado da Trovoada Relampejante|Cajado|Muito Raro|Sim|Funciona como um Cajado mágico +2. Pode usar Golpe de Relâmpago, Relâmpago, Trovão e Trovoada (1x/dia cada).
Cajado da Víbora|Cajado|Incomum|Sim|A cabeça pode se transformar em uma Cobra Peçonhenta. Pode conjurar Amizade Animal, Despertar, Falar com Animais, etc.
Cajado das Matas|Cajado|Raro|Sim|Funciona como Cajado mágico +2. Pode se transformar em uma árvore saudável (1 carga).
Cajado de Flores|Cajado|Comum|Não|Possui 10 cargas. Gasta 1 carga para fazer uma flor brotar e murchar.
Cajado do Acrobata|Cajado|Muito Raro|Sim|Funciona como Cajado mágico +2. Pode mudar de tamanho, brilhar, dar Vantagem em Acrobacia, Defletir Ataques.
Cajado do Agravo|Cajado|Muito Raro|Sim|Funciona como Cajado mágico +3. Ao acertar, gasta até 3 cargas para causar +1d6 Energético por carga.
Cajado do Definhamento|Cajado|Raro|Sim|Possui 3 cargas. Ao acertar, gasta 1 carga para causar +2d10 Necrótico e forçar uma salvaguarda.
Cajado do Enxame de Insetos|Cajado|Raro|Sim|Possui 10 cargas. Pode conjurar Inseto Gigante (4 cargas) ou Praga de Insetos (5 cargas).
Cajado do Fogo|Cajado|Muito Raro|Sim|Possui 10 cargas. Pode conjurar Bola de Fogo (3), Mãos Flamejantes (1) ou Muralha de Fogo (4).
Cajado do Gelo|Cajado|Muito Raro|Sim|Possui 10 cargas. Pode conjurar Cone de Frio (5), Muralha de Gelo (4), Névoa Obscurecente (1) ou Tempestade Glacial (4).
Cajado do Poder|Cajado|Muito Raro|Sim|Possui 20 cargas. Funciona como Cajado mágico +2. Ganha +2 na CA, salvaguardas e ataque mágico.
Cajado dos Magi|Cajado|Lendário|Sim|Possui 50 cargas. Absorve magias (ganha cargas). Pode conjurar várias magias poderosas. Golpe Retributivo.
Cajado dos Sortilégios|Cajado|Raro|Sim|Possui 10 cargas. Pode conjurar Comando, Compreender Idiomas ou Enfeitiçar Pessoa. Pode refletir Encantamentos.
Cajado Ornamental|Cajado|Comum|Não|Faz até três objetos minúsculos flutuarem sobre a ponta.
Cajado Magnificado|Cajado|Raridade Varia|Sim|Possui 6 cargas. Gasta 1 carga para conjurar uma magia de até 8º círculo (definida na criação do cajado).

# ============================================================
# ITENS MARAVILHOSOS
# ============================================================
Alaúde de Batidas Estrondosas|Item Maravilhoso|Muito Raro|Não|Pode ser usado como uma Clava mágica que causa +2d8 de dano Trovejante.
Aljava de Ehonna|Item Maravilhoso|Incomum|Não|Possui três compartimentos extradimensionais para armazenar flechas, azagaias e arcos.
Amuleto da Estilha Negra|Item Maravilhoso|Comum|Sim|Pode ser usado como Foco. Permite tentar conjurar um truque de Bruxo desconhecido (CD 10).
Amuleto da Saúde|Item Maravilhoso|Raro|Sim|Sua Constituição se torna 19 enquanto usar este amuleto (não afeta se já for 19+).
Amuleto de Proteção Contra Detecção e Localização|Item Maravilhoso|Incomum|Sim|Imunidade a Adivinhação. Não pode ser alvo ou percebido por sensores mágicos.
Amuleto Mecânico|Item Maravilhoso|Comum|Não|Pode usar um 10 em vez de rolar o d20 em uma jogada de ataque (1x/dia).
Amuleto Planar|Item Maravilhoso|Muito Raro|Sim|Pode tentar viajar para outro plano de existência (CD 15 Arcanismo). Falha leva a destino aleatório.
Baralho das Ilusões|Item Maravilhoso|Incomum|Não|Jogar uma carta cria uma ilusão de uma criatura (não pode causar dano).
Baralho de Muitas Coisas|Item Maravilhoso|Lendário|Não|Puxar cartas gera efeitos poderosos e aleatórios (Bênçãos e Desgraças).
Barco de Bolso|Item Maravilhoso|Raro|Não|Uma caixa que se desdobra em um Barco a Remo ou Barco de Quilha.
Bola de Cristal|Item Maravilhoso|Muito Raro|Sim|Permite conjurar Vidência (CD 17).
Bola de Cristal da Leitura de Mentes|Item Maravilhoso|Lendário|Sim|Permite conjurar Vidência e Detectar Pensamentos (CD 17).
Bola de Cristal de Telepatia|Item Maravilhoso|Lendário|Sim|Permite conjurar Vidência, se comunicar telepaticamente e conjurar Sugestão (CD 17).
Bola de Cristal de Visão Verdadeira|Item Maravilhoso|Lendário|Sim|Permite conjurar Vidência e concede Visão Verdadeira (36m) centrada no sensor.
Bolsa Cabe Tudo|Item Maravilhoso|Incomum|Não|Espaço interno maior. Suporta 250 kg. Se sobrecarregada, se rompe e espalha no Plano Astral.
Bolsa das Tropelias|Item Maravilhoso|Incomum|Não|Puxar um objeto disforme o transforma em uma criatura (varia pela cor da bolsa).
Bolsa de Feijões|Item Maravilhoso|Raro|Não|Contém 3d4 feijões. Plantar um feijão gera efeitos aleatórios (tabela).
Bolsa Devoradora|Item Maravilhoso|Muito Raro|Não|Um orifício para uma criatura extradimensional. Devora tudo que é colocado. 50% de chance de puxar criaturas.
Boneca Conversadora|Item Maravilhoso|Comum|Sim|Pode programar 6 frases para serem ditas sob certas condições.
Botas Aladas|Item Maravilhoso|Incomum|Sim|Possui 4 cargas. Gasta 1 carga para ganhar Deslocamento de Voo de 9m por 1 hora.
Botas das Terras Glaciais|Item Maravilhoso|Incomum|Sim|Ignora Terreno Difícil de gelo/neve. Resistência a Gélido. Tolera frio extremo.
Botas de Caminhar e Saltar|Item Maravilhoso|Incomum|Sim|Deslocamento se torna 9m (não reduzido por peso/armadura). Pode saltar 9m gastando 3m de movimento.
Botas de Levitação|Item Maravilhoso|Raro|Sim|Permite conjurar Levitação em si mesmo à vontade.
Botas de Velocidade|Item Maravilhoso|Raro|Sim|Pode usar Ação Bônus para dobrar o Deslocamento e dar Desvantagem em Ataques de Oportunidade. 10 minutos de uso total por dia.
Botas Despistadoras|Item Maravilhoso|Comum|Sim|Deixa pegadas de qualquer tipo de humanoide do seu tamanho.
Botas Élficas|Item Maravilhoso|Incomum|Sim|Passos não fazem barulho. Vantagem em Furtividade.
Braceletes de Arquearia|Item Maravilhoso|Incomum|Sim|Proficiência com Arco Longo e Curto. +2 no dano com essas armas.
Braceletes de Defesa|Item Maravilhoso|Raro|Sim|+2 na CA se não estiver usando armadura ou escudo.
Braseiro de Comandar Elementais do Fogo|Item Maravilhoso|Raro|Não|Invoca um Elemental do Fogo (1x/dia).
Broche Escudarcano|Item Maravilhoso|Incomum|Sim|Resistência a dano Energético. Imunidade a Mísseis Mágicos.
Buraco Portátil|Item Maravilhoso|Raro|Não|Um tecido que se desdobra em um buraco extradimensional de 3m de profundidade.
Cachimbos Teratológicos|Item Maravilhoso|Comum|Não|Fumaça assume forma de criatura por alguns segundos.
Cadeado Antiladinagem|Item Maravilhoso|Comum|Não|Fechadura mágica. Testes de Destreza para abrir têm Desvantagem.
Cajado Avicular|Item Maravilhoso|Comum|Não|Possui 10 cargas. Gasta 1 carga para emitir sons de pássaros.
Caldeirão do Renascimento|Item Maravilhoso|Muito Raro|Sim|Prepara Poção de Cura (maior) (1x/dia). Pode ressuscitar um Humanoide (1x/7 dias).
Capa de Muitas Modas|Item Maravilhoso|Comum|Não|Altera estilo, cor e qualidade aparente da capa à vontade.
Capa Deslocadora|Item Maravilhoso|Raro|Sim|Projeta uma ilusão de você a 1,5m de distância, impondo Desvantagem em ataques contra você.
Capa do Povo Élfico|Item Maravilhoso|Incomum|Sim|Desvantagem em Percepção para notar você. Vantagem em Furtividade.
Capa do Saltimbanco|Item Maravilhoso|Raro|Não|Permite conjurar Porta Dimensional (1x/dia).
Capa Esvoaçante|Item Maravilhoso|Comum|Não|Pode ondular dramaticamente (Ação Bônus).
Carrilhão Destrancador|Item Maravilhoso|Raro|Não|Pode conjurar Arrombar (10 usos).
Chave Misteriosa|Item Maravilhoso|Comum|Não|5% de chance de destrancar qualquer fechadura.
Chifre de Escutar|Item Maravilhoso|Comum|Não|Suprime a condição Surdo em você.
Chifre do Alarme Silencioso|Item Maravilhoso|Comum|Não|Possui 4 cargas. Gasta 1 carga para emitir um alarme que só uma criatura escolhida ouve (até 180m).
Cimitarra da Velocidade|Arma|Muito Raro|Sim|+2 em ataques e dano. Pode fazer um ataque adicional com ela como Ação Bônus.
Cinturão de Força de Gigante (da colina)|Item Maravilhoso|Raro|Sim|Sua Força se torna 21.
Cinturão de Força de Gigante (de pedra/gelo)|Item Maravilhoso|Muito Raro|Sim|Sua Força se torna 23.
Cinturão de Força de Gigante (de fogo)|Item Maravilhoso|Muito Raro|Sim|Sua Força se torna 25.
Cinturão de Força de Gigante (das nuvens)|Item Maravilhoso|Lendário|Sim|Sua Força se torna 27.
Cinturão de Força de Gigante (da tempestade)|Item Maravilhoso|Lendário|Sim|Sua Força se torna 29.
Cinturão do Povo Anão|Item Maravilhoso|Raro|Sim|Conhece Anão, +2 Con (máx 20), Vantagem em Persuasão com Anões. Resistência a Veneno e Visão no Escuro se não for Anão.
Cola Suprema|Item Maravilhoso|Lendário|Não|Cola permanente que só pode ser desfeita com Solvente Universal ou Desejo.
Colar da Adaptabilidade|Item Maravilhoso|Incomum|Sim|Pode respirar em qualquer ambiente. Vantagem contra Envenenado.
Colar de Bolas de Fogo|Item Maravilhoso|Raro|Não|Possui 1d6+3 contas. Arremessar uma conjura Bola de Fogo (CD 15).
Colar de Contas de Oração|Item Maravilhoso|Raro|Sim|Possui 1d4+2 contas mágicas. Conjuram Bênção, Curar Ferimentos, Restauração Maior, Destruição Radiante, etc.
Colar dos Pensamentos|Item Maravilhoso|Incomum|Sim|Possui 5 cargas. Gasta 1 carga para conjurar Detectar Pensamentos (CD 13).
Conta de Hidratação|Item Maravilhoso|Comum|Não|Transforma até meio litro de líquido em água potável.
Conta de Nutrição|Item Maravilhoso|Comum|Não|Fornece nutrição equivalente a 1 dia de rações.
Contas Energéticas|Item Maravilhoso|Raro|Não|Arremessar cria uma esfera de força que causa 5d4 Energético e prende criaturas.
Corda Autorreparadora|Item Maravilhoso|Comum|Não|Uma corda de 15m que se junta se for cortada.
Corda de Emaranhamento|Item Maravilhoso|Raro|Não|Uma corda que pode ser comandada para enredar criaturas.
Corda Encantada|Item Maravilhoso|Incomum|Não|Uma corda de 18m que pode se mover e se amarrar sozinha.
Coselete de Couro Deslumbrante|Armadura|Raro|Não|+1 na CA. Pode mudar a aparência da armadura para roupas comuns.
Cota de Malha Élfica|Armadura|Raro|Não|+1 na CA. Proficiência com a armadura, mesmo sem treinamento.
Cota de Malha Ifriti|Armadura|Lendário|Sim|+3 na CA. Imunidade a Fogo. Pode andar sobre lava.
Cubo de Invocação|Item Maravilhoso|Raro|Não|Um cubo que invoca uma criatura ao girar a manivela (Invocar Aberração, Fera, Constructo, Dragão, Elemental, Feérico).
Cubo Energético|Item Maravilhoso|Raro|Sim|Possui 10 cargas. Pode conjurar Armadura Arcana, Escudo Arcano, Esfera Resiliente, Muralha de Energia, etc.
Cubo-Portal|Item Maravilhoso|Lendário|Não|Possui 3 cargas. Abre portais para outros planos (Portal ou Transição Planar).
Dado do Charlatão|Item Maravilhoso|Comum|Sim|Você controla o resultado de qualquer jogada deste d6.
Defensora|Arma|Lendário|Sim|+3 em ataques e dano. Pode transferir o bônus para a CA.
Diadema da Explosão|Item Maravilhoso|Incomum|Não|Pode conjurar Raio Ardente (1x/dia).
Dispositivo de Kwalish|Item Maravilhoso|Lendário|Não|Um barril de ferro que se transforma em uma lagosta mecânica gigante.
Elmo da Compreensão de Idiomas|Item Maravilhoso|Incomum|Não|Pode conjurar Compreender Idiomas à vontade.
Elmo de Telepatia|Item Maravilhoso|Incomum|Sim|Telepatia 9m. Pode conjurar Detectar Pensamentos ou Sugestão (1x/dia cada).
Elmo de Teleporte|Item Maravilhoso|Raro|Sim|Possui 3 cargas. Gasta 1 carga para conjurar Teleporte.
Elmo do Esplendor|Item Maravilhoso|Muito Raro|Sim|Possui joias que podem ser gastas para conjurar Luz do Dia, Bola de Fogo, Rajada Prismática ou Muralha de Fogo.
Elmo do Medo|Item Maravilhoso|Comum|Não|Olhos brilham em vermelho.
Escaravelho de Proteção|Item Maravilhoso|Lendário|Sim|+1 na CA. Possui 12 cargas para transformar falha em sucesso contra Necromancia. Vantagem contra magias.
Escudo Animado|Escudo|Muito Raro|Sim|Pode ser animado para flutuar e proteger você (mãos livres).
Escudo Apanhador de Flechas|Escudo|Raro|Sim|+2 na CA contra ataques à distância. Pode redirecionar ataques.
Escudo Bloqueador de Magias|Escudo|Muito Raro|Sim|Vantagem em salvaguardas contra magias. Ataques mágicos têm Desvantagem.
Escudo do Cavaleiro|Escudo|Muito Raro|Sim|+2 na CA. Pode usar Campo de Proteção e Pancada Forte.
Escudo Expressivo|Escudo|Comum|Não|Pode mudar a expressão facial no escudo.
Escudo Sentinela|Escudo|Incomum|Não|Vantagem em Iniciativa e Percepção.
Escudo, +1, +2, +3|Escudo|Varia|Não|Bônus na CA.
Espada da Precisão|Arma|Muito Raro|Sim|Maximiza dados de dano contra objetos. Acerto crítico 20 causa +14 de dano e 1 nível de Exaustão.
Espada da Vingança|Arma|Incomum|Sim|+1 em ataques e dano. Maldição: Desvantagem em ataques com outras armas. Salvaguarda CD 15 para não entrar em frenesi se sofrer dano.
Espada Dançarina|Arma|Muito Raro|Sim|Pode flutuar e atacar sozinha por 4 rodadas.
Espada das Respostas|Arma|Lendário|Sim|+3 em ataques e dano. Pode usar Reação para atacar quem acertar você (ignora Resistência/Imunidade).
Espada de Kas|Arma|Artefato|Sim|+3 em ataques e dano. Acerto crítico 19-20. Dano extra contra Mortos-Vivos. Sede de Sangue.
Espada Laceradora|Arma|Raro|Sim|+2d6 de dano Necrótico. Impede cura (CD 15).
Espada Lunar|Arma|Comum|Não|Emite luz do luar na escuridão.
Espada Usurpadora de Vida|Arma|Raro|Sim|Acerto crítico 20 causa +15 de dano Necrótico e concede PV Temporários.
Espada Vorpal|Arma|Lendário|Sim|+3 em ataques e dano. Acerto crítico 20 corta a cabeça do alvo.
Espelho Aprisionador de Vida|Item Maravilhoso|Muito Raro|Não|Aprisiona criaturas que veem seu reflexo (CD 15 Carisma).
Estatueta de Poder Maravilhoso|Item Maravilhoso|Varia|Não|Transforma-se em uma criatura viva (corvo, mosca, leão, etc.) por um tempo.
Faixas de Ferro de Bilarro|Item Maravilhoso|Raro|Não|Arremessar a esfera prende a criatura (CD 20 Força para escapar).
Ferraduras de Velocidade|Item Maravilhoso|Raro|Não|Aumenta o Deslocamento da montaria em 9m.
Ferraduras de Zéfiro|Item Maravilhoso|Muito Raro|Não|Permite que a montaria flutue a 10cm do chão, ignorando Terreno Difícil.
Flauta Atormentadora|Item Maravilhoso|Incomum|Não|Possui 3 cargas. Tocar causa a condição Amedrontado (CD 15 Sabedoria).
Flauta dos Esgotos|Item Maravilhoso|Incomum|Sim|Ratos são Indiferentes. Possui 3 cargas para invocar Enxame de Ratos.
Fortaleza Instantânea de Daern|Item Maravilhoso|Raro|Sim|Uma estatueta que se transforma em uma torre de adamantina.
Gema da Claridade|Item Maravilhoso|Incomum|Não|Possui 50 cargas. Emite luz, dispara feixe cegante ou cone de luz.
Gema da Visão|Item Maravilhoso|Raro|Sim|Possui 3 cargas. Concede Visão Verdadeira (36m) por 10 minutos.
Gema Elemental|Item Maravilhoso|Incomum|Não|Quebrar invoca um Elemental (Fogo, Terra, Água ou Ar).
Grilhões Dimensionais|Item Maravilhoso|Raro|Não|Impede movimento extradimensional (teleporte, viagem planar).
Haste Retrátil|Item Maravilhoso|Comum|Não|Uma haste de 3m que se retrai para 30cm.
Incensário de Controlar Elementais do Ar|Item Maravilhoso|Raro|Não|Invoca um Elemental do Ar (1x/dia).
Insígnia da Pena de Quaal|Item Maravilhoso|Varia|Não|Pena que se transforma em vários objetos (âncora, pássaro, leque, barco-cisne, árvore, chicote).
Instrumento Musical de Escrita|Item Maravilhoso|Comum|Não|Possui 3 cargas. Gasta 1 carga para escrever uma mensagem mágica em um objeto.
Instrumento Musical de Ilusões|Item Maravilhoso|Comum|Não|Cria efeitos visuais ilusórios inofensivos.
Instrumento Musical dos Bardos|Item Maravilhoso|Varia|Sim|Instrumentos que permitem conjurar várias magias (Invisibilidade, Voo, Curar Ferimentos, etc.).
Jarro Alquímico|Item Maravilhoso|Incomum|Não|Produz um líquido à escolha (ácido, veneno, cerveja, água, etc.) 1x/dia.
Lâmina da Sorte|Arma|Lendário|Sim|+1 em ataques, dano e salvaguardas. Pode conjurar Desejo (1d3 cargas) e refazer um Teste de D20 (1x/dia).
Lâmina Solar|Arma|Raro|Sim|+2 em ataques e dano. Causa dano Radiante. Brilha com luz solar.
Laminegra|Arma|Artefato|Sim|+3 em ataques e dano. Devora almas. Pode conjurar Celeridade.
Lanterna Reveladora|Item Maravilhoso|Incomum|Não|Criaturas e objetos Invisíveis tornam-se visíveis na Luz Plena.
Leque do Vento|Item Maravilhoso|Incomum|Não|Conjura Lufada de Vento. 20% de chance de se desfazer ao usar.
Livro das Trevas Profanas|Item Maravilhoso|Artefato|Sim|Aumenta um atributo em 2, diminui outro em 2. Imunidade a Exaustão. Conjura Animar Mortos, Círculo da Morte, Dedo da Morte, Dominar Monstro.
Livro de Magias Durável|Item Maravilhoso|Comum|Não|Imune a fogo e água. Não se deteriora.
Livro dos Feitos Sublimes|Item Maravilhoso|Artefato|Sim|Auréola (Vantagem em Persuasão, Desvantagem para Ínferos/Mortos-Vivos). Imunidade a Amedrontado/Enfeitiçado. +2 Sabedoria.
Loriga de Escamas Dracônicas|Armadura|Muito Raro|Sim|+1 na CA. Vantagem contra sopros. Resistência a um tipo de dano dracônico.
Lunâmina|Arma|Lendário|Sim|+1 em ataques e dano. Ganha propriedades extras dependendo das runas (Bônus, Dano extra, Arremesso, Crítico, Brilho, Anel Armazenador, Sombra).
Luvas de Apanhar Projéteis|Item Maravilhoso|Incomum|Sim|Reduz dano de armas à distância em 1d10 + Des.
Luvas de Natação e Escalada|Item Maravilhoso|Incomum|Sim|Deslocamento de Escalada e Natação igual ao Deslocamento. +5 em Atletismo para escalar/nadar.
Luvas da Ladinagem|Item Maravilhoso|Incomum|Sim|+5 em Prestidigitação. Pode abrir fechaduras a distância.
Maça da Destruição|Arma|Raro|Não|+1 em ataques (ou +3 contra Constructos). Acerto crítico 20 causa +7 (ou +14 contra Constructos). Se Constructo tiver 25 PV ou menos, é destruído.
Maça da Disrupção|Arma|Raro|Sim|+2d6 de dano Radiante contra Ínferos/Mortos-Vivos. CD 15 Sabedoria para não ser destruído.
Maça do Terror|Arma|Raro|Sim|Possui 3 cargas. Gasta 1 carga para amedrontar criaturas em 9m (CD 15 Sabedoria).
Machado do Carrasco|Arma|Muito Raro|Não|+1 em ataques e dano. +2d6 de dano Cortante contra Humanoides. Concede PV Temporários.
Machado dos Senhores Anões|Arma|Artefato|Sim|+3 em ataques e dano. Arremesso. Bônus de Moradin (proficiências, +2 Con, máximo dano em objetos, Imunidade a Veneno, Visão no Escuro).
Machado-Berserker|Arma|Raro|Sim|+1 em ataques e dano. PV máximos aumentam em 1 por nível. Maldição: Berserk se sofrer dano (CD 15 Sabedoria).
Manoplas de Poder do Ogro|Item Maravilhoso|Incomum|Sim|Sua Força se torna 19.
Manto da Arraia|Item Maravilhoso|Incomum|Sim|Pode respirar debaixo d'água. Deslocamento de Natação de 18m.
Manto da Natureza|Item Maravilhoso|Incomum|Sim|Muda de cor para se camuflar. Foco de conjuração para Druida/Guardião. Pode se esconder como Ação Bônus.
Manto das Asas|Item Maravilhoso|Raro|Sim|Pode se transformar em asas (Deslocamento de Voo 18m por 1 hora).
Manto de Invisibilidade|Item Maravilhoso|Lendário|Sim|Possui 3 cargas. Gasta 1 carga para ficar Invisível por 1 hora.
Manto de Proteção|Item Maravilhoso|Incomum|Sim|+1 na CA e salvaguardas.
Manto de Resistência à Magia|Item Maravilhoso|Raro|Sim|Vantagem em salvaguardas contra magias.
Manto do Morcego|Item Maravilhoso|Raro|Sim|Vantagem em Furtividade. Em Meia-luz/ Escuridão, pode voar 12m e se polimorfar em morcego.
Manual de Rapidez nas Ações|Item Maravilhoso|Muito Raro|Não|Aumenta a Destreza em 2 (máx 30) após 48h de estudo.
Manual de Saúde Corporal|Item Maravilhoso|Muito Raro|Não|Aumenta a Constituição em 2 (máx 30) após 48h de estudo.
Manual dos Exercícios Benéficos|Item Maravilhoso|Muito Raro|Não|Aumenta a Força em 2 (máx 30) após 48h de estudo.
Manual dos Golens|Item Maravilhoso|Muito Raro|Não|Contém instruções para criar um Golem (Argila, Carne, Ferro ou Pedra).
Martelo do Trovão|Arma|Lendário|Sim|+1 em ataques e dano. Arremesso. Acerto causa estrondo (CD 17 Constituição para não ficar Atordoado).
Martelo Arremessável dos Anões|Arma|Muito Raro|Sim|+3 em ataques e dano. Arremesso. +1d8 (ou 2d8 contra Gigantes) Energético. Retorna à mão.
Matadora de Dragões|Arma|Raro|Não|+1 em ataques e dano. +3d6 de dano contra Dragões.
Matadora de Gigantes|Arma|Raro|Não|+1 em ataques e dano. +2d6 de dano contra Gigantes (CD 15 Força para não cair).
Membro Protético|Item Maravilhoso|Comum|Não|Substitui um membro perdido e funciona normalmente.
Mochila Prestativa de Heward|Item Maravilhoso|Raro|Não|Possui três espaços extradimensionais. Pesa sempre 2,5kg.
Moeda Rival|Item Maravilhoso|Comum|Não|Possui 1 carga. Lançar a moeda causa 2d4 Psíquico e Desvantagem (Cara) ou 1d4 Psíquico em você (Coroa).
Munição Exterminadora|Munição|Muito Raro|Não|Causa +6d10 de dano Energético a um tipo específico de criatura.
Munição Impactante|Munição|Comum|Não|Alvo deve passar em CD 10 Força ou cai.
Munição, +1, +2, +3|Munição|Varia|Não|Bônus em ataques e dano.
Óleo de Forma Etérea|Poção|Raro|Não|Aplica Forma Etérea por 1 hora.
Óleo de Precisão|Poção|Muito Raro|Não|Transforma uma arma em +3 ou munição em +3.
Óleo Escorregadio|Poção|Incomum|Não|Aplica Movimentação Livre por 8h ou Graxa.
Olho de Megera|Item Maravilhoso|Incomum|Não|Possui 3 cargas. Gasta 1 carga para Ver o Invisível ou Visão no Escuro.
Olho e Mão de Vecna|Item Maravilhoso|Artefato|Sim|Olho: Conjura magias, Visão de Raio-X, Visão Verdadeira. Mão: Conjura magias, Força 20, Dano Gélido extra. Juntos: Desejo, Imunidade a Veneno, Regeneração.
Olho Ersatz|Item Maravilhoso|Comum|Não|Substitui um olho perdido. Funciona como um olho normal.
Olhos Ampliadores da Visão|Item Maravilhoso|Incomum|Não|Visão no Escuro 30cm. Vantagem em Investigação para examinar coisas próximas.
Olhos da Águia|Item Maravilhoso|Incomum|Não|Vantagem em Percepção visual. Vê detalhes a longas distâncias.
Olhos de Enfeitiçar|Item Maravilhoso|Incomum|Sim|Possui 3 cargas. Gasta cargas para conjurar Enfeitiçar Pessoa (CD 13).
Olhos Noturnos|Item Maravilhoso|Incomum|Não|Visão no Escuro 18m (ou +18m se já tiver).
Onda|Arma|Artefato|Sim|+3 em ataques e dano. Acerto crítico 20 causa +21 de dano Necrótico. Adaptação Subaquática, Vantagem em Iniciativa, Comando Aquático, Globo de Invulnerabilidade.
Opressor|Arma|Artefato|Sim|+3 em ataques e dano. Arremesso. Consciência Sobrenatural (detecta portas secretas). Onda de Choque (Atordoa em área).
Orbe Flutuante|Item Maravilhoso|Incomum|Não|Uma esfera que emite luz e flutua a até 1,5m do chão.
Orbes Dracônicos|Item Maravilhoso|Artefato|Sim|Controla o orbe (CD 15 Carisma). Pode chamar dragões cromáticos. Conjura Curar Ferimentos, Detectar Magia, Luz do Dia, Proteção Contra a Morte, Vidência.
Pedra da Boa Sorte|Item Maravilhoso|Incomum|Sim|+1 em testes de atributo e salvaguardas.
Pedra de Controlar Elementais da Terra|Item Maravilhoso|Raro|Não|Invoca um Elemental da Terra (1x/dia).
Pedra de Ioun|Item Maravilhoso|Varia|Sim|Pedras que orbitam a cabeça concedendo bônus (Força, Destreza, Inteligência, Sabedoria, Carisma, CA, Percepção, Regeneração, etc.).
Pedras Mensageiras|Item Maravilhoso|Incomum|Não|Par de pedras que permite conjurar Remeter (1x/dia).
Perfume de Encantamento|Item Maravilhoso|Comum|Não|Vantagem em Enganação e Persuasão por 1 hora.
Pergaminho da Invocação de Titã|Pergaminho|Lendário|Não|Invoca um Titã (Animal Soberano, Gosma da Aniquilação, Colosso, Cataclisma Elemental, Empiriano, Kraken).
Pergaminho de Círculo da Proteção|Pergaminho|Raro|Não|Cria uma Emanação que impede criaturas de um tipo específico de entrar por 5 minutos.
Pergaminho Mágico|Pergaminho|Varia|Não|Contém uma magia. Pode ser lido se a magia estiver na sua lista.
Periapto de Proteção Contra Veneno|Item Maravilhoso|Raro|Sim|Imunidade a Veneno e Envenenado.
Periapto de Saúde|Item Maravilhoso|Incomum|Sim|Ação Usar Magia para recuperar 2d4+2 PV (1x/dia).
Periapto de Cicatrização|Item Maravilhoso|Incomum|Sim|Dobra a cura de Dados de Vida. Pode tratar um 9 ou menos como 10 em Salvaguardas Contra Morte.
Pérola de Poder|Item Maravilhoso|Incomum|Sim|Ação Usar Magia para recuperar um espaço de magia de 3º círculo ou inferior (1x/dia).
Pigmentos Maravilhosos de Nolzur|Item Maravilhoso|Muito Raro|Não|Pode pintar objetos que se tornam reais (até 500 PO de valor total).
Pó de Desaparecimento|Item Maravilhoso|Incomum|Não|Torna você e criaturas em 3m Invisíveis por 2d4 minutos.
Pó de Espirro-engasgo|Item Maravilhoso|Incomum|Não|Força criaturas em 9m a fazer CD 15 Constituição ou ficam Incapacitadas e sufocando.
Pó da Seca|Item Maravilhoso|Incomum|Não|Transforma água em uma esfera de poeira (CD 13 Constituição para Elementais da Água).
Pote do Despertar|Item Maravilhoso|Comum|Não|Plantar um arbusto por 30 dias o transforma em um Arbusto Desperto.
Pote de Ferro|Item Maravilhoso|Lendário|Não|Aprisiona uma criatura que falhe em CD 17 Sabedoria. Pode ser aberto para comandar a criatura por 1 hora.
Roupas Autoconcertantes|Item Maravilhoso|Comum|Não|Roupas que se remendam sozinhas.
Rubi do Mago de Batalha|Item Maravilhoso|Comum|Sim|Permite usar uma arma como Foco de Conjuração.
Sacro Vingadora|Arma|Lendário|Sim|+3 em ataques e dano. +2d10 de dano Radiante contra Ínferos/Mortos-Vivos. Emanação de 3m (ou 9m se Paladino 17+) com Vantagem em salvaguardas contra magias.
Sandálias de Escalada de Aranha|Item Maravilhoso|Incomum|Sim|Deslocamento de Escalada igual ao Deslocamento. Move-se por superfícies verticais e tetos.
Sela do Cavaleiro|Item Maravilhoso|Incomum|Não|Você não pode ser desmontado. Ataques contra a montaria têm Desvantagem.
Solvente Universal|Item Maravilhoso|Lendário|Não|Dissolve qualquer adesivo (incluindo Cola Suprema).
Sorvedora das Nove Almas|Arma|Muito Raro|Sim|+2 em ataques e dano. Acerto crítico 20 contra criatura com menos de 100 PV mata instantaneamente (CD 15 Constituição).
Tabuleiro Espiritual|Item Maravilhoso|Muito Raro|Não|Possui 3 cargas. Gasta 1 carga para conjurar Augúrio ou 3 cargas para Comunhão.
Tacape Trovejante|Arma|Muito Raro|Sim|Força se torna 20. +1d8 de dano Trovejante (+3d8 contra objetos). Estrondo Trovejante e Terremoto (1x/dia).
Talismã da Esfera|Item Maravilhoso|Lendário|Sim|Vantagem em Arcanismo para controlar Esfera da Aniquilação. Pode movê-la mais longe.
Talismã do Bem Sem Ver a Quem|Item Maravilhoso|Lendário|Sim|Ínferos/Mortos-Vivos sofrem 8d6 Radiante ao tocar. Possui 7 cargas para Repreensão Pura (destrói Ínferos/Mortos-Vivos).
Talismã do Mal Universal|Item Maravilhoso|Lendário|Sim|Criaturas não Ínferas/Mortos-Vivos sofrem 8d6 Necrótico ao tocar. Possui 6 cargas para Fim Supremo (destrói Celestiais).
Tapete Voador|Item Maravilhoso|Muito Raro|Não|Um tapete que voa sob seu comando.
Tiara do Intelecto|Item Maravilhoso|Incomum|Sim|Sua Inteligência se torna 19.
Tigela de Comandar Elementais da Água|Item Maravilhoso|Raro|Não|Invoca um Elemental da Água (1x/dia).
Tomo da Compreensão|Item Maravilhoso|Muito Raro|Não|Aumenta a Sabedoria em 2 (máx 30) após 48h de estudo.
Tomo da Liderança e Influência|Item Maravilhoso|Muito Raro|Não|Aumenta o Carisma em 2 (máx 30) após 48h de estudo.
Tomo das Palavras Tranquilizantes|Item Maravilhoso|Lendário|Sim|Funciona como Livro de Magias. Pode conjurar uma magia escrita nele (1x/dia).
Tomo dos Pensamentos Objetivos|Item Maravilhoso|Muito Raro|Não|Aumenta a Inteligência em 2 (máx 30) após 48h de estudo.
Touca de Respirar na Água|Item Maravilhoso|Incomum|Não|Cria uma bolha de ar ao redor da cabeça debaixo d'água.
Tridente de Comandar Peixes|Arma|Incomum|Sim|Possui 3 cargas. Gasta 1 carga para conjurar Dominar Fera em uma Fera aquática.
Trombeta de Explosão|Item Maravilhoso|Raro|Não|Soprar cria um Cone de 9m (CD 15 Constituição para não ficar Surdo). 20% de chance de explodir.
Trombeta do Valhalla|Item Maravilhoso|Varia|Não|Invoca espíritos combatentes (Berserkers) por 1 hora. Requer proficiência (Prata, Latão, Bronze, Ferro).
Túnica das Cores Cintilantes|Item Maravilhoso|Muito Raro|Sim|Possui 3 cargas. Gasta 1 carga para criar padrões deslumbrantes (Desvantagem em ataques contra você e CD 15 para não ficar Atordoado).
Túnica das Estrelas|Item Maravilhoso|Muito Raro|Sim|+1 em salvaguardas. Possui 6 estrelas (gastar para Mísseis Mágicos de 5º círculo). Pode viajar para o Plano Astral.
Túnica das Quinquilharias Úteis|Item Maravilhoso|Incomum|Não|Possui remendos que se transformam em objetos (adaga, corda, espelho, etc.).
Túnica do Arquimago|Item Maravilhoso|Lendário|Sim|CA 15 + Des. +2 na CD de magia e ataque mágico. Vantagem em salvaguardas contra magias.
Túnica Ocular|Item Maravilhoso|Raro|Sim|Visão no Escuro e Visão Verdadeira 36m. Vantagem em Percepção visual.
Unguento de Keoghtom|Item Maravilhoso|Incomum|Não|Possui 1d4+1 doses. Cura 2d8+2 PV e remove Envenenado.
Vara de Pesca|Item Maravilhoso|Comum|Não|Uma haste que se transforma em vara de pescar.
Varinha Cuspidora de Fogo|Varinha|Raro|Sim|Possui 7 cargas. Pode conjurar Bola de Fogo gastando 1 a 3 cargas.
Varinha das Maravilhas|Varinha|Raro|Sim|Possui 7 cargas. Gastar 1 carga produz um efeito aleatório (tabela).
Varinha de Detectar Inimigo|Varinha|Raro|Sim|Possui 7 cargas. Gasta 1 carga para saber a direção de criaturas Hostis em 18m por 1 minuto.
Varinha de Mísseis Mágicos|Varinha|Incomum|Não|Possui 7 cargas. Pode conjurar Mísseis Mágicos gastando 1 a 3 cargas.
Varinha de Paralisia|Varinha|Raro|Sim|Possui 7 cargas. Gasta 1 carga para tentar paralisar uma criatura por 1 minuto.
Varinha de Polimorfia|Varinha|Muito Raro|Sim|Possui 7 cargas. Gasta 1 carga para conjurar Polimorfia.
Varinha de Relâmpagos|Varinha|Raro|Sim|Possui 7 cargas. Pode conjurar Relâmpago gastando 1 a 3 cargas.
Varinha de Teia|Varinha|Incomum|Sim|Possui 7 cargas. Gasta 1 carga para conjurar Teia.
Varinha do Mago de Guerra, +1|Varinha|Incomum|Sim|Você adquire +1 em jogadas de ataque mágico. Ignora Cobertura Parcial.
Varinha do Mago de Guerra, +2|Varinha|Raro|Sim|Você adquire +2 em jogadas de ataque mágico. Ignora Cobertura Parcial.
Varinha do Mago de Guerra, +3|Varinha|Muito Raro|Sim|Você adquire +3 em jogadas de ataque mágico. Ignora Cobertura Parcial.
Varinha do Medo|Varinha|Raro|Sim|Possui 7 cargas. Pode conjurar Comando (abaixar/fugir) ou Medo.
Varinha dos Segredos|Varinha|Incomum|Não|Possui 3 cargas. Gasta 1 carga para pulsar e apontar para a porta ou armadilha secreta mais próxima.
Varinha Farejadora de Magias|Varinha|Incomum|Não|Possui 3 cargas. Gasta 1 carga para conjurar Detectar Magia.
Varinha Imobilizadora|Varinha|Raro|Sim|Possui 7 cargas. Pode conjurar Paralisar Monstro (5 cargas) ou Paralisar Pessoa (2 cargas).
Varinha Pirotécnica|Varinha|Comum|Não|Possui 7 cargas. Gasta 1 carga para criar uma explosão inofensiva de luz multicolorida.
Vassoura Dançante de Baba Yaga|Item Maravilhoso|Incomum|Sim|Transforma-se em uma Vassoura Agressora sob seu controle.
Vassoura Voadora|Item Maravilhoso|Incomum|Sim|Voa a 15m. Suporta 200kg. Pode ser enviada a até 1,5km.
Vela das Profundezas|Item Maravilhoso|Comum|Não|Chama não se apaga debaixo d'água.
Vela de Invocação|Item Maravilhoso|Muito Raro|Sim|Acender a vela (4h de queima) concede Vantagem em Testes de D20 e permite conjurar magias de 1º círculo sem gastar espaço. Pode ser consumida para conjurar Portal.
`;

(function(){
  const parseItemMagico = (raw) => raw.split('\n')
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('#'))
    .map(l => {
      const partes = l.split('|').map(p => p.trim());
      const [nome, tipo, raridade, sintonizacao, descricao] = partes;
      return {
        nome,
        tipo,
        raridade: raridade || 'Comum',
        sintonizacao: sintonizacao === 'Sim',
        descricao: descricao || ''
      };
    });

  window.DND_DATA = window.DND_DATA || {};
  window.DND_DATA.ITENS_MAGICOS = parseItemMagico(ITENS_MAGICOS_RAW);
  console.log('[DND] Itens Mágicos carregados:', window.DND_DATA.ITENS_MAGICOS.length);
})();