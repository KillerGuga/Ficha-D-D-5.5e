/* ============================================================
   TALENTOS — CATEGORIA ORIGEM
   Fonte: Livro do Jogador (2024)
   ============================================================ */

/* ---------- Alerta ---------- */
window.registrarTalento({
  id:"alerta", nome:"Alerta", categoria:"Origem",
  prerequisitos: null, repetivel: false,
  beneficios: [
    { nome:"Proficiência em Iniciativa", descricao:"Ao jogar Iniciativa, adiciona o Bônus de Proficiência à jogada." },
    { nome:"Troca de Iniciativa", descricao:"Imediatamente após jogar Iniciativa, pode trocar sua Iniciativa com a de um aliado voluntário no mesmo combate. Não é possível se você ou o aliado estiver Incapacitado." }
  ]
});

/* ---------- Artifista ---------- */
window.registrarTalento({
  id:"artifista", nome:"Artifista", categoria:"Origem",
  prerequisitos: null, repetivel: false,
  beneficios: [
    { nome:"Proficiência com Ferramentas", descricao:"Proficiência com três Ferramentas de Artesão diferentes (tabela Fabricação Rápida)." },
    { nome:"Desconto", descricao:"Ao comprar item não mágico, recebe 20% de desconto." },
    { nome:"Fabricação Rápida", descricao:"Ao completar um Descanso Longo, fabrica uma peça de equipamento da tabela Fabricação Rápida, se tiver as Ferramentas de Artesão associadas e proficiência. O item dura até o próximo Descanso Longo." }
  ]
});

/* ---------- Atacante Selvagem ---------- */
window.registrarTalento({
  id:"atacante-selvagem", nome:"Atacante Selvagem", categoria:"Origem",
  prerequisitos: null, repetivel: false,
  beneficios: [
    { nome:"Dano Nocivo", descricao:"1×/turno, ao acertar alvo com arma, pode jogar os dados de dano da arma duas vezes e usar qualquer um dos resultados contra o alvo." }
  ]
});

/* ---------- Curandeiro ---------- */
window.registrarTalento({
  id:"curandeiro", nome:"Curandeiro", categoria:"Origem",
  prerequisitos: null, repetivel: false,
  beneficios: [
    { nome:"Médico de Combate", descricao:"Com um Kit de Curandeiro, gasta um uso e cuida de criatura a até 1,5m como ação Usar Objeto. A criatura gasta um Dado de Pontos de Vida; você joga e ela recupera PV = resultado + seu Bônus de Proficiência." },
    { nome:"Cura Garantida", descricao:"Ao rolar dados de cura (magia ou Médico de Combate), pode rerrolar qualquer 1 (usa o novo resultado)." }
  ]
});

/* ---------- Habilidoso (repetível) ---------- */
window.registrarTalento({
  id:"habilidoso", nome:"Habilidoso", categoria:"Origem",
  prerequisitos: null, repetivel: true,
  beneficios: [
    { nome:"Proficiências Adicionais", descricao:"Adquire proficiência em qualquer combinação de três perícias ou ferramentas à sua escolha." }
  ]
});

/* ---------- Iniciado em Magia (repetível) ---------- */
window.registrarTalento({
  id:"iniciado-em-magia", nome:"Iniciado em Magia", categoria:"Origem",
  prerequisitos: null, repetivel: true,
  beneficios: [
    { nome:"Dois Truques", descricao:"Aprende dois truques da lista de Clérigo, Druida ou Mago. Int, Sab ou Car (escolha) é o atributo de conjuração." },
    { nome:"Magia de 1º Círculo", descricao:"Escolha uma magia de 1º círculo da mesma lista dos truques. Sempre preparada. 1× sem espaço (recupera em Descanso Longo); também pode usar espaços de magia." },
    { nome:"Substituição de Magia", descricao:"Ao subir de nível, pode substituir uma das magias do talento por outra do mesmo círculo e lista." }
  ]
});

/* ---------- Músico ---------- */
window.registrarTalento({
  id:"musico", nome:"Músico", categoria:"Origem",
  prerequisitos: null, repetivel: false,
  beneficios: [
    { nome:"Treinamento em Instrumentos", descricao:"Proficiência com três Instrumentos Musicais à sua escolha." },
    { nome:"Canção Encorajadora", descricao:"Ao completar Descanso Curto ou Longo, toca música num Instrumento Musical com proficiência; concede Inspiração Heroica a um número de aliados que ouvem = seu Bônus de Proficiência." }
  ]
});

/* ---------- Sortudo ---------- */
window.registrarTalento({
  id:"sortudo", nome:"Sortudo", categoria:"Origem",
  prerequisitos: null, repetivel: false,
  beneficios: [
    { nome:"Pontos de Sorte", descricao:"Você tem Pontos de Sorte = Bônus de Proficiência. Recupera em Descanso Longo." },
    { nome:"Vantagem (custa 1 Ponto)", descricao:"Ao jogar d20 para Teste de D20, gasta 1 Ponto para ter Vantagem." },
    { nome:"Desvantagem (custa 1 Ponto)", descricao:"Quando criatura joga d20 para ataque contra você, gasta 1 Ponto para impor Desvantagem." }
  ]
});

/* ---------- Valentão de Taverna ---------- */
window.registrarTalento({
  id:"valentao-de-taverna", nome:"Valentão de Taverna", categoria:"Origem",
  prerequisitos: null, repetivel: false,
  beneficios: [
    { nome:"Ataque Desarmado Aprimorado", descricao:"Ao acertar com Ataque Desarmado e causar dano, pode causar 1d4 + mod. Força Contundente em vez do normal." },
    { nome:"Dano Garantido", descricao:"Ao rolar dado de dano do Ataque Desarmado, pode rerrolar 1s (usa o novo resultado)." },
    { nome:"Armamento Improvisado", descricao:"Proficiência com armas improvisadas." },
    { nome:"Empurrar", descricao:"Ao acertar criatura com Ataque Desarmado como parte da ação Atacar, pode causar dano e empurrá-la 1,5m (1×/turno)." }
  ]
});

/* ---------- Vigoroso ---------- */
window.registrarTalento({
  id:"vigoroso", nome:"Vigoroso", categoria:"Origem",
  prerequisitos: null, repetivel: false,
  beneficios: [
    { nome:"Pontos de Vida Adicionais", descricao:"PV máximos aumentam em 2 × nível de personagem no momento em que adquire este talento. A cada novo nível depois disso, PV máximos +2." }
  ]
});

console.log('[DND] Talentos de Origem carregados:', talentosPorCategoria("Origem").length);