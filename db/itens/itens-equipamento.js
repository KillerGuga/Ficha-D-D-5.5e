/* ============================================================
   ITENS — Equipamento Mundano (PHB 2024)
   Formato: nome | tipo | subtipo | custo_po | peso_kg | propriedades | descricao
   ============================================================ */

const ITENS_EQUIPAMENTO_RAW = String.raw`

# ============================================================
# ARMAS SIMPLES CORPO A CORPO
# ============================================================
Adaga|Arma|Simples Corpo a Corpo|2|0.5|1d4 Perfurante, Acuidade, Leve, Arremesso (6/18m)|Uma lâmina curta e afiada, fácil de esconder.
Azagaia|Arma|Simples Corpo a Corpo|0.5|1|1d6 Perfurante, Arremesso (9/36m)|Uma lança curta usada para caça e combate.
Clava|Arma|Simples Corpo a Corpo|0.1|1|1d4 Contundente, Leve|Um pedaço de madeira pesado, ideal para golpes simples.
Clava Grande|Arma|Simples Corpo a Corpo|0.2|5|1d8 Contundente, Duas Mãos|Um porrete grande que exige as duas mãos.
Foice|Arma|Simples Corpo a Corpo|1|1|1d4 Cortante, Leve|Uma ferramenta agrícola adaptada para combate.
Lança|Arma|Simples Corpo a Corpo|1|1.5|1d6 Perfurante, Arremesso (6/18m), Versátil (1d8)|Uma haste longa com ponta afiada.
Machadinha|Arma|Simples Corpo a Corpo|5|1|1d6 Cortante, Leve, Arremesso (6/18m)|Um machado pequeno e arremessável.
Maça|Arma|Simples Corpo a Corpo|5|2|1d6 Contundente|Uma haste com uma cabeça pesada de metal.
Martelo Leve|Arma|Simples Corpo a Corpo|2|1|1d4 Contundente, Leve, Arremesso (6/18m)|Um martelo pequeno e balanceado.
Cajado|Arma|Simples Corpo a Corpo|0.2|2|1d6 Contundente, Versátil (1d8)|Um bastão longo de madeira, também usado como foco.

# ============================================================
# ARMAS SIMPLES À DISTÂNCIA
# ============================================================
Arco Curto|Arma|Simples à Distância|25|1|1d6 Perfurante, Munição (24/96m), Duas Mãos|Um arco curto, ideal para arqueiros iniciantes.
Besta Leve|Arma|Simples à Distância|25|2.5|1d8 Perfurante, Munição (24/96m), Recarga, Duas Mãos|Uma besta de tamanho médio, lenta mas potente.
Dardo|Arma|Simples à Distância|0.05|0.1|1d4 Perfurante, Acuidade, Arremesso (6/18m)|Uma pequena adaga de arremesso.
Funda|Arma|Simples à Distância|0.1|0.1|1d4 Contundente, Munição (9/36m)|Uma tira de couro usada para arremessar pedras.

# ============================================================
# ARMAS MARCIAIS CORPO A CORPO
# ============================================================
Alabarda|Arma|Marcial Corpo a Corpo|20|3|1d10 Cortante, Pesada, Duas Mãos, Extensão|Uma haste longa com uma lâmina de machado e uma ponta de lança.
Chicote|Arma|Marcial Corpo a Corpo|2|1|1d4 Cortante, Acuidade, Extensão|Um chicote de couro trançado.
Cimitarra|Arma|Marcial Corpo a Corpo|25|1.5|1d6 Cortante, Acuidade, Leve|Uma espada curva e leve, rápida nos golpes.
Espada Curta|Arma|Marcial Corpo a Corpo|10|1|1d6 Perfurante, Acuidade, Leve|Uma espada pequena, perfeita para combate ágil.
Espada Grande|Arma|Marcial Corpo a Corpo|50|3|2d6 Cortante, Pesada, Duas Mãos|Uma lâmina gigantesca que exige força para ser empunhada.
Espada Longa|Arma|Marcial Corpo a Corpo|15|1.5|1d8 Cortante, Versátil (1d10)|A arma clássica dos cavaleiros.
Glaive|Arma|Marcial Corpo a Corpo|20|3|1d10 Cortante, Pesada, Duas Mãos, Extensão|Uma lâmina curva montada em uma haste longa.
Lança de Montaria|Arma|Marcial Corpo a Corpo|10|3|1d12 Perfurante, Extensão, Montaria|Uma lança pesada usada por cavaleiros.
Maça Estrela|Arma|Marcial Corpo a Corpo|15|2|1d8 Perfurante|Uma maça com espinhos, causando dano perfurante.
Machado de Batalha|Arma|Marcial Corpo a Corpo|10|2|1d8 Cortante, Versátil (1d10)|Um machado de guerra de uma mão.
Machado Grande|Arma|Marcial Corpo a Corpo|30|3.5|1d12 Cortante, Pesada, Duas Mãos|Um machado enorme que pode partir escudos.
Malho|Arma|Marcial Corpo a Corpo|10|5|2d6 Contundente, Pesada, Duas Mãos|Um martelo gigante de duas mãos.
Mangual|Arma|Marcial Corpo a Corpo|10|1|1d8 Contundente|Uma haste com uma corrente e uma esfera de metal.
Martelo de Guerra|Arma|Marcial Corpo a Corpo|15|1|1d8 Contundente, Versátil (1d10)|Um martelo pesado para combate.
Picareta de Guerra|Arma|Marcial Corpo a Corpo|5|1|1d8 Perfurante|Uma picareta reforçada para a guerra.
Rapieira|Arma|Marcial Corpo a Corpo|25|1|1d8 Perfurante, Acuidade|Uma espada fina e ágil, focada em estocadas.
Tridente|Arma|Marcial Corpo a Corpo|5|2|1d8 Perfurante, Versátil (1d10), Arremesso (6/18m)|Uma lança com três pontas.

# ============================================================
# ARMAS MARCIAIS À DISTÂNCIA
# ============================================================
Arco Longo|Arma|Marcial à Distância|50|1|1d8 Perfurante, Munição (45/180m), Pesada, Duas Mãos|Um arco grande, difícil de puxar, mas com grande alcance.
Besta de Mão|Arma|Marcial à Distância|75|1.5|1d6 Perfurante, Munição (9/36m), Leve, Recarga|Uma besta pequena que pode ser usada com uma mão.
Besta Pesada|Arma|Marcial à Distância|50|8.5|1d10 Perfurante, Munição (30/120m), Pesada, Recarga, Duas Mãos|Uma besta enorme, lenta mas devastadora.
Mosquete|Arma|Marcial à Distância|500|5|1d12 Perfurante, Munição (12/36m), Pesada, Recarga, Duas Mãos|Uma arma de fogo primitiva.
Pistola|Arma|Marcial à Distância|250|1.5|1d10 Perfurante, Munição (9/27m), Recarga|Uma arma de fogo de uma mão.
Zarabatana|Arma|Marcial à Distância|10|0.5|1 Perfurante, Munição (7.5/30m), Recarga|Um tubo longo para disparar dardos.

# ============================================================
# ARMADURAS LEVES
# ============================================================
Acolchoada|Armadura|Leve|5|4|CA 11 + Des, Furtividade Desv.|Camadas de tecido e algodão acolchoado.
Couro|Armadura|Leve|10|5|CA 11 + Des|Peças de couro curtido, flexível.
Couro Batido|Armadura|Leve|45|6.5|CA 12 + Des|Couro reforçado com rebites de metal.

# ============================================================
# ARMADURAS MÉDIAS
# ============================================================
Gibão de Peles|Armadura|Média|10|6|CA 12 + Des (máx 2)|Peles espessas costuradas.
Cota de Malha Parcial|Armadura|Média|50|10|CA 13 + Des (máx 2)|Anéis de metal costurados em couro.
Loriga de Escamas|Armadura|Média|50|22|CA 14 + Des (máx 2), Furtividade Desv.|Escamas de metal sobrepostas.
Couraça Peitoral|Armadura|Média|400|10|CA 14 + Des (máx 2)|Peças de metal moldadas ao corpo.
Placas Parcial|Armadura|Média|750|20|CA 15 + Des (máx 2), Furtividade Desv.|Placas de metal cobrindo o tronco.

# ============================================================
# ARMADURAS PESADAS
# ============================================================
Cota de Anéis|Armadura|Pesada|30|20|CA 14, Furtividade Desv.|Anéis de metal costurados em couro pesado.
Cota de Malha|Armadura|Pesada|75|27.5|CA 16, For 13, Furtividade Desv.|Anéis de metal entrelaçados.
Armadura de Talas|Armadura|Pesada|200|30|CA 17, For 15, Furtividade Desv.|Talas de metal rebitadas em couro.
Placas|Armadura|Pesada|1500|32|CA 18, For 15, Furtividade Desv.|Placas de metal articuladas, a armadura mais protetora.
Escudo|Armadura|Escudo|10|3|+2 CA|Um escudo de madeira ou metal.

# ============================================================
# EQUIPAMENTO GERAL
# ============================================================
Ácido|Equipamento|Consumível|25|0.5|Arremesso (6m), 2d6 Dano Ácido|Frasco de líquido corrosivo.
Água Benta|Equipamento|Consumível|25|0.5|Arremesso (6m), 2d8 Dano Radiante (Ínferos/Mortos-Vivos)|Frasco de água abençoada.
Algibeira|Equipamento|Recipiente|0.5|0.5|Capacidade: 3 kg / 6 litros|Uma bolsa pequena para moedas e itens leves.
Aljava|Equipamento|Recipiente|1|0.5|Capacidade: 20 flechas|Um estojo para armazenar flechas.
Antitoxina|Equipamento|Consumível|50|0|Vantagem contra Envenenado por 1 hora|Um soro que combate toxinas.
Apito Sinalizador|Equipamento|Ferramenta|0.05|0|Som audível a 180m|Um apito que produz um som agudo e alto.
Aríete Portável|Equipamento|Ferramenta|4|16.5|Bônus de +4 para arrombar portas|Um tronco pesado com uma ponta de metal.
Armadilha de Caça|Equipamento|Ferramenta|5|12.5|Dano 1d4, CD 13 para escapar|Um anel de aço dentado com uma mola.
Arpéu|Equipamento|Ferramenta|2|2|Teste de Acrobacia CD 13 para ancorar|Um gancho de metal para escalada.
Balde|Equipamento|Recipiente|0.05|1|Capacidade: 0.3 m³|Um recipiente para líquidos.
Baliza|Equipamento|Ferramenta|0.05|3|Comprimento: 3m|Uma vara longa para saltos ou alcance.
Barril|Equipamento|Recipiente|2|35|Capacidade: 160 litros|Um recipiente grande de madeira.
Baú|Equipamento|Recipiente|5|12.5|Capacidade: 350 litros|Uma caixa trancável para tesouros.
Bolsa de Componentes|Equipamento|Foco|25|1|Componentes materiais sem custo|Uma bolsa à prova d'água com compartimentos.
Cadeado|Equipamento|Ferramenta|10|0.5|CD 15 para arrombar com Ferramentas de Ladrão|Um cadeado com chave.
Caixa para Fogo|Equipamento|Ferramenta|0.5|0.5|Acende fogo com Ação Bônus|Um kit de sílex e aço.
Caneta Tinteiro|Equipamento|Ferramenta|0.02|0|Escreve com tinta|Uma pena para escrita.
Cantil|Equipamento|Recipiente|0.2|2.5|Capacidade: 2 litros|Um recipiente para água.
Cesta|Equipamento|Recipiente|0.4|1|Capacidade: 20 kg|Um recipiente de vime.
Cobertor|Equipamento|Utilidade|0.5|1.5|Vantagem contra frio extremo|Um cobertor de lã.
Corda|Equipamento|Utilidade|1|2.5|Comprimento: 15m, CD 20 para romper|Uma corda de cânhamo resistente.
Cordão|Equipamento|Utilidade|0.1|0|Comprimento: 3m|Uma corda fina.
Corrente|Equipamento|Utilidade|5|5|CD 20 para romper, CD 18 para escapar|Uma corrente de metal pesada.
Escada|Equipamento|Utilidade|0.1|12.5|Comprimento: 3m|Uma escada de madeira.
Esferas de Metal|Equipamento|Consumível|1|1|CD 10 para não cair|Um saco de esferas de metal para derramar no chão.
Espelho|Equipamento|Utilidade|5|0.25|Reflete luz e imagens|Um espelho de aço portátil.
Estacas de Ferro|Equipamento|Utilidade|1|2.5|Pacote com 10|Estacas para fixar cordas ou trancar portas.
Estojo, Mapa ou Pergaminho|Equipamento|Recipiente|1|0.5|Capacidade: 10 folhas|Um tubo para armazenar mapas.
Estojo, Virote de Besta|Equipamento|Recipiente|1|0.5|Capacidade: 20 virotes|Um estojo para virotes de besta.
Estrepes|Equipamento|Consumível|1|1|CD 15 para não sofrer 1 de dano e parar|Pequenos espinhos de metal para o chão.
Fantasia|Equipamento|Vestuário|5|2|Vantagem para se passar por alguém|Roupas para disfarce.
Foco Arcano|Equipamento|Foco|10|0.5|Cristal, Orbe, Varinha, etc.|Um item para canalizar magia arcana.
Fogo Alquímico|Equipamento|Consumível|50|0.5|Arremesso (6m), 1d4 Dano Ígneo + Combustão|Um líquido pegajoso e inflamável.
Foco Druídico|Equipamento|Foco|1|0|Ramo de visco, Cajado, etc.|Um item para canalizar magia primal.
Frasco|Equipamento|Recipiente|1|0|Capacidade: 150 ml|Um pequeno recipiente de vidro.
Garrafa de Vidro|Equipamento|Recipiente|2|1|Capacidade: 1 litro|Uma garrafa de vidro.
Grilhões|Equipamento|Utilidade|2|3|CD 20 para escapar, CD 25 para romper|Algemas para prender criaturas.
Jarro|Equipamento|Recipiente|0.02|2|Capacidade: 4 litros|Um recipiente de barro.
Kit de Aventureiro|Equipamento|Kit|10|27.5|Mochila, cantil, corda, etc.|Um kit com itens essenciais para aventuras.
Kit de Artista|Equipamento|Kit|40|29|Fantasias, espelho, etc.|Um kit para artistas e performers.
Kit de Assaltante|Equipamento|Kit|16|21|Pé de cabra, esferas, etc.|Um kit para arrombar e invadir.
Kit de Curandeiro|Equipamento|Kit|5|1.5|10 usos, estabiliza sem teste|Um kit para primeiros socorros.
Kit de Diplomata|Equipamento|Kit|39|19.5|Roupas finas, perfume, etc.|Um kit para negociações.
Kit de Erudito|Equipamento|Kit|40|11|Livro, tinta, etc.|Um kit para estudiosos.
Kit de Escalada|Equipamento|Kit|25|6|Ancora e evita quedas|Um kit para escalar.
Kit de Explorador de Masmorras|Equipamento|Kit|12|27.5|Tochas, pé de cabra, etc.|Um kit para explorar masmorras.
Kit de Sacerdote|Equipamento|Kit|33|14.5|Água benta, incenso, etc.|Um kit para rituais religiosos.
Lâmpada|Equipamento|Utilidade|0.5|0.5|Luz Plena 4,5m, Meia-luz 9m|Uma lâmpada a óleo.
Lanterna Coberta|Equipamento|Utilidade|5|1|Luz Plena 9m, Meia-luz 9m|Uma lanterna com tampa.
Lanterna Foca-facho|Equipamento|Utilidade|10|1|Luz Plena Cone 18m|Uma lanterna que projeta um feixe de luz.
Livro|Equipamento|Utilidade|25|2.5|Bônus de +5 em testes de conhecimento|Um livro de conhecimento.
Luneta|Equipamento|Utilidade|1000|0.5|Amplia objetos distantes|Um telescópio pequeno.
Lupa|Equipamento|Utilidade|100|0|Vantagem para inspecionar detalhes|Uma lente de aumento.
Mapa|Equipamento|Utilidade|1|0|Bônus de +5 em Sobrevivência para navegar|Um mapa detalhado.
Mochila|Equipamento|Recipiente|2|2.5|Capacidade: 15 kg / 30 litros|Uma bolsa para carregar itens nas costas.
Óleo|Equipamento|Consumível|0.1|0.5|Arremesso (6m), 5 Dano Ígneo, Combustível|Um frasco de óleo inflamável.
Pá|Equipamento|Ferramenta|2|2.5|Cava um buraco de 1,5m em 1 hora|Uma ferramenta para cavar.
Papel|Equipamento|Utilidade|0.02|0|Uma folha de papel|Folha para escrita.
Pé de Cabra|Equipamento|Ferramenta|2|2.5|Vantagem em testes de Força para alavancar|Uma barra de ferro para arrombar.
Perfume|Equipamento|Consumível|5|0|Vantagem em Persuasão por 1 hora|Um frasco de perfume.
Pergaminho|Equipamento|Utilidade|0.1|0|Uma folha de pergaminho|Folha para escrita.
Pergaminho Mágico|Equipamento|Consumível|50|0|Contém uma magia|Um pergaminho com uma magia inscrita.
Poção de Cura|Equipamento|Consumível|50|0.25|Cura 2d4+2 PV|Um líquido vermelho mágico.
Pote|Equipamento|Recipiente|0.02|0.5|Capacidade: 0.5 litro|Um pote de barro.
Pote de Ferro|Equipamento|Recipiente|2|5|Capacidade: 4 litros|Um pote de ferro.
Rações|Equipamento|Consumível|0.5|1|Alimento para 1 dia|Comida seca e nutritiva.
Rede|Equipamento|Arma|1|1.5|Arremesso (4,5m), CD 10 para escapar|Uma rede para capturar criaturas.
Roldana e Polias|Equipamento|Ferramenta|1|2.5|Iça 4x o peso normal|Um sistema de roldanas para levantar peso.
Roupas, Fantasia|Equipamento|Vestuário|5|2|Vantagem para disfarce|Roupas para se passar por outro.
Roupas, Finas|Equipamento|Vestuário|15|3|Adequado para eventos sociais|Roupas de alta qualidade.
Roupas, Viagem|Equipamento|Vestuário|2|2|Roupas resistentes para viagem|Roupas práticas para aventuras.
Saca|Equipamento|Recipiente|0.1|0.5|Capacidade: 15 kg / 30 litros|Um saco grande.
Saco de Dormir|Equipamento|Utilidade|1|3.5|Acomoda uma criatura Média|Um saco para dormir confortavelmente.
Símbolo Sagrado|Equipamento|Foco|5|0.5|Amuleto, Emblema ou Relicário|Um item para canalizar magia divina.
Sino|Equipamento|Utilidade|1|0|Som audível a 18m|Um pequeno sino.
Tenda|Equipamento|Utilidade|2|10|Acomoda duas criaturas Médias|Uma tenda para acampar.
Tinta|Equipamento|Utilidade|10|0|Tinta para escrita|Um frasco de tinta.
Tocha|Equipamento|Utilidade|0.01|0.5|Luz Plena 6m, Meia-luz 6m, 1 Dano Ígneo|Uma tocha para iluminação.
Túnica|Equipamento|Vestuário|1|1|Roupas cerimoniais ou vocacionais|Uma túnica simples.
Vela|Equipamento|Utilidade|0.01|0|Luz Plena 1,5m, Meia-luz 1,5m|Uma vela para iluminação.
Veneno Básico|Equipamento|Consumível|100|0|Aplica em arma, +1d4 Dano Venenoso|Um frasco de veneno.

# ============================================================
# FERRAMENTAS
# ============================================================
Ferramentas de Carpinteiro|Ferramenta|Artesão|8|4|Força, CD 20 para arrombar|Ferramentas para trabalhar madeira.
Ferramentas de Ferreiro|Ferramenta|Artesão|20|4|Força, CD 20 para arrombar|Ferramentas para forjar metal.
Ferramentas de Funileiro|Ferramenta|Artesão|50|5|Destreza, CD 20 para criar item minúsculo|Ferramentas para reparos e invenções.
Ferramentas de Joalheiro|Ferramenta|Artesão|25|1|Inteligência, CD 15 para avaliar gemas|Ferramentas para trabalhar joias.
Ferramentas de Cartógrafo|Ferramenta|Artesão|15|3|Sabedoria, CD 15 para mapear|Ferramentas para criar mapas.
Ferramentas de Oleiro|Ferramenta|Artesão|10|1.5|Inteligência, CD 15 para analisar cerâmica|Ferramentas para trabalhar cerâmica.
Ferramentas de Coureiro|Ferramenta|Artesão|5|2.5|Destreza, CD 10 para moldar couro|Ferramentas para trabalhar couro.
Ferramentas de Pedreiro|Ferramenta|Artesão|10|4|Força, CD 10 para cinzelar|Ferramentas para trabalhar pedra.
Ferramentas de Entalhador|Ferramenta|Artesão|1|2.5|Destreza, CD 10 para entalhar|Ferramentas para trabalhar madeira fina.
Ferramentas de Sapateiro|Ferramenta|Artesão|5|2.5|Destreza, CD 10 para modificar calçado|Ferramentas para fazer sapatos.
Suprimentos de Calígrafo|Ferramenta|Artesão|10|2.5|Destreza, CD 15 para escrever|Ferramentas para caligrafia.
Kit de Herbalismo|Ferramenta|Kit|5|1.5|Inteligência, CD 10 para criar antídotos|Ferramentas para criar remédios.
Kit de Veneno|Ferramenta|Kit|50|1|Inteligência, CD 20 para extrair veneno|Ferramentas para criar venenos.
Ferramentas de Ladrão|Ferramenta|Kit|25|0.5|Destreza, CD 15 para abrir fechaduras|Ferramentas para arrombar e desarmar armadilhas.
Instrumento Musical|Ferramenta|Instrumento|Varia|Varia|Carisma, Vantagem para atuação|Um instrumento para música.

# ============================================================
# MONTARIAS E VEÍCULOS
# ============================================================
Camelo|Montaria|Animal|50|0|Capacidade: 225 kg|Um camelo resistente para desertos.
Cavalo de Carga|Montaria|Animal|50|0|Capacidade: 270 kg|Um cavalo forte para carregar peso.
Cavalo de Guerra|Montaria|Animal|400|0|Capacidade: 270 kg|Um cavalo treinado para combate.
Cavalo de Montaria|Montaria|Animal|75|0|Capacidade: 240 kg|Um cavalo rápido para viagens.
Elefante|Montaria|Animal|200|0|Capacidade: 660 kg|Um elefante enorme e poderoso.
Mastim|Montaria|Animal|25|0|Capacidade: 93 kg|Um cachorro grande e leal.
Mula|Montaria|Animal|8|0|Capacidade: 210 kg|Um animal híbrido e resistente.
Pônei|Montaria|Animal|30|0|Capacidade: 112 kg|Um pônei pequeno e ágil.
Biga|Veículo|Terrestre|250|50|Puxada por animais|Um veículo de duas rodas para combate.
Carroça|Veículo|Terrestre|15|100|Puxada por animais|Um veículo de quatro rodas para carga.
Carruagem|Veículo|Terrestre|100|300|Puxada por animais|Um veículo de luxo para passageiros.
Trenó|Veículo|Terrestre|20|150|Puxado por animais|Um veículo para neve.
Vagão|Veículo|Terrestre|35|200|Puxado por animais|Um veículo grande para carga.
Barco a Remo|Veículo|Aquático|50|0|Deslocamento: 2,4 km/h|Um barco pequeno movido a remos.
Barco de Quilha|Veículo|Aquático|3000|0|Deslocamento: 1,6 km/h|Um barco maior para rios e lagos.
Dracar|Veículo|Aquático|10000|0|Deslocamento: 4,8 km/h|Um navio viking.
Galera|Veículo|Aquático|30000|0|Deslocamento: 6,5 km/h|Um navio de guerra movido a remos.
Navio de Guerra|Veículo|Aquático|25000|0|Deslocamento: 4 km/h|Um navio de guerra grande.
Veículo|Veículo|Aquático|10000|0|Deslocamento: 3,2 km/h|Um navio à vela.
Aeronau|Veículo|Aéreo|40000|0|Deslocamento: 13 km/h|Um navio voador movido por elementais.
`;

(function(){
  const parseItem = (raw) => raw.split('\n')
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('#'))
    .map(l => {
      const partes = l.split('|').map(p => p.trim());
      const [nome, tipo, subtipo, custo, peso, propriedades, descricao] = partes;
      return {
        nome,
        tipo,
        subtipo: subtipo || '',
        custo: parseFloat(custo) || 0,
        peso: parseFloat(peso) || 0,
        propriedades: propriedades || '',
        descricao: descricao || ''
      };
    });

  window.DND_DATA = window.DND_DATA || {};
  window.DND_DATA.EQUIPAMENTOS = parseItem(ITENS_EQUIPAMENTO_RAW);
  console.log('[DND] Equipamentos carregados:', window.DND_DATA.EQUIPAMENTOS.length);
})();