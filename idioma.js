/* =====================================================================
   IDIOMA: español / inglés
   - Botón ES | EN en el menú. La elección se recuerda.
   - Primera visita: si el navegador del visitante está en español,
     se muestra en español; si no, en inglés (ver SITIO.idiomaInicial).
   - Para agregar o corregir una traducción: sumar una línea en TEXTOS
     con el texto exacto en español y su versión en inglés.
   ===================================================================== */
(function () {
  var S = window.SITIO || {};
  if (S.idiomas === false) return;

  // ---------- Textos (español exacto -> inglés) ----------
  var TEXTOS = {
    // Menú y encabezado
    'Propiedades': 'Properties', 'Servicios': 'Services', 'Nosotros': 'About us', 'Contacto': 'Contact',
    'Acompañamos cada etapa de tu inversión con experiencia, transparencia y el conocimiento del mercado inmobiliario.':
      'We guide you through every stage of your investment with experience, transparency and in-depth knowledge of the real estate market.',
    'Ver propiedades': 'View properties', 'Hablar con un asesor': 'Talk to an advisor', 'scroll': 'scroll',
    '← Volver a propiedades': '← Back to properties', '← Volver al inicio': '← Back to home',
    // Buscador
    '¿Qué estás buscando?': 'What are you looking for?', 'Tipo': 'Type', 'Casa': 'House', 'Departamento': 'Apartment',
    'Terreno': 'Land', 'Local Comercial': 'Commercial space', 'Campo': 'Farm / Ranch', 'Operación': 'Operation',
    'Venta': 'For sale', 'Alquiler': 'For rent', 'Alquiler temporal': 'Short-term rental', 'Buscar': 'Search',
    'Barrio, ciudad o dirección...': 'Neighborhood, city or address...',
    'Casas en venta': 'Houses for sale', 'Departamentos': 'Apartments', 'Terrenos': 'Land', 'Alquileres': 'Rentals',
    'Propiedades en venta': 'Properties for sale', 'Locales comerciales': 'Commercial spaces',
    '🧮 Calculadora de alquileres': '🧮 Rent calculator (Argentina)',
    // Propiedades
    'Destacadas': 'Featured', 'Ver todas': 'View all', 'Cargando propiedades...': 'Loading properties...',
    'Buscando...': 'Searching...', 'No se encontraron propiedades con esos criterios.': 'No properties match your search.',
    '⭐ Destacada': '⭐ Featured', 'Reservada': 'Reserved', 'RESERVADA': 'RESERVED', 'dorm.': 'bed', 'baños': 'baths',
    'm² terreno': 'm² lot', 'Consultar': 'Price on request', 'Consultar precio': 'Price on request', '/ mes': '/ month',
    // Servicios
    '¿Cómo podemos ayudarte?': 'How can we help you?', 'Nuestros servicios': 'Our services',
    'Venta de propiedades': 'Property sales',
    'Tasación profesional, difusión en portales y redes, y acompañamiento hasta la escritura. Maximizamos el valor de tu propiedad.':
      'Professional appraisal, promotion on real estate portals and social media, and support all the way to closing. We maximize the value of your property.',
    'Gestión integral de alquileres: contratos actualizados, garantías y cobro de expensas. Tu inversión rinde sin que te preocupes.':
      'Full rental management: up-to-date leases, guarantees and fee collection. Your investment performs while you relax.',
    'Tasaciones': 'Appraisals',
    'Valuaciones precisas basadas en datos reales del mercado inmobiliario. Esencial para vender bien o invertir mejor.':
      'Accurate valuations based on real market data. Essential to sell well or invest wisely.',
    'Asesoría en inversiones': 'Investment advisory',
    'Te orientamos en la búsqueda de oportunidades inmobiliarias con mayor rendimiento, ya sea para vivir o como inversión a largo plazo.':
      'We help you find the real estate opportunities with the best returns, whether to live in or as a long-term investment.',
    'Consultar ahora': 'Contact us now',
    // Contacto
    'Estamos para vos': "We're here for you", 'Hablemos': "Let's talk", 'Oficina': 'Office',
    'Horario de atención': 'Office hours', 'Teléfono / WhatsApp': 'Phone / WhatsApp', 'Email': 'Email',
    'Redes sociales': 'Social media', 'Envianos tu consulta': 'Send us your inquiry', 'Nombre': 'Name', 'Nombre *': 'Name *',
    'Tu nombre': 'Your name', 'Teléfono': 'Phone', 'Teléfono *': 'Phone *', 'Cel. / WhatsApp': 'Mobile / WhatsApp',
    'tucorreo@email.com': 'you@email.com', 'Me interesa': "I'm interested in", 'Seleccioná una opción': 'Select an option',
    'Comprar una propiedad': 'Buying a property', 'Alquilar una propiedad': 'Renting a property',
    'Tasar mi propiedad': 'Appraising my property', 'Vender mi propiedad': 'Selling my property',
    'Mensaje': 'Message', 'Contanos qué estás buscando...': 'Tell us what you are looking for...',
    '¿Qué querés saber de esta propiedad?': 'What would you like to know about this property?',
    'Enviar consulta': 'Send inquiry', '📧 Enviar consulta': '📧 Send inquiry', 'Enviando...': 'Sending...',
    '✓ Consulta enviada': '✓ Inquiry sent', 'Error — intentá de nuevo': 'Error — please try again',
    '¡Gracias! Te contactamos a la brevedad.': "Thank you! We'll get back to you shortly.",
    'Consultar por WhatsApp': 'Ask on WhatsApp', 'Contactar por WhatsApp': 'Contact on WhatsApp',
    'Corredora Inmobiliaria': 'Licensed Real Estate Broker', 'Corredor Inmobiliario': 'Licensed Real Estate Broker',
    'Lunes a viernes: 9 a 18 hs': 'Monday to Friday: 9 am – 6 pm', 'Sábados: 9 a 13 hs': 'Saturday: 9 am – 1 pm',
    'Córdoba, Argentina': 'Córdoba, Argentina',
    // Pie
    'Inversiones': 'Investments', 'Legal': 'Legal', 'Política de privacidad': 'Privacy policy', 'Términos de uso': 'Terms of use',
    '. Todos los derechos reservados.': '. All rights reserved.',
    // Página de propiedad y ficha
    'Propiedad': 'Property', 'Cargando propiedad...': 'Loading property...', 'Cargando la ficha...': 'Loading fact sheet...',
    'Ficha de propiedad': 'Property fact sheet', 'Descripción': 'Description', 'Características': 'Features',
    'Comodidades': 'Amenities', 'Información general': 'General information', 'Ubicación': 'Location',
    'Esta propiedad está reservada. Consultanos para quedar en lista de espera o ver opciones similares.':
      'This property is reserved. Contact us to join the waiting list or see similar options.',
    'Sin descripción disponible.': 'No description available.', 'Sin fotos cargadas': 'No photos available',
    'Mostrar más': 'Show more', 'Mostrar menos': 'Show less', 'Compartir': 'Share', 'Link copiado': 'Link copied',
    'Abrir en Google Maps': 'Open in Google Maps', 'Fotos en pantalla completa': 'Full-screen photos', 'Cerrar': 'Close',
    'Foto anterior': 'Previous photo', 'Foto siguiente': 'Next photo',
    'No encontramos esta propiedad. Puede que ya no esté publicada.': 'We could not find this property. It may no longer be listed.',
    'Tipo de propiedad': 'Property type', 'Ambientes': 'Rooms', 'Dormitorios': 'Bedrooms', 'Baños': 'Bathrooms',
    'Toilettes': 'Half baths', 'Cochera': 'Parking', 'Cocheras': 'Parking spaces', 'Sup. cubierta': 'Covered area',
    'Sup. total': 'Total area', 'Superficie cubierta': 'Covered area', 'Superficie total': 'Total area',
    'Frente del terreno': 'Lot frontage', 'Largo del terreno': 'Lot depth', 'Antigüedad': 'Age', 'A estrenar': 'Brand new',
    'En construcción': 'Under construction', 'Plantas': 'Floors', 'Luminosidad': 'Natural light', 'Orientación': 'Orientation',
    'Norte': 'North', 'Sur': 'South', 'Este': 'East', 'Oeste': 'West', 'Noreste': 'Northeast', 'Noroeste': 'Northwest',
    'Sudeste': 'Southeast', 'Sudoeste': 'Southwest', 'Expensas': 'HOA fees', 'Sin expensas': 'No HOA fees',
    'Apto crédito': 'Mortgage eligible', 'Escritura': 'Title deed', 'Con escritura': 'Title deed available',
    'En proceso': 'In process', 'Escritura en proceso': 'Title deed in process', 'Cubierta': 'Covered',
    'Semicubierta': 'Semi-covered', 'Descubierta': 'Uncovered', 'Otras': 'Other', 'Extras': 'Extras', 'Facilidades': 'Facilities',
    'Muy luminoso': 'Very bright', 'Luminoso': 'Bright',
    'Cocina': 'Kitchen', 'Comedor': 'Dining room', 'Jardín': 'Garden', 'Lavadero': 'Laundry room',
    'Living comedor': 'Living-dining room', 'Patio': 'Patio', 'Altillo': 'Attic', 'Balcón': 'Balcony', 'Baulera': 'Storage room',
    'Comedor diario': 'Breakfast room', 'Dependencia de servicio': "Staff quarters", 'Dormitorio en suite': 'En-suite bedroom',
    'Escritorio': 'Study', 'Hall': 'Hall', 'Living': 'Living room', 'Sótano': 'Basement', 'Terraza': 'Terrace',
    'Vestidor': 'Walk-in closet', 'Estar de diario': 'Family room', 'Ascensor': 'Elevator', 'Encargado': 'Building manager',
    'Internet/Wifi': 'Internet/Wi-Fi', 'Ropa de cama': 'Bed linen', 'Servicio de limpieza': 'Cleaning service', 'Toallas': 'Towels',
    'Aire acondicionado': 'Air conditioning', 'Alarma': 'Alarm', 'Amoblado': 'Furnished', 'Calefacción': 'Heating',
    'Quincho': 'BBQ house', 'Vigilancia': 'Security', 'Caldera': 'Boiler', 'Cancha de deportes': 'Sports court',
    'Cocina equipada': 'Equipped kitchen', 'Frigobar': 'Minibar', 'Lavarropas': 'Washing machine', 'Lavavajillas': 'Dishwasher',
    'Microondas': 'Microwave', 'Sauna': 'Sauna', 'Secarropas': 'Dryer', 'Termotanque': 'Water heater',
    'Apto profesional': 'Suitable for office use', 'Gimnasio': 'Gym', 'Parrilla': 'Grill', 'Permite mascotas': 'Pet friendly',
    'Pileta': 'Pool', 'Solarium': 'Sun deck', 'Acceso para personas con movilidad reducida': 'Wheelchair accessible',
    'Hidromasaje': 'Jacuzzi', 'Sala de juegos': 'Game room', 'Uso comercial': 'Commercial use',
    'Barrio Cerrado': 'Gated community', 'Barrio con acceso controlado': 'Gated community', 'PH': 'Townhouse (PH)',
    'Dúplex': 'Duplex', 'Tríplex': 'Triplex', 'Chalet': 'Chalet', 'Cabaña': 'Cabin', 'Monoambiente': 'Studio',
    'Oficina comercial': 'Office', 'Todos': 'All', 'EE.UU.': 'USA', 'Próximamente': 'Coming soon', 'Galpón': 'Warehouse', 'Lote': 'Lot',
  };
  // Textos con formato (se reemplaza el HTML del elemento)
  var BLOQUES = [
    ['.hero h1', 'Your next <em>property</em><br>is here'],
    ['#propiedades .section-title', 'Selected<br>properties'],
    ['.cta-band h2', 'Have a property to <em>sell or rent?</em>'],
  ];

  // ---------- Idioma activo ----------
  var guardado = null;
  try { guardado = localStorage.getItem('idioma'); } catch (e) {}
  var inicial = S.idiomaInicial || 'auto';
  if (inicial === 'auto') inicial = /^es/i.test(navigator.language || '') ? 'es' : 'en';
  var idioma = guardado || inicial;
  window.SITIO_IDIOMA = idioma;

  // Textos del config en inglés (si están definidos)
  if (idioma === 'en' && S.en) Object.keys(S.en).forEach(function (k) { S[k] = S.en[k]; });

  // ---------- Botón ES | EN ----------
  function boton() {
    var lugar = document.querySelector('nav') || document.querySelector('.top-inner');
    if (!lugar || document.getElementById('btnIdioma')) return;
    var b = document.createElement('div');
    b.id = 'btnIdioma';
    b.innerHTML = '<button type="button" data-l="es">ES</button><span>|</span><button type="button" data-l="en">EN</button>';
    b.querySelectorAll('button').forEach(function (x) {
      if (x.dataset.l === idioma) x.className = 'on';
      x.addEventListener('click', function () {
        if (x.dataset.l === idioma) return;
        try { localStorage.setItem('idioma', x.dataset.l); } catch (e) {}
        location.reload();
      });
    });
    lugar.appendChild(b);
  }
  var css = document.createElement('style');
  css.textContent = '#btnIdioma{display:flex;align-items:center;gap:6px;margin-left:24px;font-family:Jost,sans-serif;font-size:12px;letter-spacing:.12em;color:rgba(255,255,255,.35)}'
    + '#btnIdioma button{background:none;border:0;cursor:pointer;color:rgba(255,255,255,.55);font:inherit;letter-spacing:inherit;padding:4px 2px}'
    + '#btnIdioma button.on{color:var(--gold)}#btnIdioma button:hover{color:#fff}'
    + '@media (max-width:768px){#btnIdioma{margin-left:auto;margin-right:4px}}'
    + '.top-inner #btnIdioma{margin-left:12px}';
  document.head.appendChild(css);

  if (idioma !== 'en') { ready(boton); return; }

  // ---------- Traducción ----------
  document.documentElement.lang = 'en';
  var trad = {};
  Object.keys(TEXTOS).forEach(function (k) { trad[k.toLowerCase()] = TEXTOS[k]; });
  function t(txt) {
    var limpio = txt.trim();
    if (!limpio) return null;
    var r = TEXTOS[limpio];
    if (r === undefined) r = trad[limpio.toLowerCase()];
    if (r === undefined) {
      if (/\/mes$/.test(limpio)) return txt.replace('/mes', '/month');
      var m = limpio.match(/^Estamos cargando nuestras propiedades en (.+)\. Escribinos y te contamos las oportunidades disponibles\.$/);
      if (m) return 'We are adding our properties in ' + (m[1] === 'EE.UU.' ? 'the USA' : m[1]) + '. Message us to hear about available opportunities.';
      return null;
    }
    return txt.replace(limpio, r);
  }
  function nodo(n) {
    if (n.nodeType === 3) {
      var p = n.parentNode;
      if (!p || /^(SCRIPT|STYLE|TEXTAREA)$/.test(p.nodeName)) return;
      var r = t(n.nodeValue); if (r !== null && r !== n.nodeValue) n.nodeValue = r;
    } else if (n.nodeType === 1) {
      ['placeholder', 'aria-label', 'title'].forEach(function (a) {
        if (n.hasAttribute && n.hasAttribute(a)) { var r = t(n.getAttribute(a)); if (r !== null) n.setAttribute(a, r); }
      });
      if (n.nodeName === 'INPUT' && (n.type === 'button' || n.type === 'submit')) { var r2 = t(n.value); if (r2 !== null) n.value = r2; }
      for (var c = n.firstChild; c; c = c.nextSibling) nodo(c);
    }
  }
  function bloques() {
    BLOQUES.forEach(function (b) { document.querySelectorAll(b[0]).forEach(function (el) { if (el.dataset.en !== '1') { el.innerHTML = b[1]; el.dataset.en = '1'; } }); });
  }
  function titulo() {
    var tt = document.title.replace(/Inmobiliaria en Argentina, Paraguay y Uruguay/, 'Real Estate in Argentina, Paraguay & Uruguay').replace(/Inmobiliaria en Córdoba/, 'Real Estate in Córdoba').replace(/Propiedad/, 'Property')
      .replace(/Ficha de propiedad/, 'Property fact sheet');
    if (tt !== document.title) document.title = tt;
  }
  ready(function () {
    boton(); bloques(); nodo(document.body); titulo();
    new MutationObserver(function (ms) {
      ms.forEach(function (m) {
        if (m.type === 'characterData') nodo(m.target);
        m.addedNodes && m.addedNodes.forEach(function (n) { nodo(n); });
      });
      bloques(); titulo();
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  });

  function ready(fn) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }
})();
