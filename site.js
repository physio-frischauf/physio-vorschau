/* Mobiles Menue, Untermenues und FAQ - ohne Bibliothek, ohne Netz. */
document.addEventListener('click', function (e) {
  var t = e.target.closest('button'); if (!t) return;
  function flip(el, btn) { if (!el) return; var h = el.classList.toggle('hidden'); btn.setAttribute('aria-expanded', h ? 'false' : 'true'); var s = btn.querySelector('svg'); if (s) s.classList.toggle('rotate-180', !h); }
  if (t.hasAttribute('data-mnav-btn')) { var m = document.querySelector('[data-mnav]'); flip(m, t); }
  else if (t.hasAttribute('data-acc-btn')) { var row = t.parentElement; flip(row && row.nextElementSibling, t); }
  else if (t.hasAttribute('data-faq-btn')) { flip(t.nextElementSibling, t); }
});
