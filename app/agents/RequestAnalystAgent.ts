import { analysisResources } from "../data/analysisResources";

export const RequestAnalystAgent = async (prompt: string) => {
  const { chatGPT4o } = analysisResources();
  const role = "Analista de requisições";
  const llm = chatGPT4o;
  const backstory = `Você é um analista de requisitos hábil em identificar as necessidades específicas dos usuários.`;
  const goal = `Analise a seguinte pergunta: '${prompt}' e identifique o que ele está solicitando. 
                  Caso a solicitação sugira apresentar os proventos, ou seja, rendimentos, salários, 
                  ou ganhos de um colaboardor específico, retorne provDetails = true, caso contrário retorne provDetails = false. 
                  Faça uma análise precisa e retorne o resultado mais confiável possível. 
                  Retorne o resultado no formato JSON sem espaços. 
                  Omita qualquer outra informação.`;

  const url = llm.model.toString().includes("gemini") ? "request-gemini" : "request-chatgpt";

  try {
    const resp: any = await fetch(`/api/ai/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ llm, backstory, goal })
    })

    const response = await resp.json();

    if (!response.ok) {
      return {
        ok: false,
        data: {
          status: response.status,
          message: response.message
        }
      }
    }

    const result = JSON.parse(response.data);

    return {
      ok: true,
      ...result,
    }

  } catch (error) {
    return { ok: false, error }
  }

}