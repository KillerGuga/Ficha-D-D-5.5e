/* ============================================================
   TALENTOS — CATEGORIA ESTILO DE LUTA
   Fonte: Livro do Jogador (2024)
   Pré-requisito comum: Característica de Estilo de Luta
   ============================================================ */

window.registrarTalento({
  id:"arquearia", nome:"Arquearia", categoria:"Estilo de Luta",
  prerequisitos:"Característica de Estilo de Luta", repetivel: false,
  beneficios: [
    { nome:"Bônus a Distância", descricao:"+2 nas jogadas de ataque com armas à Distância." }
  ]
});

window.registrarTalento({
  id:"combate-armas-arremesso", nome:"Combate com Armas de Arremesso", categoria:"Estilo de Luta",
  prerequisitos:"Característica de Estilo de Luta", repetivel: false,
  beneficios: [
    { nome:"Bônus de Dano", descricao:"Ao acertar ataque à distância com arma com propriedade Arremesso, +2 nas jogadas de dano." }
  ]
});

window.registrarTalento({
  id:"combate-armas-grandes", nome:"Combate com Armas Grandes", categoria:"Estilo de Luta",
  prerequisitos:"Característica de Estilo de Luta", repetivel: false,
  beneficios: [
    { nome:"Tratar 1s e 2s como 3", descricao:"Ao rolar dano de ataque corpo a corpo com arma Duas Mãos ou Versátil empunhada com as duas mãos, qualquer 1 ou 2 vira 3." }
  ]
});

window.registrarTalento({
  id:"combate-com-duas-armas", nome:"Combate com Duas Armas", categoria:"Estilo de Luta",
  prerequisitos:"Característica de Estilo de Luta", repetivel: false,
  beneficios: [
    { nome:"Somar Modificador ao Ataque Adicional", descricao:"Ao fazer ataque adicional da propriedade Leve, pode adicionar o mod. de atributo ao dano (se já não estiver adicionando)." }
  ]
});

window.registrarTalento({
  id:"combate-desarmado", nome:"Combate Desarmado", categoria:"Estilo de Luta",
  prerequisitos:"Característica de Estilo de Luta", repetivel: false,
  beneficios: [
    { nome:"Ataque Desarmado Aprimorado", descricao:"Ao acertar com Ataque Desarmado e causar dano, pode causar 1d6 + mod. Força Contundente em vez do normal (1d8 se não estiver segurando arma ou Escudo)." },
    { nome:"Dano por Imobilização", descricao:"No início de cada turno, causa 1d4 Contundente a criatura Imobilizada por você." }
  ]
});

window.registrarTalento({
  id:"defensivo", nome:"Defensivo", categoria:"Estilo de Luta",
  prerequisitos:"Característica de Estilo de Luta", repetivel: false,
  beneficios: [
    { nome:"Bônus de CA", descricao:"+1 na CA enquanto estiver usando armadura Leve, Média ou Pesada." }
  ]
});

window.registrarTalento({
  id:"duelismo", nome:"Duelismo", categoria:"Estilo de Luta",
  prerequisitos:"Característica de Estilo de Luta", repetivel: false,
  beneficios: [
    { nome:"Bônus de Dano Corpo a Corpo", descricao:"Segurando arma Corpo a Corpo em uma mão e nenhuma outra arma, +2 nas jogadas de dano." }
  ]
});

window.registrarTalento({
  id:"interceptacao", nome:"Interceptação", categoria:"Estilo de Luta",
  prerequisitos:"Característica de Estilo de Luta", repetivel: false,
  beneficios: [
    { nome:"Interpor", descricao:"Reação: quando criatura à vista atinge outra criatura a até 1,5m de você, reduz o dano em 1d10 + BP. Deve estar segurando Escudo ou arma Simples/Marcial." }
  ]
});

window.registrarTalento({
  id:"luta-as-cegas", nome:"Luta às Cegas", categoria:"Estilo de Luta",
  prerequisitos:"Característica de Estilo de Luta", repetivel: false,
  beneficios: [
    { nome:"Visão às Cegas", descricao:"Visão às Cegas 3m." }
  ]
});

window.registrarTalento({
  id:"protetivo", nome:"Protetivo", categoria:"Estilo de Luta",
  prerequisitos:"Característica de Estilo de Luta", repetivel: false,
  beneficios: [
    { nome:"Impor Desvantagem", descricao:"Reação: quando criatura à vista ataca alvo que não seja você e que esteja a até 1,5m, pode interpor seu Escudo (se o estiver segurando). O atacante tem Desvantagem no ataque; todas as jogadas contra o alvo têm Desvantagem até o início do seu próximo turno, enquanto você estiver a até 1,5m do alvo." }
  ]
});

console.log('[DND] Talentos de Estilo de Luta carregados:', talentosPorCategoria("Estilo de Luta").length);