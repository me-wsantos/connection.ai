import { NextRequest, NextResponse } from 'next/server'
import { Prisma, PrismaClient  } from '@prisma/client';

export async function POST(request: NextRequest) {
  const { date1, date2, name } = await request.json();
  const prisma = new PrismaClient();

  const query = `SELECT TOP 1 DOF.NOME AS nome, FOLHA.HANDLE as folha
                FROM DO_FUNCIONARIOS AS DOF
                INNER JOIN FP_FUNCIONARIOFOLHASCALCULADAS AS FOLHA ON FOLHA.FUNCIONARIO = DOF.HANDLE
                WHERE FOLHA.DATAPAGAMENTO BETWEEN '${date1}' AND '${date2}' AND FOLHA.TIPOFOLHA = 11 AND FOLHA.PROVENTO > 0 AND DOF.NOME like '%${name}%';`

  const response = await prisma.$queryRaw`${Prisma.raw(query)}`;
  return NextResponse.json(response);
}