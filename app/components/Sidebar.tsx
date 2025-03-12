"use client"

import { useState } from "react"
import { BsCardChecklist } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa"
import { HiOutlineHome } from "react-icons/hi2"
import { ImUsers } from "react-icons/im"
import { MdOutlineUploadFile } from "react-icons/md"

const icons = [
  {
    icon: <HiOutlineHome size={28} className="mr-2 text-white mb-2" />,
    text: "Home"
  },
  {
    icon: <MdOutlineUploadFile size={28} className="mr-2 text-white mb-2" />,
    text: "Upload currículo"
  },
  {
    icon: <FaRegUser size={26} className="mr-2 text-white mb-2" />,
    text: "Perfil do candidato"
  },
  {
    icon: <BsCardChecklist size={26} className="mr-2 text-white mb-2" />,
    text: "Plano de carreira"
  },
  {
    icon: <ImUsers size={26} className="mr-2 text-white mb-2" />,
    text: "Questioário de entrevista"
  }
]

export function Sidebar() {
  const [active, setActive] = useState(0);

  const renderMenu = (icon: React.ReactNode, text: string, index: number) => {

    return (
      <div 
        key={text}
        className={`h-20 px-8 flex items-center justify-start mt-0 ${active === index ? "bg-blue-500" : "hover:bg-custom-blue-light"} cursor-pointer`}
        onClick={() => setActive(index)}
      >
        {icon}
        <span className="text-white">{text}</span>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col justify-between items-end max-w-7xl mx-auto">
      <nav className="hidden sm:flex flex-col ml-0 w-[400px] h-full bg-custom-blue px-0 pt-4">

        <h4 className="font-bold text-lg text-white mt-4 mb-48  text-center lg:text-xl">
          Connection.ai
        </h4>

        {icons.map((icon, index) => renderMenu(icon.icon, icon.text, index))}

      </nav>
    </div>
  )
}