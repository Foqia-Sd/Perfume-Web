import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const SYSTEM_PROMPT =
  'You are a friendly and helpful AI assistant for a luxury perfume brand named Redolence Arabia. You provide information about perfumes, bestsellers, ingredients, shipping, offers, and customer service.';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }
    if (!GEMINI_API_KEY) {
      console.error('Gemini API key is missing.');
      return NextResponse.json({ error: 'Gemini API key not configured.' }, { status: 500 });
    }

    // Compose the user message with the system prompt as context
    const body = {
      contents: [
        {
          role: 'user',
          parts: [{ text: `${SYSTEM_PROMPT}\n\n${message}` }],
        },
      ],
    };

    const geminiRes = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );

    let data;
    try {
      data = await geminiRes.json();
    } catch (jsonErr) {
      const text = await geminiRes.text();
      console.error('Gemini API non-JSON response:', text);
      return NextResponse.json({ error: 'Gemini API returned non-JSON response', details: text }, { status: 500 });
    }

    if (!geminiRes.ok || !data || !data.candidates) {
      console.error('Gemini API error:', data);
      return NextResponse.json({ error: 'Gemini API error', details: data }, { status: 500 });
    }

    const reply = data.candidates[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';
    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error('Internal server error:', err);
    return NextResponse.json({ error: 'Internal server error', details: err?.message }, { status: 500 });
  }
} 