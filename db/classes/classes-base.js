/* ============================================================
   CLASSES — Infraestrutura
   ============================================================ */

window.DND_DATA = window.DND_DATA || {};
window.DND_DATA.CLASSES    = window.DND_DATA.CLASSES    || [];
window.DND_DATA.SUBCLASSES = window.DND_DATA.SUBCLASSES || [];

/* Registra uma classe (evita duplicatas por id) */
window.registrarClasse = function (classe) {
  if (!classe || !classe.id) {
    console.warn('[DND] Classe sem id, ignorada:', classe);
    return;
  }
  const idx = window.DND_DATA.CLASSES.findIndex(c => c.id === classe.id);
  if (idx >= 0) window.DND_DATA.CLASSES[idx] = classe;
  else          window.DND_DATA.CLASSES.push(classe);
};

/* Registra uma subclasse (evita duplicatas por id) */
window.registrarSubclasse = function (sub) {
  if (!sub || !sub.id) {
    console.warn('[DND] Subclasse sem id, ignorada:', sub);
    return;
  }
  const idx = window.DND_DATA.SUBCLASSES.findIndex(s => s.id === sub.id);
  if (idx >= 0) window.DND_DATA.SUBCLASSES[idx] = sub;
  else          window.DND_DATA.SUBCLASSES.push(sub);
};

/* Helpers de consulta */
window.acharClasse    = id => window.DND_DATA.CLASSES.find(c => c.id === id);
window.acharSubclasse = id => window.DND_DATA.SUBCLASSES.find(s => s.id === id);
window.subclassesDe   = classeId => window.DND_DATA.SUBCLASSES.filter(s => s.classeId === classeId);

/* Validador — rode no console quando quiser */
window.validarClasses = function () {
  const erros = [];
  const C = window.DND_DATA.CLASSES;
  const S = window.DND_DATA.SUBCLASSES;

  const idsC = C.map(c => c.id);
  idsC.forEach((id, i) => { if (idsC.indexOf(id) !== i) erros.push(`Classe duplicada: ${id}`); });

  const idsS = S.map(s => s.id);
  idsS.forEach((id, i) => { if (idsS.indexOf(id) !== i) erros.push(`Subclasse duplicada: ${id}`); });

  S.forEach(s => {
    if (!idsC.includes(s.classeId)) erros.push(`Subclasse "${s.id}" aponta para classe inexistente "${s.classeId}"`);
  });

  C.forEach(c => {
    const niveis = c.progressao.map(p => p.nivel);
    if (niveis.length !== 20) erros.push(`Classe "${c.id}" tem ${niveis.length} níveis (esperado 20)`);
    if (niveis[0] !== 1 || niveis[niveis.length - 1] !== 20) erros.push(`Classe "${c.id}" não cobre 1..20`);
    (c.subclasses || []).forEach(sid => {
      if (!idsS.includes(sid)) erros.push(`Classe "${c.id}" referencia subclasse inexistente "${sid}"`);
    });
  });

  if (erros.length) { console.warn('[DND] Problemas encontrados:'); erros.forEach(e => console.warn('  •', e)); }
  else console.log('[DND] Classes e subclasses OK.');
  return erros;
};

console.log('[DND] Infraestrutura de classes carregada.');