'use client'

import { FaReact,FaNodeJs,FaDocker,FaAws } from "react-icons/fa";
import { PiFileHtml } from "react-icons/pi";
import { RiNextjsLine,RiTailwindCssFill  } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { MdArrowDownward, MdCss } from "react-icons/md";
import {Audiowide, Varela_Round } from 'next/font/google';
const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });

export default function Skills(){
  return(
    <div className="flex flex-col w-full h-screen min-h-screen snap-start bg-gradient-to-b from-purple-700 via-purple-200 to-white">
      <div className="flex flex-row w-full h-[calc(100%-60px)] justify-between">
        <div className="h-full w-[60px] border-r [border-image:linear-gradient(to_bottom,#9810fa,#cad5e2,#cad5e2)_1_100%] "></div>
        <div className="h-full w-[calc(100%-120px)] flex-flex-col ">
          <div className="flex flex-col max-h-1/3 sm:max-h-1/2 sm:flex-row justify-between sm:gap-4 w-full sm:h-1/2 border-b border-slate-300">
            <div className="flex flex-col justify-center border-b sm:border-b-0 border-purple-500 pl-4 sm:pl-10 md:pl-16 sm:h-full w-full sm:w-1/2 ">
              <p className={` inline py-4 px-4 sm:px-0  text-[35px]  md:text-4xl lg:text-6xl tracking-widest leading-none  ${audiowide.className} w-full md:w-[200px] xl:w-[300px]`}>My Skills</p>
            </div>
            <div className="flex flex-col justify-center items-end pr-4 sm:pr-10 md:pr-16 h-full ojbect-contain w-full sm:w-1/2 ">
              <p className={` object-contain px-4 py-4 sm:px-0 text-justify text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] inline  tracking-widest text-white/80 ${varelaRound.className}`}>Being a FullStack development aspirant, I have always been intruiged by JavaScript as how one language has completely evolved the Fullstack. I have learnt several techstack like ReactJS, NodeJS, ExpressJs, NextJs, HTML, CSS, tailwindCSS, AWS, Docker etc.<br/> <br/><span className="hidden sm:inline">I am also fluent in C.S. core as Operating System, Computer Networks, DataBase, Data Structures etc. I have 1655 global ranking in Leetcode Coding Platform.</span> </p>
            </div>
          </div>
          <div className="flex flex-row  h-2/3 sm:flex-col w-full sm:h-1/2 text-purple-700 relative">
            <div className="absolute sm:hidden flex w-[1px] h-full top-0 right-1/2 bg-slate-300"></div>
            <div className="w-1/2 sm:w-full h-full sm:h-1/2 flex flex-col sm:flex-row sm:border-b border-slate-300 ">
              <div className="w-full h-1/5 sm:w-1/5 sm:h-full flex justify-center items-center border-b sm:border-b-0 sm:border-r text-4xl hover:text-5xl sm:text-6xl sm:hover:text-7xl hover:text-purple-500 transition-all duration-500 border-slate-300"><PiFileHtml/></div>
              <div className="w-full h-1/5 sm:w-1/5 sm:h-full flex justify-center items-center border-b sm:border-b-0 sm:border-r text-4xl hover:text-5xl sm:text-6xl sm:hover:text-7xl hover:text-purple-500 transition-all duration-500 border-slate-300"><MdCss/></div>
              <div className="w-full h-1/5 sm:w-1/5 sm:h-full flex justify-center items-center border-b sm:border-b-0 sm:border-r text-4xl hover:text-5xl sm:text-6xl sm:hover:text-7xl hover:text-purple-500 transition-all duration-500 border-slate-300"><DiJavascript/></div>
              <div className="w-full h-1/5 sm:w-1/5 sm:h-full flex justify-center items-center border-b sm:border-b-0 sm:border-r text-4xl hover:text-5xl sm:text-6xl sm:hover:text-7xl hover:text-purple-500 transition-all duration-500 border-slate-300"><FaReact/></div>
              <div className="w-full h-1/5 sm:w-1/5 sm:h-full flex justify-center items-center text-4xl hover:text-5xl sm:text-6xl sm:hover:text-7xl hover:text-purple-500 transition-all duration-500 "><FaNodeJs/></div>
            </div>
            <div className="w-1/2 h-full sm:w-full sm:h-1/2 flex flex-col sm:flex-row ">
              <div className="w-full h-1/5 sm:w-1/5 sm:h-full flex justify-center items-center border-b sm:border-b-0 sm:border-r text-4xl hover:text-5xl sm:text-6xl sm:hover:text-7xl hover:text-purple-500 transition-all duration-500 border-slate-300"><RiTailwindCssFill/></div>
              <div className="w-full h-1/5 sm:w-1/5 sm:h-full flex justify-center items-center border-b sm:border-b-0 sm:border-r text-4xl hover:text-5xl sm:text-6xl sm:hover:text-7xl hover:text-purple-500 transition-all duration-500 border-slate-300"><RiNextjsLine/></div>
              <div className="w-full h-1/5 sm:w-1/5 sm:h-full flex justify-center items-center border-b sm:border-b-0 sm:border-r text-4xl hover:text-5xl sm:text-6xl sm:hover:text-7xl hover:text-purple-500 transition-all duration-500 border-slate-300"><SiExpress/></div>
              <div className="w-full h-1/5 sm:w-1/5 sm:h-full flex justify-center items-center border-b sm:border-b-0 sm:border-r text-4xl hover:text-5xl sm:text-6xl sm:hover:text-7xl hover:text-purple-500 transition-all duration-500 border-slate-300"><FaDocker/></div>
              <div className="w-full h-1/5 sm:w-1/5 sm:h-full flex justify-center items-center text-4xl hover:text-5xl sm:text-6xl sm:hover:text-7xl hover:text-purple-500 transition-all duration-500 "><FaAws/></div>
            </div>
          </div>
        </div>
        <div className="h-full w-[60px] border-l [border-image:linear-gradient(to_bottom,#9810fa,#cad5e2,#cad5e2)_1_100%] "></div>
      </div>
      <div className="flex flex-row w-full h-[60px] justify-between border-y border-slate-300">
        <div className="w-[60px] h-full flex justify-center items-center border-r border-slate-300"> 
          <MdArrowDownward  className="text-3xl text-purple-700" />
        </div>
        <div className="w-[calc(100%-120px)] h-full flex items-center"> 
          <p className={`text-sm px-16 tracking-widest text-purple-700 ${audiowide.className}`}>Talk with me</p>
        </div>
        <div className="w-[60px] h-full border-l border-slate-300 flex justify-center items-center">
          <p className={`text-sm tracking-widest text-purple-700  ${audiowide.className}`}> #4
          </p>
        </div>
      
      </div>   
    </div>
  );
}