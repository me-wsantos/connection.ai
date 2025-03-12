export const analysisResources = () => {
  const gemini15flash =  {
    icon: "gemini-icon.webp",
    title: "Gemini 1.5-flash",
    description: "Consulta com Gemini 1.5-flash",
    model: "gemini-1.5-flash",
  }

  const gemini15flash8b =  {
    icon: "gemini-icon.webp",
    title: "Gemini 1.5-flash-8b",
    description: "Consulta com Gemini 1.5-flash-8b",
    model: "gemini-1.5-flash-8b",
  }

  const chatGPT4o = {
    icon: "chatgpt-icon.webp",
    title: "ChatGPT 4o",
    description: "Consulta com ChatGPT 4o",
    model: "gpt-4o",
  }

  return { 
    gemini15flash,
    gemini15flash8b,
    chatGPT4o
  }
}