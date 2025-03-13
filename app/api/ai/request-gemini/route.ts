import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { extractJsonMarkdown } from '@/app/utils/extractJsonMarkdown';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(request: NextRequest) {
  const { agentObjective, backstory, prompt } = await request.json();
  const message = backstory + " " + agentObjective + ". Elabore a resposta com no máximo 1024 caracteres. " + prompt;

  try {
    const api_key = process.env.GEMINI_API_KEY as string
    const genAI = new GoogleGenerativeAI(api_key);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        maxOutputTokens: 1024  
      }
    });
    const result = await model.generateContent(message);
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