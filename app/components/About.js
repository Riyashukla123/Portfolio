'use client'
import {Audiowide, Varela_Round } from 'next/font/google'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, } from 'react-icons/fa';
import { BiTargetLock } from "react-icons/bi";
import { MdArrowDownward } from "react-icons/md";
import Image from "next/image"
import prof1 from "../../public/prof1.png"
import prof2 from "../../public/prof2.png"
const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });

const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });

export default function About(){
  return (
    <div className="flex flex-col w-full h-screen justify-between  bg-[radial-gradient(100%_100%_at_50%_top,#000,#000,#7E22CE)] ">
      <div className="h-full w-full flex flex-row justify-between ">
        <div className="w-[60px] items-center border-r border-slate-800"> 
        </div>
            
        <div className="w-[calc(100%-120px)] h-full flex flex-col md:flex-row relative">
          <div className="absolute hidden md:block  md:left-1/2  md:-translate-y-0 md:top-[75px] lg:top-[8.5vw]">
            <BiTargetLock className="bg-transparent text-4xl md:text-5xl lg:text-6xl text-yellow-100"/>
          </div>
          <div className="flex justify-center w-full h-[300px] md:h-full lg:p-16 object-cover  border-b md:border-b-0 md:border-r border-slate-800">
             <div className="hidden md:flex md:justify-center ">
              <Image src={prof2} alt="profile" className=" w-full h-full object-cover"/>
             </div>
             <div className="md:hidden flex justify-center">
              <Image src={prof2} alt="profile" className=" w-full h-full object-cover"/>
             </div>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className=" p-4 md:px-16  border-b border-slate-800">
              <p className={`text-2xl md:text-3xl lg:text-[4vw] tracking-widest leading-none  ${audiowide.className} w-[150px] md:w-[200px] lg:w-[30vw]`}>Know Me More</p>
            </div>
            <div className="flex justify-center p-4 md:px-16 md:pb-7 lg:pb-9 border-b border-slate-800">
              <p className={`text-[12.3px] md:text-[10px] lg:text-[14px]  tracking-widest text-white/80 ${varelaRound.className}`}>
              Hello, my name is Riya Shukla. I am a full stack developer, I have working knowledge of MERN stack, docker, AWS, Nextjs, Tailwind CSS etc. I am currently pursuing M.tech in Computer Science from Indian Institute of Technology Jammu (IIT Jammu). <br></br>
              <br></br>Hello, my name is Riya Shukla. I am a full stack developer, I have working knowledge of MERN stack, docker, AWS, Nextjs, Tailwind CSS etc. I am currently pursuing M.tech in Computer Science from Indian Institute of Technology Jammu (IIT Jammu).
              
              </p>
            </div>
            <div className="">

              

            </div> 
          </div>
          
        </div>
              
        <div className="w-[60px] border-l border-slate-800">
          
        </div>
      </div>
      <div className="h-[60px] w-full flex flex-row justify-between border-y border-slate-800">
        <div className="w-[60px] h-full flex justify-center items-center border-r border-slate-800"> 
                  <MdArrowDownward  className="text-3xl text-slate-300" />
        </div>
              
        <div className="w-[calc(100%-120px)] h-full"></div>
              
         <div className="w-[60px] h-full border-l border-slate-800 flex justify-center items-center">
          <p className={`text-sm tracking-widest  ${audiowide.className}`}>#2</p>
        </div>
      </div>
    </div>
  );
}