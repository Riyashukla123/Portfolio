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

export default function Projects({setProView, setInd}){
  return(
    <div className="fixed z-20000 flex flex-col h-screen w-full bg-purple-700 border border-slate-500">
       <div className="w-full h-[50px] flex flex-row">
        <div className="h-full w-[50px] border-r border-slate-500"></div>
        <div className="h-full w-[calc(100%-100px)]"></div>
        <div className="h-full w-[50px] border-l border-slate-500 flex justify-center items-center">
          <IoCloseSharp className="text-red text-xl" onClick={(e)=>{
            e.preventDefault;
            setProView(false);
            setInd(null);
          }} />
        </div>
       </div>
       <div className="w-full h-[calc(100%-100px)] border-y border-slate-500 flex flex-row">
        <div className="h-full w-[50px] border-r border-slate-500"></div>
        <div className="h-full w-[calc(100%-100px)] flex flex-row justify-between">
          <div className="w-1/2 h-full flex flex-col border-r border-slate-500 ">
            <div className="w-full flex flex-row  h-2/5">
              <div className="border-r border-slate-500 w-1/2 h-full object-cover">
              <Image src={cor} alt="cor" className=" w-full h-full object-cover"/>
              </div>
              <div className="w-1/2 h-full object-cover">
              <Image src={checks} alt="cor" className=" w-full h-full object-cover"/>
              </div>
            </div>
            
            <div className="w-full flex flex-row h-3/5">
              <div className=" w-full h-full overflow-hidden object-contain">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover z-1000">
                  <source src="/V7.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
               
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col">
            <div className="h-2/3 w-full border-b border-slate-500 flex flex-col p-8 ">
            <p className={`text-5xl tracking-widest leading-none  ${audiowide.className} w-[300px]`}>What I Did</p>
            </div>
            <div className="h-1/3 w-full object-cover">
            <Image src={cush} alt="cor" className=" w-full h-full object-cover"/>
            </div>
          </div>
        </div>
        <div className="h-full w-[50px] border-l border-slate-500"></div>
       </div>
       <div className="w-full h-[50px] flex flex-row">
        <div className="h-full w-[50px] border-r border-slate-500"></div>
        <div className="h-full w-[calc(100%-100px)]">
          
        </div>
        <div className="h-full w-[50px] border-l border-slate-500"></div>
       </div>
    </div>
  );
}