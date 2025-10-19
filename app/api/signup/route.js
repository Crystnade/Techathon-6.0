export async function POST(request) {
  const contentType = request.headers.get('content-type') || '';
  let body;
  if (contentType.includes('application/json')) {
    body = await request.json();
  } else if (contentType.includes('application/x-www-form-urlencoded')) {
    const formData = await request.formData();
    body = Object.fromEntries(formData.entries());
  } else {
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Unsupported content type' }), {
        status: 415,
        headers: { 'content-type': 'application/json' },
      });
    }
  }

  const { name, email } = body || {};
  if (!name || !email) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Simulate persistence with an in-memory response
  return Response.json({ ok: true, user: { id: Date.now(), name, email } }, { status: 201 });
}

export async function GET() {
  return Response.json({ message: 'Use POST to create users' }, { status: 405 });
}
