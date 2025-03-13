import { NextRequest, NextResponse } from 'next/server';
import { AzureOpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(request: NextRequest) {
  const { llm, agentObjective, prompt } = await request.json();

  const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
  const apiKey = process.env.AZURE_OPENAI_API_KEY;
  const apiVersion = "2024-05-01-preview";  
  const deployment = llm;

  try {
    
    const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });
    
    const result = await client.chat.completions.create({
      model: deployment,  
      messages: [  
                    { role: "system", content: agentObjective },
                    { role: "user", content: prompt }
      ], 
      max_tokens: 200,  
      temperature: 0.7,  
      top_p: 0.95,  
      frequency_penalty: 0,  
      presence_penalty: 0,  
      stop: null
    });  
    
    // Extract the content from the response
    const content = result.choices[0].message.content;
    return NextResponse.json({ ok: true, data: content });

  } catch (error) {
    return NextResponse.json({ ok: false, error });
  }
}