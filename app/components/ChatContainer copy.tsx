"use client"
import useAppContext from "../context/appContext";
import { GptMessage, MyMessage, TextMessageBox } from "./"
import { chatService } from "../services";
import { IMessage } from "../interfaces";
import { UploadResume } from "./";
import { TypingLoader } from "./loaders/TypingLoader";
import { useEffect } from "react";

export const ChatContainerOLD = () => {
  const { messages, setMessages, isLoading, setIsLoading, isUploaded, chatMessages, setChatMessages, profile } = useAppContext();

  /* useEffect(() => {
    // Sincroniza messages com chatMessages
    setMessages(chatMessages);
  }, [chatMessages]); */

  const handlePost = async (text: string) => {
    setIsLoading(true)
    // Adiciona a mensagem do usuário imediatamente
    const newUserMessage = { role: "user", content: text };
    setChatMessages((prev: any) => [...prev, newUserMessage]);

    try {
      const { data } = await chatService({ chat: [...chatMessages, newUserMessage], perfil: profile });

      if (data && data.status !== "fail") {
        const newAssistantMessage = {
          role: data.response.role,
          content: data.response.content
        };

        setChatMessages((prev: any) => [...prev, newAssistantMessage]);
      } else {
        const errorMessage = {
          role: "assistant",
          content: "Sorry, it was not possible to answer your question. Please try again."
        };
        setChatMessages((prev: any) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Error in chat service:", error);
      const errorMessage = {
        role: "assistant",
        content: "An error occurred. Please try again later."
      };  
      setChatMessages((prev: any) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }

    /* console.log({ messages: chatMessages, profile })

    const { data } = await chatService({ chat: chatMessages, perfil: profile })

    console.log("data", data)

    setMessages((prev: IMessage[]) => [...prev, { role: "user", content: text }])

    if (data == undefined) {
      setMessages((prev: IMessage[]) => [...prev, {
        role: "assistant",
        content: "Sorry, it was not possible to answer your question. Please try again.",
      }])
    } else {
      if (data.status == "fail") return

      // Adiciona a mensagem do usuário ao array chatMessages
      const newAssistantMessage = {
        role: data.response.role,
        content: data.response.content
      };

      setChatMessages((prevMessages: any) => [...prevMessages, newAssistantMessage]);

      setMessages((prev: IMessage[]) => [...prev, { role: "assistant", content: data.data }])
    }
    setIsLoading(false) */
  }

  return (
    <div className="flex flex-col flex-shrink-0 rounded-2xl bg-white h-[calc(100vh-150px)] p-4 border">
      <div>
        <UploadResume />
      </div>
      <div className="chat-messages">
        <div className="flex flex-col">
          
          {isUploaded && (
            <GptMessage text={`I have received your resume. How can I help you?`} />
          )
          }

          {chatMessages.map((message: IMessage, index: number) => (
            message.role === "assistant"
              ? <GptMessage key={index} text={message.content} />
              : <MyMessage key={index} text={message.content} />
          ))}

          {
            isLoading && (
              <TypingLoader className="fade-in" />
            )
          }
        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder={isUploaded ? "Type your message..." : "Upload resume"}
        disableCorrections
        resumeReady={isUploaded}
      />
    </div>
  )
}
