'use Client'
import {Audiowide, Varela_Round } from 'next/font/google'
import Image from "next/image"
import { MdArrowDownward, MdMail } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaPhoneAlt,FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { SiTelegram } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });

export default function Contact(){
  return(
   <div className="flex flex-col w-full h-screen snap-start min-h-screen justify-between  bg-[radial-gradient(80%_70%_at_center,#000000_50%,#8200db)]">
    <div className="w-full h-[calc(100%-60px)] flex flex-row">
      <div className="w-[60px] items-center border-r [border-image:linear-gradient(to_bottom,#9810fa,#0f172b,#9810fa)_1_100%]"></div>
      <div className="h-full w-[calc(100%-120px)] hidden sm:flex flex-row">
        <div className="h-full w-1/2 border-r [border-image:linear-gradient(to_bottom,#9810fa,#0f172b,#9810fa)_1_100%] flex flex-col justify-between">
          <div className="flex flex-row w-full justify-between items-center p-4 md:px-8 md:py-10 border-b [border-image:linear-gradient(to_right,#9810fa,#0f172b,#0f172b)_100%_1%]">
            <div className=" hidden lg:flex justify-center items-center object-contain ">
              <Image src="/logo.png" alt="logo" width={120} height={120}/>
            </div>
            <div className={`flex items-center justify-center md:justify-start  sm:text-4xl tracking-widest leading-none text-white  ${audiowide.className}`}><p className="inline">Riya Shukla</p></div>
          </div>
          <div className="flex items-center justify-center w-full h-full ">
            <p className={`text-[14px]  tracking-widest text-justify  ${varelaRound.className} w-3/4 text-white`}>
              My aim is to revolutionize the way people experience development. My mission is to transform concepts into visually captivating design that inspire, engage and tell your story. I belive in blending logic with the latest technology to deliver solutions that exceed expectations.
            </p>

          </div>
          <div className="flex flex-row w-full border-t  [border-image:linear-gradient(to_right,#9810fa,#0f172b,#0f172b)_100%_1%] text-4xl  lg:text-5xl">
            <div className=" w-full flex py-5 lg:py-10 justify-center items-center border-r border-purple-600 ">
              <a href="https://www.instagram.com/riya_shukla_0803/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="bg-transparent text-yellow-200 hover:text-white"/>
              </a>
            </div>
            <div className=" w-full flex py-5 lg:py-10 justify-center items-center border-r border-purple-600">
              <a href="https://www.facebook.com/riya.shukla.340997/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="bg-transparent  text-yellow-200 hover:text-white"/>
              </a>
            </div>
            <div className=" w-full flex py-5 lg:py-10 justify-center items-center border-r border-purple-600">
              <a href="https://x.com/shukla_riy18436" target="blank" rel="noopener noreferrer">
              <FaTwitter className="bg-transparent text-yellow-200 hover:text-white"/>
              </a>
            </div>
            <div className=" w-full flex py-5 lg:py-10 justify-center items-center border-r border-purple-600">
              <a href="https://github.com/Riyashukla123" target="blank" rel="noopener noreferrer">
              <FaGithub className="bg-transparent text-yellow-200 hover:text-white"/>
              </a>
            </div>
            <div className=" w-full flex py-5 lg:py-10 justify-center items-center ">
              <a href="https://leetcode.com/u/riya70077/" target="blank" rel="noopener noreferrer" className="">
              <SiLeetcode className="bg-transparent text-yellow-200 hover:text-white"/>
              </a>
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col justify-between">
          <div className="h-1/2 w-full border-b border-slate-900 flex flex-row px-8 py-10 justify-center items-center">
            <div className="h-full w-1/2 flex flex-col gap-2 justify-center items-center">
              <div className="flex justify-center  w-full pb-4">
                <p className={`inline text-[14px] md:text-[17px] lg:text-[21px] tracking-widest leading-none text-white  ${audiowide.className}`}>Services</p>
              </div>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
             </div>
             <div className="h-full w-1/2 flex flex-col gap-2 justify-center items-center">
              <div className=" w-full pb-4 flex justify-center ">
                <p className={`inline text-[14px] md:text-[17px] lg:text-[21px] tracking-widest leading-none text-white  ${audiowide.className}`}>Resources</p>
              </div>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
             </div>
          </div>
          <div className="h-1/2 w-full flex flex-row px-8 py-10 justify-center items-center">
            <div className="h-full w-1/2 flex flex-col gap-2 justify-center items-center">
              <div className="flex justify-center  w-full pb-4">
                <p className={`inline text-[14px] md:text-[17px] lg:text-[21px] tracking-widest leading-none text-white  ${audiowide.className}`}>More From Us</p>
              </div>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
             </div>
             <div className="h-full w-1/2 flex flex-col gap-2 justify-center items-center">
              <div className=" w-full pb-4 flex justify-center ">
                <p className={`inline text-[14px] md:text-[17px] lg:text-[21px] tracking-widest leading-none text-white  ${audiowide.className}`}>Company</p>
              </div>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              
             </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[calc(100%-120px)] flex sm:hidden flex-col justify-between">
        <div className="flex w-full flex-col gap-5 p-5 border-b border-purple-600">
          <div className={`flex tracking-widest leading-none text-white  ${audiowide.className}`} >
           Riya Shukla
          </div>
          <div className="flex w-full">
            <p className={`text-[12px] tracking-widest  ${varelaRound.className} text-white`}>
              My aim is to revolutionize the way people experience development. My mission is to transform concepts into visually captivating design that inspire, engage and tell your story. I belive in blending logic with the latest technology to deliver solutions that exceed expectations.
            </p>
          </div>
        </div>
        <div className="h-1/2 w-full border-b border-purple-600 flex flex-row px-3 md:px-8 py-4 md:py-10 justify-center items-center">
            <div className="h-full w-1/2 flex flex-col gap-2 justify-center items-center">
              <div className="flex justify-center  w-full pb-4">
                <p className={`inline text-[14px] md:text-[17px] lg:text-[21px] tracking-widest leading-none text-white  ${audiowide.className}`}>Services</p>
              </div>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
             </div>
             <div className="h-full w-1/2 flex flex-col gap-2 justify-center items-center">
              <div className=" w-full pb-4 flex justify-center ">
                <p className={`inline text-[14px] md:text-[17px] lg:text-[21px] tracking-widest leading-none text-white  ${audiowide.className}`}>Resources</p>
              </div>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
             </div>
          </div>
          <div className="h-1/2 w-full border-b border-purple-600 flex flex-row px-3 md:px-8 py-4 md:py-10 justify-center items-center">
            <div className="h-full w-1/2 flex flex-col gap-2 justify-center items-center">
              <div className="flex justify-center  w-full pb-4">
                <p className={`inline text-[14px] md:text-[17px] lg:text-[21px] tracking-widest leading-none text-white  ${audiowide.className}`}>More From Us</p>
              </div>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
             </div>
             <div className="h-full w-1/2 flex flex-col gap-2 justify-center items-center">
              <div className=" w-full pb-4 flex justify-center ">
                <p className={`inline text-[14px] md:text-[17px] lg:text-[21px] tracking-widest leading-none text-white  ${audiowide.className}`}>Company</p>
              </div>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              <p className={`inline text-[13px] md:text-[14px] lg:text-[19px] tracking-widest leading-none text-white  ${varelaRound.className}`}>Services</p>
              
             </div>
          </div>
        
        <div className="flex flex-row w-full  text-2xl">
            <div className=" w-full flex py-5 justify-center items-center border-r border-purple-600 ">
              <FaInstagram className="bg-transparent text-yellow-200"/>
            </div>
            <div className=" w-full flex py-5 justify-center items-center border-r border-purple-600">
              <FaFacebookF className="bg-transparent  text-yellow-200"/>
            </div>
            <div className=" w-full flex py-5 justify-center items-center border-r border-purple-600">
              <FaTwitter className="bg-transparent text-yellow-200"/>
            </div>
            <div className=" w-full flex py-5 justify-center items-center border-r border-purple-600">
              <FaGithub className="bg-transparent text-yellow-200"/>
            </div>
            <div className=" w-full flex py-5 justify-center items-center ">
              <SiLeetcode className="bg-transparent text-yellow-200"/>
            </div>
          </div>
        
      </div>
      <div className="w-[60px] items-center border-l [border-image:linear-gradient(to_bottom,#9810fa,#0f172b,#9810fa)_1_100%]"></div>

    </div>
    <div className="h-[60px] w-full flex flex-row justify-between border-t border-purple-500">
      <div className="w-[60px] h-full flex justify-center items-center border-r border-purple-600"> 
        <FiArrowUpRight className="text-3xl text-slate-300" />
      </div>
                  
      <div className="w-[calc(100%-120px)] h-full"></div>
                  
             <div className="w-[60px] h-full border-l border-purple-600 flex justify-center items-center">
              <p className={`text-sm tracking-widest  ${audiowide.className}`}>#5</p>
            </div>
          </div>
  
   </div>
  );
}