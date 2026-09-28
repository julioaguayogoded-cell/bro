// ============================================================
// SERVIDOR REAL (opcional). Sin dependencias: solo Node 18+.
//   //   node server.js
// Luego en api.js pon MODO = 'real'.
// Los datos se guardan en db.json
// ============================================================
import http from 'node:http';
import fs from 'node:fs';
import { datosIniciales, ejecutar } from './logica.js';

const ARCHIVO = new URL('./db.json', import.meta.url);
let db = fs.existsSync(ARCHIVO) ? JSON.parse(fs.readFileSync(ARCHIVO, 'utf8')) : datosIniciales();
const guardar = () => fs.writeFileSync(ARCHIVO, JSON.stringify(db, null, 2));

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }

  const ruta = (req.url.match(/^\/api\/(\w+)/) || [])[1];
  if (req.method !== 'POST' || !ruta) { res.writeHead(404); return res.end(); }

  let cuerpo = '';
  req.on('data', t => (cuerpo += t));
  req.on('end', () => {
    if (ruta === 'reiniciar') db = datosIniciales();
    const resultado = ejecutar(db, ruta === 'reiniciar' ? 'estado' : ruta, JSON.parse(cuerpo || '{}'));
    guardar();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(resultado));
  });
}).listen(3000, () => console.log('Bro back end en http://localhost:3000'));
