import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("MidoDorgham.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "MidoDorgham.pdf";
        alink.click();
      });
    });
  };
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#5651e5]">Mido</span>
          </h1>

          <h1 className="py-2 text-gray-700">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 text-[20px]">
            <a
              href="https://www.linkedin.com/in/mohammed-dorgham-822924241/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/mhmddorgham"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <button
              onClick={onButtonClick}
              type="button"
              className="rounded-full text-black shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <BsFillPersonLinesFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
