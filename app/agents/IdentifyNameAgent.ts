import { analysisResources } from "../data/analysisResources";

export const IdentifyNameAgent = async (prompt: string) => {
  const { chatGPT4o } = analysisResources();
  const role = "Agente Onomástico";
  const llm = chatGPT4o;
  const backstory = `Você é um Agente Onomástico reconhecido por sua grande expertise nessa área.`;
  /*   const goal = `Analise a seguinte pergunta: '${prompt}' e extraia apenas o nome da pessoa. 
                    Caso não seja possível identificar o nome de uma pessoa, retorne a mensagem: "Não consegui identificar o colaborador na base de dados.", 
                    caso contrário, retorne apenas  o nome identificado.
                    Faça uma análise precisa e retorne o resultado mais confiável possível. 
                    Retorne o resultado no formato JSON sem espaços. 
                    Omita qualquer outra informação.`; */


  const goal = `Você é um especialista em análise linguística. Sua tarefa é identificar e listar nomes de pessoas em nesta frase: '${prompt}'.
              Passo 1: Analise a frase.
              Passo 2: Identifique todos os nomes próprios de pessoas na frase.
              Passo 3: Caso a frase não contenha um nome próprio, retorne uma mensagem informando que não foi possível identificar o colaborador, 
              caso contrário, retorne apenas os nomes encontrados concatenados, mantendo a ordem original de aparição na frase. 
              Exemplo de input: Frase: 'Maria José foi passear'. Exeplo de output esperado: name: Maria José.
              Retorne o resultado no formato JSON sem espaços. 
              Omita qualquer outra informação.
              `;

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