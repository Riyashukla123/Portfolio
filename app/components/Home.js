'use client'
import {Audiowide, Varela_Round } from 'next/font/google';
import { MdArrowDownward } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { GoNorthStar } from "react-icons/go";

const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });

export default function Home(){
  return(
    <div className="z-20 bg-transparent flex flex-col justify-between w-full h-full  border-y border-slate-800 ">
    
      <div className="flex flex-row justify-between w-full h-full">
        <div className="w-[60px] border-r border-slate-800 "></div>
        
        <div className="w-[calc(100%-120px)] h-full flex flex-col relative">
          <div className="hidden md:block absolute right-50 top-[calc(25vh-30px)] -translate-y-1/2 ">
            <GoNorthStar className="bg-transparent text-5xl lg:text-7xl text-yellow-100"/>
          </div>
          <div className="w-full h-full px-8 md:px-16 flex items-center justify-center md:justify-start border-b border-slate-800">
            <p className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest ${audiowide.className}`}> DEVELOPMENT</p>
          </div>
          <div className="w-full h-full px-8 md:px-16 flex items-center justify-center md:justify-start border-b border-slate-800">
            <p className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest ${audiowide.className} `}>EXPERTISE</p>
          </div>
          <div className="w-full h-full items-center px-8 md:px-16 border-b border-slate-800 flex flex-row justify-end">
            <div className=" w-full md:w-3/4 lg:w-1/2">
              <p className={`text-[15px] sm:text-lg md:text-xl tracking-widest text-justify text-white/80 ${varelaRound.className}`}> My portfolio demonstrates a diverse range of projects showcasing my full stack development skills from developing responsive web applications to deploying scalable solutions on the cloud.</p>
            </div>
          </div>
          <div className="w-full" />
          <div className="w-full items-center h-full px-8 md:px-16 flex flex-row justify-center md:justify-end">
            <p className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl  tracking-widest  ${audiowide.className}`}>CREATIVITY</p>
          </div>
        </div>
        
        <div className="w-[60px] border-l border-slate-800 "></div>
      </div>
      
      <div className="h-[60px] w-full flex flex-row justify-between items-center border-t  border-slate-800">
        <div className="w-[60px] h-full flex justify-center items-center border-r border-slate-800"> 
          <MdArrowDownward  className="text-3xl text-slate-300" />
        </div>
        
        <div className="w-[calc(100%-120px)] flex flex-row px-16 justify-between">
          <div className="flex  gap-6">
            <div className="flex justify-center items-center ">
              <a href="https://www.facebook.com/riya.shukla.340997/" target="_blank" rel="noopener noreferrer"> <FaFacebookF className="w-6 h-6  flex items-center justify-center   text-white  hover:text-slate-500 cursor-pointer"/></a>
            </div>
            <div className="flex justify-center items-center ">
              <a href="https://www.instagram.com/riya_shukla_0803/" target="_blank" rel="noopener noreferrer"> <FaInstagram className="w-6 h-6 flex items-center justify-center   text-white  hover:text-slate-500 cursor-pointer"/></a>
            </div>
            <div className="flex justify-center items-center ">
              <a href="https://x.com/shukla_riy18436" target="blank" rel="noopener noreferrer"><FaTwitter className="w-6 h-6 flex items-center justify-center   text-white  hover:text-slate-500 cursor-pointer"/></a>
            </div>
            <div className="flex justify-center items-center ">
              <a href="https://github.com/Riyashukla123" target="blank" rel="noopener noreferrer"><FaGithub className="w-6 h-6 flex items-center justify-center   text-white  hover:text-slate-500 cursor-pointer"/></a>
            </div>
            <div className="flex justify-center items-center ">
              <a href="https://leetcode.com/u/riya70077/" target="blank" rel="noopener noreferrer"><SiLeetcode className="w-6 h-6 flex items-center justify-center   text-white  hover:text-slate-500 cursor-pointer"/></a>
            </div>
          </div>
          

          <div>
            <p className="hidden sm:text-sm sm:block lg:text-lg text-purple-700 ">MY NAME IS RIYA SHUKLA</p>
          </div>
          
        </div>
        
        <div className="w-[60px] h-full border-l border-slate-800 flex justify-center items-center">
          <p className={`text-sm tracking-widest  ${audiowide.className}`}>#1</p>
        </div>
      </div>
      
    </div>
  );
}