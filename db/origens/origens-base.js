/* ============================================================
   ORIGENS — Infraestrutura
   Antecedentes, Espécies e Talentos
   ============================================================ */

window.DND_DATA = window.DND_DATA || {};
window.DND_DATA.BACKGROUNDS = window.DND_DATA.BACKGROUNDS || [];
window.DND_DATA.SPECIES     = window.DND_DATA.SPECIES     || [];
window.DND_DATA.FEATS       = window.DND_DATA.FEATS       || [];

/* Registro genérico — usado pelas três entidades */
function registrarEm(colecao, item) {
  if (!item || !item.id) return console.warn('[DND] Item sem id:', item);
  const idx = colecao.findIndex(x => x.id === item.id);
  if (idx >= 0) colecao[idx] = item;
  else          colecao.push(item);
}

window.registrarAntecedente = b   => registrarEm(window.DND_DATA.BACKGROUNDS, b);
window.registrarEspecie     = s   => registrarEm(window.DND_DATA.SPECIES, s);
window.registrarTalento     = f   => registrarEm(window.DND_DATA.FEATS, f);

/* Helpers */
window.acharAntecedente = id => window.DND_DATA.BACKGROUNDS.find(b => b.id === id);
window.acharEspecie     = id => window.DND_DATA.SPECIES.find(s => s.id === id);
window.acharTalento     = id => window.DND_DATA.FEATS.find(f => f.id === id);
window.talentosPorCategoria = cat => window.DND_DATA.FEATS.filter(f => f.categoria === cat);

/* Validador */
window.validarOrigens = function () {
  const erros = [];
  const { BACKGROUNDS: B, SPECIES: S, FEATS: F } = window.DND_DATA;

  const dup = (arr, campo) => {
    const ids = arr.map(x => x.id);
    ids.forEach((id, i) => { if (ids.indexOf(id) !== i) erros.push(`${campo} duplicado: ${id}`); });
  };
  dup(B, 'Antecedente'); dup(S, 'Espécie'); dup(F, 'Talento');

  // Todo talento referenciado por um antecedente deve existir
  B.forEach(b => {
    if (b.talento && b.talento.nome && !F.some(f => f.nome === b.talento.nome)) {
      erros.push(`Antecedente "${b.id}" referencia talento inexistente: "${b.talento.nome}"`);
    }
  });

  // Categorias válidas de talento
  const catOk = ["Origem","Geral","Estilo de Luta","Dádiva Épica"];
  F.forEach(f => {
    if (!catOk.includes(f.categoria)) erros.push(`Talento "${f.id}" com categoria inválida: ${f.categoria}`);
  });

  if (erros.length) { console.warn('[DND] Problemas em Origens:'); erros.forEach(e => console.warn('  •', e)); }
  else console.log('[DND] Antecedentes, Espécies e Talentos OK.');
  return erros;
};

console.log('[DND] Infraestrutura de Origens carregada.');