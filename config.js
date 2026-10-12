/* =====================================================================
   CONFIGURACIÓN DE LA INMOBILIARIA
   Este es el ÚNICO archivo que hay que cambiar para cada inmobiliaria.
   (Además: los textos para Google/WhatsApp en el <head> de cada página,
   ver LEEME.md)
   ===================================================================== */
window.SITIO = {
  // ---- Marca ----
  nombre: 'Magna Property',                // nombre corto
  nombreSub: 'Servicios Inmobiliarios',    // segunda línea
  nombreCompleto: 'Magna Property',
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
  whatsapp: '5493516857192',             // sin +, sin espacios (549 + área + número)
  telefonoVisible: '+54 9 351 685-7192',
  email: '',                               // >>> COMPLETAR ('' oculta el mail en la página)
  direccion: 'José Betinoti 3192, Nuevo Poeta Lugones',
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
  },

  musica: true,                // misma música de fondo que Zurban

  // ---- Diseño ----
  menuAlto: 100,               // alto del menú superior en px (Zurban: 72)
  heroDerecha: true,           // texto principal a la derecha (versión espejada)
  whatsappIzquierda: true,     // botón flotante de WhatsApp abajo a la izquierda

  // ---- Base de datos (Supabase de Magna) ----  >>> COMPLETAR al crear el proyecto
  supabase: {
    url: 'https://COMPLETAR.supabase.co',
    key: 'sb_publishable_COMPLETAR',
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

  // Diseño: alto del menú y encabezado espejado
  var dis = '';
  if (S.menuAlto) dis += 'nav{height:' + S.menuAlto + 'px!important}.page{padding-top:' + S.menuAlto + 'px!important}'
    + '.nav-logo .logo-img{height:' + Math.round(S.menuAlto * 0.64) + 'px}'
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
