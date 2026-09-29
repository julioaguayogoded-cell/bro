// ============================================================
// BACK de Bro Connect: usuarios y amistades.
// Pega aquí tus dos claves de Supabase (Project Settings → API).
// Si están vacías, funciona en modo local (solo este móvil).
// ============================================================
export const SUPABASE_URL = 'https://nxdkjayuonzrqwjokfyu.supabase.co';
export const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54ZGtqYXl1b256cnF3am9rZnl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2ODUyOTUsImV4cCI6MjEwNjI2MTI5NX0.f4hfHICq3NxJm8f5X7bnMq2WqqlRWahpaFjCEWl2FSg';

const online = () => !!(SUPABASE_URL && SUPABASE_KEY);
export const modo = () => (online() ? 'online' : 'local');

async function rest(ruta, opt = {}) {
  const r = await fetch(SUPABASE_URL.replace(/\/$/, '') + '/rest/v1/' + ruta, {
    ...opt,
    headers: { apikey: SUPABASE_KEY, Authorization: 'Bearer ' + SUPABASE_KEY, 'Content-Type': 'application/json', Prefer: 'return=representation' }
  });
  if (!r.ok) throw new Error(await r.text());
  const t = await r.text();
  return t ? JSON.parse(t) : null;
}

// ---- Modo local (sin Supabase) ----
const LS = 'broConnect.db';
const leer = () => JSON.parse(localStorage.getItem(LS) || '{"usuarios":[],"amistades":[]}');
const guardar = d => localStorage.setItem(LS, JSON.stringify(d));
const nuevoId = () => Math.random().toString(36).slice(2, 10);

// Regla Bro: amigos solo si la diferencia de edad es de 3 años o menos
export const puedenSerAmigos = (e1, e2) => Math.abs(Number(e1) - Number(e2)) <= 3;

export async function crearUsuario({ nombre, color, edad }) {
  const u = { id: nuevoId(), nombre: nombre.trim(), color, edad: Number(edad) };
  if (online()) return (await rest('usuarios', { method: 'POST', body: JSON.stringify(u) }))[0];
  const d = leer(); d.usuarios.push(u); guardar(d); return u;
}

export async function usuario(id) {
  if (!id) return null;
  if (online()) return (await rest('usuarios?id=eq.' + encodeURIComponent(id)))[0] || null;
  return leer().usuarios.find(u => u.id === id) || null;
}

export async function usuarios(ids) {
  if (!ids.length) return [];
  if (online()) return rest('usuarios?id=in.(' + ids.map(encodeURIComponent).join(',') + ')');
  return leer().usuarios.filter(u => ids.includes(u.id));
}

export async function amistades(id) {
  if (online()) return rest(`amistades?or=(de.eq.${id},a.eq.${id})&order=creado.desc`);
  return leer().amistades.filter(f => f.de === id || f.a === id);
}

export async function pedirAmistad(yo, otro) {
  if (!puedenSerAmigos(yo.edad, otro.edad)) throw new Error('edad');
  const ya = (await amistades(yo.id)).find(f => (f.de === otro.id || f.a === otro.id) && f.estado !== 'rechazada');
  if (ya) return ya;
  const f = { id: nuevoId(), de: yo.id, a: otro.id, estado: 'pendiente' };
  if (online()) return (await rest('amistades', { method: 'POST', body: JSON.stringify(f) }))[0];
  const d = leer(); d.amistades.push(f); guardar(d); return f;
}

export async function responderAmistad(id, estado) {
  if (online()) return rest('amistades?id=eq.' + encodeURIComponent(id), { method: 'PATCH', body: JSON.stringify({ estado }) });
  const d = leer(); const f = d.amistades.find(x => x.id === id); if (f) f.estado = estado; guardar(d);
}
