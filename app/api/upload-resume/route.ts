import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

export async function POSTOLD(request: NextRequest) {

  const formData = await request.formData();

  const file = formData.get("file") as File;

  const extension = file.name.slice(file.name.lastIndexOf("."));

  if (extension !== ".pdf") {
    return NextResponse.json({ status: "fail", message: "Formato de arquivo inválido" });
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdfBase64 = Buffer.from(arrayBuffer).toString('base64');

    const resume = {
      file_type: "pdf",
      cv: pdfBase64
    }

    const serviceUrl = process.env.SERVICE_URL || ""
    const result = await axios.post(serviceUrl, resume, {
      headers: { 'Content-Type': 'application/json' }
    });

    return NextResponse.json({ status: "success", data: result.data });

  } catch (e) {
    console.log(e)
    return NextResponse.json({ status: "fail", error: e });
  }
}

export async function POST() {

  const result = {
    data: {
      name: {
        value: "Arthur Rodrigues Alves",
        confidence: 0.571
      },
      endereco: {
        value: "Rua 23 de Novembro, 100, Apartamento 1025 | Vila Progresso (Zona Leste) | São Paulo | SP",
        confidence: 0.437
      },
      resumo: {
        value: "PERFIL E OBJETIVOS PROFISSIONAIS\nEstudante do 4º semestre de Engenharia de Produção, com experiência na área de produção em empresa de grande porte. Inglês fluente e conhecimentos intermediários de Espanhol. Busco oportunidade de trabalho na minha área de formação, preferencialmente em atividades voltadas para desenvolvimento de novos produtos.",
        confidence: 0.259
      },
      experiencia: {
        value: "EXPERIÊNCIA PROFISSIONAL\nEstagiário 03/2017 - 06/2018\nABC Brasil S/A Responsável pelos apontamentos de produção e realização de procedimentos de controle de qualidade.",
        confidence: 0.271
      },
      skills: {
        value: "HABILIDADES\nIdioma - Inglês\nNegociação\nSoftware - Solidworks\nSoftware - Autocad\nVOLUNTARIADO",
        confidence: 0.468
      },
      educacao: {
        value: "EDUCAÇÃO\nEngenharia de Produção 03/2017 - Atual\nUniversidade Estadual de Campinas - Unicamp Cursando o 4º semestre.\nCURSOS\nEletrônica Industrial 08/2017 - 12/2017\nServiço Nacional da Indústria - Senai",
        confidence: 0.273
      },
      telefone: {
        value: "20\n/ (11) 9999-0000",
        confidence: 0.204
      },
      email: {
        value: "| contato@meucurriculo.pro",
        confidence: 0.694
      },
      model_id: "connectIAocr"
    }
  }
  return NextResponse.json({ status: "success", data: result.data });
}
