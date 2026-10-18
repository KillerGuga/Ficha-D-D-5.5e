/* ============================================================
   METAMAGIA — FEITICEIRO
   Fonte: Livro do Jogador (2024)
   ============================================================ */

window.DND_DATA = window.DND_DATA || {};
window.DND_DATA.METAMAGIA = window.DND_DATA.METAMAGIA || [];

window.registrarMetamagia = function (m) {
  if (!m || !m.id) return console.warn('[DND] Metamagia sem id:', m);
  const idx = window.DND_DATA.METAMAGIA.findIndex(x => x.id === m.id);
  if (idx >= 0) window.DND_DATA.METAMAGIA[idx] = m;
  else          window.DND_DATA.METAMAGIA.push(m);
};

window.registrarMetamagia({ id:"magia-acelerada", nome:"Magia Acelerada", custo:2,
  descricao:"Ao conjurar magia com tempo de conjuração de 1 ação, gaste 2 Pontos de Feitiçaria para mudar para Ação Bônus. Não pode se já tiver conjurado magia de 1º+ neste turno, nem conjurar outra magia de 1º+ no mesmo turno após modificar." });

window.registrarMetamagia({ id:"magia-agravada", nome:"Magia Agravada", custo:2,
  descricao:"Ao conjurar magia que força salvaguarda, gaste 2 Pontos de Feitiçaria para dar Desvantagem a um alvo da magia contra ela." });

window.registrarMetamagia({ id:"magia-buscadora", nome:"Magia Buscadora", custo:1,
  descricao:"Ao errar jogada de ataque com magia, gaste 1 Ponto de Feitiçaria para jogar novamente o d20. Pode ser usada junto com outra opção de Metamagia na mesma magia." });

window.registrarMetamagia({ id:"magia-cautelosa", nome:"Magia Cautelosa", custo:1,
  descricao:"Ao conjurar magia que força salvaguarda, gaste 1 Ponto de Feitiçaria e escolha até mod. Carisma criaturas (mín. 1). Elas são automaticamente bem-sucedidas e não sofrem dano mesmo se sofreriam metade em sucesso." });

window.registrarMetamagia({ id:"magia-distante", nome:"Magia Distante", custo:1,
  descricao:"Ao conjurar magia com alcance de pelo menos 1,5m, gaste 1 Ponto de Feitiçaria para dobrar o alcance. Se a magia tem alcance Toque, gasta 1 Ponto para torná-lo 9m." });

window.registrarMetamagia({ id:"magia-duplicada", nome:"Magia Duplicada", custo:1,
  descricao:"Ao conjurar magia que pode ser conjurada em círculo superior para afetar criatura adicional, gaste 1 Ponto de Feitiçaria para aumentar o círculo efetivo em 1." });

window.registrarMetamagia({ id:"magia-persistente", nome:"Magia Persistente", custo:1,
  descricao:"Ao conjurar magia com duração de 1 min ou mais, gaste 1 Ponto de Feitiçaria para dobrar a duração (máx. 24h). Se exigir Concentração, tem Vantagem em salvaguardas para mantê-la." });

window.registrarMetamagia({ id:"magia-potencializada", nome:"Magia Potencializada", custo:1,
  descricao:"Ao rolar dano de magia, gaste 1 Ponto de Feitiçaria para jogar novamente até mod. Carisma dados (mín. 1); usa os novos resultados. Pode ser usada junto com outra opção de Metamagia na mesma magia." });

window.registrarMetamagia({ id:"magia-sutil", nome:"Magia Sutil", custo:1,
  descricao:"Ao conjurar magia, gaste 1 Ponto de Feitiçaria para conjurá-la sem componentes Verbais, Somáticos ou Materiais — exceto componentes Materiais consumidos pela magia ou com custo especificado." });

window.registrarMetamagia({ id:"magia-transmutada", nome:"Magia Transmutada", custo:1,
  descricao:"Ao conjurar magia que cause um tipo de dano da lista, gaste 1 Ponto de Feitiçaria para trocar o tipo para outro da lista: Ácido, Elétrico, Gélido, Ígneo, Trovejante, Venenoso." });

console.log('[DND] Metamagia carregada:', window.DND_DATA.METAMAGIA.length);