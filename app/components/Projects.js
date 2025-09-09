'use Client'
import Image from "next/image"
import cor from "../../public/coridoor.png";
import checks from "../../public/checks.png";
import cush from "../../public/sudhion.png";
import {Audiowide, Varela_Round } from 'next/font/google'
import prof2 from "../../public/prof2.png"
import { IoCloseSharp } from "react-icons/io5";
const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });

const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });

export default function Projects({setProView, setInd, data}){
  return(
    <div className="fixed z-50 top-0 flex flex-col h-dvh md:h-screen w-full bg-purple-700 border border-purple-400">
       <div className="w-full h-[50px] flex flex-row">
        <div className="h-full w-[50px] border-r border-purple-400"></div>
        <div className="h-full w-[calc(100%-100px)]"></div>
        <div className="h-full w-[50px] border-l border-purple-400 flex justify-center items-center">
          <IoCloseSharp className="text-red-400 text-4xl" onClick={(e)=>{
            e.preventDefault;
            setProView(false);
            setInd(null);
          }} />
        </div>
       </div>
       <div className="w-full h-[calc(100%-100px)] border-y border-purple-400 flex flex-row">
        <div className="h-full w-[50px] border-r border-purple-400"></div>
        <div className="h-full w-[calc(100%-100px)] flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col border-r border-purple-400 ">
            <div className="w-full flex flex-row relative h-full">
              <Image width={300} height={300} priority={false} src={data.image} alt="projectimage" className=" w-full h-full object-cover"/>
              <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-md"></div>
              <Image width={700} height={500} priority={false} src={data.image} alt="Project image" className=" absolute top-[10%] left-[10%] w-[80%] h-[80%] object-cover"/>
            </div>
            
            
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col">
            <div className="relative h-full md:h-2/3 w-full border-b border-purple-400 flex flex-col p-4 md:p-8 ">
              <p className={`hidden md:inline text-5xl leading-none  ${audiowide.className} w-[300px]`}>What I Did</p>
              <p className={`text-lg md:text-2xl md:mt-2 text-justify inline  tracking-widest text-white/80 ${varelaRound.className}`}>{data.name}</p>
              <p className={`text-md md:text-lg mt-2 text-justify inline  tracking-widest text-white/80 ${varelaRound.className}`}>{data.stack}</p>
              <p className={`text-xs md:text-[14px] mt-2 text-justify inline  tracking-widest text-white/80 ${varelaRound.className}`}>{data.description}</p>
              <p className={`text-xs md:text-[12px] mt-2 text-justify inline  tracking-widest text-white/80 ${varelaRound.className}`}>Tech Stack: {data.techStack.join(", ")}</p>
              <div className="absolute bottom-0 left-0 w-full border-t border-purple-400 flex flex-row ">
                <a href={data.Code} target="blank" className={`w-1/2 text-center py-2 md:py-4 hover:bg-purple-400/30  transition-colors duration-500 text-white/80 cursor-pointer ${varelaRound.className} border-r border-purple-400`}>View Code</a>
                <a href={data.Live} target="blank" className={`w-1/2 text-center py-2 md:py-4 hover:bg-purple-400/30  transition-colors duration-500 text-white/80 cursor-pointer ${varelaRound.className}`}>Live Demo</a>
              </div>
            </div>
            <div className="hidden md:block h-1/3 w-full object-cover">
            <Image width={700} height={500} priority={false} src={cush} alt="cor" className=" w-full h-full object-cover"/>
            </div>
          </div>
        </div>
        <div className="h-full w-[50px] border-l border-purple-400"></div>
       </div>
       <div className="w-full h-[50px] flex flex-row">
        <div className="h-full w-[50px] border-r border-purple-400"></div>
        <div className="h-full w-[calc(100%-100px)]">
          
        </div>
        <div className="h-full w-[50px] border-l border-purple-400"></div>
       </div>
    </div>
  );
}