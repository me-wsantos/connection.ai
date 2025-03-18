# Connection.ai - Inteligência Artificial para Recrutamento e Desenvolvimento Profissional

![capa]()

A *Connection.ai* é uma inovadora plataforma de inteligência artificial destinada a transformar a forma como analisamos currículos e preparamos candidatos para o mercado de trabalho. O projeto é guiado pelos princípios de **imparcialidade e inclusividade**, garantindo que todos os candidatos sejam avaliados de forma justa e equitativa, sem distinção com base em deficiência ou qualquer outro critério discriminatório.

Os sistemas de IA da *Connection.ai* são desenvolvidos para tratar todos de forma justa, garantindo que candidatos com qualificações, experiências e competências semelhantes recebam as mesmas recomendações e oportunidades, promovendo um ambiente de recrutamento mais acessível e justo.

## Escopo do Projeto
### **1. Análise Curricular Automatizada**
- Os usuários poderão fazer upload dos currículos, que serão analisados pela IA para identificar habilidades, experiências e lacunas de competências.
- Com base na análise, será gerado um plano de desenvolvimento individual, destacando áreas de melhoria e sugerindo cursos e certificações necessárias para impulsionar a carreira.

### **2. Simulação de Entrevista Personalizada**
- A IA criará simulados de entrevista baseados no perfil do candidato e nos requisitos da vaga desejada, proporcionando uma experiência de entrevista prática e focada.
- Feedback em tempo real será oferecido, permitindo aos candidatos ajustarem suas respostas e abordagens antes de uma entrevista real.

## Arquitetura do Projeto
A solução é composta pelos seguintes componentes principais:

### **Frontend**
- Desenvolvido em **Next.js**.
- Implementado como um **Azure Static Web App**.
- Interface para upload de currículos e visualização das análises e entrevistas.

### **Backend**
- Construído em **Python**.
- Responsável pelo processamento dos currículos e geração de entrevistas personalizadas.
- Utiliza **Azure Functions** para processamento assíncrono.

### **Serviços Utilizados**
1. **Document Intelligence (Azure AI Services)**
   - Extrai informações estruturadas dos currículos em PDF.
   - Utiliza um modelo personalizado para interpretar dados relevantes.

2. **Azure OpenAI**
   - Analisa o perfil dos candidatos e sugere cursos.
   - Gera perguntas e conduz a simulação de entrevistas.
   - Fornece feedback automatizado em tempo real.

3. **Azure Storage**
   - Armazena temporariamente os arquivos de currículo para processamento pelo Document Intelligence.

## Tecnologias Utilizadas
- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS para estilização.
- **Prisma**: ORM para banco de dados.
- **Azure Storage Blob**: Serviço de armazenamento de blobs da Azure.
- **OpenAI**: API para integração com modelos de linguagem.
- **Axios**: Cliente HTTP para fazer requisições.

## Funcionalidades
- **Análise de Currículos**: Upload de currículos em formatos PDF, PNG, JPG e JPEG para análise.
- **Chatbot**: Assistente virtual para responder perguntas sobre análise de currículos.
- **Análise de Dados**: Ferramentas para análise de folhas de pagamento e identificação de discrepâncias.
- **Perfil do Candidato**: Visualização de informações detalhadas sobre o candidato, incluindo habilidades e experiências profissionais.

## Fluxo de Funcionamento
1. **Upload do currículo** via frontend.
2. **Armazenamento temporário no Azure Storage**.
3. **Processamento pelo Document Intelligence**, que extrai os dados estruturados.
4. **Envio direto dos dados extraídos para o Azure OpenAI**, sem persistência em banco de dados.
5. **Geração de insights e feedback sobre o currículo**.
6. **Criação de simulação de entrevista personalizada** com base no perfil do candidato.
7. **Retorno das informações** para o frontend.

## Configuração do Ambiente
1. **Clonar o Repositório**
   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd connection-ai
   ```

### **Estrutura de Diretórios**
```
app/        -> Contém os componentes, contextos, dados, fontes, interfaces, serviços e utilitários da aplicação.
api/        -> Contém as rotas da API para diferentes funcionalidades como análise de dados e upload de currículos.
components/ -> Contém os componentes React utilizados na aplicação.
context/    -> Contém o contexto da aplicação para gerenciamento de estado.
data/       -> Contém recursos de análise de dados.
fonts/      -> Contém as fontes utilizadas na aplicação.
interfaces/ -> Contém as interfaces TypeScript utilizadas na aplicação.
services/   -> Contém os serviços para comunicação com APIs e outras funcionalidades.
utils/      -> Contém utilitários para manipulação de dados.
prisma/     -> Contém o esquema do banco de dados Prisma.
public/     -> Contém arquivos públicos como imagens.
```

### **Scripts Disponíveis**
- `npm run dev`: Inicia a aplicação em modo de desenvolvimento.
- `npm run build`: Cria o build de produção da aplicação.
- `npm start`: Inicia a aplicação em modo de produção.
- `npm run lint`: Executa o linter para verificar problemas no código.

## Como Executar o Projeto

### **Pré-requisitos**
- Conta na **Azure** com acesso ao **Azure OpenAI, Document Intelligence e Storage**.
- **Node.js** e **Next.js** instalados para rodar o frontend.
- **Python 3.8+** e **Azure Functions Core Tools** para o backend.

### **Configuração e Deploy**
1. Configure as variáveis de ambiente no **.env** com as credenciais do Azure.

2. Instale as dependências do backend:
   ```bash
   pip install -r requirements.txt
   ```

3. Inicie o backend localmente:
   ```bash
   func start
   ```

4. Instale e execute o frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

5. Realize o deploy para o Azure (Opcional):
   ```bash
   az webapp up --name NomeDoApp
   ```


### **Contato**
Para dúvidas ou sugestões, entre em contato com a gente.

[![LinkedIn](https://img.shields.io/badge/Linkedin_Caio-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devcaiada)

[![LinkedIn](https://img.shields.io/badge/Linkedin_Wellington-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wellington)

[![LinkedIn](https://img.shields.io/badge/Linkedin_Victor-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devcaiada)

---

## Contribuição <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" />

Sinta-se à vontade para contribuir com este repositório. Abra uma issue ou envie um pull request com suas sugestões e melhorias.

