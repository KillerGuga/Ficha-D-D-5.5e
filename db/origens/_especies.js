/* ============================================================
   ESPÉCIES — Livro do Jogador (2024)
   Campos: id, nome, fonte, tipoCriatura, tamanhos, deslocamento,
   tracos[], descricao
   ============================================================ */

/* ---------- Aasimar ---------- */
window.registrarEspecie({
  id:"aasimar", nome:"Aasimar", fonte:"PHB 2024",
  tipoCriatura:"Humanoide",
  tamanhos:["Médio","Pequeno"],
  deslocamento: 9,
  tracos: [
    { nome:"Resistência Celestial", descricao:"Resistência a dano Necrótico e Radiante." },
    { nome:"Visão no Escuro", descricao:"18 metros." },
    { nome:"Mãos Curativas", descricao:"Ação Usar Magia: toque criatura e jogue um número de d4s igual ao BP; a criatura recupera PV igual ao total. 1×/Descanso Longo." },
    { nome:"Portador da Luz", descricao:"Você conhece o truque Luz. Carisma é o atributo de conjuração." },
    { nome:"Revelação Celestial", descricao:"Nível 3+. Ação Bônus: escolha Asas Celestiais (Deslocamento de Voo = Deslocamento), Manto Necrótico (criaturas não-aliadas a até 3m fazem salv. Carisma ou Amedrontadas até o fim do seu próximo turno) ou Transfiguração Radiante (Luz Plena 3m + Meia-luz 3m; no fim de cada turno, criaturas a até 3m sofrem dano Radiante = BP). Dura 1 min. 1×/Descanso Longo." }
  ],
  descricao: "Mortais que carregam uma centelha dos Planos Superiores em suas almas. Podem trazer luz, cura e fúria celestial."
});

/* ---------- Anão ---------- */
window.registrarEspecie({
  id:"anao", nome:"Anão", fonte:"PHB 2024",
  tipoCriatura:"Humanoide",
  tamanhos:["Médio"],
  deslocamento: 9,
  tracos: [
    { nome:"Visão no Escuro", descricao:"36 metros." },
    { nome:"Resistência a Toxinas", descricao:"Resistência a dano Venenoso. Vantagem em salvaguardas para evitar ou encerrar a condição Envenenado." },
    { nome:"Tenacidade Anã", descricao:"PV máximos aumentam em 1. Aumentam +1 novamente a cada nível de personagem." },
    { nome:"Conhecimento de Pedras", descricao:"Ação Bônus: adquire Sismiconsciência 18m por 10 min. Deve estar em contato com pedra. Usos = BP; recupera em Descanso Longo." }
  ],
  descricao: "Criados da terra nos tempos antigos por uma divindade da forja. Resistentes como as montanhas, vivem cerca de 350 anos."
});

/* ---------- Draconato ---------- */
window.registrarEspecie({
  id:"draconato", nome:"Draconato", fonte:"PHB 2024",
  tipoCriatura:"Humanoide",
  tamanhos:["Médio"],
  deslocamento: 9,
  tracos: [
    { nome:"Herança Dracônica", descricao:"Escolha o tipo de dragão (Azul/Bronze → Elétrico; Branco/Prata → Gélido; Negro/Cobre → Ácido; Ouro/Vermelho/Latão → Ígneo; Verde → Venenoso). Determina aparência, Ataque de Sopro e Resistência." },
    { nome:"Ataque de Sopro", descricao:"Ação Atacar: substitui um ataque por Cone de 4,5m ou Linha de 9m × 1,5m. Criaturas na área: salv. Destreza (CD 8 + Con + BP). Falha = 1d10 do tipo (→2d10 no nv. 5, 3d10 no nv. 11, 4d10 no nv. 17); sucesso = metade. Usos = BP; recupera em Descanso Longo." },
    { nome:"Resistência a Dano", descricao:"Resistência ao tipo determinado pela Herança Dracônica." },
    { nome:"Visão no Escuro", descricao:"18 metros." },
    { nome:"Voo Dracônico", descricao:"Nível 5+. Ação Bônus: asas espectrais por 10 min ou até encerrar/Incapacitado. Deslocamento de Voo = Deslocamento. 1×/Descanso Longo." }
  ],
  descricao: "Descendentes de dragões cromáticos e metálicos. Parecem dragões bípedes sem asas — escamosos, de olhos brilhantes, com chifres na cabeça."
});

/* ---------- Elfo ---------- */
window.registrarEspecie({
  id:"elfo", nome:"Elfo", fonte:"PHB 2024",
  tipoCriatura:"Humanoide",
  tamanhos:["Médio"],
  deslocamento: 9,
  tracos: [
    { nome:"Visão no Escuro", descricao:"18 metros." },
    { nome:"Linhagem Élfica", descricao:"Escolha uma linhagem:\n• Alto Elfo: conhece Prestidigitação Arcana (pode trocar por outro truque de Mago em Descanso Longo). Nv. 3: Detectar Magia. Nv. 5: Passo Nebuloso.\n• Drow: Visão no Escuro aumenta para 36m. Conhece Luzes Dançantes. Nv. 3: Fogo das Fadas. Nv. 5: Escuridão.\n• Elfo Silvestre: Deslocamento +1,5m. Conhece Arte Druídica. Nv. 3: Passos Largos. Nv. 5: Passo Sem Rastro.\nMagias de nv. 3/5: 1× sem espaço (recupera em Descanso Longo) e também com espaços de magia. Atributo: Int, Sab ou Car (escolha)." },
    { nome:"Ancestralidade Feérica", descricao:"Vantagem em salvaguardas para evitar ou encerrar Enfeitiçado." },
    { nome:"Sentidos Aguçados", descricao:"Proficiência em Intuição, Percepção ou Sobrevivência." },
    { nome:"Transe", descricao:"Descanso Longo em 4 horas meditando, mantendo consciência. Magia não pode forçá-lo a dormir." }
  ],
  descricao: "Criados por Corellon. Vivem cerca de 750 anos, não dormem — entram em transe para descansar."
});

/* ---------- Gnomo ---------- */
window.registrarEspecie({
  id:"gnomo", nome:"Gnomo", fonte:"PHB 2024",
  tipoCriatura:"Humanoide",
  tamanhos:["Pequeno"],
  deslocamento: 9,
  tracos: [
    { nome:"Visão no Escuro", descricao:"18 metros." },
    { nome:"Astúcia de Gnomo", descricao:"Vantagem em salvaguardas de Inteligência, Sabedoria e Carisma." },
    { nome:"Linhagem Gnômica", descricao:"Escolha:\n• Gnomo das Rochas: conhece Prestidigitação Arcana e Reparar. Pode gastar 10 min conjurando Prestidigitação Arcana para fabricar um dispositivo mecânico Minúsculo (CA 5, 1 PV). Pode ter 3 dispositivos ao mesmo tempo; cada um dura 8 h.\n• Gnomo do Bosque: conhece Ilusão Menor; tem Falar com Animais sempre preparada. Conjura Falar com Animais sem espaço (usos = BP); pode também usar espaços de magia.\nAtributo de conjuração: Int, Sab ou Car (escolha)." }
  ],
  descricao: "Seres mágicos criados por deuses da invenção, ilusões e vida subterrânea. Vivem cerca de 425 anos."
});

/* ---------- Golias ---------- */
window.registrarEspecie({
  id:"golias", nome:"Golias", fonte:"PHB 2024",
  tipoCriatura:"Humanoide",
  tamanhos:["Médio"],
  deslocamento: 10.5,
  tracos: [
    { nome:"Ancestralidade Gigante", descricao:"Escolha um benefício sobrenatural. Usos = BP; recupera em Descanso Longo:\n• Arrepio do Gelo (Gigante do Gelo): ao acertar com ataque e causar dano, +1d6 Gélido e reduz Deslocamento em 3m até o início do próximo turno.\n• Queimadura de Fogo (Gigante de Fogo): ao acertar com ataque e causar dano, +1d10 Ígneo.\n• Resistência da Pedra (Gigante da Pedra): Reação ao sofrer dano, joga 1d12 + mod. Con e reduz o dano.\n• Salto da Nuvem (Gigante das Nuvens): Ação Bônus, teleporta 9m para espaço desocupado à vista.\n• Tombo da Colina (Gigante da Colina): ao acertar criatura Grande ou menor, pode impor Caído.\n• Trovão da Tempestade (Gigante da Tempestade): Reação ao sofrer dano de criatura a até 18m, causa 1d8 Trovejante a ela." },
    { nome:"Forma Grande", descricao:"Nível 5+. Ação Bônus: tamanho vira Grande (se houver espaço) por 10 min ou até encerrar. Vantagem em testes de Força; Deslocamento +3m. 1×/Descanso Longo." },
    { nome:"Porte Poderoso", descricao:"Vantagem em testes para encerrar Imobilizado. Conta como um tamanho maior para capacidade de carga." }
  ],
  descricao: "Descendentes distantes de gigantes. Altos (2,10–2,40m), traçaram seu próprio caminho no multiverso livres dos conflitos internos dos gigantes."
});

/* ---------- Humano ---------- */
window.registrarEspecie({
  id:"humano", nome:"Humano", fonte:"PHB 2024",
  tipoCriatura:"Humanoide",
  tamanhos:["Médio","Pequeno"],
  deslocamento: 9,
  tracos: [
    { nome:"Eficiente", descricao:"Você adquire Inspiração Heroica sempre que completa um Descanso Longo." },
    { nome:"Hábil", descricao:"Proficiência em uma perícia à sua escolha." },
    { nome:"Versátil", descricao:"Adquire um talento de Origem à sua escolha. Recomendado: Habilidoso." }
  ],
  descricao: "Presentes em todo o multiverso, humanos são variados e numerosos, buscando alcançar o máximo em seus anos de vida."
});

/* ---------- Orc ---------- */
window.registrarEspecie({
  id:"orc", nome:"Orc", fonte:"PHB 2024",
  tipoCriatura:"Humanoide",
  tamanhos:["Médio"],
  deslocamento: 9,
  tracos: [
    { nome:"Pico de Adrenalina", descricao:"Ação Correr como Ação Bônus; ao executar, adquire PV Temporários = BP. Usos = BP; recupera em Descanso Curto/Longo." },
    { nome:"Visão no Escuro", descricao:"36 metros." },
    { nome:"Vigor Implacável", descricao:"Ao ser reduzido a 0 PV sem morrer, fica com 1 PV. 1×/Descanso Longo." }
  ],
  descricao: "Altos e robustos, com pele cinza, orelhas pontiagudas e caninos inferiores proeminentes. Descendentes de Gruumsh."
});

/* ---------- Pequenino ---------- */
window.registrarEspecie({
  id:"pequenino", nome:"Pequenino", fonte:"PHB 2024",
  tipoCriatura:"Humanoide",
  tamanhos:["Pequeno"],
  deslocamento: 9,
  tracos: [
    { nome:"Corajoso", descricao:"Vantagem em salvaguardas para evitar ou encerrar Amedrontado." },
    { nome:"Agilidade Pequenina", descricao:"Pode se mover pelo espaço de criatura um tamanho maior que você, mas não pode parar lá." },
    { nome:"Sorte", descricao:"Ao tirar 1 em um Teste de D20, pode jogar novamente (usa o novo resultado)." },
    { nome:"Furtividade Natural", descricao:"Pode executar a ação Esconder mesmo quando encoberto apenas por uma criatura um tamanho maior que você." }
  ],
  descricao: "Guiados por deuses que valorizam a vida, o lar e a lareira, buscam paraísos bucólicos onde família e comunidade moldam suas vidas. Vivem cerca de 150 anos."
});

/* ---------- Tiferino ---------- */
window.registrarEspecie({
  id:"tiferino", nome:"Tiferino", fonte:"PHB 2024",
  tipoCriatura:"Humanoide",
  tamanhos:["Médio","Pequeno"],
  deslocamento: 9,
  tracos: [
    { nome:"Visão no Escuro", descricao:"18 metros." },
    { nome:"Legado Ínfero", descricao:"Escolha um legado:\n• Abissal: Resistência a dano Venenoso; conhece Rajada de Veneno. Nv. 3: Raio Nauseante. Nv. 5: Paralisar Pessoa.\n• Ctônico: Resistência a dano Necrótico; conhece Toque Necrótico. Nv. 3: Vitalidade Vazia. Nv. 5: Raio do Enfraquecimento.\n• Infernal: Resistência a dano Ígneo; conhece Raio de Fogo. Nv. 3: Repreensão Diabólica. Nv. 5: Escuridão.\nMagias de nv. 3/5: 1× sem espaço (recupera em Descanso Longo) e também com espaços. Atributo: Int, Sab ou Car (escolha)." },
    { nome:"Presença Sobrenatural", descricao:"Conhece Taumaturgia. Usa o mesmo atributo de conjuração do Legado Ínfero." }
  ],
  descricao: "Nascem nos Planos Inferiores ou têm ancestrais de lá. Ligados por sangue a um diabo, demônio ou outro Ínfero — legado que promete poder, mas não influi na moral."
});

console.log('[DND] Espécies carregadas:', window.DND_DATA.SPECIES.length);