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
      { id: 'canva', nombre: 'Canva', ic: '🎨', color: '#7D2AE8', estado: 'pendiente', que: 'Diseño para proyectos' },
      { id: 'madfutbol', nombre: 'MadFútbol', ic: '⚽', color: '#0B7A3E', estado: 'disponible', que: 'Resultados y partidos de fútbol base en Madrid' },
      { id: 'strava', nombre: 'Strava', ic: '🏃', color: '#FC4C02', estado: 'disponible', que: 'Registrar rutas en bici o a pie' },
      { id: 'tiktok', nombre: 'TikTok', ic: '📱', color: '#111111', estado: 'noApta', que: 'No está aprobada para perfil 13' },
      { id: 'roblox', nombre: 'Roblox', ic: '🧱', color: '#E2231A', estado: 'denegada', que: 'Juegos creados por la comunidad', motivo: 'Ya tiene bastante pantalla' }
    ],

    // Lo que Julio pide y Laura decide. estado: pendiente | si | no | persona
    solicitudes: [
      { id: 's1', tipo: 'app', ref: 'canva', titulo: 'Canva', detalle: 'Julio la quiere. Tú decides el tiempo de uso.', estado: 'pendiente' },
      { id: 's2', tipo: 'comunidad', ref: 'skate', titulo: 'Skate Madrid Río', detalle: 'Quedadas los sábados con Hugo y Mateo.', estado: 'pendiente' }
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
// Orden importante: de más concreta a más general.
const INTENCIONES_NINO = [
  { palabras: ['ven mis padres', 've mi madre', 've laura', 'privacidad'], accion: { pantalla: 'privacidad' }, di: 'Esto es lo que ve Laura, y lo que no.' },
  { palabras: ['triste', 'agobiad', 'me siento mal', 'estoy mal', 'me han dicho', 'me han hecho', 'no me encuentro', 'necesito hablar', 'me duele', 'estoy rayado'], accion: { responder: true }, di: 'Eso debes hablarlo con tu entorno más cercano.' },
  { palabras: ['hugo'], accion: { pantalla: 'chat', id: 'Hugo' }, di: 'Abro tu chat con Hugo.' },
  { palabras: ['lucia'], accion: { pantalla: 'chat', id: 'Lucía' }, di: 'Abro tu chat con Lucía.' },
  { palabras: ['mateo'], accion: { pantalla: 'chat', id: 'Mateo' }, di: 'Abro tu chat con Mateo.' },
  { palabras: ['mama', 'madre'], accion: { flujo: 'mama' }, di: 'Vale, mamá.' },
  { palabras: ['papa'], accion: { llamar: 'Papá' }, di: 'Llamo a papá.' },
  { palabras: ['emergencia', '112'], accion: { llamar: 'Emergencias' }, di: 'Llamo al 112.' },
  { palabras: ['pedir permiso', 'permiso'], accion: { flujo: 'permiso', id: 'skate' }, di: 'Preparamos juntos lo que le vas a pedir a Laura.' },
  { palabras: ['skate', 'sabado', 'quedada', 'plan'], accion: { pantalla: 'plan', id: 'skate' }, di: 'Abro el plan del sábado.' },
  { palabras: ['avion', 'nuevo proyecto', 'crear un proyecto', 'hacer un proyecto', 'empezar un proyecto', 'montar', 'tengo una idea', 'periodico'], accion: { flujo: 'proyecto' }, di: 'Vamos a pensarlo juntos. Pregunto yo, decides tú.' },
  { palabras: ['proyecto', 'rampa'], accion: { pantalla: 'proyectos' }, di: 'Aquí están tus proyectos.' },
  { palabras: ['instalar', 'descargar', 'app nueva', 'una app', 'pedir una app', 'tienda', 'store'], accion: { flujo: 'app' }, di: 'Vamos a ello.' },
  { palabras: ['mis apps', 'apps', 'aplicaciones'], accion: { pantalla: 'apps' }, di: 'Aquí están tus apps.' },
  { palabras: ['comunidad', 'grupo', 'futbol', 'robotica', 'mensaje', 'chat', 'que hay nuevo', 'bros'], accion: { pantalla: 'comunidades' }, di: 'Te llevo a tus comunidades.' },
  { palabras: ['dormido', 'sueno', 'dormir', 'aura', 'pulsera', 'pasos', 'movido', 'descanso', 'equilibrio'], accion: { pantalla: 'aura' }, di: 'Abro Aura.' },
  { palabras: ['dinero', 'monedero', 'wallet', 'paga', 'saldo', 'pagar'], accion: { pantalla: 'monedero' }, di: 'Abro tu monedero.' },
  { palabras: ['logro', 'premio', 'reto', 'acuerdo'], accion: { pantalla: 'logros' }, di: 'Aquí está tu camino.' },
  { palabras: ['hoy', 'pendiente', 'que tengo', 'inicio'], accion: { pantalla: 'inicio' }, di: 'Esto es lo que tienes hoy.' }
];

const INTENCIONES_PADRE = [
  { palabras: ['comunidad', 'grupo', 'unirse', 'unirme', 'skate', 'club'], accion: { flujo: 'comunidad' }, di: 'Vamos a verla.' },
  { palabras: ['pendiente', 'pide', 'peticion', 'decidir', 'solicitud', 'quiere'], accion: { flujo: 'decidir' }, di: 'Vamos una a una.' },
  { palabras: ['cole', 'instituto', 'correo', 'excursion', 'examen', 'buzon'], accion: { flujo: 'colegio' }, di: 'Reviso el buzón del cole.' },
  { palabras: ['como esta', 'dormid', 'aura', 'pantalla', 'semana', 'sueno', 'hablar de algo'], accion: { flujo: 'aura' }, di: 'Miro la tendencia de Julio.' }
];

function interpretar(db, { texto, quien = 'nino' }) {
  const t = limpiar(texto);
  if (quien === 'padre') {
    const hit = INTENCIONES_PADRE.find(i => i.palabras.some(p => t.includes(p)));
    return hit ? { accion: hit.accion, di: hit.di } : { accion: null, di: null };
  }
  for (const app of db.apps) {
    if (junto(texto).includes(junto(app.nombre))) {
      if (app.estado === 'instalada') return { accion: { pantalla: 'apps', id: app.id, abrir: true }, di: `Abro ${app.nombre}.` };
      return { accion: { flujo: 'app', id: app.id }, di: `Vale, ${app.nombre}.` };
    }
  }
  const hit = INTENCIONES_NINO.find(i => i.palabras.some(p => t.includes(p)));
  return hit ? { accion: hit.accion, di: hit.di } : { accion: null, di: null };
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
  return items;
}

// ---------- Proyecto interactivo: avión de papel ----------
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
    // Vídeos de ejemplo: cambiar por enlaces reales revisados para perfil 13
    videos: [
      { id: 'v1', t: 'El dardo clásico, paso a paso', dur: '3:12', visto: false },
      { id: 'v2', t: 'El planeador que llega más lejos', dur: '4:05', visto: false },
      { id: 'v3', t: 'Cómo ajustar las alas para que no caiga', dur: '2:40', visto: false }
    ]
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
const RUTAS = { estado: () => ({}), interpretar, verVideo, avanzarProyecto, flujo, enviarMensaje, leerChat, pedirApp, pedirMonedero, decidir, sumarLogro, crearAcuerdo, marcarColegio, leerAvisos };

export function ejecutar(db, ruta, datos = {}) {
  const fn = RUTAS[ruta];
  if (!fn) return { error: 'Ruta desconocida: ' + ruta };
  const res = fn(db, datos) || {};
  return { ...res, estado: { ...db, ahora: ahoraMismo(db), sugerenciasPadre: sugerenciasPadre(db) } };
}
