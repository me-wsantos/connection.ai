"use client"
import Image from "next/image";
import headerImg from "../../public/images/sm-abdi.svg";
import useAppContext from "../context/appContext";
import { AiOutlineLogout } from "react-icons/ai";

export function Navbar() {
  const { signOut, session } = useAppContext();

  /* const btnLogout = () => {
    if (Object.keys(session || {}).length) {
      return (
        <button
          className="p-4 h-4 flex items-center bg-custom-blue text-white rounded-md hover:bg-blue-600"
          onClick={() => signOut()}
        >
          <AiOutlineLogout className="mr-1" /> Sair</button>
      );
    }
  } */

  return (
    <>
      <section className="invisible w-screen fixed bg-[#F5F5F5] z-50 md:visible md:h-[8rem] lg:h-[5.6rem]">
        <div className="w-full flex flex-col items-center justify-between mx-auto">
          <div className="w-screen h-auto px-4 pt-4 flex justify-between items-center max-w-[110rem] mx-auto xl:px-6">
            <Image
              src={headerImg}
              alt="Logo ABDI"
              width={110}
              height={110}
            />

              {/* { btnLogout() } */}

          </div>
        </div>

        <div className="mt-3 flex w-full md:mt-5 lg:mt-4">
          <div className="bg-blue-700 h-0 p-[1px] w-[20%]"></div>
          <div className="bg-yellow-200 h-0 p-[1px] w-[16%]"></div>
          <div className="bg-green-700 h-0 p-[1px] w-[6%]"></div>
          <div className="bg-red-600 h-0 p-[1px] w-[10%]"></div>
          <div className="bg-blue-200 h-0 p-[1px] w-[6%]"></div>
          <div className="bg-blue-700 h-0 p-[1px] w-[6%]"></div>
          <div className="bg-green-700 h-0 p-[1px] w-[16%]"></div>
          <div className="bg-red-600 h-0 p-[1px] w-[6%]"></div>
          <div className="bg-yellow-200 h-0 p-[1px] w-[12%]"></div>
          <div className="bg-blue-200 h-0 p-[1px] w-[6%]"></div>
          <div className="bg-blue-700 h-0 p-[1px] w-[20%]"></div>
          <div className="bg-yellow-200 h-0 p-[1px] w-[16%]"></div>
          <div className="bg-green-700 h-0 p-[1px] w-[6%]"></div>
          <div className="bg-red-600 h-0 p-[1px] w-[10%]"></div>
          <div className="bg-blue-200 h-0 p-[1px] w-[6%]"></div>
          <div className="bg-blue-700 h-0 p-[1px] w-[6%]"></div>
          <div className="bg-green-700 h-0 p-[1px] w-[16%]"></div>
          <div className="bg-red-600 h-0 p-[1px] w-[6%]"></div>
          <div className="bg-yellow-200 h-0 p-[1px] w-[12%]"></div>
          <div className="bg-blue-200 h-0 p-[1px] w-[6%]"></div>
        </div>
      </section>
    </>
  )
}