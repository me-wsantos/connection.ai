import { NextRequest, NextResponse } from 'next/server';
<<<<<<< HEAD
//import dotenv from 'dotenv';
import axios from 'axios';

//dotenv.config();
=======
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
>>>>>>> teste

export async function POST(request: NextRequest) {
  const { agentObjective, prompt } = await request.json();

  const apiKey = process.env.DEEPSEEK_API_KEY;

  try {

    const data = {
      model: 'deepseek-chat',
      messages: [
        { role: "system", content: agentObjective },
        { role: "user", content: prompt }
      ],
      frequency_penalty: 0,
      max_tokens: 2048,
      presence_penalty: 0,
      stop: null,
      stream: false,
      temperature: 1,
      top_p: 1,
    };

    const response = await axios.post('https://api.deepseek.com/chat/completions', data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    return NextResponse.json({ ok: true, data: response.data });

  } catch (error) {
    return NextResponse.json({ ok: false, error });
  }
}