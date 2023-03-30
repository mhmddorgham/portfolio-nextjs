import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <div className="w-full md:max-w-[1000px] m-auto text-center">
      <h1 className=" text-4xl p-20 text-center">Resume</h1>
      <div className="flex justify-between items-center p-4 bg-gray-300 rounded-xl">
        <div>
          <p className="text-3xl font-bold text-[#5651e6] ">Mohamed Dorgham</p>
          <p className="text-[20px]">Full-Stack Developer</p>
        </div>
        <div className="flex justify-between gap-1 text-[25px]">
          <a
            href="https://www.linkedin.com/in/mohammed-dorgham-822924241/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href="https://github.com/mhmddorgham"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub />
            </div>
          </a>
        </div>
      </div>
      <div>
        <p className="text-2xl  mt-4 p-6 font-bold">
          PROVEN LEADERSHIP | WEB DEVELOPMENT | COMPLEX PROBLEM SOLVING
        </p>
      </div>
      <div>
        <p className="text-[20px] leading-9 py-3 px-4">
          As a full stack developer with 2 years of experience, I have a proven
          track record of delivering high-quality, scalable web applications. I
          possess a strong understanding of various technologies, including
          JavaScript, ReactJs, Nodejs, ExpressJs, and MongoDB. I am skilled in
          creating responsive design, cross-browser compatibility, and
          implementing security best practices. Additionally, I am a quick
          learner, highly motivated and I always keep up to date with the latest
          industry trends and technologies.
        </p>
      </div>
      <div>
        <p className="underline text-3xl font-bold p-5">Skills</p>
        <p className="text-[20px] p-3 leading-9  ">
          <span className=" font-bold"> Technical Skills</span> | HTML | CSS |
          Javascript | React | NextJS | Nodejs | SQL | NoSQL | MongoDB |Redux |
          Tailwind| Firebase| RESTAPI
        </p>
      </div>
    </div>
  );
};

export default resume;
