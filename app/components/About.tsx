"use client"
import { HiOutlineInformationCircle } from "react-icons/hi";
import Image from "next/image";
import { RobotoRegular, RobotoBold } from "../fonts";

export const About = () => {
  return (
    <div className="flex flex-col flex-shrink-0 rounded-2xl h-[calc(100vh-150px)] p-4">
      <div className="upload-section ">
        <div className="h-auto flex flex-col p-0 w-100">
          <section className="h-full flex flex-col justify-start">
            <div className="invisible h-full pb-0 flex justify-start items-end border-b-2 lg:visible">
              <HiOutlineInformationCircle size={35} color={"#000"} className="mr-4 mb-0" />
              <div
                className="w-full p-0 text-custom-blue-100 text-xl items-end tracking-wide font-bold text-start md:text-2xl">
                About
              </div>
            </div>
            <div className="flex mt-8">
              <div className="w-full p-0 flex flex-col justify-center items-center lg-pr-12">
                <Image src={"/images/logo.png"} width={120} height={120} alt="App logo" />
                <h2 className={`${RobotoBold} text-3xl font-extrabold text-custom-blue tracking-wide`}>Connection.ai</h2>
                <h2 className={`${RobotoRegular} text-base text-center mt-4 text-custom-blue tracking-wide`}>Revolutionizing Recruitment with AI</h2>
                {/* <div className="text-base text-justify mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
