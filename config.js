/* =====================================================================
   CONFIGURACIÓN DE LA INMOBILIARIA
   Este es el ÚNICO archivo que hay que cambiar para cada inmobiliaria.
   (Además: los textos para Google/WhatsApp en el <head> de cada página,
   ver LEEME.md)
   ===================================================================== */
window.SITIO = {
  // ---- Marca ----
  nombre: 'Magna',                         // nombre corto
  nombreSub: 'Strategic Group',    // segunda línea
  nombreCompleto: 'Magna Strategic Group',
  inicial: 'M',
  logo: '/files/magna-logo-horizontal.png', // logo del menú ('' = círculo con la inicial)
  favicon: '/files/favicon.png',
  ciudad: 'Córdoba',
  eslogan: 'Servicios inmobiliarios en Córdoba. Compra, venta, alquileres y tasaciones.',

  // ---- Corredor/a responsable ----
  corredor: 'Martha Alicia Caminos',
  corredorTitulo: 'Corredora Inmobiliaria',
  matricula: 'Mat. CPI-7625',

  // ---- Contacto ----
  whatsapp: '5493512174427',             // sin +, sin espacios (549 + área + número)
  telefonoVisible: '+54 9 351 217-4427',
  email: '',                               // >>> COMPLETAR ('' oculta el mail en la página)
  direccion: 'Obispo Lazcano 3196, Villa Cabrera',
  direccion2: 'Córdoba, Argentina',
  horarios: ['Lunes a viernes: 9 a 18 hs', 'Sábados: 9 a 13 hs'],
  instagram: 'inmobiliaria.magna',         // usuario sin @ ('' para ocultar)
  facebook: '',
  dominio: 'magnaproperty.com.ar',

  // ---- Números de "Nosotros" ----  >>> COMPLETAR o dejar [] para ocultar
  estadisticas: [],

  // ---- Colores (manual de marca Magna) ----
  colores: {
    principal: '#030919',        // azul profundo
    principalOscuro: '#01040C',
    principalMedio: '#0E1A36',
    acento: '#D3A744',           // dorado plano
    acentoClaro: '#E4C677',
    acentoPalido: '#F6EDD6',
    fondoClaro: '#F5F1E8',       // marfil cálido: reemplaza los fondos blancos
    fondoSeccion: '#EEE7D8',     // marfil un tono más profundo: fondos de sección
  },

  musica: true,                // misma música de fondo que Zurban

  // ---- Diseño ----
  menuAlto: 132,               // alto del menú superior en px (Zurban: 72)
  logoAlto: 94,                // alto del logo dentro del menú, en px
  fuenteTitulos: 'Montserrat', // letra de los títulos ('' = la clásica de la plantilla)
  heroDerecha: true,           // texto principal a la derecha (versión espejada)
  whatsappIzquierda: true,     // botón flotante de WhatsApp abajo a la izquierda

  // ---- Base de datos (Supabase de Magna) ----
  supabase: {
    url: 'https://fwkppkeazpmciiigndhq.supabase.co',
    key: 'sb_publishable_GIKMYy03OAOaDO_Hs1GS_g_L9GQfJcV',
  },
};

/* ---------------------------------------------------------------------
   No hace falta tocar nada de acá para abajo.
   --------------------------------------------------------------------- */
(function () {
  const S = window.SITIO;
  S.web = 'https://' + S.dominio;
  S.wa = function (texto) {
    return 'https://wa.me/' + S.whatsapp + (texto ? '?text=' + encodeURIComponent(texto) : '');
  };

  // Colores: pisan las variables CSS de todas las páginas
  const c = S.colores, r = document.documentElement.style;
  r.setProperty('--navy', c.principal);
  r.setProperty('--text', c.principal);
  r.setProperty('--navy-dark', c.principalOscuro);
  r.setProperty('--navy-mid', c.principalMedio);
  r.setProperty('--gold', c.acento);
  r.setProperty('--gold-light', c.acentoClaro);
  r.setProperty('--gold-pale', c.acentoPalido);
  const rgb = function (h) { h = h.replace('#', ''); return [0, 2, 4].map(function (i) { return parseInt(h.substr(i, 2), 16); }).join(','); };
  r.setProperty('--navy-rgb', rgb(c.principal));
  r.setProperty('--gold-rgb', rgb(c.acento));

  // Rellena el HTML: <span data-cfg="nombreCompleto"></span>
  //                  <a data-wa="Hola!">   -> link de WhatsApp
  function aplicar() {
    document.querySelectorAll('[data-cfg]').forEach(function (el) {
      const v = S[el.dataset.cfg];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-wa]').forEach(function (el) {
      el.href = S.wa(el.dataset.wa.replace('{nombre}', S.nombreCompleto));
    });
    document.querySelectorAll('[data-cfg-href="web"]').forEach(function (el) { el.href = S.web; });
    if (S.logo) document.querySelectorAll('[data-logo]').forEach(function (el) {
      el.innerHTML = '<img class="logo-img" src="' + S.logo + '" alt="' + S.nombreCompleto + '">';
    });
    if (!S.email) document.querySelectorAll('[data-cfg-href="mail"]').forEach(function (el) {
      var d = el.closest('.contact-detail'); if (d) d.style.display = 'none';
    });
    document.querySelectorAll('[data-cfg-href="mail"]').forEach(function (el) { el.href = 'mailto:' + S.email; });
  }
  S.aplicar = aplicar;

  // Fondos claros: reemplaza el blanco y el crema de la plantilla por los de la marca
  if (c.fondoClaro || c.fondoSeccion) {
    var esBlanco = /^(#fff|#ffffff|white|var\(--white\))$/i;
    var esCrema = /^(var\(--cream\)|#faf8f3)$/i;
    var fondo = function (st) {
      if (!st) return;
      ['background', 'background-color'].forEach(function (p) {
        var v = (st.getPropertyValue(p) || '').trim();
        if (!v) return;
        if (c.fondoClaro && esBlanco.test(v)) st.setProperty(p, c.fondoClaro);
        else if (c.fondoSeccion && esCrema.test(v)) st.setProperty(p, c.fondoSeccion);
      });
    };
    var recorrerF = function (rules) {
      for (var i = 0; i < rules.length; i++) {
        var r = rules[i];
        if (r.media && /print/.test(r.media.mediaText)) continue;
        if (r.cssRules && !r.selectorText) recorrerF(r.cssRules); else if (r.style) fondo(r.style);
      }
    };
    var aplicarFondos = function () {
      for (var i = 0; i < document.styleSheets.length; i++) { try { recorrerF(document.styleSheets[i].cssRules); } catch (e) {} }
      document.querySelectorAll('[style*="background"]').forEach(function (el) { fondo(el.style); });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', aplicarFondos); else aplicarFondos();
  }

  // Letra de los títulos: reemplaza la clásica (Cormorant) por la elegida
  if (S.fuenteTitulos) {
    var fam = S.fuenteTitulos;
    var lk = document.createElement('link'); lk.rel = 'stylesheet';
    lk.href = 'https://fonts.googleapis.com/css2?family=' + fam.replace(/ /g, '+')
      + ':ital,wght@0,300;0,400;0,500;1,300&display=swap';
    document.head.appendChild(lk);
    var nueva = "'" + fam + "', sans-serif";
    var grande = /hero h1|section-title|cta-band h2|stat-number/;
    var cambiar = function (st, sel) {
      if (!st || !st.fontFamily || st.fontFamily.indexOf('Cormorant') < 0) return;
      st.fontFamily = nueva;
      var w = parseInt(st.fontWeight || '400', 10);
      st.fontWeight = (sel && grande.test(sel)) ? '300' : (w >= 500 ? '500' : '400');
    };
    var recorrer = function (rules) {
      for (var i = 0; i < rules.length; i++) {
        var r = rules[i];
        if (r.cssRules && !r.selectorText) recorrer(r.cssRules);
        else if (r.style) cambiar(r.style, r.selectorText);
      }
    };
    var aplicarFuente = function () {
      for (var i = 0; i < document.styleSheets.length; i++) {
        try { recorrer(document.styleSheets[i].cssRules); } catch (e) {}
      }
      document.querySelectorAll('[style*="Cormorant"]').forEach(function (el) { cambiar(el.style); });
    };
    var obs = function () {
      aplicarFuente();
      new MutationObserver(function (ms) {
        ms.forEach(function (m) {
          m.addedNodes.forEach(function (n) {
            if (n.nodeType !== 1) return;
            if (n.matches && n.matches('[style*="Cormorant"]')) cambiar(n.style);
            if (n.querySelectorAll) n.querySelectorAll('[style*="Cormorant"]').forEach(function (el) { cambiar(el.style); });
          });
        });
      }).observe(document.body, { childList: true, subtree: true });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', obs); else obs();
  }

  // Diseño: alto del menú y encabezado espejado
  var dis = '';
  if (S.menuAlto) dis += 'nav{height:' + S.menuAlto + 'px!important}.page{padding-top:' + S.menuAlto + 'px!important}'
    + '.nav-logo .logo-img{height:' + (S.logoAlto || Math.round(S.menuAlto * 0.64)) + 'px}'
    + 'html .zm-wrap{top:' + (S.menuAlto + 16) + 'px!important}';
  if (S.whatsappIzquierda) dis += '@media (min-width:769px){html .whatsapp-float{right:auto!important;left:28px!important}}';
  if (S.heroDerecha) dis += '@media (min-width:769px){'
    + 'html .hero{justify-content:flex-end}'
    + 'html .hero-content{text-align:right;margin-left:auto}'
    + 'html .hero-eyebrow{justify-content:flex-end}html .hero-eyebrow::before{display:none}html .hero-eyebrow::after{content:"";display:block;width:40px;height:1px;background:var(--gold)}'
    + 'html .hero p{margin-left:auto}'
    + 'html .hero-actions{flex-direction:row-reverse;justify-content:flex-start}'
    + 'html .hero-pattern{transform:scaleX(-1)}'
    + 'html .hero-glow{right:auto;left:10%}'
    + 'html .hero-scroll{right:auto!important;left:50%!important;transform:translateX(-50%)!important}}';
  if (S.fuenteTitulos) dis += 'html .hero h1{font-size:clamp(34px,4vw,58px)!important;line-height:1.15!important;letter-spacing:-0.01em}'
    + '@media (min-width:769px){html .hero-content{max-width:920px!important}}';
  if (dis) { var st = document.createElement('style'); st.textContent = dis; document.head.appendChild(st); }

  // Logo en imagen (reemplaza círculo + nombre donde haya data-logo)
  if (S.logo) {
    var css = document.createElement('style');
    css.textContent = '.logo-img{display:block;height:46px;width:auto;max-width:100%}'
      + '[data-logo="grande"]{background:var(--navy);padding:18px 20px;border-radius:6px;margin-bottom:10px}[data-logo="grande"] .logo-img{height:auto;width:100%;margin:0 auto}'
      + '.sidebar-logo .logo-img{height:auto;width:100%}'
      + '.brand .logo-img{height:34px}'
      + '@media (max-width:600px){.nav-logo .logo-img{height:40px!important}}'
      + '@media print{.brand .logo-img{filter:brightness(.75)}}';
    document.head.appendChild(css);
  }
  if (S.favicon) {
    var l = document.createElement('link'); l.rel = 'icon'; l.href = S.favicon;
    document.head.appendChild(l);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', aplicar);
  else aplicar();
})();
