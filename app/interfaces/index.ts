export interface IAnalysisResource {
  icon: string;
  title: string;
  description: string;
  model: string;
}

export interface IDataAnalysis {
  nome: string;
  provento: string;
  desconto: string;
  liquido: string;
  datapagamento: string;
  dtpagamento: string;
  salario: string;
  diferenca: string;
  folha: string;
  variacao: number;
}

export interface IMessage {
  text: string;
  isGpt: boolean;
  isAnalysis?: boolean;
}

export interface IUser {
  email: string;
  password: string;
}

export interface IAppContext {
  dataAnalysis: IDataAnalysis[]
  setDataAnalysis(value: IDataAnalysis[]):void
  messages: IMessage[],
  setMessages(value: any):void
  analysisPeriod: string
  setAnalysisPeriod(value: string): void
  isLoading: boolean
  setIsLoading(value:boolean):void
}

export interface IAgents {
  role: string;
  backstory: string;
  goal: string;
  llm: string;
}