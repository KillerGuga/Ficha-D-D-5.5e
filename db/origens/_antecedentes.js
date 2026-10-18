/* ============================================================
   ANTECEDENTES — Livro do Jogador (2024)
   Campos: id, nome, fonte, tipo, valoresDeAtributo, talento,
   proficienciasPericias, proficienciaFerramenta, equipamento,
   descricao
   ============================================================ */

/* ---------- Acólito ---------- */
window.registrarAntecedente({
  id:"acolito", nome:"Acólito", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Inteligência","Sabedoria","Carisma"],
  talento: { nome:"Iniciado em Magia (Clérigo)", categoria:"Origem" },
  proficienciasPericias: ["Intuição","Religião"],
  proficienciaFerramenta: "Suprimentos de Calígrafo",
  equipamento: {
    opcaoA: ["Suprimentos de Calígrafo","Livro (orações)","Símbolo Sagrado","Pergaminho (10 folhas)","Túnica","8 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você se dedicou ao serviço em um templo, realizando ritos em homenagem a um deus ou panteão. Sob a orientação de um sacerdote, estudou religião e aprendeu a canalizar poder divino."
});

/* ---------- Andarilho ---------- */
window.registrarAntecedente({
  id:"andarilho", nome:"Andarilho", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Destreza","Sabedoria","Carisma"],
  talento: { nome:"Sortudo", categoria:"Origem" },
  proficienciasPericias: ["Furtividade","Intuição"],
  proficienciaFerramenta: "Ferramentas de Ladrão",
  equipamento: {
    opcaoA: ["2 Adagas","Ferramentas de Ladrão","Kit de Jogos (qualquer um)","2 Algibeiras","Roupas de Viagem","Saco de Dormir","16 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você cresceu nas ruas cercado por rejeitados igualmente malfadados, alguns deles amigos e outros rivais. Dormia onde podia e fazia bicos por comida."
});

/* ---------- Artesão ---------- */
window.registrarAntecedente({
  id:"artesao", nome:"Artesão", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Força","Destreza","Inteligência"],
  talento: { nome:"Artifista", categoria:"Origem" },
  proficienciasPericias: ["Investigação","Persuasão"],
  proficienciaFerramenta: "Ferramentas de Artesão (à escolha)",
  equipamento: {
    opcaoA: ["Ferramentas de Artesão (a mesma acima)","2 Algibeiras","Roupas de Viagem","32 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você começou a limpar o chão e esfregar balcões na oficina de um artesão por alguns trocados. Ao se tornar aprendiz, aprendeu a fabricar artesanatos básicos e a lidar com clientes exigentes."
});

/* ---------- Artista ---------- */
window.registrarAntecedente({
  id:"artista", nome:"Artista", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Força","Destreza","Carisma"],
  talento: { nome:"Músico", categoria:"Origem" },
  proficienciasPericias: ["Acrobacia","Atuação"],
  proficienciaFerramenta: "Instrumento Musical (à escolha)",
  equipamento: {
    opcaoA: ["Instrumento Musical (o mesmo acima)","Espelho","2 Fantasias","Perfume","Roupas de Viagem","11 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você passou a juventude em feiras e festivais itinerantes, fazendo bicos para músicos e acrobatas em troca de aulas."
});

/* ---------- Charlatão ---------- */
window.registrarAntecedente({
  id:"charlatao", nome:"Charlatão", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Destreza","Constituição","Carisma"],
  talento: { nome:"Habilidoso", categoria:"Origem" },
  proficienciasPericias: ["Enganação","Prestidigitação"],
  proficienciaFerramenta: "Kit de Falsificação",
  equipamento: {
    opcaoA: ["Kit de Falsificação","Fantasia","Roupas Finas","15 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Assim que atingiu a idade para pedir uma cerveja, escolheu seu banquinho favorito em cada taverna a quinze quilômetros de onde nasceu. Aprendeu a lidar com os infelizes em busca de mentiras reconfortantes."
});

/* ---------- Criminoso ---------- */
window.registrarAntecedente({
  id:"criminoso", nome:"Criminoso", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Destreza","Constituição","Inteligência"],
  talento: { nome:"Alerta", categoria:"Origem" },
  proficienciasPericias: ["Furtividade","Prestidigitação"],
  proficienciaFerramenta: "Ferramentas de Ladrão",
  equipamento: {
    opcaoA: ["2 Adagas","Ferramentas de Ladrão","2 Algibeiras","Pé de Cabra","Roupas de Viagem","16 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você sobrevivia em becos escuros, furtando pessoas ou assaltando lojas. Talvez fizesse parte de uma pequena gangue de criminosos que se protegiam mutuamente."
});

/* ---------- Eremita ---------- */
window.registrarAntecedente({
  id:"eremita", nome:"Eremita", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Constituição","Sabedoria","Carisma"],
  talento: { nome:"Curandeiro", categoria:"Origem" },
  proficienciasPericias: ["Medicina","Religião"],
  proficienciaFerramenta: "Kit de Herbalismo",
  equipamento: {
    opcaoA: ["Cajado","Kit de Herbalismo","Lâmpada","Livro (filosofia)","Óleo (3 frascos)","Roupas de Viagem","Saco de Dormir","16 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você passou seus primeiros anos isolado em uma cabana ou mosteiro bem além do povoado mais próximo. A solidão permitia muitas horas ponderando os mistérios da criação."
});

/* ---------- Escriba ---------- */
window.registrarAntecedente({
  id:"escriba", nome:"Escriba", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Destreza","Inteligência","Sabedoria"],
  talento: { nome:"Habilidoso", categoria:"Origem" },
  proficienciasPericias: ["Investigação","Percepção"],
  proficienciaFerramenta: "Suprimentos de Calígrafo",
  equipamento: {
    opcaoA: ["Suprimentos de Calígrafo","Lâmpada","Óleo (3 frascos)","Pergaminho (12 folhas)","Roupas Finas","23 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você passou anos de formação em um scriptorium, mosteiro ou agência governamental, aprendendo a escrever com mão firme e atenção aos detalhes."
});

/* ---------- Fazendeiro ---------- */
window.registrarAntecedente({
  id:"fazendeiro", nome:"Fazendeiro", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Força","Constituição","Sabedoria"],
  talento: { nome:"Vigoroso", categoria:"Origem" },
  proficienciasPericias: ["Lidar com Animais","Natureza"],
  proficienciaFerramenta: "Ferramentas de Carpinteiro",
  equipamento: {
    opcaoA: ["Foice","Ferramentas de Carpinteiro","Kit de Curandeiro","Balde de Ferro","Pá","30 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você cresceu perto da terra. Anos cuidando de animais e cultivando a terra o recompensaram com paciência e boa saúde."
});

/* ---------- Guarda ---------- */
window.registrarAntecedente({
  id:"guarda", nome:"Guarda", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Força","Inteligência","Sabedoria"],
  talento: { nome:"Alerta", categoria:"Origem" },
  proficienciasPericias: ["Atletismo","Percepção"],
  proficienciaFerramenta: "Kit de Jogos (à escolha)",
  equipamento: {
    opcaoA: ["Lança","Besta Leve","20 Virotes","Kit de Jogo (o mesmo acima)","Aljava","Grilhões","Lanterna Coberta","Roupas de Viagem","12 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Seus pés doem quando você se lembra das incontáveis horas em seu posto na torre. Você foi treinado para manter um olho atento para fora e outro para dentro da muralha."
});

/* ---------- Guia ---------- */
window.registrarAntecedente({
  id:"guia", nome:"Guia", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Destreza","Constituição","Sabedoria"],
  talento: { nome:"Iniciado em Magia (Druida)", categoria:"Origem" },
  proficienciasPericias: ["Furtividade","Sobrevivência"],
  proficienciaFerramenta: "Ferramentas de Cartógrafo",
  equipamento: {
    opcaoA: ["Arco Curto","20 Flechas","Ferramentas de Cartógrafo","Aljava","Roupas de Viagem","Saco de Dormir","Tenda","3 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você cresceu ao ar livre, longe de terras povoadas. De tempos em tempos, guiava sacerdotes da natureza que o instruíam nos fundamentos de canalizar a magia da natureza."
});

/* ---------- Marinheiro ---------- */
window.registrarAntecedente({
  id:"marinheiro", nome:"Marinheiro", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Força","Destreza","Sabedoria"],
  talento: { nome:"Valentão de Taverna", categoria:"Origem" },
  proficienciasPericias: ["Acrobacia","Percepção"],
  proficienciaFerramenta: "Ferramentas de Navegador",
  equipamento: {
    opcaoA: ["Adaga","Ferramentas de Navegador","Corda","Roupas de Viagem","20 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você viveu como um marinheiro, com o vento nas costas e os conveses balançando sob seus pés. Já se sentou em bancos de bar em mais portos do que consegue lembrar."
});

/* ---------- Mercador ---------- */
window.registrarAntecedente({
  id:"mercador", nome:"Mercador", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Constituição","Inteligência","Carisma"],
  talento: { nome:"Sortudo", categoria:"Origem" },
  proficienciasPericias: ["Lidar com Animais","Persuasão"],
  proficienciaFerramenta: "Ferramentas de Navegador",
  equipamento: {
    opcaoA: ["Ferramentas de Navegador","2 Algibeiras","Roupas de Viagem","22 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você foi aprendiz de um comerciante, mestre de caravanas ou lojista. Com ele, viajou bastante e ganhou a vida comprando e vendendo mercadorias."
});

/* ---------- Nobre ---------- */
window.registrarAntecedente({
  id:"nobre", nome:"Nobre", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Força","Inteligência","Carisma"],
  talento: { nome:"Habilidoso", categoria:"Origem" },
  proficienciasPericias: ["História","Persuasão"],
  proficienciaFerramenta: "Kit de Jogos (à escolha)",
  equipamento: {
    opcaoA: ["Kit de Jogos (o mesmo acima)","Perfume","Roupas Finas","29 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você foi criado em um castelo, cercado por riqueza, poder e privilégio. Sua família garantiu uma educação de primeira categoria."
});

/* ---------- Sábio ---------- */
window.registrarAntecedente({
  id:"sabio", nome:"Sábio", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Constituição","Inteligência","Sabedoria"],
  talento: { nome:"Iniciado em Magia (Mago)", categoria:"Origem" },
  proficienciasPericias: ["Arcanismo","História"],
  proficienciaFerramenta: "Suprimentos de Calígrafo",
  equipamento: {
    opcaoA: ["Cajado","Suprimentos de Calígrafo","Livro (história)","Pergaminho (8 folhas)","Túnica","8 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você passou seus anos de formação viajando entre mansões e mosteiros, realizando bicos em troca de acesso às bibliotecas. Sua mente anseia por mais."
});

/* ---------- Soldado ---------- */
window.registrarAntecedente({
  id:"soldado", nome:"Soldado", fonte:"PHB 2024", tipo:"fixo",
  valoresDeAtributo: ["Força","Destreza","Constituição"],
  talento: { nome:"Atacante Selvagem", categoria:"Origem" },
  proficienciasPericias: ["Atletismo","Intimidação"],
  proficienciaFerramenta: "Kit de Jogos (à escolha)",
  equipamento: {
    opcaoA: ["Lança","Arco Curto","20 Flechas","Kit de Curandeiro","Kit de Jogo (o mesmo acima)","Aljava","Roupas de Viagem","14 PO"],
    opcaoB: ["50 PO"]
  },
  descricao: "Você começou a treinar para a guerra assim que atingiu a idade adulta. A batalha está em seu sangue, e você coloca esse treinamento em prática no campo de batalha."
});

/* ---------- Antecedente Genérico (variante) ---------- */
window.registrarAntecedente({
  id:"personalizado", nome:"Antecedente Personalizado", fonte:"Variante (PHB 2024, Cap. 2)", tipo:"generico",
  valoresDeAtributo: {
    tipo: "escolha-3",
    regra: "Escolha três atributos. Aumente um deles em 2 e outro em 1; ou aumente os três em 1. Nenhum acima de 20."
  },
  talento: { tipo:"escolha", categoria:"Origem", nota:"Escolha qualquer talento da categoria Origem." },
  proficienciasPericias: { quantidade: 2, lista: "qualquer" },
  proficienciaFerramenta: { tipo:"escolha", opcoes: "qualquer ferramenta do capítulo 6" },
  equipamento: {
    opcaoA: { tipo:"pacote-escolha", nota:"Escolha qualquer pacote de equipamento do capítulo 6." },
    opcaoB: ["50 PO"]
  },
  descricao: "Antecedente flexível para jogadores que preferem criar a própria história. Escolha os três atributos, o talento de Origem, as duas perícias e a ferramenta; o equipamento inicial segue o pacote escolhido ou 50 PO."
});

console.log('[DND] Antecedentes carregados:', window.DND_DATA.BACKGROUNDS.length);