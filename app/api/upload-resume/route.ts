import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { extractJsonMarkdown } from "@/app/utils/extractJsonMarkdown";
import dotenv from 'dotenv';

dotenv.config();

export async function POST(request: NextRequest) {

  const formData = await request.formData();
  const file = formData.get("file") as File;
  const extension = file.name.slice(file.name.lastIndexOf("."));

  const validExtensions = [".pdf", ".png", ".jpg", ".jpeg"];
  if (!validExtensions.includes(extension)) {
    return NextResponse.json({ status: "fail", message: "Formato de arquivo inválido" });
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdfBase64 = Buffer.from(arrayBuffer).toString('base64');

    const resume = {
      file_type: "pdf",
      cv: pdfBase64
    }

    const serviceUrl = process.env.SERVICE_EXTRACT_URL || ""
    const result = await axios.post(serviceUrl, resume, {
      headers: { 'Content-Type': 'application/json' }
    });

    const extractedText = extractJsonMarkdown(result.data);
    return NextResponse.json({ status: "success", data: extractedText });

  } catch (e) {
    console.log(e)
    return NextResponse.json({ status: "fail", error: e });
  }
}