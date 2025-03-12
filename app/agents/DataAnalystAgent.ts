import { analysisResources } from "../data/analysisResources";

export const DataAnalystAgent= (prompt: string, data: string) => {

  const { gemini15flash } = analysisResources();

  const role = "Analista de dados financeiro";
  const llm = gemini15flash;
  const backstory = `Você é um analista financeiro especializado na análise de folhas de pagamento.`;
  const goal = `Sua tarefa é analisar os registros de pagamento e identificar discrepâncias significativas. 
            Passo 1: Analisar os dados que voce receberá no formato JSON.
            Passo 2: Certifique-se de que cada registro contém os campos "nome", "provento", "desconto", "liquido", "dtpagamento", "salario" e "diferenca".
            Passo 3: Analise a seguinte pergunta do usuário: ${prompt}.
            Passo 4: Responda a pergunta do usuário, considerando os seguintes dados no formato JSON: ${JSON.stringify(data)}
            Lembre-se de ser preciso na sua análise, garantindo que a resposta contenha relevância para o usuário e se aproxime ao máximo da resposta que ele busca.
            Na resposta aplique formataçõe com tags markdown para facilitar a leitura.
            Destaque o nome dos colaboradores com o estilo negrito e de cor rgb(51,56,99).
            Apresente os valores no formato 00.000,00
            Seja cordial na resposta detalhando brevemente a sua análise.
            Omita na sua resposta: 
            - informações sobre a forma como você recebeu os dados;
            - título da resosta;
            - pergunta do usuário.
            `;

    return { role, backstory, goal, llm };

}
/* export const DataAnalystAgent = async() => {

  const role = `Você é um analista financeiro especializado na análise de folhas de pagamento. Sua tarefa é analisar os registros de pagamento e identificar discrepâncias significativas.
            Passo 1: Receber os dados de pagamento no formato JSON. Certifique-se de que cada registro contém os campos "nome", "provento", "desconto", "liquido", "dtpagamento", "salario" e "diferenca".
            Passo 2: Analise a seguinte pergunta do usuário: ${prompt}.
            Passo 3: Responda a pergunta do usuário, considerando os dados os seguintes dados no formato JSON: ${JSON.stringify(dataAnalysis)}
            Lembre-se de ser preciso na sua análise, garantindo que a resposta contenha relevância para o usuário e se aproxime ao máximo da resposta que ele busca.
            Na resposta aplique formataçõe com tags markdown para facilitar a leitura.
            Destaque o nome dos colaboradores com o estilo negrito e de cor rgb(51,56,99).
            Apresente os valores no formato 00.000,00
            Seja cordial na resposta detalhando brevemente a sua análise.
            Omita na sua resposta: 
            - informações sobre a forma como você recebeu os dados;
            - título da resosta;
            - pergunta do usuário.
            `

  try {
    const resp = await fetch(`/api/getDataAnalysis`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date1, date2 })
    })

    const data = await resp.json();

    if (!!data.length) {
      data.forEach((value:IDataAnalysis) => {
        value.variacao = Math.round(((Number(value.provento) - Number(value.salario)) / Number(value.salario)) * 100);
      })
    }

    return { data };

  } catch (error) {
    return { ok: false, error }
  }
} */