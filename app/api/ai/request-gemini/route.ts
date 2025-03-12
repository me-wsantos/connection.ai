import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { extractJsonMarkdown } from '@/app/utils/extractJsonMarkdown';

export async function POST(request: NextRequest) {
  const { agent  } = await request.json();
  console.log("agentGemini", agent)
  const prompt = agent.backstory + " " + agent.goal;

  try {
    const api_key = process.env.GEMINI_API_KEY as string
    const genAI = new GoogleGenerativeAI(api_key);
    const model = genAI.getGenerativeModel({ model: agent.llm.model });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = extractJsonMarkdown(response.text());

    return NextResponse.json({ ok: true, data: text });

  } catch (error: any) {
    return NextResponse.json({ 
      ok: false,
      status: error.status,
      message: error.statusText
    });
  }
}