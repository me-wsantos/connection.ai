import { AzureOpenAI } from "openai";
const dotenv = require("dotenv");  
  
dotenv.config();  
  
async function main() {  
  // You will need to set these environment variables or edit the following values
  const endpoint = process.env["AZURE_OPENAI_ENDPOINT"] || "https://openaihack001.openai.azure.com/";  
  const apiKey = process.env["AZURE_OPENAI_API_KEY"] || "<REPLACE_WITH_YOUR_KEY_VALUE_HERE>";  
  const apiVersion = "2024-05-01-preview";  
  const deployment = "gpt-4o"; // This must match your deployment name
  
  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });  
  
  const result = await client.chat.completions.create({  
    messages: [  
                  { role: "system", content: "Você é um coach de carreira especializado em inclusão e um recrutador experiente, com foco em apoiar pessoas com deficiência na obtenção de oportunidades de emprego. Sua tarefa é oferecer análises detalhadas de currículos e responder às perguntas dos usuários." },
                  { role: "user", content: "Olá, na sua opinião quais os principais critérios para avaliação de candidatos a vagas de emprego que possuem algum tipo de deficiência?" },
                  { role: "assistant", content: "A avaliação de candidatos com deficiência a vagas de emprego deve ser feita com os mesmos valores fundamentais aplicados a qualquer outro candidato, isto é, baseada nas competências, experiências e no alinhamento de perfil às exigências da posição e à cultura organizacional. Além disso, é importante ter uma abordagem inclusiva e garantir um processo seletivo equitativo, com adaptações necessárias para assegurar a participação plena dessas pessoas. Aqui estão os principais critérios para avaliação de candidatos com deficiência:\n\n---\n\n### 1. **Alinhamento às Competências e Habilidades da Vaga**\n   - Avaliar de forma clara como as competências do candidato (técnicas e comportamentais) correspondem aos requisitos da vaga, sem supor que uma deficiência é, por si só, impeditiva de realizar tarefas.\n   - Focar no \"como\" o candidato pode exercer suas funções, levando em consideração as tecnologias ou adaptações disponíveis.\n   - Considerar as habilidades adquiridas na vida acadêmica, profissional ou até mesmo em experiências fora do mercado formal, como voluntariado e projetos.\n\n### 2. **Adequação Cultural**\n   - Avaliar se o candidato compartilha os valores e objetivos fundamentais da organização, criando um ambiente de trabalho harmonioso.\n   - Promover equipes diversas e inclusivas beneficia toda a organização, então veja a chegada do candidato como uma oportunidade de enriquecer a cultura interna.\n\n### 3. **Conformidade com Requisitos Técnicos**\n   - Certifique-se de que todos os requisitos técnicos estabelecidos para a vaga estejam claros. Por exemplo, quais ferramentas ou softwares precisam ser utilizados e se há compatibilidade com tecnologias acessíveis.\n   - Considere também o potencial de aprendizado do candidato. Às vezes, as empresas podem investir na formação de pessoas com o perfil certo.\n\n### 4. **Barreiras Removíveis**\n   - Em vez de eliminar alguém por não conseguir realizar uma tarefa numa condição \"padrão\", avalie se existe a possibilidade de desenvolvimento de uma solução simples, como um software adaptativo, uma rampa ou horário flexível.\n   - Adote o conceito de **desenho universal**, que consiste em criar ambientes e processos acessíveis para o maior número de pessoas, com ou sem deficiência.\n\n### 5. **Aproveitamento de Experiências Diversificadas**\n   - Pessoas com deficiência frequentemente desenvolvem habilidades únicas, como resiliência, criatividade e capacidade de resolução de problemas, por conta das barreiras que enfrentam em suas vidas.\n   - Considere como essas capacidades podem trazer valor para a posição ou equipe.\n\n### 6. **Potencial de Desenvolvimento**\n   - Avalie a abertura do candidato para aprender e crescer na posição. Muitos candidatos com deficiência são sub-representados em experiências formais de trabalho, então o potencial pode ser mais relevante que a experiência prévia.\n\n### 7. **Avaliando de Forma Justa**\n   - Use métricas objetivas para evitar vieses inconscientes. Isso inclui usar a mesma tabela de critérios de avaliação para todos os candidatos.\n   - Crie um processo que avalie **o que importa para a função**, mesmo que precise fazer adaptações. Por exemplo, não se prenda a habilidades específicas (como dirigir) se aquilo pode ser delegado ou reestruturado.\n\n### 8. **Adaptações no Processo Seletivo**\n   - Permita que o candidato demonstre todas as suas competências por meio de um processo ajustado. Por exemplo, se um teste prático puder ser dificultado pela deficiência, certifique-se de que adaptações estejam disponíveis (tempo adicional, recursos de tecnologia assistiva, intérprete de Libras, etc.).\n   - Transforme entrevistas presenciais em remotas, se necessário. Ofereça alternativas para comunicação.\n\n### 9. **Envolvimento do Candidato**\n   - Pergunte ao candidato sobre suas próprias sugestões para lidar com os desafios da posição, mostrando que" }  
    ], 
    max_tokens: 200,  
    temperature: 0.7,  
    top_p: 0.95,  
    frequency_penalty: 0,  
    presence_penalty: 0,  
    stop: null
  });  
  
  console.log(JSON.stringify(result, null, 2));  
}  
  
main().catch((err) => {  
  console.error("The sample encountered an error:", err);  
});  
  
module.exports = { main };