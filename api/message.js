export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const message = String(req.body?.message || '').trim();
  if (!message) return res.status(400).json({ error: 'Message is required' });
  return res.status(200).json({
    reply: `Server received: ${message}`,
    receivedAt: new Date().toISOString()
  });
}
