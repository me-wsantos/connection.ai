import { NextRequest, NextResponse } from 'next/server'
import { Prisma, PrismaClient  } from '@prisma/client';

export async function POST(request: NextRequest) {
  const { date1, date2 } = await request.json();
  const prisma = new PrismaClient();

  const query = `SELECT DOF.NOME AS nome, 
                 REPLACE(FOLHA.PROVENTO, ',', '.') AS provento,
                 REPLACE(FOLHA.DESCONTO, ',', '.') AS desconto,
                 REPLACE(FOLHA.LIQUIDO, ',', '.') AS liquido,
                 FORMAT(FOLHA.DATAPAGAMENTO, 'dd/MM/yyyy') AS dtpagamento,
                 'salario'=(SELECT TOP 1 REPLACE(SAL.SALARIO, ',', '.') FROM DO_FUNCIONARIOSALARIOS AS SAL WHERE SAL.FUNCIONARIO = DOF.HANDLE AND (FOLHA.DATAPAGAMENTO <= SAL.FIM OR SAL.FIM IS NULL) ORDER BY SAL.INICIO),
                 'diferenca'=(REPLACE(FOLHA.PROVENTO - (SELECT TOP 1 SAL.SALARIO FROM DO_FUNCIONARIOSALARIOS AS SAL WHERE SAL.FUNCIONARIO = DOF.HANDLE AND (FOLHA.DATAPAGAMENTO <= SAL.FIM OR SAL.FIM IS NULL) ORDER BY SAL.INICIO),',','.')),
                 FOLHA.HANDLE as folha
                 FROM DO_FUNCIONARIOS AS DOF
                 INNER JOIN FP_FUNCIONARIOFOLHASCALCULADAS AS FOLHA ON FOLHA.FUNCIONARIO = DOF.HANDLE
                 WHERE FOLHA.DATAPAGAMENTO BETWEEN '${date1}' AND '${date2}' AND FOLHA.TIPOFOLHA = 11 AND FOLHA.PROVENTO > 0
                 ORDER BY DOF.NOME;`

  const response = await prisma.$queryRaw`${Prisma.raw(query)}`;
  return NextResponse.json(response);
}