"use client"

import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import useAppContext from "../context/appContext";

export const UploadResume = () => {
  const [fileUpload, setFileUpload] = useState<any>();
  const [isError, setIsError] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [message, setMessage] = useState({ type: "default", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { setModuleActive } = useAppContext();

  const handleChangeFile = (e: any) => {
    setIsUploaded(false);

    if (e.target.files[0]) {
      const extension = e.target.files[0].name.slice(e.target.files[0].name.lastIndexOf("."));

      if (extension != ".pdf") {
        setMessage({ ...message, type: "error", description: "Invalid file format! Please select a PDF file." });
        setIsError(false);
        return
      } else {
        setIsError(true)
        setFileUpload(e.target.files[0])
      }
    }
  }

  async function uploadFile(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evt.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", fileUpload);

    const response = await fetch("/api/upload-resume", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.status === "success") {
      setMessage({ ...message, type: "success", description: "Resume uploaded successfully." });
      setIsUploaded(true);
    }

    setIsLoading(false);
  }

  const handleMessage = () => {
    let rawHTML = "";

    if (!isError && message.description.length > 0) {
      rawHTML = `<span>${message.description}</span>`;
      return <div className="p-4 bg-red-400 text-white text-center rounded" dangerouslySetInnerHTML={{ __html: rawHTML }} />;
    } else if (isUploaded) {
      rawHTML = `<span>${message.description}</span>`
      return <div className="p-4 bg-green-500 text-white text-center rounded" dangerouslySetInnerHTML={{ __html: rawHTML }} />;
    } else {
      return ""
    }
  }

  return (
    <div className="flex flex-col flex-shrink-0 rounded-2xl h-[calc(100vh-150px)] p-4 bg-blue-50">
      <div className="upload-section ">
      <div className="h-auto flex flex-col p-0 w-100">
            <section className="h-full flex flex-col justify-start">
              <div className="h-full p-8 flex flex-col justify-center items-center">
                <span
                  className="w-full mb-12 text-custom-blue-100 text-xl leading-normal font-bold text-center md:text-2xl">
                  Resume Upload
                </span>

                { !isUploaded && 
                  <>
                    <span>
                      Upload a resume in PDF format
                    </span>

                    <label
                      htmlFor="arquivo_upload"
                      className="bg-cyan-600 w-80 hover:bg-cyan-700 text-white py-2 px-4 mt-12 rounded text-center cursor-pointer"
                    >
                        {fileUpload != undefined ? "Change file" : "Select file"}
                    </label>


                    <div className="h-32 flex flex-col justify-center items-center">
                      {isError &&
                        <>
                          <FaFilePdf size={50} color={"#E74C3C"} className="mb-6" />
                          <span>{fileUpload != undefined ? fileUpload.name : "No file selected"}</span>
                        </>
                      }
                    </div>
                  </>
                }

                {handleMessage()}

                { isUploaded && 
                  <div 
                    className="w-auto py-0 px-4 mt-8  bg-blue-500 text-white text-center rounded hover:cursor-pointer"
                    onClick={() => setModuleActive(2)}
                  >
                    Show Profile
                  </div>
                }

                <input 
                  type="file" 
                  className="invisible" 
                  id="arquivo_upload" 
                  name="file" 
                  onChange={(e) => handleChangeFile(e)}
                />

                {(isError && !isUploaded) && (
                    <button
                      type="submit"
                      onClick={uploadFile}
                      className="bg-blue-500 w-80 hover:bg-blue-700 text-white pt-2 pb-1 rounded-full"
                    >
                      {isLoading ? "Please wait..." : "Upload file"}
                    </button>
                )
                }
              </div>
            </section>
          </div>
      </div>
    </div>
  )
}
