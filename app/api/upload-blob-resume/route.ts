import { NextRequest, NextResponse } from "next/server";
import { BlobServiceClient } from "@azure/storage-blob";
import dotenv from 'dotenv';

dotenv.config();

export async function POST(request: NextRequest) {

  const formData = await request.formData();

    const file = formData.get("file") as File;

    const extension = file.name.slice(file.name.lastIndexOf("."));
    
    if (extension !== ".pdf") {
      return NextResponse.json({ status: "fail", message: "Formato de arquivo inválido" });
    }

  try {
    const generateRandomFileName = (extension: string) => {
      const timestamp = Date.now();
      return `resume_${timestamp}${extension}`;
    };

    // Conexão com a conta de armazenamento do Azure
    const connectionString = process.env.AZURE_STORAGE_URL || "";
    const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || "";
    const blobName = generateRandomFileName(extension);

    // Cria o cliente do serviço Blob
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

    // Obtém uma referência para o container
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // Cria um cliente para o blob
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // Lê o arquivo PDF
    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    // Faz upload do arquivo
    await blockBlobClient.upload(fileBuffer, fileBuffer.length, {
      blobHTTPHeaders: { blobContentType: "application/pdf" }
    });

    return NextResponse.json({ status: "success", fileName: blobName });
  } catch (e) {
    return NextResponse.json({ status: "fail", error: e });
  }
}
