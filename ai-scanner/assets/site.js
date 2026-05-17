/** Language tabs EN / VI — no build step required. */
(function () {
  'use strict';

  function initLangTabs() {
    var tabs = document.querySelector('.lang-switch');
    if (!tabs) return;

    var panels = document.querySelectorAll('section.lang-panel');
    if (!panels.length) return;

    function show(id) {
      panels.forEach(function (p) {
        p.hidden = p.id !== id;
      });
      tabs.querySelectorAll('a').forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
      if (history.replaceState) {
        history.replaceState(null, '', '#' + id);
      }
    }

    tabs.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        show(a.getAttribute('href').slice(1));
      });
    });

    show(location.hash === '#vi' ? 'vi' : 'en');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangTabs);
  } else {
    initLangTabs();
  }
})();
