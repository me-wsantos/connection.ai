"use client"
import { useEffect, useState } from "react";
import useAppContext from "./context/appContext";
import { TopHeader, Navbar, ChatContainer } from "./components";
import { paymentsAnalysisService } from "./services/paymentsAnalysisService";
import { getInitialDate, getEndDate, getUSDateFormat } from "./services/dateService";
import { WaitButton } from "./components";
import { IMessage } from "./interfaces";
import { redirect } from "next/navigation";

export default function Home() {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [msgAlert, setMsgAlert] = useState({
    status: false, message: ""
  })

  const { session } = useAppContext();

  useEffect(() => {
    if (!Object.keys(session || {}).length) {
      redirect("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const {
    setDataAnalysis,
    setMessages,
    setAnalysisPeriod,
    isLoading,
    setIsLoading
  } = useAppContext()

  useEffect(() => {
    const today = new Date();
    const initialDate = getInitialDate(today);
    const endDate = getEndDate(today);
    setDate1(initialDate);
    setDate2(endDate);
  }, []);

  const handlePost = async () => {
    setIsLoading(true);
    setAnalysisPeriod(new Date(date1).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) + ' a ' + new Date(date2).toLocaleDateString('pt-BR', { timeZone: 'UTC' }));
    setMessages((prev: IMessage[]) => [...prev, {
      text: `Analisando os dados...`,
      isGpt: true,
    }]);

    handleClearAlerts();

    const params = {
      date1: getUSDateFormat(new Date(date1)),
      date2: getUSDateFormat(new Date(date2)),
    };

    if (!!date1.toString().length && !!date2.length) {
      const { data } = await paymentsAnalysisService(params);
      setDataAnalysis(data);

      setMessages((prev: IMessage[]) => [...prev, {
        text: '',
        isGpt: true,
        isAnalysis: true
      }]);

      setIsLoading(false)
    } else {
      setMsgAlert({ ...msgAlert, status: true, message: "Preencha o período para o qual você deseja consultar" })
    }
  }

  const handleClearAlerts = () => {
    setMsgAlert({ status: false, message: "" })
  }

  /* if (!Object.keys(session || {}).length) {
    return("");
  } else { */
    return (
      <>
        <TopHeader />
        <Navbar />
        <main className="h-[calc(100vh-130px)] w-full flex flex-row mt-20 bg-[#F5F5F5]">
          <section className="mx-3 sm:mx-20 flex flex-col w-full p-5 rounded-3xl">
            <div className="flex flex-row h-full">
              <div className="flex flex-col flex-auto h-full p-1">
                <ChatContainer />
              </div>
            </div>
          </section>
  
          <div className="flex flex-col justify-between items-end max-w-7xl mx-auto">
            <nav className="hidden sm:flex flex-col ml-5 w-[400px] h-[calc(100vh-100px)] bg-custom-blue px-12 pt-4">
  
              <h4 className="font-bold text-lg text-white mt-4 text-center lg:text-xl">
                Unidade de Auditoria e Ouvidoria
              </h4>
  
              <div className="border-white border-[1px] mb-4" />
              <span className="w-full text-center text-white">Análise de folha</span>
  
              {msgAlert.status && (
                <div className="bg-yellow-100 p-1 text-sm text-center text-amber-600 rounded-md mt-3">{msgAlert.message}</div>
              )
              }
  
              <div className="flex flex-col items-start justify-between mt-12">
                <label htmlFor="date1" className="text-white">Data inicial:</label>
                <input
                  type="date"
                  placeholder="Username"
                  name="date1"
                  value={date1}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => [setDate1(e.target.value), handleClearAlerts()]}
                />
              </div>
  
              <div className="flex flex-col items-start justify-between mt-12">
                <label htmlFor="date2" className="text-white">Data final:</label>
                <input
                  type="date"
                  placeholder="Username"
                  name="date2"
                  value={date2}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => [setDate2(e.target.value), handleClearAlerts()]}
                />
              </div>
  
              <button
                type="button"
                className={`flex justify-center items-center rounded-full py-3 mt-28 bg-white  hover:shadow-2xl hover:shadow-black ${isLoading ? 'opacity-60 text-gray-400 ' : 'text-custom-blue'}`}
                onClick={() => handlePost()}
                disabled={isLoading}
              >
                {isLoading ? `Analisando` : "Analisar"}
                {isLoading && <WaitButton />}
  
              </button>
            </nav>
          </div>
        </main>
      </>
    );
  /* } */  
}
