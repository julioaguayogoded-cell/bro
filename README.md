# Bro OS — Bro AI first

## Archivos
- `Bro OS v4.dc.html` → **FRONT actual**. Inicio solo con Bro AI (voz o chat). Julio y Laura.
- `Flujos Bro AI.dc.html` → documento con los 9 flujos acordados.
- `Bro OS.dc.html` → versión v3 anterior (pantallas completas).
- `logica.js` → **BACK**. Datos, intenciones de Bro, flujos guiados y reglas.
- `api.js` → puerta entre front y back. `MODO = 'simulado'` (navegador) o `'real'` (servidor).
- `server.js` → servidor real sin dependencias: `node server.js`, y en `api.js` pon `MODO = 'real'`.

## Reglas de Bro AI (acordadas)
- Bro hace pensar y da opciones. Nunca decide por la persona.
- Bro pregunta por escrito; la persona responde con su voz o tocando una opción. Bro no habla (Tweak `vozActiva` para probarlo).
- No es un amigo ni entra en lo emocional: «Eso debes hablarlo con tu entorno más cercano» y fin.
- No enseña contenido directamente: primero pregunta qué quiere hacer Julio.

## Flujos
Julio: J1 proyecto (idea escrita por Julio → con quién → cuándo → qué hacer primero; avión = proyecto interactivo con vídeos) · J2 app (sin preguntas, queda pendiente) · J3 emocional (respuesta fija) · J4 mamá (llamar o aviso) · J5 comunidades y mensajes (solo navega).
Laura: L1 peticiones (app: sí + tiempo / no + porqué / en persona) · L2 colegio · L3 Aura (tendencia) · L4 comunidad (ficha + reviews de familias).

## Pendiente
- ¿Añadir un proyecto de avión ya creado en los datos de ejemplo?
- Sustituir los 3 vídeos de ejemplo por enlaces reales.
