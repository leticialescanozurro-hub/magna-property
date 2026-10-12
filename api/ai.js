// IA del admin. Función de Vercel: POST /api/ai
//   { detalles }                       -> genera la descripción de un aviso
//   { traducir: { titulo, descripcion } } -> traduce título y descripción al inglés
// Necesita la variable de entorno ANTHROPIC_API_KEY en Vercel.
async function claude(apiKey, prompt) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 2000, messages: [{ role: 'user', content: prompt }] }),
  });
  const data = await r.json();
  if (!r.ok) throw new Error((data.error && data.error.message) || 'Error de la IA');
  return data.content && data.content[0] ? data.content[0].text : '';
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Falta configurar ANTHROPIC_API_KEY en Vercel' });
  const body = req.body || {};

  try {
    if (body.traducir) {
      const { titulo = '', descripcion = '' } = body.traducir;
      const prompt = 'Traducí al inglés este aviso inmobiliario de Argentina, para compradores e inversores extranjeros. '
        + 'Tono profesional y cálido. Mantené sin traducir los nombres propios de barrios, calles y edificios. '
        + 'Explicá brevemente términos locales cuando haga falta (por ejemplo "expensas" = building fees, "PH" = townhouse (PH), "IPC"/"ICL" = índices de ajuste). '
        + 'Usá comas de miles y punto decimal en los números (USD 63,000). No agregues comentarios ni formato markdown. '
        + 'Respondé SOLO con un JSON válido: {"titulo": "...", "descripcion": "..."}\n\n'
        + 'TÍTULO:\n' + titulo + '\n\nDESCRIPCIÓN:\n' + descripcion;
      const texto = await claude(apiKey, prompt);
      const m = texto.match(/\{[\s\S]*\}/);
      if (!m) throw new Error('La IA no devolvió una traducción válida');
      const j = JSON.parse(m[0]);
      return res.status(200).json({ titulo: j.titulo || '', descripcion: j.descripcion || '' });
    }

    const detalles = body.detalles;
    if (!detalles) return res.status(400).json({ error: 'Falta detalles' });
    const texto = await claude(apiKey,
      'Sos un experto en marketing inmobiliario argentino. Escribí una descripción atractiva y profesional para este aviso inmobiliario. Usá un tono cálido y persuasivo, en español argentino. No más de 4 párrafos. No uses asteriscos ni formato markdown. Estos son los datos:\n\n' + detalles);
    return res.status(200).json({ texto });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
