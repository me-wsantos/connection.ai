"use client"
import { useState, createContext, useContext } from "react";
import { IDataAnalysis, IMessage, IAppContext } from "../interfaces";

const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [dataAnalysis, setDataAnalysis] = useState<IDataAnalysis[]>([]);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [analysisPeriod, setAnalysisPeriod] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [moduleActive, setModuleActive] = useState(0);
  const [profile, setProfile] = useState({});
  const [isUploaded, setIsUploaded] = useState(false);
  const [fileUpload, setFileUpload] = useState();
  const [careerPlan, setCareerPlan] = useState();

  return (
    <AppContext.Provider value={{
      dataAnalysis, setDataAnalysis,
      messages, setMessages,
      analysisPeriod, setAnalysisPeriod,
      isLoading, setIsLoading,
      moduleActive, setModuleActive,
      profile, setProfile,
      isUploaded, setIsUploaded,
      fileUpload, setFileUpload,
      careerPlan, setCareerPlan
    }}>
      {children}
    </AppContext.Provider>
  );
}
const useAppContext = () => useContext(AppContext);
export default useAppContext;