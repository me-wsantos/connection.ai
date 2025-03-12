"use client"
import { RequestAnalystAgent, IdentifyNameAgent } from "../agents";
//import { proventosService } from "./";

export const chatService = async ({ prompt }: any) => {
  console.log("prompt", prompt);
  const response = await RequestAnalystAgent(prompt);
  console.log("response", response);

  const { provDetails } = response;

  if (provDetails) {
    const response = await IdentifyNameAgent(prompt);
    console.log("name", response);
  
    const { name } = response;

    /* if (!name) {
      return {
        ok: false,
        data: { message: "Não foi possível identificar o colaborador"  }
      }
    } */
    //const proventos = await proventosService("62142");
    return {
      ok: true,
      data: { name  }
    }
  } else {
    console.log("Solicitacao de informações gerais");
    return {
      ok: true,
      data: { proventos: [] }
    }
  }


}
/* export const chatService = async ({ prompt, dataAnalysis, llm }: any) => {
  try {
    const resp = await fetch(`/api/ai/requestAnalysis`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt, dataAnalysis, llm })
    })

    if (!resp.ok) throw new Error('Não foi possível realizar a requisição!!!')

    const data = await resp.json()

    return {
      ok: true,
      ...data,
    }

  } catch (error) {
    return { ok: false, error }
  }
} */