/* ============================================================
   SUBCLASSES — MAGO
   Fonte: Livro do Jogador (2024)
   Todas: características em 3, 6, 10, 14
   ============================================================ */

/* ---------- ABJURADOR ---------- */
window.registrarSubclasse({
  id:"abjurador", nome:"Abjurador", classeId:"mago", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 6, 10, 14],
  caracteristicas: [
    { nivel:3, nome:"Proteção Arcana", descricao:"Ao conjurar magia de Abjuração com espaço: crie proteção mágica em você (dano absorvido = 2 × nível de Mago + mod. Int). Recupera PV da proteção ao conjurar Abjuração (2 × nível do espaço) ou como Ação Bônus gastando espaço (2 × nível). Após conjurar a proteção, 1×/Descanso Longo." },
    { nivel:3, nome:"Versado em Abjuração", descricao:"Escolha 2 magias de Mago de Abjuração de 2º círculo ou inferior; adicione-as ao livro. Ao ganhar acesso a novo círculo, adiciona 1 magia de Abjuração do mesmo círculo ao livro." },
    { nivel:6, nome:"Proteção Projetada", descricao:"Reação: quando criatura à vista a até 9m sofrer dano, sua Proteção Arcana absorve esse dano (com Resistências/Vulnerabilidades aplicadas)." },
    { nivel:10, nome:"Rompe-Magia", descricao:"Sempre tem Contramagia e Dissipar Magia preparadas. Pode conjurar Dissipar Magia como Ação Bônus e adicionar BP ao teste de atributo. Espaço não é gasto se a magia falhar em interromper." },
    { nivel:14, nome:"Resistência à Magia", descricao:"Vantagem em salvaguardas contra magias e Resistência a dano proveniente de magias." }
  ]
});

/* ---------- ADIVINHADOR ---------- */
window.registrarSubclasse({
  id:"adivinhador", nome:"Adivinhador", classeId:"mago", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 6, 10, 14],
  caracteristicas: [
    { nivel:3, nome:"Prodígio", descricao:"Ao completar Descanso Longo, jogue 2d20 e registre. Pode substituir qualquer Teste de D20 (seu ou de criatura à vista) por uma dessas rolagens. Deve escolher antes da jogada; 1×/turno." },
    { nivel:3, nome:"Versado em Adivinhação", descricao:"Escolha 2 magias de Mago de Adivinhação de 2º círculo ou inferior; adicione-as ao livro. Ao ganhar acesso a novo círculo, adiciona 1 magia de Adivinhação do mesmo círculo ao livro." },
    { nivel:6, nome:"Perito em Adivinhação", descricao:"Ao conjurar magia de Adivinhação com espaço de 2º+ círculo: recupera um espaço gasto de círculo inferior ao usado (máx. 5º)." },
    { nivel:10, nome:"O Terceiro Olho", descricao:"Ação Bônus (1×/Descanso Curto/Longo): escolha um benefício até Descanso Curto/Longo: Compreensão Superior (lê qualquer idioma), Ver o Invisível (conjura sem espaço), ou Visão no Escuro 36m." },
    { nivel:14, nome:"Prodígio Maior", descricao:"Jogue 3d20 para Prodígio em vez de 2." }
  ]
});

/* ---------- EVOCADOR ---------- */
window.registrarSubclasse({
  id:"evocador", nome:"Evocador", classeId:"mago", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 6, 10, 14],
  caracteristicas: [
    { nivel:3, nome:"Truque Potente", descricao:"Ao conjurar truque em criatura e errar o ataque (ou ela ser bem-sucedida na salvaguarda): ela sofre metade do dano, mas não efeitos adicionais." },
    { nivel:3, nome:"Versado em Evocação", descricao:"Escolha 2 magias de Mago de Evocação de 2º círculo ou inferior; adicione-as ao livro. Ao ganhar acesso a novo círculo, adiciona 1 magia de Evocação do mesmo círculo ao livro." },
    { nivel:6, nome:"Esculpir Magias", descricao:"Ao conjurar magia de Evocação que afeta criaturas à vista: escolha 1 + círculo da magia criaturas. Elas são automaticamente bem-sucedidas e não sofrem dano (mesmo se sofreriam metade)." },
    { nivel:10, nome:"Evocação Potencializada", descricao:"Ao conjurar magia de Mago de Evocação, adiciona mod. Inteligência a uma jogada de dano." },
    { nivel:14, nome:"Sobrecarga", descricao:"Ao conjurar magia de Mago que cause dano com espaço de 1º–5º círculo: pode causar dano máximo no turno da conjuração. 1º uso sem efeito adverso; usos subsequentes antes de Descanso Longo causam 2d12 Necrótico por círculo do espaço, aumentando +1d12 por círculo a cada uso extra. Ignora Resistência e Imunidade." }
  ]
});

/* ---------- ILUSIONISTA ---------- */
window.registrarSubclasse({
  id:"ilusionista", nome:"Ilusionista", classeId:"mago", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 6, 10, 14],
  caracteristicas: [
    { nivel:3, nome:"Ilusões Aprimoradas", descricao:"Magias de Ilusão sem componentes Verbais; +18m de alcance em Ilusões com alcance de 3m+. Conhece Ilusão Menor (não conta no limite); pode criar som + imagem com 1 conjuração e conjurá-la como Ação Bônus." },
    { nivel:3, nome:"Versado em Ilusão", descricao:"Escolha 2 magias de Mago de Ilusão de 2º círculo ou inferior; adicione-as ao livro. Ao ganhar acesso a novo círculo, adiciona 1 magia de Ilusão do mesmo círculo ao livro." },
    { nivel:6, nome:"Criaturas Espectrais", descricao:"Sempre tem Convocar Feérico e Invocar Fera preparadas. Pode mudar a escola para Ilusão (criatura fica espectral). Pode conjurar a versão Ilusão sem espaço; mas a criatura fica com metade dos PV. 1×/Descanso Longo por magia nesse modo." },
    { nivel:10, nome:"Autoimagem Ilusória", descricao:"Reação: quando atingido por ataque, cria duplicata ilusória que faz o ataque errar. 1×/Descanso Curto/Longo, ou gaste espaço de 2º+ para restaurar." },
    { nivel:14, nome:"Realidade Ilusória", descricao:"Ao conjurar magia de Ilusão com espaço, escolha um objeto inanimado não mágico parte da ilusão e torne-o real por 1 min (Ação Bônus, enquanto a magia durar). Não pode causar dano nem condições." }
  ]
});

console.log('[DND] Subclasses do Mago carregadas.');