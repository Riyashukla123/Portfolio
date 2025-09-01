'use client'
import { FiArrowUpRight } from 'react-icons/fi';
import { FiDownload } from 'react-icons/fi';
import logo from "../../public/logo.png"
import Image from "next/image"
import { Varela_Round } from 'next/font/google';
import { GiHamburgerMenu } from "react-icons/gi";
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });
export default function Nav({setMenu, menu}){
  return(
    <div className="z-20 bg-transparent flex flex-row justify-between w-[100%] h-[60px]">
      <div className="h-full w-[60px] p-2">
        <Image src={logo} alt="logo"/>
      </div>
      <div className="flex justify-end w-[calc(100%-120px)]">
       <div className="hidden md:flex flex-row ">
        <button className={`flex flex-row gap-2 justify-center items-center text-lg hover:bg-purple-400/30 w-[130px] transition-colors duration-500 text-white/80 ${varelaRound.className} `}><FiDownload/> Resume</button>
        <button className={`text-lg hover:bg-purple-400/30 w-[100px]  transition-colors duration-500 text-white/80 ${varelaRound.className}`}>Home</button>
        <button className={`text-lg hover:bg-purple-400/30 w-[100px]  transition-colors duration-500 text-white/80 ${varelaRound.className}`}>About</button>
        <button className={`text-lg hover:bg-purple-400/30 w-[100px]  transition-colors duration-500 text-white/80 ${varelaRound.className}`}>Projects</button>
        <button className={`text-lg hover:bg-purple-400/30 w-[100px]  transition-colors duration-500 text-white/80 ${varelaRound.className}`}>Skills</button>
        <button className={`text-lg hover:bg-purple-400/30 w-[100px]  transition-colors duration-500 text-white/80 ${varelaRound.className}`}>Contact
        </button>
       </div>
      </div>
      <div className="flex justify-center items-center h-full w-[60px] bg-purple-700">
        <FiArrowUpRight className="hidden md:block text-3xl bg-transparent"/>
        <button className=" block md:hidden text-3xl bg-transparent"onClick={()=>{
          setMenu(!menu);
        }} >
         <GiHamburgerMenu />
        </button>
      </div>
    </div>
  )
}