/* ============================================================
   VALIDAÇÃO — checagens leves antes de render/salvar
   ============================================================ */
(function(){
window.VALIDAR = {
  ficha(f) {
    const erros = [];
    if (!f.meta.nome) erros.push('Sem nome.');
    if (f.meta.nivel < 1 || f.meta.nivel > 20) erros.push('Nível fora de 1–20.');
    if (!f.meta.classeId) erros.push('Sem classe.');
    if (f.meta.subclasseId && f.meta.nivel < 3) erros.push('Subclasse requer nível 3+.');
    return erros;
  }
};
})();