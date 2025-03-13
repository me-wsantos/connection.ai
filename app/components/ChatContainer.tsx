"use client"
import useAppContext from "../context/appContext";
import { GptMessage, MyMessage, GptMessageAnalysis, TypingLoader, TextMessageBox } from "./"
import { chatService } from "../services";
import { IMessage } from "../interfaces";

export const ChatContainer = () => {
  const { messages, setMessages, isLoading, setIsLoading } = useAppContext();

  const handlePost = async (text: string) => {
    setIsLoading(true)
    setMessages((prev: IMessage[]) => [...prev, { text, isGpt: false }])

    const { data } = await chatService({ prompt: text })

    console.log("resposonse", data)

    if (data == undefined) {
      setMessages((prev: IMessage[]) => [...prev, {
        text: "Desculpe, não foi possível responder a sua pergunta. Tente novamente.",
        isGpt: true
      }])
    } else {
      setMessages((prev: IMessage[]) => [...prev, { text: data, isGpt: true }])
    }
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col flex-shrink-0 rounded-2xl bg-white h-[calc(100vh-150px)] p-4 border">
      <div className="chat-messages">
        <div className="flex flex-col">
          <GptMessage text={`Olá, faça o upload de um currículo para que eu possa analisar.`} />
          {/* <GptMessage text={`Use o campo abaixo para me enviar comandos e fazer perguntas".`} /> */}

          {
            messages.map((message, index) => (
              message.isGpt
                ? (message.isAnalysis ? <GptMessageAnalysis key={index} /> : <GptMessage key={index} text={message.text} />)
                : (<MyMessage key={index} text={message.text} />)
            ))
          }

          {
            isLoading && (
              <TypingLoader className="fade-in" />
            )
          }
        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Digite sua mensagem..."
        disableCorrections
      />
    </div>
  )
}
