import { NextRequest, NextResponse } from 'next/server'
import { Prisma, PrismaClient  } from '@prisma/client';

export async function POST(request: NextRequest) {
  const { idFolha } = await request.json();
  const prisma = new PrismaClient();

  const query = `SELECT FFV.FOLHAFUNCIONARIO, FFV.VERBA, FFV.VALOR, VB.NOME
                FROM FP_FUNCIONARIOFOLHAVERBAS AS FFV 
                INNER JOIN FP_VERBAS AS VB ON FFV.VERBA = VB.HANDLE
                WHERE FFV.FOLHAFUNCIONARIO = ${idFolha} And VB.TIPOVERBA = 1;`

  const response = await prisma.$queryRaw`${Prisma.raw(query)}`;
  return NextResponse.json(response);
}