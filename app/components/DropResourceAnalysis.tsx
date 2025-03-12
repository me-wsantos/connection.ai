import { useState } from "react";
import Image from "next/image";
import useAppContext from "../context/appContext";
import { analysisResources } from "../data/analysisResources";
import { RiArrowDownSFill } from "react-icons/ri";

export const DropResourceAnalysis = () => {
  const [showItems, setShowItems] = useState(false);
  const { activeTool, setActiveTool } = useAppContext();

  return (
    <div className="dropLanguage">
      <div
        className='flex justify-between items-center bg-white rounded-full p-2 px-4 transition-colors hover:cursor-pointer hover:shadow-2xl hover:shadow-black'
        onClick={() => setShowItems(!showItems)}
      >
        <div className="flex">
          <Image
            src={`/images/${activeTool.icon}`}
            width={25}
            height={25}
            alt="Logo Portal BimBr"
            className="mr-4"
          />
          <span className="text-base text-custom-blue">{activeTool.title}</span>
        </div>
        <RiArrowDownSFill />
      </div>

      {showItems && (
        <div >
          {analysisResources.filter(data => data.title != activeTool.title).map((tool, i) => (
            <div
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() => [setActiveTool(tool), setShowItems(!showItems)]}
              className='flex justify-start items-center bg-white rounded-full p-2 px-4 mt-4 transition-colors hover:cursor-pointer hover:shadow-2xl hover:shadow-black'
            >
              <Image
                src={`/images/${tool.icon}`}
                width={25}
                height={25}
                alt="Logo"
                className="mr-4"
              />
              <span className="text-base text-custom-blue">{tool.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}