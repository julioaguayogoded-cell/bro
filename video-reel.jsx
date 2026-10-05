// Bro · reel vertical de 60 s para inversores. Problema (datos reales) → Bro. Cortes al beat (120 BPM).
const { useComposition, CompositionStage, Easing, animate, clamp, TweaksPanel, TweakToggle, useTweaks } = window;

const C = { azul: '#3068ED', naranja: '#E56648', verde: '#82B94F', negro: '#111111', gris: '#6B7280', linea: '#E4E7EE', claro: '#F6F7FB', rosa: '#F7B8CF', morado: '#6f49d8' };
const LOGO = 'bro-logo-2048-transparente.png';
const BEAT = 0.5;

const MOTION = {
  enter: (T, s, d = 0.4) => animate({ from: 0, to: 1, start: s, end: s + d, ease: Easing.easeOutCubic })(T),
  draw: (T, s, d = 1) => animate({ from: 0, to: 1, start: s, end: s + d, ease: Easing.easeInOutCubic })(T),
  pop: (T, s, d = 0.4) => animate({ from: 0, to: 1, start: s, end: s + d, ease: Easing.easeOutBack })(T),
};
const pulso = T => Math.exp(-((T % BEAT) / 0.11));
const en = (T, a, b) => T >= a && T < b;

// ---------- Texto superior ----------
function Texto({ T, from, to, kicker, kc = C.azul, title, sub, dark }) {
  if (!en(T, from, to)) return null;
  const a = MOTION.enter(T, from, 0.35), b = MOTION.enter(T, from + 0.25, 0.4);
  const col = dark ? '#fff' : C.negro;
  return (
    <div style={{ position: 'absolute', left: 80, right: 80, top: 120, height: 440, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
      {kicker && <div style={{ opacity: a, transform: `translateY(${(1 - a) * 16}px)`, fontFamily: 'Inter', fontWeight: 800, fontSize: 30, letterSpacing: '.14em', color: kc }}>{kicker}</div>}
      <div style={{ opacity: a, transform: `translateY(${(1 - a) * 30}px) scale(${1 + 0.02 * pulso(T) * a})`, transformOrigin: 'left center', fontFamily: 'Outfit', fontWeight: 800, fontSize: 96, lineHeight: 1.0, letterSpacing: '-.03em', color: col, textWrap: 'balance' }}>{title}</div>
      {sub && <div style={{ opacity: b, transform: `translateY(${(1 - b) * 18}px)`, fontFamily: 'Inter', fontWeight: 500, fontSize: 38, lineHeight: 1.3, color: dark ? 'rgba(255,255,255,.8)' : '#4B5563' }}>{sub}</div>}
    </div>
  );
}

function Datos({ T, c }) {
  const D = [
    ['12 años', 'edad media del primer móvil en España'],
    ['4 h al día', 'de pantalla fuera del cole'],
    ['103 min', 'al día en TikTok'],
    ['83 %', 'de los padres: lo usan más de lo que querrían'],
  ];
  const i = clamp(Math.floor((T - c) / 2.25), 0, 3), t0 = c + i * 2.25;
  const a = MOTION.pop(T, t0, 0.35), b = MOTION.enter(T, t0 + 0.2, 0.4);
  return (
    <div style={{ position: 'absolute', left: 80, right: 80, top: 120, height: 440, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
      <div style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 30, letterSpacing: '.14em', color: '#FF5A5F' }}>LA REALIDAD · {i + 1}/4</div>
      <div key={i} style={{ opacity: Math.min(1, a), transform: `scale(${0.85 + 0.15 * a})`, transformOrigin: 'left center', fontFamily: 'Outfit', fontWeight: 800, fontSize: 150, lineHeight: .95, letterSpacing: '-.04em', color: '#fff' }}>{D[i][0]}</div>
      <div style={{ opacity: b, transform: `translateY(${(1 - b) * 14}px)`, fontFamily: 'Inter', fontWeight: 600, fontSize: 40, lineHeight: 1.25, color: 'rgba(255,255,255,.85)' }}>{D[i][1]}</div>
      <div style={{ fontFamily: 'Inter', fontSize: 22, color: 'rgba(255,255,255,.45)', marginTop: 8 }}>Fuente: Qustodio, «El dilema digital», 2025</div>
    </div>
  );
}

// ---------- Piezas de pantalla (diseñadas a 430 × 916) ----------
function Header({ titulo, sub }) {
  return (
    <div style={{ height: 116, padding: '56px 20px 0', display: 'flex', alignItems: 'center', gap: 12, borderBottom: `1px solid ${C.linea}`, background: '#fff', boxSizing: 'border-box' }}>
      <img src={LOGO} alt="" style={{ width: 38, height: 38 }} />
      <div>
        <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 24, color: C.negro, lineHeight: 1.1 }}>{titulo}</div>
        {sub && <div style={{ fontFamily: 'Inter', fontSize: 14, color: C.gris }}>{sub}</div>}
      </div>
    </div>
  );
}
function Burbuja({ T, at, yo, children }) {
  const a = MOTION.pop(T, at, 0.35);
  if (a <= 0.001) return null;
  return <div style={{ alignSelf: yo ? 'flex-end' : 'flex-start', maxWidth: '84%', opacity: Math.min(1, a), transform: `translateY(${(1 - a) * 14}px) scale(${0.9 + 0.1 * a})`, transformOrigin: yo ? 'right bottom' : 'left bottom', background: yo ? C.azul : '#F0F2F6', color: yo ? '#fff' : C.negro, borderRadius: yo ? '20px 20px 6px 20px' : '20px 20px 20px 6px', padding: '13px 16px', fontFamily: 'Inter', fontWeight: 500, fontSize: 21, lineHeight: 1.35 }}>{children}</div>;
}
function Chips({ T, at, ops, sel, selAt }) {
  return (
    <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
      {ops.map((o, i) => {
        const a = MOTION.pop(T, at + i * 0.08, 0.3);
        if (a <= 0.001) return null;
        const on = o === sel && T >= selAt;
        return <div key={o} style={{ opacity: Math.min(1, a), transform: `scale(${0.85 + 0.15 * a})`, padding: '11px 18px', borderRadius: 999, border: `2px solid ${on ? C.negro : C.linea}`, background: on ? C.negro : '#fff', color: on ? '#fff' : C.negro, fontFamily: 'Inter', fontWeight: 700, fontSize: 20 }}>{o}</div>;
      })}
    </div>
  );
}

function Feed({ T, c }) {
  const y = -Math.max(0, T - c) * 300;
  const tonos = ['#2B2D36', '#3A2533', '#1F3340', '#3A3320', '#2A2440'];
  const notis = Array.from({ length: 18 }, (_, i) => c + 0.5 + i * BEAT);
  const nN = notis.filter(t => T >= t).length;
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#0E0F12', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, transform: `translateY(${y % 4000}px)` }}>
        {Array.from({ length: 22 }, (_, i) => (
          <div key={i} style={{ height: 360, margin: '12px 12px 0', borderRadius: 20, background: tonos[i % 5], position: 'relative' }}>
            {i % 3 === 1 && <div style={{ position: 'absolute', left: 16, top: 16, padding: '5px 11px', borderRadius: 7, background: '#F5C518', color: '#111', fontFamily: 'Inter', fontWeight: 800, fontSize: 14 }}>ANUNCIO</div>}
            <div style={{ position: 'absolute', left: 16, bottom: 18, right: 64, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ height: 11, width: '70%', borderRadius: 6, background: 'rgba(255,255,255,.35)' }}></div>
              <div style={{ height: 11, width: '45%', borderRadius: 6, background: 'rgba(255,255,255,.2)' }}></div>
            </div>
            <div style={{ position: 'absolute', right: 14, bottom: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>{[0, 1, 2].map(k => <div key={k} style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,.18)' }}></div>)}</div>
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', left: 12, right: 12, top: 60, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {notis.slice(Math.max(0, nN - 4), nN).map(t => {
          const a = MOTION.pop(T, t, 0.3);
          return (
            <div key={t} style={{ opacity: Math.min(1, a), transform: `translateY(${(1 - a) * -26}px)`, background: 'rgba(245,245,247,.95)', borderRadius: 16, padding: '11px 13px', display: 'flex', gap: 11, alignItems: 'center' }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: ['#E5484D', '#7C5CFC', '#F5A524', '#12A594'][Math.round(t * 2) % 4], flex: 'none' }}></div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ height: 9, width: '55%', borderRadius: 5, background: '#9CA3AF' }}></div>
                <div style={{ height: 9, width: '85%', borderRadius: 5, background: '#D1D5DB' }}></div>
              </div>
            </div>
          );
        })}
      </div>
      {nN > 0 && <div style={{ position: 'absolute', right: 16, top: 14, minWidth: 40, height: 40, borderRadius: 20, background: '#E5484D', color: '#fff', fontFamily: 'Inter', fontWeight: 800, fontSize: 20, display: 'grid', placeItems: 'center', padding: '0 8px', transform: `scale(${1 + 0.25 * pulso(T)})` }}>{nN * 7}</div>}
    </div>
  );
}

function Splash({ T, c }) {
  const a = MOTION.pop(T, c + 0.3, 0.6);
  return <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'grid', placeItems: 'center' }}><img src={LOGO} alt="Bro" style={{ width: 170, height: 170, transform: `scale(${a * (1 + 0.04 * pulso(T))})` }} /></div>;
}

function ChatBro({ T, c }) {
  const typed = 'Quiero organizar un partido';
  const n = Math.round(clamp((T - (c + 0.6)) / 0.9, 0, 1) * typed.length);
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <Header titulo="Bro AI" sub="Voz o texto" />
      <div style={{ flex: 1, padding: '22px 18px', display: 'flex', flexDirection: 'column', gap: 13 }}>
        <Burbuja T={T} at={c + 0.1} yo={false}>¿Qué quieres construir hoy?</Burbuja>
        {n > 0 && <div style={{ alignSelf: 'flex-end', maxWidth: '84%', background: C.azul, color: '#fff', borderRadius: '20px 20px 6px 20px', padding: '13px 16px', fontFamily: 'Inter', fontWeight: 500, fontSize: 21 }}>{typed.slice(0, n)}</div>}
        <Burbuja T={T} at={c + 2.0} yo={false}>¿Cuántos vais a jugar?</Burbuja>
        <Chips T={T} at={c + 2.5} ops={['8', '14', '21']} sel="21" selAt={c + 3.5} />
        <Burbuja T={T} at={c + 4.0} yo={false}>Fútbol 7 triangular. ¿Dónde?</Burbuja>
        <Chips T={T} at={c + 4.5} ops={['Pradillo', 'El cole', 'Otra']} sel="Pradillo" selAt={c + 5.5} />
      </div>
      <div style={{ height: 100, borderTop: `1px solid ${C.linea}`, display: 'grid', placeItems: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: C.azul, display: 'grid', placeItems: 'center', boxShadow: `0 0 0 ${6 + 10 * pulso(T)}px rgba(48,104,237,.16)` }}><img src="facew.png" alt="" style={{ width: 34, height: 34 }} /></div>
      </div>
    </div>
  );
}

function Cartel({ T, c }) {
  const a = MOTION.pop(T, c + 0.1, 0.5), l = k => MOTION.enter(T, c + 0.4 + k * 0.25, 0.35);
  const h = MOTION.pop(T, c + 3.0, 0.4), ok = MOTION.pop(T, c + 4.5, 0.4);
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#F4F5F9', display: 'flex', flexDirection: 'column' }}>
      <Header titulo="Fútbol La Colonia" sub="Comunidad · 24 Bros" />
      <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ opacity: Math.min(1, a), transform: `scale(${0.9 + 0.1 * a})`, borderRadius: 24, overflow: 'hidden', background: C.negro, color: '#fff', position: 'relative', height: 400 }}>
          <div style={{ position: 'absolute', inset: 0, opacity: .3, background: 'repeating-linear-gradient(90deg,#82B94F 0 44px,#6FA43F 44px 88px)' }}></div>
          <div style={{ position: 'absolute', left: '50%', top: '50%', width: 140, height: 140, marginLeft: -70, marginTop: -70, borderRadius: '50%', border: '3px solid rgba(255,255,255,.35)' }}></div>
          <img src={LOGO} alt="" style={{ position: 'absolute', right: 20, top: 20, width: 34, height: 34 }} />
          <div style={{ position: 'relative', padding: 24, display: 'flex', flexDirection: 'column', gap: 10, height: '100%', boxSizing: 'border-box' }}>
            <div style={{ opacity: l(0), alignSelf: 'flex-start', fontFamily: 'Inter', fontWeight: 800, fontSize: 15, letterSpacing: '.1em', background: C.naranja, padding: '6px 11px', borderRadius: 7 }}>FÚTBOL 7 · TRIANGULAR</div>
            <div style={{ opacity: l(1), fontFamily: 'Outfit', fontWeight: 800, fontSize: 44, lineHeight: .95, textTransform: 'uppercase' }}>Partido<br />La Colonia</div>
            <div style={{ flex: 1 }}></div>
            <div style={{ opacity: l(2), fontFamily: 'Outfit', fontWeight: 800, fontSize: 24, whiteSpace: 'nowrap' }}>Viernes 11 nov · 18:00</div>
            <div style={{ opacity: l(3), fontFamily: 'Inter', fontWeight: 600, fontSize: 17, whiteSpace: 'nowrap' }}>Pista Pradillo · 21 jugadores</div>
          </div>
        </div>
        <div style={{ opacity: Math.min(1, h), transform: `translateY(${(1 - h) * 20}px)`, display: 'flex', gap: 11, alignItems: 'flex-start' }}>
          <div style={{ width: 46, height: 46, borderRadius: '50%', background: C.naranja, color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'Outfit', fontWeight: 800, fontSize: 21, flex: 'none' }}>H</div>
          <div style={{ background: '#fff', border: `1px solid ${C.linea}`, borderRadius: '6px 20px 20px 20px', padding: '11px 15px' }}>
            <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 17 }}>Hugo</div>
            <div style={{ fontFamily: 'Inter', fontSize: 21, marginTop: 2 }}>¡Planazo! Ahí estaré.</div>
          </div>
        </div>
        <div style={{ opacity: Math.min(1, ok), transform: `scale(${0.8 + 0.2 * ok})`, alignSelf: 'flex-start', marginLeft: 57, padding: '8px 14px', borderRadius: 999, background: '#EEF6E6', color: '#3D6B1F', fontFamily: 'Inter', fontWeight: 700, fontSize: 18 }}>✓ 14 Bros confirmados</div>
      </div>
    </div>
  );
}

function Content({ T, c }) {
  const q1 = 'aviones de papel', q2 = 'vídeos de peleas';
  const segunda = T >= c + 2.5;
  const q = segunda ? q2 : q1, t0 = segunda ? c + 2.5 : c + 0.1;
  const n = Math.round(clamp((T - t0) / 0.6, 0, 1) * q.length);
  const vids = [['Avión «Ballista» que vuela 30 m', 'Foldable Flight', '#3B6FE0'], ['Avión fácil en 1 minuto', 'Foldable Flight', '#E07B3B'], ['El «Canard», récord mundial', 'WIRED', '#4F9E44']];
  const blk = MOTION.pop(T, c + 3.1, 0.4);
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#F4F5F9', display: 'flex', flexDirection: 'column' }}>
      <Header titulo="Content" sub="Revisado para perfil 13" />
      <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ height: 54, borderRadius: 999, background: '#fff', border: `1px solid ${C.linea}`, display: 'flex', alignItems: 'center', padding: '0 20px', fontFamily: 'Inter', fontSize: 21, color: C.negro }}>{q.slice(0, n)}<span style={{ width: 2, height: 24, background: C.azul, marginLeft: 2, opacity: pulso(T) > .3 ? 1 : 0 }}></span></div>
        {!segunda && vids.map((v, i) => {
          const a = MOTION.pop(T, c + 0.9 + i * 0.2, 0.35);
          return (
            <div key={i} style={{ opacity: Math.min(1, a), transform: `translateY(${(1 - a) * 20}px)`, display: 'flex', gap: 12, alignItems: 'center', background: '#fff', border: `1px solid ${C.linea}`, borderRadius: 16, padding: 9 }}>
              <div style={{ width: 100, height: 60, borderRadius: 10, background: v[2], display: 'grid', placeItems: 'center', flex: 'none' }}><span style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(0,0,0,.45)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 13 }}>▶</span></div>
              <div><div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 12, color: '#FF0000', letterSpacing: '.04em' }}>AVIONES DE PAPEL</div><div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 18, lineHeight: 1.25 }}>{v[0]}</div><div style={{ fontFamily: 'Inter', fontSize: 14, color: C.gris }}>{v[1]}</div></div>
            </div>
          );
        })}
        {segunda && blk > 0.001 && (
          <div style={{ opacity: Math.min(1, blk), transform: `scale(${0.9 + 0.1 * blk})`, marginTop: 8, background: C.negro, color: '#fff', borderRadius: 20, padding: '24px 20px', display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,.12)', display: 'grid', placeItems: 'center', flex: 'none', fontSize: 24 }}>⛔</div>
            <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 22, lineHeight: 1.25 }}>Este contenido no es adecuado para ti.</div>
          </div>
        )}
      </div>
    </div>
  );
}

function QR({ T, c }) {
  const a = MOTION.pop(T, c + 0.1, 0.45), t = MOTION.pop(T, c + 2.0, 0.4);
  const cel = Array.from({ length: 441 }, (_, k) => { const x = k % 21, y = Math.floor(k / 21); const ojo = (ox, oy) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7 && (x === ox || x === ox + 6 || y === oy || y === oy + 6 || (x >= ox + 2 && x <= ox + 4 && y >= oy + 2 && y <= oy + 4)); const zona = (ox, oy) => x >= ox - 1 && x <= ox + 7 && y >= oy - 1 && y <= oy + 7; if (ojo(0, 0) || ojo(14, 0) || ojo(0, 14)) return 1; if (zona(0, 0) || zona(14, 0) || zona(0, 14)) return 0; return ((Math.imul(k + 1, 2654435761) >>> 13) % 3) === 0 ? 1 : 0; });
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '110px 26px 0' }}>
      <div style={{ opacity: Math.min(1, a), transform: `scale(${0.9 + 0.1 * a})`, width: '100%', border: `1px solid ${C.linea}`, borderRadius: 26, padding: 22, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, alignSelf: 'stretch' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.azul, color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'Outfit', fontWeight: 800, fontSize: 22 }}>J</div>
          <div style={{ flex: 1 }}><div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 22 }}>Julio</div><div style={{ fontFamily: 'Inter', fontSize: 15, color: C.gris }}>Edad verificada · 13 años</div></div>
          <img src={LOGO} alt="" style={{ width: 30, height: 30 }} />
        </div>
        <div style={{ width: 252, height: 252, display: 'grid', gridTemplateColumns: 'repeat(21,1fr)', gridTemplateRows: 'repeat(21,1fr)' }}>{cel.map((v, k) => <span key={k} style={{ background: v ? '#111' : 'transparent' }}></span>)}</div>
      </div>
      <div style={{ opacity: Math.min(1, t), transform: `translateY(${(1 - t) * 24}px)`, marginTop: 22, width: '100%', background: '#EEF6E6', borderRadius: 18, padding: '16px 18px', display: 'flex', gap: 12, alignItems: 'center', boxSizing: 'border-box' }}>
        <div style={{ width: 42, height: 42, borderRadius: '50%', background: C.naranja, color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'Outfit', fontWeight: 800, fontSize: 19, flex: 'none' }}>H</div>
        <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 19, color: '#3D6B1F' }}>Hugo y tú ya sois Bros</div>
      </div>
    </div>
  );
}

function Wallet({ T, c }) {
  const a = MOTION.pop(T, c + 0.1, 0.5), act = T >= c + 2.5, k = MOTION.pop(T, c + 2.5, 0.4);
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#F4F5F9', display: 'flex', flexDirection: 'column' }}>
      <Header titulo="Wallet" sub="Tarjeta Bro · Twelve" />
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ opacity: Math.min(1, a), transform: `rotate(${(1 - a) * -6}deg) scale(${0.9 + 0.1 * a})`, height: 206, borderRadius: 22, background: 'linear-gradient(135deg,#FFFFFF 0%,#FFF1F6 55%,#F7B8CF 100%)', border: `1px solid ${C.linea}`, boxShadow: '0 20px 40px rgba(17,17,17,.12)', padding: 22, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><img src={LOGO} alt="" style={{ width: 40, height: 40 }} /><div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 22, color: '#D9467A' }}>twelve</div></div>
          <div style={{ width: 46, height: 34, borderRadius: 7, background: 'linear-gradient(135deg,#E8D7A6,#C9AE6A)', marginTop: 22 }}></div>
          <div style={{ flex: 1 }}></div>
          <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 21, letterSpacing: '.12em', color: C.negro }}>•••• •••• •••• 2713</div>
          <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 16, color: C.negro, marginTop: 6 }}>JULIO</div>
          {!act && <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,.55)' }}></div>}
        </div>
        {!act && <div style={{ alignSelf: 'center', padding: '12px 20px', borderRadius: 999, background: '#FFF3E0', color: '#B4600F', fontFamily: 'Inter', fontWeight: 700, fontSize: 16, whiteSpace: 'nowrap' }}>Pendiente de activación por mamá</div>}
        {act && <div style={{ opacity: Math.min(1, k), transform: `scale(${0.85 + 0.15 * k})`, alignSelf: 'center', padding: '12px 20px', borderRadius: 999, background: '#EEF6E6', color: '#3D6B1F', fontFamily: 'Inter', fontWeight: 700, fontSize: 16, whiteSpace: 'nowrap' }}>✓ Activada por mamá</div>}
      </div>
    </div>
  );
}

function Aura({ T, c }) {
  const dia = T >= c + 2.0, a = MOTION.enter(T, c, 0.4), m = MOTION.pop(T, c + 0.2, 0.5), d = MOTION.pop(T, c + 2.0, 0.5);
  if (!dia) return (
    <div style={{ position: 'absolute', inset: 0, opacity: a, background: 'linear-gradient(180deg,#0B1030 0%,#151B45 60%,#1E2557 100%)', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 200 }}>
      {Array.from({ length: 16 }, (_, i) => <span key={i} style={{ position: 'absolute', left: `${(i * 37) % 100}%`, top: `${8 + (i * 23) % 36}%`, width: 3, height: 3, borderRadius: '50%', background: '#fff', opacity: 0.3 + 0.5 * pulso(T + i * 0.13) }}></span>)}
      <div style={{ width: 92, height: 92, borderRadius: '50%', background: '#F2E9C9', boxShadow: 'inset -22px -10px 0 0 #151B45', transform: `scale(${m})` }}></div>
      <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 80, letterSpacing: '-.03em', marginTop: 30, lineHeight: 1 }}>22:00</div>
      <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 28, marginTop: 18 }}>Tu Bro está descansando</div>
      <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 10, padding: '11px 18px', borderRadius: 999, background: 'rgba(255,255,255,.1)', fontFamily: 'Inter', fontWeight: 600, fontSize: 18 }}><span style={{ width: 11, height: 11, borderRadius: '50%', background: C.verde }}></span>Aura registra tu descanso</div>
    </div>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,#FFF6E9 0%,#FFFFFF 60%)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '170px 26px 0' }}>
      <div style={{ width: 84, height: 84, borderRadius: '50%', background: '#F5B544', boxShadow: '0 0 0 14px rgba(245,181,68,.2)', transform: `scale(${d})` }}></div>
      <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 34, marginTop: 30 }}>Buenos días, Julio</div>
      <div style={{ opacity: Math.min(1, d), transform: `translateY(${(1 - d) * 20}px)`, marginTop: 24, width: '100%', background: '#fff', border: `1px solid ${C.linea}`, borderRadius: 22, padding: 20, boxSizing: 'border-box' }}>
        <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 14, letterSpacing: '.06em', color: C.morado }}>HAS DORMIDO</div>
        <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 44, marginTop: 4 }}>9 h 12 min</div>
        <div style={{ fontFamily: 'Inter', fontSize: 17, color: C.gris }}>De 22:18 a 07:30</div>
      </div>
    </div>
  );
}

function Laura({ T, c }) {
  const pulsa = T >= c + 1.5, ok = MOTION.pop(T, c + 1.5, 0.35);
  const seg = T >= c + 3.5;
  const perm = [['Pulsera Aura', 'Pasos y sueño. Solo tendencias.', true], ['Bro AI por voz', 'Se procesa y se borra.', true], ['Ubicación', 'Solo si llama al 112.', false], ['Rewards de marcas', 'Mamá aprueba cada uno.', true]];
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#F4F5F9', display: 'flex', flexDirection: 'column' }}>
      <Header titulo="Hola, Laura" sub="App para padres" />
      {!seg && <div style={{ padding: 18 }}>
        <div style={{ background: '#fff', border: `1px solid ${C.linea}`, borderRadius: 22, padding: 20, opacity: MOTION.enter(T, c, 0.3) }}>
          <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 14, letterSpacing: '.08em', color: C.naranja }}>LO URGENTE · HOY</div>
          <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 25, marginTop: 8 }}>Julio quiere MadFútbol</div>
          <div style={{ fontFamily: 'Inter', fontSize: 17, color: C.gris, marginTop: 4 }}>App para organizar partidos · +12</div>
          {!pulsa && <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <div style={{ flex: 1, height: 52, borderRadius: 14, background: C.azul, color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'Outfit', fontWeight: 800, fontSize: 20, transform: `scale(${T > c + 1.2 ? .94 : 1})` }}>Aprobar</div>
            <div style={{ flex: 1, height: 52, borderRadius: 14, background: '#F0F2F6', display: 'grid', placeItems: 'center', fontFamily: 'Outfit', fontWeight: 700, fontSize: 20 }}>No</div>
          </div>}
          {pulsa && <div style={{ marginTop: 14, height: 52, borderRadius: 14, background: '#EEF6E6', color: '#3D6B1F', display: 'grid', placeItems: 'center', fontFamily: 'Outfit', fontWeight: 800, fontSize: 19, transform: `scale(${0.88 + 0.12 * ok})` }}>✓ Aprobada · ya está en su Bro</div>}
        </div>
      </div>}
      {seg && <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 24, marginBottom: 2 }}>Permisos de Julio</div>
        {perm.map((p, i) => {
          const a = MOTION.pop(T, c + 3.6 + i * 0.25, 0.3), on = p[2];
          return (
            <div key={i} style={{ opacity: Math.min(1, a), transform: `translateX(${(1 - a) * 30}px)`, background: '#fff', border: `1px solid ${C.linea}`, borderRadius: 18, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ flex: 1 }}><div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 18 }}>{p[0]}</div><div style={{ fontFamily: 'Inter', fontSize: 15, color: C.gris, marginTop: 2 }}>{p[1]}</div></div>
              <div style={{ width: 52, height: 30, borderRadius: 999, background: on ? C.azul : '#D5DAE3', padding: 3, display: 'flex', justifyContent: on ? 'flex-end' : 'flex-start', boxSizing: 'border-box' }}><span style={{ width: 24, height: 24, borderRadius: '50%', background: '#fff' }}></span></div>
            </div>
          );
        })}
      </div>}
    </div>
  );
}

// ---------- Teléfono ----------
function Telefono({ T, CUES }) {
  const sube = MOTION.enter(T, 0.2, 0.9);
  const sale = MOTION.draw(T, CUES.Claim, 0.5);
  const sc = CUES, cutAt = [sc.Datos, sc.Giro, sc.BroAI, sc.Projects, sc.Content, sc.QR, sc.Wallet, sc.Aura, sc.Laura].filter(t => T >= t).pop() || 0;
  const punch = 1 + 0.035 * (1 - MOTION.enter(T, cutAt, 0.3));
  const flash = T - cutAt < 0.12 && cutAt > 0 ? 0.5 * (1 - (T - cutAt) / 0.12) : 0;
  const pantalla = T < sc.Giro ? <Feed T={T} c={sc.Hook} />
    : T < sc.BroAI ? <Splash T={T} c={sc.Giro} />
    : T < sc.Projects ? <ChatBro T={T} c={sc.BroAI} />
    : T < sc.Content ? <Cartel T={T} c={sc.Projects} />
    : T < sc.QR ? <Content T={T} c={sc.Content} />
    : T < sc.Wallet ? <QR T={T} c={sc.QR} />
    : T < sc.Aura ? <Wallet T={T} c={sc.Wallet} />
    : T < sc.Laura ? <Aura T={T} c={sc.Aura} />
    : <Laura T={T} c={sc.Laura} />;
  const S = 592 / 360;
  return (
    <div style={{ position: 'absolute', left: 230, top: 600, width: 620, height: 1290, opacity: 1 - sale, transform: `translateY(${(1 - sube) * 1400 + sale * 200}px) scale(${punch * (1 - sale * 0.1)})`, borderRadius: 96, background: '#111', padding: 14, boxSizing: 'border-box', boxShadow: '0 60px 140px rgba(0,0,0,.35)' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 82, overflow: 'hidden', background: '#000' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 360, height: 1262 / S, transform: `scale(${S})`, transformOrigin: '0 0', color: C.negro }}>{pantalla}</div>
        <div style={{ position: 'absolute', left: '50%', top: 20, width: 170, height: 48, marginLeft: -85, borderRadius: 26, background: '#000', zIndex: 5 }}></div>
        {flash > 0 && <div style={{ position: 'absolute', inset: 0, background: '#fff', opacity: flash, zIndex: 6 }}></div>}
      </div>
    </div>
  );
}

function Fondo({ T, CUES }) {
  const claro = T >= CUES.Giro ? 1 : 0;
  const p = pulso(T);
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, background: claro ? C.claro : '#0E0F12' }}></div>
      {claro ? <div style={{ position: 'absolute', left: 540 - 620, top: 1240 - 620, width: 1240, height: 1240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(48,104,237,.12), rgba(48,104,237,0) 65%)', transform: `scale(${1 + 0.04 * p})` }}></div>
        : <div style={{ position: 'absolute', left: 540 - 620, top: 1240 - 620, width: 1240, height: 1240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,72,77,.16), rgba(229,72,77,0) 65%)', transform: `scale(${1 + 0.06 * p})` }}></div>}
      <div style={{ position: 'absolute', left: 80, top: 80, display: 'flex', gap: 8, opacity: T < CUES.Claim ? 1 : 0 }}>
        {[C.azul, C.naranja, C.verde, claro ? C.negro : '#fff'].map((c, i) => <span key={i} style={{ width: 54, height: 8, borderRadius: 4, background: c, transform: `scaleX(${1 + 0.35 * p * (i === Math.floor(T / BEAT) % 4 ? 1 : 0)})`, transformOrigin: 'left' }}></span>)}
      </div>
    </>
  );
}

function Cierre({ T, CUES }) {
  const c = CUES.Claim;
  if (T < c) return null;
  const l = [MOTION.pop(T, c + 0.5, 0.4), MOTION.pop(T, c + 1.5, 0.4), MOTION.pop(T, c + 2.5, 0.45)];
  const logo = MOTION.pop(T, c + 3.5, 0.6), soon = MOTION.enter(T, c + 4.2, 0.5);
  const linea = (i, t, col) => <div style={{ opacity: Math.min(1, l[i]), transform: `translateY(${(1 - l[i]) * 30}px) scale(${0.9 + 0.1 * l[i]})`, fontFamily: 'Outfit', fontWeight: 800, fontSize: 124, lineHeight: 1.02, letterSpacing: '-.035em', color: col, textAlign: 'center' }}>{t}</div>;
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '0 60px' }}>
      {linea(0, <>Start<br />protected.</>, C.azul)}
      {linea(1, <>Grow<br />independent.</>, C.naranja)}
      {linea(2, 'Stay Bro.', C.negro)}
      <img src={LOGO} alt="Bro" style={{ width: 150, height: 150, marginTop: 60, opacity: Math.min(1, logo), transform: `scale(${logo * (1 + 0.03 * pulso(T))})` }} />
      <div style={{ opacity: soon, marginTop: 18, fontFamily: 'Inter', fontWeight: 700, fontSize: 32, letterSpacing: '.3em', color: C.gris }}>COMING SOON</div>
    </div>
  );
}

// Música propia (120 BPM, 60 s), sincronizada con la línea de tiempo.
const AUDIO = (() => {
  const Ctx = window.AudioContext || window.webkitAudioContext; if (!Ctx) return null;
  const ctx = new Ctx();
  const a = { ctx, buf: null, src: null, t0: 0, off: 0 };
  a.listo = fetch('reel-musica.wav').then(r => r.arrayBuffer()).then(b => new Promise((ok, ko) => ctx.decodeAudioData(b, ok, ko))).then(b => { a.buf = b; }).catch(() => {});
  a.pos = () => a.src ? a.off + (ctx.currentTime - a.t0) : null;
  a.parar = () => { if (a.src) { try { a.src.stop(); } catch (e) {} a.src = null; } };
  a.tocar = T => { if (!a.buf) return; a.parar(); if (ctx.state === 'suspended') ctx.resume(); const s = ctx.createBufferSource(); s.buffer = a.buf; s.connect(ctx.destination); a.t0 = ctx.currentTime; a.off = Math.max(0, T); s.start(0, a.off); a.src = s; };
  const desbloquear = () => { if (ctx.state === 'suspended') ctx.resume(); };
  ['pointerdown', 'keydown', 'touchstart'].forEach(e => window.addEventListener(e, desbloquear, { passive: true }));
  return a;
})();

// Música propia (120 BPM, 60 s), sincronizada con la línea de tiempo.
function Musica({ T, playing, on }) {
  const [listo, setListo] = React.useState(!!(AUDIO && AUDIO.buf));
  React.useEffect(() => { if (AUDIO && !AUDIO.buf) AUDIO.listo.then(() => setListo(true)); return () => AUDIO && AUDIO.parar(); }, []);
  React.useEffect(() => {
    if (!AUDIO || !listo) return;
    if (playing && on && T < 59.9) { const p = AUDIO.pos(); if (p == null || Math.abs(p - T) > 0.15) AUDIO.tocar(T); }
    else AUDIO.parar();
  }, [playing, on, listo, Math.round(T * 10)]);
  return null;
}

function Piece() {
  const { T, CUES: S, playing } = useComposition();
  const musica = (window.TWEAK_DEFAULTS || {}).musica !== false;
  React.useEffect(() => { const r = document.querySelector('[data-video-root]'); if (r) r.setAttribute('data-screen-label', `Reel inversores · ${Math.floor(T)} s`); }, [Math.floor(T)]);
  return (
    <div data-video-root="" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <Musica T={T} playing={playing} on={musica} />
      <Fondo T={T} CUES={S} />
      <Texto T={T} from={S.Hook} to={S.Datos} dark kicker="2026" kc={C.naranja} title={<>13 años.<br />Su primer móvil.</>} />
      {en(T, S.Datos, S.Giro) && <Datos T={T} c={S.Datos} />}
      <Texto T={T} from={S.Giro} to={S.BroAI} title={<>¿Y si su primer móvil le hiciera pensar?</>} />
      <Texto T={T} from={S.BroAI} to={S.Projects} kicker="BRO AI · VOZ O TEXTO" title="No decide por él." sub="Pregunta, da opciones. Julio elige." />
      <Texto T={T} from={S.Projects} to={S.Content} kicker="PROJECTS · COMMUNITIES" kc={C.verde} title="Sus ideas, hechas realidad." sub="Y compartidas con su comunidad." />
      <Texto T={T} from={S.Content} to={S.QR} kicker="CONTENT CURADO" kc="#FF0000" title="Solo lo que es para él." sub="Sin feed. Sin anuncios. Sin trampas." />
      <Texto T={T} from={S.QR} to={S.Wallet} kicker="QR DE AMIGOS" kc={C.azul} title="Amigos de verdad." sub="En persona, con edad verificada." />
      <Texto T={T} from={S.Wallet} to={S.Aura} kicker="WALLET · TWELVE" kc="#D9467A" title="Su primera tarjeta." sub="Mamá la activa." />
      <Texto T={T} from={S.Aura} to={S.Laura} kicker="AURA" kc={C.morado} title="Y por la noche, descansa." />
      <Texto T={T} from={S.Laura} to={S.Claim} kicker="APP PARA PADRES" kc={C.naranja} title="Tú decides." sub="Cada permiso, explicado. Ves tendencias, nunca sus chats." />
      <Telefono T={T} CUES={S} />
      <Cierre T={T} CUES={S} />
    </div>
  );
}

function ReelInversores() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS || { motionEditor: true });
  return (
    <>
      <CompositionStage width={1080} height={1920} scenes={window.OM_SCENES} playback={window.OM_PLAYBACK} bg="#0E0F12">
        <Piece />
      </CompositionStage>
      <TweaksPanel>
        <TweakToggle label="Motion editor" value={t.motionEditor} onChange={v => setTweak('motionEditor', v)} />
        <TweakToggle label="Música" value={t.musica !== false} onChange={v => { window.TWEAK_DEFAULTS = { ...(window.TWEAK_DEFAULTS || {}), musica: v }; setTweak('musica', v); }} />
      </TweaksPanel>
    </>
  );
}

window.ReelInversores = ReelInversores;
