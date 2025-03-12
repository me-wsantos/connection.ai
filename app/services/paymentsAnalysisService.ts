import { IDataAnalysis } from '../interfaces';

interface IProps {
  date1: string;
  date2: string;
}

export const paymentsAnalysisService = async ({ date1, date2 }: IProps) => {

  try {
    const resp = await fetch(`/api/data-analysis/getAll`, {
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

}