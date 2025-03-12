'use client'
import { useState, createContext, useContext } from 'react';
import { redirect } from "next/navigation";
import { IDataAnalysis, IMessage, IUser, IAppContext } from '../interfaces';

const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [dataAnalysis, setDataAnalysis] = useState<IDataAnalysis[]>([])
  const [messages, setMessages] = useState<IMessage[]>([])
  const [analysisPeriod, setAnalysisPeriod] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const [session, setSession] = useState<IUser>(() => {
    if (typeof window !== 'undefined') {

      const user = localStorage.getItem("@abdi:user");

      if (user) {
        return JSON.parse(user);
      }
      return {} as IUser;
    }
  });

  const signIn = async ({ email, password }: IUser) => {
    const response: any = await fetch(`/api/auth/`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })  
    });

    const { status, user } = await response.json();

    if (status) {
      localStorage.setItem("@abdi:user", JSON.stringify({ email: user.email }));
      setSession(user);
      return { ok: true };
    } else {
      return { ok: false };
    }
  }

  const signOut = async () => {
    localStorage.removeItem("@abdi:user");
    setSession({} as IUser);
    redirect("/");
  }

  return (
    <AppContext.Provider value={{ 
      dataAnalysis, setDataAnalysis,
      messages, setMessages,
      analysisPeriod, setAnalysisPeriod,
      isLoading, setIsLoading,
      signIn, signOut,
      session
    }}>
      {children}
    </AppContext.Provider>
  );
}
const useAppContext = () => useContext(AppContext);
export default useAppContext;