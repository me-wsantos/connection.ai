import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { extractJsonMarkdown } from '@/app/utils/extractJsonMarkdown';

export async function POST(request: NextRequest) {
  const { llm, backstory, goal } = await request.json();
  const prompt = backstory + " " + goal;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  try {
   const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: prompt
        },
        {
          role: "user",
          content: ""
        }
      ],
      model: llm.model,
      temperature: 0,
      max_tokens: 2500,
    });

    const response = completion.choices[0].message.content;
    const text = extractJsonMarkdown(response as string)

    return NextResponse.json({ ok: true, data: text });

  } catch (error) {
    return NextResponse.json({ ok: false, error });
  }
}