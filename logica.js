// ============================================================
// BACK END DE BRO — datos y reglas.
// Igual en modo simulado (navegador) y real (servidor Node).
// Para cambiar cómo funciona Bro, se cambia AQUÍ. El front solo pinta.
// Principio: Bro hace pensar y da opciones. Nunca decide por la persona.
// ============================================================

export function datosIniciales() {
  return {
    nino: { nombre: 'Julio', edad: 13, minutosPantalla: 240, minutosUsados: 140, noche: '22:00' },
    madre: { nombre: 'Laura' },

    aura: {
      pasos: 6240, metaPasos: 9000, activos: 47, metaActivos: 60, movimiento: 310, metaMovimiento: 450,
      pantalla: 140, actividad: 95,
      semana: [[165, 70], [140, 110], [190, 55], [120, 130], [150, 95], [95, 175], [140, 95]], // [pantalla, movimiento] en minutos, de lunes a domingo
      suenoSemana: [7.8, 8.1, 7.2, 8.3, 8.0, 9.1, 8.2],
      sueno: {
        total: '8 h 12 min', dormir: '22:48', despertar: '07:00', calidad: 'Buena', ayer: '7 h 05 min',
        fases: [['#3068ED', 2], ['#7fa4ff', 3], ['#6f49d8', 1.5], ['#7fa4ff', 2], ['#3068ED', 1.5], ['#7fa4ff', 2.5], ['#E56648', 0.4], ['#6f49d8', 1.6], ['#7fa4ff', 1.5]]
      }
    },

    comunidades: [
      { id: 'futbol', ic: '⚽', nombre: 'Fútbol Base', para: 'Organizar partidos y entrenar juntos', dirige: 'CD Chamartín' },
      { id: 'robotica', ic: '🤖', nombre: 'Robótica del insti', para: 'Construir cosas que se mueven', dirige: 'IES Ramiro de Maeztu' },
      { id: 'familia', ic: '🏠', nombre: 'Familia', para: 'Logística de casa', dirige: 'Laura' }
    ],

    fichas: {
      skate: {
        nombre: 'Skate Madrid Río', ic: '🛹', que: 'Quedadas para patinar los sábados y aprender trucos',
        dirige: 'Club Deportivo Madrid Río (verificado)', responsable: 'Marta Ferrer, entrenadora', edades: '11 a 16',
        entra: 'Por invitación o solicitud', privacidad: 'No es pública. Nadie de fuera ve quién está.',
        adultos: '2 adultos identificados. No pueden escribir en privado a los niños.'
      }
    },
    reviews: {
      skate: [
        { de: 'Carmen, madre de Hugo', txt: 'Marta es muy atenta y siempre avisa al acabar. Hugo ha ganado mucha confianza.' },
        { de: 'Javier, padre de Mateo', txt: 'Grupo sano y bien organizado. Los horarios se cumplen.' }
      ]
    },

    bros: [
      { nombre: 'Hugo', apellido: 'Prieto', de: 'Del cole y de Fútbol Base', color: '#3068ED' },
      { nombre: 'Lucía', apellido: 'Rojas', de: 'De Robótica del insti', color: '#82B94F' },
      { nombre: 'Mateo', apellido: 'Serra', de: 'Del equipo', color: '#E56648' }
    ],

    chats: {
      Hugo: { sinLeer: true, mensajes: [{ de: 'Hugo', txt: '¿Te vienes el sábado al skate? Vamos 5.' }] },
      Lucía: { sinLeer: false, mensajes: [{ de: 'Lucía', txt: 'Mañana traigo los motores para la rampa' }, { de: 'yo', txt: 'Perfecto 👌' }] },
      Mateo: { sinLeer: false, mensajes: [{ de: 'Mateo', txt: 'Buen partido hoy' }] }
    },

    planes: [
      { id: 'skate', titulo: 'Skate en Madrid Río', cuando: 'Sábado, 10:00', donde: 'Puente de Praga, Madrid Río', van: 'Hugo, Mateo y 3 Bros más', organiza: 'Skate Madrid Río · Marta Ferrer (entrenadora)', estado: 'borrador', detalle: '' }
    ],

    proyectos: [
      { id: 'rampa', titulo: 'Rampa de skate', con: 'Con Lucía', paso: 2, pasos: 4, siguiente: 'Decidir el material' }
    ],

    logros: [
      { id: 'lectura', titulo: 'Leer 3 libros este mes', progreso: 2, meta: 3, premio: 'Cine el domingo', de: 'Laura', nuevo: false }
    ],

    monedero: { activo: false, saldo: 0, movimientos: [] },

    apps: [
      // estado: instalada | disponible | pendiente | denegada | noApta
      { id: 'spotify', nombre: 'Spotify', ic: '🎵', color: '#1DB954', estado: 'instalada', que: 'Música y podcasts' },
      { id: 'duolingo', nombre: 'Duolingo', ic: '🦉', color: '#58CC02', estado: 'instalada', que: 'Idiomas, 15 min al día' },
      { id: 'minecraft', nombre: 'Minecraft', ic: '⛏️', color: '#6B8E23', estado: 'instalada', que: 'Solo servidores de amigos' },
      { id: 'matchapp', nombre: 'Matchapp', ic: '🏅', color: '#3068ED', estado: 'instalada', que: 'Partidos y resultados', tiempo: '30 min al día' },
      { id: 'brownie', nombre: 'Brownie', ic: '🛍️', color: '#8B5E3C', estado: 'instalada', que: 'Tienda de ropa', tiempo: '15 min al día' },
      { id: 'subway', nombre: 'Subway Surfers', ic: '🏄', color: '#F2A900', estado: 'instalada', que: 'Juego', tiempo: '30 min al día' },
      { id: 'canva', nombre: 'Canva', ic: '🎨', color: '#7D2AE8', estado: 'pendiente', que: 'Diseño para proyectos' },
      { id: 'madfutbol', nombre: 'MadFútbol', ic: '⚽', color: '#0B7A3E', estado: 'disponible', que: 'Resultados y partidos de fútbol base en Madrid' },
      { id: 'strava', nombre: 'Strava', ic: '🏃', color: '#FC4C02', estado: 'disponible', que: 'Registrar rutas en bici o a pie' },
      // Bloqueadas por edad: Bro las bloquea solo, según el perfil 13
      { id: 'tiktok', nombre: 'TikTok', ic: '📱', color: '#111111', estado: 'noApta', que: 'Vídeos cortos', motivo: 'Es para mayores de 16 y muestra vídeos de desconocidos' },
      { id: 'instagram', nombre: 'Instagram', ic: '📷', color: '#C13584', estado: 'noApta', que: 'Red social', motivo: 'Perfiles públicos y mensajes de desconocidos' },
      { id: 'gta', nombre: 'GTA', ic: '🚗', color: '#2b3550', estado: 'noApta', que: 'Videojuego', motivo: 'Clasificado PEGI 18 por violencia' },
      // Bloqueadas por mamá: decisión de Laura, con su porqué
      { id: 'roblox', nombre: 'Roblox', ic: '🧱', color: '#E2231A', estado: 'denegada', que: 'Juegos creados por la comunidad', motivo: 'Ya tiene bastante pantalla entre semana' },
      { id: 'fortnite', nombre: 'Fortnite', ic: '🎯', color: '#6f49d8', estado: 'denegada', que: 'Videojuego online', motivo: 'Tiene compras dentro del juego y chat de voz con desconocidos' },
      { id: 'brawl', nombre: 'Brawl Stars', ic: '⭐', color: '#F2B705', estado: 'denegada', que: 'Videojuego', motivo: 'Lo hablamos cuando acabe los exámenes' }
    ],

    // Lo que Julio pide y Laura decide. estado: pendiente | si | no | persona
    solicitudes: [
      { id: 's1', tipo: 'app', ref: 'canva', titulo: 'Canva', detalle: 'Julio la quiere. Tú decides el tiempo de uso.', estado: 'pendiente' },
      { id: 's2', tipo: 'comunidad', ref: 'skate', titulo: 'Skate Madrid Río', detalle: 'Quedadas los sábados con Hugo y Mateo.', estado: 'pendiente' }
    ],

    // Contenido revisado para perfil 13
    contenido: [
      { id: 'c1', tema: 'Proyectos', t: 'Cómo hacer un avión de papel que vuele lejos', de: 'Ciencia en Casa', dur: '4 min', color: '#3068ED' },
      { id: 'c2', tema: 'Deporte', t: 'Tres trucos de skate para empezar', de: 'Skate Madrid Río', dur: '6 min', color: '#E56648' },
      { id: 'c3', tema: 'Ciencia', t: 'Por qué vuelan los aviones', de: 'Ciencia en Casa', dur: '5 min', color: '#6f49d8' },
      { id: 'c4', tema: 'Fútbol', t: 'Resumen de la jornada de fútbol base', de: 'MadFútbol', dur: '3 min', color: '#82B94F' }
    ],

    // Recordatorios de Julio (aparecen en «My today stuff»)
    recordatorios: [
      { id: 'mates', k: 'Mañana', titulo: 'Examen de Mates', detalle: 'Temas 3 y 4: fracciones y ecuaciones. Repasa los ejercicios de la página 58.' }
    ],

    // Avisos rápidos de Julio a Laura (flujo J4)
    avisos: [],

    colegio: [
      { id: 'excursion', de: 'IES Ramiro de Maeztu · Secretaría', asunto: 'Excursión al Museo del Prado', resumen: 'Autorización firmada y 12 € antes del viernes.', accion: 'Firmar y pagar 12 €', opciones: ['Firmar y pagar 12 €', 'Más tarde'], hecho: false },
      { id: 'examen', de: 'IES Ramiro de Maeztu · Tutoría', asunto: 'Examen de Lengua el jueves', resumen: 'Temas 4 y 5.', accion: 'Recordárselo a Julio', opciones: ['Recordárselo a Julio', 'Añadir al calendario', 'Nada'], hecho: false },
      { id: 'fundas', de: 'Profe de Ciencias', asunto: 'Fundas de plástico para el dosier', resumen: 'Cada documento en su funda antes del martes 22.', accion: 'Pedírselo a Julio', opciones: ['Pedírselo a Julio', 'Más tarde'], hecho: false }
    ]
  };
}

// ---------- Utilidades ----------
const limpiar = t => (t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const junto = t => limpiar(t).replace(/[^a-z0-9]/g, ''); // «Mad Fútbol» = «madfutbol»
const nuevoId = () => Math.random().toString(36).slice(2, 8);
const fmtMin = m => { const h = Math.floor(m / 60), x = Math.round(m % 60); return (h ? h + ' h ' : '') + (x ? x + ' min' : '') || '0 min'; };
const DIAS = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
const TIPO = { plan: 'Plan físico', app: 'App nueva', monedero: 'Monedero', comunidad: 'Comunidad nueva' };

// ---------- Bro AI: qué quiere hacer cada persona ----------
// Cada intención: palabras que la activan → qué hace y qué dice Bro.
// Bro puntúa todas y elige la que más coincide (así entiende frases largas por voz).
// «peso» sube la prioridad de las intenciones importantes.
const INTENCIONES_NINO = [
  { peso: 3, palabras: ['triste', 'agobiad', 'me siento mal', 'me siento fatal', 'estoy mal', 'estoy fatal', 'me han dicho', 'me han hecho', 'me han pegado', 'me insultan', 'se meten conmigo', 'no me encuentro', 'necesito hablar', 'me duele', 'estoy rayado', 'lloro', 'llorando', 'miedo', 'solo en el recreo', 'nadie me habla', 'deprimid', 'ansiedad', 'nervios'], accion: { responder: true }, di: 'Eso debes hablarlo con tu entorno más cercano.' },
  { peso: 2, palabras: ['que tiempo', 'tiempo hace', 'va a llover', 'llueve', 'hace frio', 'hace calor', 'temperatura', 'paraguas', 'abrigo'], accion: { responder: true }, di: 'Hoy en Madrid hace 26° y está parcialmente nublado. No hace falta paraguas.' },
  { peso: 2, palabras: ['qr', 'mi codigo', 'codigo bro', 'conectar con', 'nuevo bro', 'anadir a', 'agregar a', 'escanear'], accion: { pantalla: 'qr' }, di: 'Aquí tienes tu código Bro.' },
  { peso: 2, palabras: ['ven mis padres', 've mi madre', 've mama', 've laura', 'privacidad', 'que sabe mi madre', 'que sabe mama'], accion: { pantalla: 'privacidad' }, di: 'Esto es lo que ve Laura, y lo que no.' },
  { peso: 2, palabras: ['emergencia', '112', 'socorro', 'ayuda urgente'], accion: { llamar: 'Emergencias' }, di: 'Llamo al 112.' },
  { peso: 2, palabras: ['mama', 'madre', 'mami', 'laura'], accion: { flujo: 'mama' }, di: '' },
  { peso: 2, palabras: ['papa', 'papi', 'mi padre'], accion: { llamar: 'Papá' }, di: 'Llamo a papá.' },
  { peso: 1, palabras: ['hugo'], accion: { pantalla: 'chat', id: 'Hugo' }, di: 'Abro tu chat con Hugo.' },
  { peso: 1, palabras: ['lucia'], accion: { pantalla: 'chat', id: 'Lucía' }, di: 'Abro tu chat con Lucía.' },
  { peso: 1, palabras: ['mateo'], accion: { pantalla: 'chat', id: 'Mateo' }, di: 'Abro tu chat con Mateo.' },
  { peso: 2, palabras: ['proyecto', 'avion', 'tengo una idea', 'se me ha ocurrido', 'quiero hacer algo', 'quiero construir', 'quiero montar', 'quiero crear', 'quiero fabricar', 'manualidad', 'experimento', 'periodico', 'robot'], accion: { flujo: 'proyecto' }, di: '' },
  { peso: 1, palabras: ['mis proyectos', 'ver proyectos', 'como va mi proyecto', 'rampa'], accion: { pantalla: 'proyectos' }, di: 'Aquí están tus proyectos.' },
  { peso: 2, palabras: ['descarga', 'descargar', 'descargame', 'instala', 'instalar', 'instalame', 'bajame', 'bajar', 'app nueva', 'una app', 'nueva app', 'aplicacion nueva', 'quiero la app', 'quiero una aplicacion', 'pedir una app', 'tienda', 'store'], accion: { flujo: 'app' }, di: '' },
  { peso: 1, palabras: ['mis apps', 'mis aplicaciones', 'que apps tengo', 'aplicaciones', 'apps'], accion: { pantalla: 'apps' }, di: 'Aquí están tus apps.' },
  { peso: 1, palabras: ['comunidad', 'comunidades', 'grupo', 'grupos', 'equipo', 'futbol', 'robotica', 'mensaje', 'mensajes', 'chat', 'chats', 'que hay nuevo', 'novedades', 'bros', 'amigos', 'me han escrito', 'escribir a'], accion: { pantalla: 'comunidades' }, di: 'Te llevo a tus comunidades.' },
  { peso: 1, palabras: ['permiso', 'puedo ir', 'me dejas ir'], accion: { flujo: 'permiso', id: 'skate' }, di: 'Preparamos juntos lo que le vas a pedir a Laura.' },
  { peso: 1, palabras: ['skate', 'sabado', 'quedada', 'plan'], accion: { pantalla: 'plan', id: 'skate' }, di: 'Abro el plan del sábado.' },
  { peso: 1, palabras: ['dormido', 'sueno', 'dormir', 'aura', 'pulsera', 'pasos', 'movido', 'descanso', 'equilibrio'], accion: { pantalla: 'aura' }, di: 'Abro Aura.' },
  { peso: 1, palabras: ['dinero', 'monedero', 'wallet', 'paga', 'saldo', 'pagar'], accion: { pantalla: 'monedero' }, di: 'Abro tu monedero.' },
  { peso: 1, palabras: ['logro', 'logros', 'premio', 'premios', 'reto', 'acuerdo', 'rewards', 'recompensa'], accion: { pantalla: 'logros' }, di: 'Aquí están tus logros.' },
  { peso: 1, palabras: ['contenido', 'video', 'videos', 'ver algo', 'content', 'aprender'], accion: { pantalla: 'contenido' }, di: 'Te llevo a Contenido.' }
];

const INTENCIONES_PADRE = [
  { peso: 2, palabras: ['comunidad', 'grupo', 'unirse', 'unirme', 'apuntarse', 'apuntar', 'skate', 'club', 'madrid rio', 'resenas', 'reviews', 'opiniones'], accion: { flujo: 'comunidad' }, di: '' },
  { peso: 2, palabras: ['pendiente', 'pendientes', 'pide', 'pedido', 'peticion', 'peticiones', 'decidir', 'decision', 'solicitud', 'aprobar', 'aprobacion', 'que quiere', 'que me pide', 'que tengo', 'app', 'aplicacion', 'descargar', 'canva', 'madfutbol', 'mad futbol'], accion: { flujo: 'decidir' }, di: '' },
  { peso: 2, palabras: ['cole', 'colegio', 'instituto', 'insti', 'correo', 'correos', 'email', 'mail', 'excursion', 'examen', 'buzon', 'profe', 'tutor', 'tutoria', 'circular', 'autorizacion'], accion: { flujo: 'colegio' }, di: '' },
  { peso: 2, palabras: ['como esta', 'que tal esta', 'que tal julio', 'dormid', 'duerme', 'aura', 'pantalla', 'semana', 'sueno', 'hablar de algo', 'tendencia', 'movimiento', 'descanso', 'salud', 'bien julio'], accion: { flujo: 'aura' }, di: '' }
];

function puntuar(lista, texto) {
  const t = ' ' + limpiar(texto).replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ') + ' ';
  let mejor = null, max = 0;
  for (const i of lista) {
    let p = 0;
    for (const w of i.palabras) if (t.includes(w.length <= 4 ? ' ' + w : w)) p += w.split(' ').length;
    if (p) p += i.peso || 0;
    if (p > max) { max = p; mejor = i; }
  }
  return mejor;
}

// ============================================================
// CONTENT: Bro busca, filtra y muestra. Sin recomendaciones ni feed.
// ============================================================
const NO_ADECUADO = { accion: { responder: true }, di: 'Este contenido no es adecuado para ti.' };

// Palabras que bloquean. Con * = empieza por (violen* = violento, violencia…)
const BLOQUEADO = [
  // violencia
  'violen*', 'pelea', 'peleas', 'matar', 'mata', 'asesin*', 'sangre', 'gore', 'arma', 'armas', 'pistola*', 'disparo*', 'tiroteo*', 'muerte*', 'muertos', 'tortur*', 'decapit*', 'gta', 'call of duty', 'squid game',
  // apuestas
  'apuesta*', 'apostar', 'casino*', 'ruleta', 'poker', 'tragaperras', 'bet', 'betting', 'cripto*',
  // adultos
  'porno*', 'porn*', 'sexo', 'sexy', 'sexual*', 'desnud*', 'xxx', 'onlyfans', 'hentai', 'erotic*', '18', 'mayores de edad', 'adulto', 'adultos', 'tetas', 'nudes',
  // drogas y alcohol
  'droga*', 'porro*', 'marihuana', 'cocaina', 'alcohol', 'borrach*', 'emborrach*', 'fumar', 'vape*', 'vapear', 'cerveza*', 'chupito*'
];
const INSULTOS = ['joder', 'jodido', 'mierda', 'puta', 'puto', 'putas', 'gilipollas', 'cabron', 'cabrones', 'cono', 'hostia', 'hostias', 'idiota', 'imbecil', 'subnormal', 'capullo', 'zorra', 'maricon', 'polla', 'cojones', 'estupido', 'pendejo', 'verga', 'mamon', 'hijo de puta', 'me cago', 'follar'];

const normal = t => ' ' + limpiar(t).replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
const tiene = (t, w) => w.endsWith('*') ? new RegExp(' ' + w.slice(0, -1)).test(t) : t.includes(' ' + w + ' ');
function filtro(texto) {
  const t = normal(texto);
  if (INSULTOS.some(w => tiene(t, w))) return 'insulto';
  if (BLOQUEADO.some(w => tiene(t, w))) return 'bloqueado';
  return null;
}

// Catálogo revisado por Bro para perfil 13. yt = id del vídeo de YouTube.
// Bro solo enseña vídeos de aquí. Para añadir: nuevo objeto con tema y etiquetas.
const CATALOGO = [
  { yt: 'Uj06FGm8c64', tema: 'Aviones de papel', t: 'Avión «Ballista» fácil que vuela más de 30 m', canal: 'Foldable Flight', et: 'avion aviones papel volar origami plegar' },
  { yt: 'g2_CDlFquIk', tema: 'Aviones de papel', t: 'Avión fácil en 1 minuto que vuela muy lejos', canal: 'Foldable Flight', et: 'avion aviones papel volar origami rapido' },
  { yt: '38ZpBSjxyDo', tema: 'Aviones de papel', t: 'El «Canard», explicado por un récord mundial', canal: 'WIRED', et: 'avion aviones papel volar record ciencia' },
  { yt: 'MygnbvQy02w', tema: 'Ciencia', t: '6 experimentos caseros de ciencia divertida', canal: 'Experimentos caseros', et: 'ciencia experimento experimentos casa quimica fisica' },
  { yt: 'im35y1KAX5M', tema: 'Ciencia', t: '7 experimentos científicos fáciles en casa', canal: 'Experimentos', et: 'ciencia experimento experimentos casa' },
  { yt: 'TV2HHpXGhYE', tema: 'Ciencia', t: '9 experimentos fáciles de ciencia divertida', canal: 'Power Kids', et: 'ciencia experimento experimentos casa' },
  { yt: 'XeNqKUQ7GI4', tema: 'Mates', t: 'Fracciones desde cero: tipos, equivalentes y simplificar', canal: 'Matemáticas', et: 'mates matematicas fracciones fraccion examen simplificar equivalentes deberes' },
  { yt: 'yToVfydlnt0', tema: 'Mates', t: 'Suma y resta de fracciones, súper fácil', canal: 'Matemáticas', et: 'mates matematicas fracciones sumar restar suma resta examen deberes' },
  { yt: 'p42-9wQOrAs', tema: 'Mates', t: 'Las fracciones explicadas con ejemplos', canal: 'Happy Learning', et: 'mates matematicas fracciones fraccion' },
  { yt: 'RwuqaT0gqqE', tema: 'Fútbol', t: '22 ejercicios de fútbol en 12 minutos', canal: 'Entrenamiento fútbol', et: 'futbol ejercicios entrenar entrenamiento balon deporte' },
  { yt: '5yVp6lpjcDQ', tema: 'Fútbol', t: '10 ejercicios de fútbol para entrenar en casa', canal: 'Nacho Trujillo', et: 'futbol ejercicios entrenar casa balon deporte' },
  { yt: 'jIOC_LVejzY', tema: 'Fútbol', t: 'Entrenamiento de regate y velocidad', canal: 'Fútbol base', et: 'futbol regate dribling velocidad entrenar deporte' },
  { yt: 'nuYryhGhj1s', tema: 'Dibujo', t: '30 minutos de dibujos para principiantes', canal: 'Sir Pino', et: 'dibujo dibujar dibujos arte lapiz principiantes' },
  { yt: 'CETGKvK4sR4', tema: 'Dibujo', t: '10 trucos para aprender a dibujar', canal: 'Dibujo', et: 'dibujo dibujar trucos arte' },
  { yt: 'pS7p6FfU4bE', tema: 'Espacio', t: 'El Sistema Solar, planeta a planeta', canal: 'Educativo', et: 'espacio planetas sistema solar universo sol astronomia' },
  { yt: 'ZykXgSqet6A', tema: 'Espacio', t: 'El Sistema Solar y los planetas', canal: 'Happy Learning', et: 'espacio planetas sistema solar universo' },
  { yt: '0AXojPtxL8I', tema: 'Espacio', t: 'El Sistema Solar y la Vía Láctea explicados', canal: 'Educativo', et: 'espacio planetas sistema solar via lactea galaxia' }
];
// Descartados por Bro: -O1OqlqBFRc (preescolar, no es para 13 años) · azFNMth9WOs (título cebo, promesa imposible)

const PIDE_CONTENIDO = / (video|videos|ponme|pon un|pon una|buscame|busca|contenido|youtube|tutorial|ver algo|quiero ver|quiero aprender|ensename a) /;
const RELLENO = new Set(['quiero', 'ver', 'video', 'videos', 'ponme', 'pon', 'un', 'una', 'unos', 'de', 'del', 'sobre', 'buscame', 'busca', 'bro', 'contenido', 'youtube', 'tutorial', 'algo', 'aprender', 'ensename', 'a', 'el', 'la', 'los', 'las', 'me', 'por', 'favor', 'porfa', 'como', 'hacer', 'se', 'hace', 'que', 'y', 'para', 'con', 'en', 'mas']);
function temaDe(texto) { return normal(texto).trim().split(' ').filter(w => w && !RELLENO.has(w)).join(' '); }

function buscarContenido(db, { texto }) {
  const f = filtro(texto);
  if (f) return { bloqueado: true, texto };
  const tema = temaDe(texto);
  if (!tema) return { tema: '', resultados: [] };
  const pal = tema.split(' ').filter(w => w.length > 2);
  const resultados = CATALOGO.map(v => {
    const txt = normal(v.t + ' ' + v.tema + ' ' + v.et);
    const p = pal.filter(w => txt.includes(' ' + w) || txt.includes(' ' + w.replace(/e?s$/, ''))).length;
    return { ...v, p };
  }).filter(v => v.p > 0).sort((a, b) => b.p - a.p).slice(0, 6);
  return { tema, resultados };
}

function temasContenido() { return [...new Set(CATALOGO.map(v => v.tema))]; }

// ---------- Controles de la demo (por voz, para Julio y Laura) ----------
const INTENCIONES_DEMO = [
  { palabras: ['cambia a laura', 'pasa a laura', 've a laura', 'vete a laura', 'modo laura', 'vista de laura', 'soy laura', 'modo mama', 'modo madre', 'modo padres', 'cambia a mama', 'pasa a mama', 'bro parent', 'cambia de usuario a laura'], accion: { demo: 'padre' }, di: 'Cambio a Laura.' },
  { palabras: ['cambia a julio', 'pasa a julio', 've a julio', 'vete a julio', 'modo julio', 'vista de julio', 'soy julio', 'modo nino', 'modo hijo', 'vuelve a julio'], accion: { demo: 'nino' }, di: 'Cambio a Julio.' },
  { palabras: ['reinicia', 'reiniciar', 'resetea', 'resetear', 'empezar de cero', 'empieza de cero', 'borra todo', 'desde el principio'], accion: { demo: 'reiniciar' }, di: 'Reinicio la demo.' },
  { palabras: ['flujos', 'ver los flujos', 'ensename los flujos', 'documento de flujos'], accion: { demo: 'flujos' }, di: 'Te enseño los flujos.' },
  { palabras: ['bloquea', 'bloquear', 'bloquealo', 'pantalla de bloqueo', 'apaga la pantalla'], accion: { demo: 'bloquear' }, di: 'Bloqueo el móvil.' }
];

function interpretar(db, { texto, quien = 'nino' }) {
  const d = puntuar(INTENCIONES_DEMO, texto);
  if (d) return { accion: d.accion, di: d.di };
  if (quien !== 'padre') {
    const f = filtro(texto);
    if (f === 'insulto') return NO_ADECUADO;
    const h0 = puntuar(INTENCIONES_NINO, texto);
    if (h0 && h0.accion.responder && /entorno/.test(h0.di)) return { accion: h0.accion, di: h0.di };
    if (f) return NO_ADECUADO;
    if (PIDE_CONTENIDO.test(normal(texto))) return { accion: { pantalla: 'contenido', buscar: texto }, di: '' };
  }
  if (quien === 'padre') {
    const hit = puntuar(INTENCIONES_PADRE, texto);
    return hit ? { accion: hit.accion, di: hit.di } : { accion: null, di: null };
  }
  const hit = puntuar(INTENCIONES_NINO, texto);
  if (hit && hit.accion.flujo === 'mama' && /\b(llama|llamar|llamame|llamala)\b/.test(limpiar(texto))) return { accion: { llamar: 'Mamá' }, di: 'Llamo a mamá.' };
  if (hit && hit.accion.responder) return { accion: hit.accion, di: hit.di }; // lo emocional va primero
  for (const app of db.apps) {
    if (junto(texto).includes(junto(app.nombre))) {
      if (app.estado === 'instalada') return { accion: { pantalla: 'apps', id: app.id, abrir: true }, di: `Abro ${app.nombre}.` };
      return { accion: { flujo: 'app', id: app.id }, di: '' };
    }
  }
  return hit ? { accion: hit.accion, di: hit.di } : { accion: null, di: null };
}

// ---------- Entender la respuesta dentro de un flujo (voz o texto) ----------
// Devuelve la opción que la persona ha querido decir, o null.
const SINONIMOS = [
  [/\b(si|vale|ok|okay|claro|venga|de acuerdo|perfecto|adelante|dale|hazlo|correcto)\b/, ['Sí', 'Vale', 'Enviar', 'Aprobar', 'Seguir', 'Siguiente']],
  [/\b(no|nop|nada|ninguno|mejor no|para nada)\b/, ['No', 'Rechazar', 'Nada']],
  [/\b(envia|enviar|envialo|mandalo|manda|mandar)\b/, ['Enviar']],
  [/\b(cambia|cambiar|otra vez|de nuevo|repite)\b/, ['Cambiar']],
  [/\b(aprueba|apruebalo|aprobar|acepta|aceptar|dejale|que entre)\b/, ['Aprobar', 'Sí']],
  [/\b(rechaza|rechazar|deniega|no le dejo)\b/, ['Rechazar', 'No']],
  [/\b(llama|llamar|llamala|llamada)\b/, ['Llamar']],
  [/\b(aviso|avisa|avisale|mensaje|escribele|dile)\b/, ['Mandar un aviso']],
  [/\b(en persona|hablarlo|hablamos|lo hablamos|cara a cara)\b/, ['Hablarlo en persona']],
  [/\b(quince|15)\b/, ['15 min']], [/\b(treinta|30|media hora)\b/, ['30 min']], [/\b(una hora|1 hora|sesenta|60)\b/, ['1 hora']],
  [/\b(sin limite|lo que quiera|ilimitado)\b/, ['Sin límite']],
  [/\b(ficha|mas info|mas informacion|detalles)\b/, ['Ver ficha completa']],
  [/\b(resenas|reviews|opiniones|otras familias|que dicen)\b/, ['Ver reviews de familias', 'Ver más reviews']],
  [/\b(mas detalle|detalle|explicame|cuentame mas)\b/, ['Más detalle']],
  [/\b(firma|firmar|paga|pagar|pagalo)\b/, ['Firmar y pagar 12 €']],
  [/\b(recuerdaselo|recordar|recordatorio|avisale a julio)\b/, ['Recordárselo a Julio', 'Pedírselo a Julio']],
  [/\b(calendario|agenda)\b/, ['Añadir al calendario']],
  [/\b(luego|mas tarde|despues|otro dia)\b/, ['Más tarde']],
  [/\b(yo solo|solo yo|solo|nadie)\b/, ['Yo solo']],
  [/\b(hoy|ahora)\b/, ['Hoy']], [/\b(semana)\b/, ['Esta semana']], [/\b(mes)\b/, ['Este mes']],
  [/\b(domingo)\b/, ['Recordármelo el domingo']], [/\b(acuerdo|reto)\b/, ['Crear un acuerdo']]
];
const ORDINALES = ['primer', 'segund', 'tercer', 'cuart', 'quint'];
const VACIAS = new Set(['ver', 'quiero', 'hora', 'un', 'una', 'el', 'la', 'los', 'las', 'de', 'del', 'con', 'que', 'y', 'a', 'al', 'en', 'lo', 'le', 'me', 'mi', 'por', 'para', 'es', 'yo']);

function elegirOpcion(db, { texto, opciones = [] }) {
  const ops = opciones.filter(o => !/^Lo (digo|pienso) yo$/.test(o));
  const n = limpiar(texto).replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!n) return { opcion: null };
  // 1. Igual o contenida
  let m = ops.find(o => limpiar(o) === n) || ops.find(o => n.includes(limpiar(o).replace(/[^a-z0-9 ]/g, ' ').trim()));
  // 2. Por posición: «la primera», «la segunda»…
  if (!m) ORDINALES.forEach((w, i) => { if (!m && n.includes(w) && ops[i]) m = ops[i]; });
  // 3. Sinónimos concretos (media hora, envíalo, reseñas…). Los genéricos sí/no van al final.
  const concretos = SINONIMOS.slice(2), generales = SINONIMOS.slice(0, 2);
  if (!m) for (const [re, cand] of concretos) { if (re.test(n)) { m = cand.find(c => ops.includes(c)); if (m) break; } }
  // 4. Por palabras en común («con hugo» → «Con Hugo», «planeador» → «Planeador: vuela lejos»)
  if (!m) {
    let max = 0;
    const pal = n.split(' ').filter(w => w.length > 2 && !VACIAS.has(w));
    for (const o of ops) {
      const po = limpiar(o).replace(/[^a-z0-9 ]/g, ' ').split(' ').filter(w => w.length > 2 && !VACIAS.has(w));
      const c = pal.filter(w => po.some(x => x === w || (w.length > 4 && x.startsWith(w.slice(0, 5))))).length;
      if (c > max) { max = c; m = o; }
    }
  }
  // 5. Sí / no genéricos
  if (!m) for (const [re, cand] of generales) { if (re.test(n)) { m = cand.find(c => ops.includes(c)); if (m) break; } }
  return { opcion: m || null };
}

// ============================================================
// FLUJOS GUIADOS
// Cada flujo es una función: recibe las respuestas dadas hasta ahora
// y devuelve la siguiente pregunta o el final ({ fin }).
//   pregunta: { p, opciones, libre?, tarjeta?, ejemplo? }
//   libre: se acepta cualquier respuesta con tus palabras (voz o texto)
//   tarjeta: información extra que el front pinta (ficha, correo, gráfico…)
//   fin(db): aquí, y solo aquí, se guardan los cambios
// ============================================================
const FLUJOS = {

  // ---------- JULIO ----------
  proyecto: {
    titulo: 'Nuevo proyecto', total: 4,
    paso(db, r) {
      const P = [
        { p: '¿Qué idea tienes en mente? Escríbela o dímela con tus palabras.', opciones: ['Un periódico del insti', 'Un robot', 'Lo digo yo'], libre: true, ejemplo: 'Un avión de papel que vuele súper bien' },
        { p: '¿Con quién lo haces?', opciones: ['Yo solo', 'Con Hugo', 'Con Lucía', 'Con una comunidad'] },
        { p: '¿Para cuándo lo quieres?', opciones: ['Hoy', 'Esta semana', 'Este mes'] },
        { p: '¿Qué crees que hay que hacer primero? Te dejo ideas, pero eliges tú.', opciones: ['Hacer un boceto', 'Conseguir materiales', 'Repartir tareas', 'Lo pienso yo'], libre: true }
      ];
      const esAvion = r.length > 0 && limpiar(r[0]).includes('avion');
      if (esAvion) P[3] = { p: '¿Qué es lo primero que quieres hacer?', opciones: [], libre: true, ejemplo: 'Dame vídeos de cómo hacerlo' };
      if (r.length < P.length) return P[r.length];
      if (esAvion) return {
        fin(db) {
          const id = nuevoId();
          const nuevo = proyectoAvion(id, r);
          nuevo.siguiente = nuevo.lista[0].t;
          db.proyectos.unshift(nuevo);
          const videos = limpiar(r[3]).includes('video');
          return { di: videos ? 'Aquí tienes 3 vídeos. Elige el que quieras.' : `Apuntado: «${r[3]}». Es tu primer paso.`, accion: { pantalla: 'proyecto', id }, auto: true };
        }
      };
      return {
        fin(db) {
          db.proyectos.unshift({ id: nuevoId(), titulo: r[0], con: r[1], paso: 1, pasos: 4, siguiente: r[3], para: r[2] });
          return { di: `Listo: «${r[0]}», ${r[1].toLowerCase()}, para ${r[2].toLowerCase()}. Tu primer paso, el que has elegido: ${r[3].toLowerCase()}.`, accion: { pantalla: 'proyectos' }, boton: 'Ver mis proyectos' };
        }
      };
    }
  },

  app: {
    // J2: sin preguntas. Julio dice la app y Bro se la envía a Laura. El tiempo lo decide ella.
    titulo: 'Pedir una app', total: 1,
    paso(db, r, id) {
      let app = db.apps.find(x => x.id === id);
      if (!app && r.length) app = db.apps.find(x => junto(r[0]).includes(junto(x.nombre)));
      if (!app && !r.length) return { p: '¿Qué app quieres?', opciones: db.apps.filter(x => x.estado === 'disponible').map(x => x.nombre), libre: true };
      if (!app) return { fin: () => ({ di: `${r[0]} no está disponible.` }) };
      const tarjeta = { tipo: 'app', nombre: app.nombre, ic: app.ic, color: app.color, que: app.que };
      const fin = di => ({ fin: () => ({ di, tarjeta }) });
      if (app.estado === 'instalada') return { fin: () => ({ di: `${app.nombre} ya la tienes.`, tarjeta, accion: { pantalla: 'apps', id: app.id, abrir: true }, boton: 'Abrirla' }) };
      if (app.estado === 'noApta') return fin(`${app.nombre} no está disponible.`);
      if (app.estado === 'pendiente') return fin(`${app.nombre} ya se la has pedido a Laura. Está pendiente.`);
      if (app.estado === 'persona') return fin(`${app.nombre} la tienes que hablar con mamá en persona.`);
      if (app.estado === 'denegada') return fin(`Laura dijo que no a ${app.nombre}${app.motivo ? ': ' + app.motivo.toLowerCase() : ''}.`);
      return {
        fin(db) {
          pedirApp(db, { id: app.id, detalle: 'Julio la quiere. Tú decides el tiempo de uso.' });
          return { di: `${app.nombre} queda pendiente de aprobación. Laura decide si sí y cuánto tiempo al día.`, tarjeta, accion: { pantalla: 'apps', id: app.id }, auto: true };
        }
      };
    }
  },

  hablar: {
    // J3: Bro no es un amigo ni entra en lo emocional. Respuesta fija y fin.
    titulo: 'Hablar', total: 1,
    paso() {
      return { fin: () => ({ di: 'Eso debes hablarlo con tu entorno más cercano.' }) };
    }
  },

  mama: {
    titulo: 'Mamá', total: 3,
    paso(db, r) {
      if (r.length === 0) return { p: '¿La llamo o le mando un aviso?', opciones: ['Llamar', 'Mandar un aviso'] };
      if (r[0] === 'Llamar') return { fin: () => ({ di: 'Llamo a mamá. No gasta tiempo de pantalla.', accion: { llamar: 'Mamá' }, auto: true }) };
      if (r.length === 1) return { p: '¿Qué le digo?', opciones: ['Llego 15 min tarde', 'Ya estoy en casa', '¿Me recoges?', 'Lo digo yo'], libre: true };
      if (r.length === 2) return { p: `«${r[1]}». ¿Se lo envío?`, opciones: ['Enviar', 'Cambiar'] };
      return {
        fin(db) {
          db.avisos.unshift({ id: nuevoId(), txt: r[1], hora: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }), leido: false });
          return { di: 'Enviado. Mamá lo ve al momento.' };
        }
      };
    }
  },

  permiso: {
    titulo: 'Pedir permiso a Laura', total: 3,
    paso(db, r, id) {
      const P = [
        { p: '¿Cómo vas a ir?', opciones: ['Andando con Hugo', 'Me lleva Laura', 'En bus (línea 23)'] },
        { p: '¿A qué hora vuelves?', opciones: ['13:00', '14:00', 'Cuando diga Laura'] },
        { p: '¿Se lo cuentas tú en persona también?', opciones: ['Sí, luego se lo digo', 'Solo por Bro'] }
      ];
      if (r.length < P.length) return P[r.length];
      return {
        fin(db) {
          const plan = db.planes.find(p => p.id === (id || 'skate'));
          plan.estado = 'pedido';
          plan.detalle = `${r[0]} · vuelve a las ${r[1].toLowerCase()}`;
          db.solicitudes.unshift({ id: nuevoId(), tipo: 'plan', ref: plan.id, titulo: `${plan.titulo} · ${plan.cuando}`, detalle: `${plan.detalle}. Organiza ${plan.organiza}.`, estado: 'pendiente' });
          const extra = r[2].startsWith('Sí') ? ' Mejor así: en persona se entiende todo.' : '';
          return { di: `Enviado a Laura. Te aviso en cuanto decida.${extra}`, accion: { pantalla: 'plan', id: plan.id }, boton: 'Ver el plan' };
        }
      };
    }
  },

  // ---------- LAURA ----------
  decidir: {
    titulo: 'Peticiones de Julio',
    paso(db, r) {
      const pend = db.solicitudes.filter(s => s.estado === 'pendiente' && s.tipo !== 'comunidad');
      if (!pend.length) return { fin: () => ({ di: 'No tienes nada pendiente. Está bien que sea así.' }) };
      const decisiones = [];
      let k = 0;
      for (let i = 0; i < pend.length; i++) {
        const s = pend[i];
        if (k >= r.length) {
          const pre = i === 0 ? (pend.length === 1 ? 'Julio te pide una cosa:' : `Julio te pide ${pend.length} cosas. La primera:`) : 'Hecho. La siguiente:';
          const ops = s.tipo === 'app' ? ['Sí', 'No', 'Hablarlo en persona'] : ['Sí', 'No', 'Sí, con condición', 'Hablarlo en persona'];
          return { p: `${pre} ${s.titulo}.`, tarjeta: { tipo: 'solicitud', etiqueta: TIPO[s.tipo], titulo: s.titulo, detalle: s.detalle }, opciones: ops };
        }
        const a = r[k++];
        if (s.tipo === 'app' && a === 'Sí') {
          if (k >= r.length) return { p: `¿Cuánto tiempo al día puede usar ${s.titulo}?`, opciones: ['15 min', '30 min', '1 hora', 'Sin límite'] };
          decisiones.push({ s, si: true, condicion: r[k++] + ' al día' });
        } else if (s.tipo === 'app' && a === 'No') {
          if (k >= r.length) return { p: '¿Por qué? Julio lo verá.', opciones: ['No es para su edad', 'Ya tiene bastante pantalla', 'Lo digo yo'], libre: true };
          decisiones.push({ s, si: false, motivo: r[k++] });
        } else if (a === 'Sí, con condición') {
          if (k >= r.length) return { p: '¿Qué condición?', opciones: s.tipo === 'app' ? ['Solo 15 min al día', 'Solo fines de semana', 'Lo digo yo'] : ['Que vuelva a las 13:00', 'Que vaya con Hugo', 'Lo digo yo'], libre: true };
          decisiones.push({ s, si: true, condicion: r[k++] });
        } else decisiones.push({ s, si: a === 'Sí', persona: a === 'Hablarlo en persona' });
      }
      return {
        fin(db) {
          const lineas = decisiones.map(d => {
            if (d.persona) {
              d.s.estado = 'persona';
              if (d.s.tipo === 'app') db.apps.find(x => x.id === d.s.ref).estado = 'persona';
              return `${d.s.titulo}: lo habláis en persona`;
            }
            decidir(db, { id: d.s.id, si: d.si, condicion: d.condicion, motivo: d.motivo });
            const extra = d.condicion || d.motivo;
            return `${d.s.titulo}: ${d.si ? 'sí' : 'no'}${extra ? ' (' + extra.toLowerCase() + ')' : ''}`;
          });
          return { di: `Listo. ${lineas.join('. ')}. Julio lo ve en su Bro.` };
        }
      };
    }
  },

  colegio: {
    titulo: 'Correos del colegio',
    paso(db, r) {
      const pend = db.colegio.filter(c => !c.hecho);
      if (!pend.length) return { fin: () => ({ di: 'Del cole no hay nada que hacer. Todo al día.' }) };
      if (r.length < pend.length) {
        const c = pend[r.length];
        const pre = r.length === 0 ? (pend.length === 1 ? 'Hay un correo que pide algo:' : `Hay ${pend.length} correos que piden algo. El primero:`) : 'Siguiente:';
        return { p: `${pre} ${c.asunto}.`, tarjeta: { tipo: 'correo', de: c.de, asunto: c.asunto, resumen: c.resumen }, opciones: c.opciones };
      }
      return {
        fin(db) {
          const hechos = [];
          pend.forEach((c, i) => { if (!['Más tarde', 'Nada'].includes(r[i])) { c.hecho = true; c.resultado = r[i]; hechos.push(r[i].charAt(0).toLowerCase() + r[i].slice(1)); } });
          return { di: hechos.length ? `Listo: ${hechos.join(', ')}. Lo que es para Julio le aparece en su Bro.` : 'Vale, te lo dejo para más tarde.' };
        }
      };
    }
  },

  aura: {
    titulo: 'Aura de Julio',
    paso(db, r) {
      const A = db.aura, sem = A.semana;
      const media = (A.suenoSemana.reduce((x, y) => x + y, 0) / 7).toFixed(1).replace('.', ',');
      const dif = sem.map(([p, m]) => p - m);
      const peor = dif.indexOf(Math.max(...dif)), mejor = dif.indexOf(Math.min(...dif));
      const tarjeta = { tipo: 'tendencia', semana: sem, sueno: A.suenoSemana };
      if (r.length === 0) return { p: `Esta semana duerme bien (${media} h de media). El ${DIAS[peor]} tuvo mucha pantalla y poco movimiento.`, tarjeta, opciones: ['Vale', 'Más detalle'] };
      let i = 1;
      if (r[0] === 'Más detalle') {
        const mp = sem.reduce((x, d) => x + d[0], 0) / 7, mm = sem.reduce((x, d) => x + d[1], 0) / 7;
        if (r.length === 1) return { p: `Pantalla media: ${fmtMin(mp)} al día. Movimiento: ${fmtMin(mm)}. El mejor día fue el ${DIAS[mejor]}, con más movimiento que pantalla.`, opciones: ['Vale'] };
        i = 2;
      }
      if (r.length === i) return { p: 'No hace falta hablar de nada. Si quieres, podéis hacer algo juntos el sábado.', opciones: ['Crear un acuerdo', 'Recordármelo el domingo', 'Nada'] };
      const d = r[i];
      if (d === 'Crear un acuerdo') {
        if (r.length === i + 1) return { p: '¿Qué acuerdo le propones a Julio? Escríbelo como se lo dirías.', opciones: ['Salir en bici el sábado', 'Móvil fuera de la mesa', 'Lo digo yo'], libre: true };
        return { fin(db) { crearAcuerdo(db, { titulo: r[i + 1], meta: 1, premio: 'Lo habláis juntos' }); return { di: `Hecho. Julio verá el acuerdo «${r[i + 1]}».` }; } };
      }
      if (d === 'Recordármelo el domingo') return { fin: () => ({ di: 'Te lo recuerdo el domingo por la mañana.' }) };
      return { fin: () => ({ di: 'Perfecto. Todo en orden.' }) };
    }
  },

  comunidad: {
    titulo: 'Comunidad nueva',
    paso(db, r) {
      const s = db.solicitudes.find(x => x.tipo === 'comunidad' && x.estado === 'pendiente');
      if (!s) return { fin: () => ({ di: 'No hay ninguna comunidad esperando tu permiso.' }) };
      const f = db.fichas[s.ref], rev = db.reviews[s.ref] || [];
      const ficha = corta => ({ tipo: 'ficha', nombre: f.nombre, ic: f.ic, filas: corta
        ? [['La dirige', f.dirige], ['Responsable', f.responsable], ['Edades', f.edades]]
        : [['Qué se hace', f.que], ['La dirige', f.dirige], ['Responsable', f.responsable], ['Edades', f.edades], ['Quién entra', f.entra], ['Privacidad', f.privacidad], ['Adultos', f.adultos]] });
      let vistas = 0;
      for (let k = 0; k < r.length; k++) {
        const a = r[k];
        if (k > 0 && r[k - 1] === 'Aprobar') {
          return {
            fin(db) {
              s.estado = 'si'; s.regla = a;
              if (!db.comunidades.some(c => c.id === s.ref)) db.comunidades.push({ id: s.ref, ic: f.ic, nombre: f.nombre, para: f.que, dirige: f.dirige });
              return { di: `Hecho. Julio ya puede entrar en ${f.nombre}. Quedadas: ${a.toLowerCase()}.` };
            }
          };
        }
        if (a === 'Rechazar') return { fin(db) { s.estado = 'no'; return { di: 'Se lo digo a Julio. Mejor contarle en persona por qué.' }; } };
        if (a === 'Ver reviews de familias' || a === 'Ver más reviews') vistas++;
      }
      const ultima = r[r.length - 1];
      if (!r.length) return { p: `Julio quiere unirse a ${f.nombre}.`, tarjeta: ficha(true), opciones: ['Aprobar', 'Ver ficha completa', 'Ver reviews de familias', 'Rechazar'] };
      if (ultima === 'Aprobar') return { p: '¿Y las quedadas físicas?', opciones: ['Pedir permiso cada vez', 'Aprobadas si está la entrenadora'] };
      if (ultima === 'Ver ficha completa') return { p: 'Esta es la ficha completa.', tarjeta: ficha(false), opciones: ['Aprobar', 'Ver reviews de familias', 'Rechazar'] };
      const rv = rev[Math.min(vistas, rev.length) - 1];
      return { p: 'Esto dice otra familia de la comunidad:', tarjeta: { tipo: 'review', de: rv.de, txt: rv.txt }, opciones: vistas < rev.length ? ['Aprobar', 'Ver más reviews', 'Rechazar'] : ['Aprobar', 'Rechazar'] };
    }
  }
};

function flujo(db, { flujo: nombre, id, respuestas = [] }) {
  const f = FLUJOS[nombre];
  if (!f) return { error: 'Flujo desconocido' };
  const r = f.paso(db, respuestas, id);
  if (r.fin) return { titulo: f.titulo, fin: r.fin(db) };
  return {
    titulo: f.titulo, nota: respuestas.length === 0 ? f.nota || null : null,
    pregunta: { p: r.p, opciones: r.opciones || [] }, libre: !!r.libre, tarjeta: r.tarjeta || null, ejemplo: r.ejemplo || null,
    paso: respuestas.length + 1, total: f.total || respuestas.length + 2
  };
}

// ---------- Lo que Bro sugiere a Laura al abrir ----------
function sugerenciasPadre(db) {
  const s = [];
  const n = db.solicitudes.filter(x => x.estado === 'pendiente' && x.tipo !== 'comunidad').length;
  if (n) s.push({ txt: n === 1 ? 'Julio te pide una cosa' : `Julio te pide ${n} cosas`, flujo: 'decidir', urgente: true });
  const c = db.solicitudes.find(x => x.tipo === 'comunidad' && x.estado === 'pendiente');
  if (c) s.push({ txt: `Julio quiere unirse a ${c.titulo}`, flujo: 'comunidad', urgente: true });
  const m = db.colegio.filter(x => !x.hecho).length;
  if (m) s.push({ txt: m === 1 ? 'Un correo del cole' : `${m} correos del cole`, flujo: 'colegio' });
  s.push({ txt: '¿Cómo está Julio?', flujo: 'aura' });
  return s;
}

// ---------- «Ahora mismo» de Julio (usado por la versión v3) ----------
function ahoraMismo(db) {
  const items = [];
  (db.recordatorios || []).forEach(r => items.push({ k: r.k, titulo: r.titulo, texto: r.detalle, urgente: true, accion: { aviso: `${r.titulo}, ${r.k.toLowerCase()}. ${r.detalle}` } }));
  const chatNuevo = Object.entries(db.chats).find(([, c]) => c.sinLeer);
  if (chatNuevo) items.push({ k: 'Te han escrito', titulo: `${chatNuevo[0]}: «${chatNuevo[1].mensajes.at(-1).txt}»`, texto: 'Toca para responder.', accion: { pantalla: 'chat', id: chatNuevo[0] } });
  for (const p of db.planes) {
    const txt = {
      borrador: ['Te lo proponen', `${p.titulo}, ${p.cuando.toLowerCase()}`, 'Necesita el visto bueno de Laura.'],
      pedido: ['Esperando', 'Laura tiene que decidir el plan del sábado', p.detalle],
      aprobado: ['Pasa pronto', `${p.titulo}: aprobado`, `${p.cuando} · ${p.detalle}`],
      rechazado: ['Laura ha dicho que no', p.titulo, 'Mejor hablarlo con ella en persona.']
    }[p.estado];
    items.push({ k: txt[0], titulo: txt[1], texto: txt[2], accion: { pantalla: 'plan', id: p.id } });
  }
  db.solicitudes.filter(s => s.estado === 'pendiente' && (s.tipo === 'app' || s.tipo === 'monedero')).forEach(s =>
    items.push({ k: 'Esperando', titulo: `Laura decide: ${s.titulo}`, texto: 'Se lo has pedido desde Bro.', accion: { pantalla: s.tipo === 'app' ? 'apps' : 'monedero' } }));
  db.logros.filter(l => l.nuevo).forEach(l =>
    items.push({ k: 'Nuevo acuerdo con Laura', titulo: l.titulo, texto: `Premio: ${l.premio}`, accion: { pantalla: 'logros' } }));
  db.colegio.filter(c => c.hecho && c.id !== 'excursion').forEach(c =>
    items.push({ k: 'Del cole', titulo: c.asunto, texto: 'Lo ha puesto Laura. Bro te lo recuerda.', accion: { pantalla: 'inicio' } }));
  const pr = db.proyectos[0];
  if (pr) items.push({ k: 'Sigue en marcha', titulo: `Proyecto: ${pr.titulo}`, texto: `Te toca: ${pr.siguiente.toLowerCase()}.`, accion: { pantalla: 'proyectos' } });
  // Orden: 1) lo urgente (examen), 2) lo que depende de Julio (proyecto), 3) el resto, 4) lo que depende de mamá
  const orden = it => it.urgente ? 0 : /proyecto/i.test(it.titulo) ? 1 : /Esperando|Laura|mam/i.test(it.k + ' ' + it.titulo) ? 3 : 2;
  items.sort((a, b) => orden(a) - orden(b));
  return items;
}

// ---------- Proyecto interactivo: avión de papel ----------
// yt = id del vídeo de YouTube. Se reproduce con youtube-nocookie, sin recomendaciones.
const VIDEOS_AVION = [
  { id: 'v1', yt: 'Uj06FGm8c64', t: 'Avión «Ballista» fácil que vuela más de 30 m', canal: 'Foldable Flight (en español)', dur: 'Corto' },
  { id: 'v2', yt: 'g2_CDlFquIk', t: 'Avión fácil en 1 minuto que vuela muy lejos', canal: 'Foldable Flight', dur: '1 min' },
  { id: 'v3', yt: '38ZpBSjxyDo', t: 'El «Canard», explicado por un récord mundial', canal: 'WIRED · John Collins', dur: 'Largo' }
];
// Descartados por Bro (no se enseñan a Julio):
// azFNMth9WOs — «vuela 10000 pies»: promesa imposible, título cebo y lleno de hashtags; no es fiable para aprender.
// Cada paso tiene un tipo que el front sabe pintar: normal | videos | prueba | mejora
function proyectoAvion(id, r) {
  return {
    id, tipo: 'avion', siguiente: '', titulo: r[0].charAt(0).toUpperCase() + r[0].slice(1), con: r[1], para: r[2],
    actual: 0, paso: 1, pasos: 3, terminado: false,
    // El primer paso lo elige Julio con sus palabras. Si pide vídeos, se los enseñamos.
    lista: [
      limpiar(r[3]).includes('video') ? { t: 'Ver cómo se hace', tipo: 'videos', hecho: false, dato: '' } : { t: r[3].charAt(0).toUpperCase() + r[3].slice(1), tipo: 'normal', hecho: false, dato: '' },
      { t: 'Hacerlo y probarlo', tipo: 'prueba', hecho: false, dato: '' },
      { t: 'Mejorarlo', tipo: 'mejora', hecho: false, dato: '' }
    ],
    // Vídeos reales de YouTube, revisados por Bro para perfil 13 (ver VIDEOS_AVION)
    videos: VIDEOS_AVION.map(v => ({ ...v, visto: false }))
  };
}

const CONSEJOS = {
  'Vuela recto y lejos': 'Muy bien. Si quieres más distancia, prueba a lanzarlo más suave y un poco hacia arriba.',
  'Cae en picado': 'Prueba a doblar un poco hacia arriba el final de las alas.',
  'Gira hacia un lado': 'Mira si las dos alas son iguales. Si una está más doblada, iguálalas.'
};

function verVideo(db, { id, video }) {
  const p = db.proyectos.find(x => x.id === id);
  const v = p && p.videos.find(x => x.id === video);
  if (v) v.visto = true;
  return {};
}

function avanzarProyecto(db, { id, dato }) {
  const p = db.proyectos.find(x => x.id === id);
  if (!p || p.terminado) return {};
  const paso = p.lista[p.actual];
  paso.hecho = true;
  paso.dato = dato || '';
  if (paso.tipo === 'mejora') paso.consejo = CONSEJOS[dato] || '';
  p.actual++;
  p.terminado = p.actual >= p.lista.length;
  p.paso = Math.min(p.actual + 1, p.pasos);
  p.siguiente = p.terminado ? 'Terminado' : p.lista[p.actual].t;
  return { consejo: paso.consejo || null, terminado: p.terminado };
}

// ---------- Acciones sueltas ----------
const RESPUESTAS = {
  Hugo: ['¡Guay! Nos vemos allí 🛹', 'Jajaja vale', 'Yo llevo la tabla nueva'],
  Lucía: ['Genial, mañana lo probamos', 'Vale!', 'Te mando el esquema luego'],
  Mateo: ['Crack', 'Vale, hablamos', '👍']
};

function enviarMensaje(db, { con, txt }) {
  const c = db.chats[con];
  c.mensajes.push({ de: 'yo', txt });
  const r = RESPUESTAS[con] || ['👍'];
  c.mensajes.push({ de: con, txt: r[c.mensajes.length % r.length] });
  return {};
}

function leerChat(db, { con }) { if (db.chats[con]) db.chats[con].sinLeer = false; return {}; }

function pedirApp(db, { id, detalle }) {
  const app = db.apps.find(a => a.id === id);
  if (!app || app.estado !== 'disponible') return { error: 'No se puede pedir' };
  app.estado = 'pendiente';
  db.solicitudes.unshift({ id: nuevoId(), tipo: 'app', ref: id, titulo: app.nombre, detalle: detalle || `${app.que}. Julio la quiere usar.`, estado: 'pendiente' });
  return { di: `Pedido. Laura decide sobre ${app.nombre}.` };
}

function pedirMonedero(db) {
  if (db.solicitudes.some(s => s.tipo === 'monedero' && s.estado === 'pendiente')) return {};
  db.solicitudes.unshift({ id: nuevoId(), tipo: 'monedero', ref: 'monedero', titulo: 'Activar el monedero', detalle: 'Para pagar con el móvil. Tú pones el límite.', estado: 'pendiente' });
  return { di: 'Se lo he pedido a Laura.' };
}

function decidir(db, { id, si, condicion, motivo }) {
  const s = db.solicitudes.find(x => x.id === id);
  if (!s) return { error: 'No existe' };
  s.estado = si ? 'si' : 'no';
  if (condicion) s.condicion = condicion;
  if (s.tipo === 'plan') db.planes.find(p => p.id === s.ref).estado = si ? 'aprobado' : 'rechazado';
  if (motivo) s.motivo = motivo;
  if (s.tipo === 'app') {
    const app = db.apps.find(a => a.id === s.ref);
    app.estado = si ? 'instalada' : 'denegada';
    app.tiempo = condicion || null;
    app.motivo = motivo || null;
  }
  if (s.tipo === 'monedero' && si) db.monedero = { activo: true, saldo: 20, movimientos: [{ t: 'Paga de Laura', f: 'Hoy', v: 20 }] };
  return {};
}

function sumarLogro(db, { id }) {
  const l = db.logros.find(x => x.id === id);
  if (l && l.progreso < l.meta) l.progreso++;
  if (l) l.nuevo = false;
  return { completado: l && l.progreso >= l.meta };
}

function crearAcuerdo(db, { titulo, meta, premio }) {
  if (!titulo) return { error: 'Falta el acuerdo' };
  db.logros.unshift({ id: nuevoId(), titulo, progreso: 0, meta: Math.max(1, +meta || 1), premio: premio || 'Lo habláis juntos', de: 'Laura', nuevo: true });
  return {};
}

function marcarColegio(db, { id }) { const c = db.colegio.find(x => x.id === id); if (c) c.hecho = true; return {}; }
function leerAvisos(db) { db.avisos.forEach(a => (a.leido = true)); return {}; }

// ---------- Puerta de entrada: el front llama por nombre ----------
const RUTAS = { estado: () => ({}), buscarContenido, temasContenido: () => ({ temas: temasContenido() }), interpretar, elegirOpcion, verVideo, avanzarProyecto, flujo, enviarMensaje, leerChat, pedirApp, pedirMonedero, decidir, sumarLogro, crearAcuerdo, marcarColegio, leerAvisos };

export function ejecutar(db, ruta, datos = {}) {
  const base = datosIniciales();
  for (const k in base) if (!(k in db)) db[k] = base[k]; // datos nuevos para demos ya guardadas
  const fn = RUTAS[ruta];
  if (!fn) return { error: 'Ruta desconocida: ' + ruta };
  const res = fn(db, datos) || {};
  return { ...res, estado: { ...db, ahora: ahoraMismo(db), sugerenciasPadre: sugerenciasPadre(db) } };
}
