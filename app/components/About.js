'use client'
import {Audiowide, Varela_Round } from 'next/font/google'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, } from 'react-icons/fa';
import { BiTargetLock } from "react-icons/bi";
import { MdArrowDownward } from "react-icons/md";
import Image from "next/image"
import prof2 from "../../public/prof4.png"
const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });

const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });

export default function About(){
  return (
    <div className="flex flex-col w-full h-screen min-h-screen snap-start justify-between  bg-[radial-gradient(100%_100%_at_50%_top,#000,#000,#8200db)] ">
      <div className="h-full w-full flex flex-row justify-between overflow-hidden">
        <div className="w-[60px] items-center border-r  [border-image:linear-gradient(to_bottom,#1d293d,#1d293d,#9810fa)_1_100%]"> 
        </div>
            
        <div className="w-[calc(100%-120px)] h-full flex flex-col md:flex-row relative">
          <div className="absolute hidden md:block  md:left-1/2  md:-translate-y-0 md:top-[75px] lg:top-[8.5vw]">
            <BiTargetLock className="bg-transparent text-4xl md:text-5xl lg:text-6xl text-yellow-100"/>
          </div>
          <div className="flex justify-center w-full h-[300px] md:h-full lg:p-16 object-cover  border-b md:border-b-0 md:border-r [border-image:linear-gradient(to_bottom,#1d293d,#1d293d,#9810fa)_1_100%]">
             <div className="flex justify-center relative w-full">
              <div className='hidden md:block absolute bottom-0 left-0 w-full h-2/3 bg-linear-20 from-[#7E22CE]  to-70% lg:to-60% to-transparent'/>
              <Image src={prof2} alt="profile" className=" w-full h-full object-cover object-[0% 30%] md:object-center"/>
             </div>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className=" p-4 md:px-16  border-b border-slate-800">
              <p className={`text-2xl md:text-3xl lg:text-[4vw] tracking-widest leading-none  ${audiowide.className} w-[150px] md:w-[200px] lg:w-[30vw]`}>Know Me More</p>
            </div>
            <div className="flex justify-center p-4 md:px-16 md:pb-7 lg:pb-9 border-b border-purple-700">
              <p className={`text-[12.3px] md:text-[10px] lg:text-[14px]  tracking-widest text-white/80 ${varelaRound.className}`}>
              Hello, I am Riya Shukla, a dedicated full stack developer with expertise in the MERN stack, Docker, AWS, Next.js, and Tailwind CSS. Currently pursuing my M.Tech in Computer Science at the Indian Institute of Technology Jammu, I am passionate about building scalable, user-centric web applications that solve real-world problems.<br></br> <br></br>
               My diverse technical background, combined with a strong foundation in core computer science principles, enables me to deliver innovative solutions with precision and efficiency.
              
              </p>
            </div>
            <div className="">

              

            </div> 
          </div>
          
        </div>
              
        <div className="w-[60px] border-l [border-image:linear-gradient(to_bottom,#1d293d,#1d293d,#9810fa)_1_100%]">
          
        </div>
      </div>
      <div className="h-[60px] w-full flex flex-row justify-between border-y border-purple-600">
        <div className="w-[60px] h-full flex justify-center items-center border-r border-purple-600"> 
                  <MdArrowDownward  className="text-3xl text-slate-300" />
        </div>
              
        <div className="w-[calc(100%-120px)] h-full flex items-center"> 
          <p className={`text-sm px-16 tracking-widest  ${audiowide.className}`}>Projects</p>
        </div>
              
         <div className="w-[60px] h-full border-l border-purple-600 flex justify-center items-center">
          <p className={`text-sm tracking-widest  ${audiowide.className}`}>#2</p>
        </div>
      </div>
    </div>
  );
}