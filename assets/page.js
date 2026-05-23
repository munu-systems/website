(function () {
  var GH_ICON = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>';

  var NAV_ITEMS = [
    { id: "methodology", label: "Methodology", href: "methodology.html" },
    { id: "use-cases",   label: "Use Cases",   href: "use-cases.html" },
    { id: "get-started", label: "Get Started", href: "get-started.html" },
    { id: "ecosystem",   label: "Ecosystem",   href: "ecosystem.html" },
    { id: "blog",        label: "Blog",        href: "blog.html" },
  ];

  function renderHeader(active) {
    var items = NAV_ITEMS
      .map(function (it) {
        return '<a href="' + it.href + '"' + (it.id === active ? ' class="active"' : '') + '>' + it.label + '</a>';
      })
      .join("");
    return '<header class="site-header">' +
      '<div class="nav">' +
        '<a class="brand" href="index.html">' +
          'munu <span class="brand-mark">µν</span>' +
        '</a>' +
        '<nav class="nav-links">' + items + '</nav>' +
        '<div class="nav-right">' +
          '<a class="gh-link" href="https://github.com/munu-systems" aria-label="GitHub">' +
            GH_ICON +
            '<span>GitHub</span>' +
          '</a>' +
        '</div>' +
      '</div>' +
    '</header>';
  }

  function renderFooter() {
    return '<footer class="site-footer">' +
      '<div class="container">' +
        '<div class="footer-stats">' +
          '<div class="footer-stat"><div class="label">License</div><div class="value">MPL-2.0</div></div>' +
          '<div class="footer-stat"><div class="label">Implementation</div><div class="value">Rust</div></div>' +
          '<div class="footer-stat"><div class="label">Kernel</div><div class="value">no_std · 36 opcodes</div></div>' +
          '<div class="footer-stat"><div class="label">Type System</div><div class="value">ψ-lattice</div></div>' +
        '</div>' +
        '<div class="footer-grid">' +
          '<div class="footer-col footer-brand">' +
            '<div class="brand">munu <span class="brand-mark">µν</span></div>' +
            '<p class="tagline">The algebra/coalgebra interaction, promoted to a language construct.</p>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4>Pages</h4>' +
            '<ul>' +
              '<li><a href="methodology.html">Methodology</a></li>' +
              '<li><a href="use-cases.html">Use Cases</a></li>' +
              '<li><a href="get-started.html">Get Started</a></li>' +
              '<li><a href="ecosystem.html">Ecosystem</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4>Projects</h4>' +
            '<ul>' +
              '<li><a href="https://github.com/munu-systems/munu">Munu</a></li>' +
              '<li><a href="https://github.com/munu-systems/inferris">Inferris</a></li>' +
              '<li><a href="https://github.com/munu-systems/munu-code">Munu Code</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4>Community</h4>' +
            '<ul>' +
              '<li><a href="https://github.com/munu-systems">GitHub Org</a></li>' +
              '<li><a href="https://github.com/munu-systems/munu/discussions">Discussions</a></li>' +
              '<li><a href="blog.html">Blog</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>MPL-2.0 LICENSE · 2024–2026</span>' +
          '<span>µF → A · B → νG</span>' +
        '</div>' +
      '</div>' +
    '</footer>';
  }

  window.setupPage = function (opts) {
    opts = opts || {};
    var active = opts.active;
    if (!document.querySelector(".network-bg")) {
      var c = document.createElement("canvas");
      c.className = "network-bg";
      document.body.prepend(c);
    }
    var headerSlot = document.getElementById("header-slot");
    if (headerSlot) headerSlot.outerHTML = renderHeader(active);
    var footerSlot = document.getElementById("footer-slot");
    if (footerSlot) footerSlot.outerHTML = renderFooter();
  };
})();
