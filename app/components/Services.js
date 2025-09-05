'use client'
import { MdArrowDownward } from "react-icons/md";
import {Audiowide, Varela_Round } from 'next/font/google';
import Card from "./Card.js";
import Data from "../Data.js";
import { LuFocus } from "react-icons/lu";
import { useEffect, useState } from "react";

const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });


export default function Services(){

  const [activeCard, setActiveCard] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setActiveCard((activeCard + 1) % Data.length)}, 3000);
    return () => clearInterval(interval)
  },[activeCard])
  return(
   <div className="flex flex-col w-full h-screen min-h-screen snap-start bg-purple-700">
    <div className="flex flex-row w-full h-[calc(100%-60px)]">
      <div className="h-full w-[60px] border-r border-purple-600"></div>
      <div className="h-full w-[calc(100%-120px)] flex flex-col relative">
        <div className="hidden md:flex z-40 absolute left-2/3 top-[66px] xl:top-[120px] -translate-x-1/2">
          <LuFocus className="bg-transparent text-6xl text-yellow-100"/>
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row  md:px-4 lg:px-16 py-4 justify-between border-b border-purple-600">
          <p className={`text-2xl px-4 py-4 md:p-0 border-b border-purple-600 md:border-none md:text-3xl lg:4xl xl:text-6xl tracking-widest leading-none  ${audiowide.className} w-full md:w-[200px] xl:w-[300px]`}>My Projects</p>
          <div className=" w-full md:w-[500px] flex items-center object-contain">
            <p className={`text-[12.3px] px-4 md:p-0 text-justify lg:text-[14px] inline  tracking-widest text-white/80 ${varelaRound.className}`}> My protfolio showcases a curated collection of my projects, highlithing my skills in full stack development, via projects for a variety of purpose.</p>
          </div>
        </div>
        <div className="h-full w-full flex flex-col md:flex-row">
          <div className={` ${activeCard == 0 ? 'h-[110%] md:h-full md:w-[110%]' : 'h-full w-full'} transition-all duration-900 flex border-b md:border-b-0 md:border-r border-purple-600`}>
            <Card {...Data[0]} activeCard = {activeCard} setActiveCard = {setActiveCard}/>
          </div>
          <div className={` ${activeCard == 1 ? 'h-[110%] md:h-full md:w-[110%]' : 'h-full w-full'} transition-all duration-900 flex border-b md:border-b-0 md:border-r border-purple-600`}>
            <Card {...Data[1]} activeCard = {activeCard} setActiveCard = {setActiveCard}/>
          </div>
          <div className={` ${activeCard == 2 ? 'h-[110%] md:h-full md:w-[110%]' : 'h-full w-full'} transition-all duration-900 flex`}>
            <Card {...Data[2]} activeCard = {activeCard} setActiveCard = {setActiveCard}/>
          </div>         
        </div>
      </div>
      <div className="h-full w-[60px] border-l border-purple-600"></div>
    </div>
    <div className="flex flex-row w-full h-[60px] justify-between border-y border-purple-600">
      <div className="w-[60px] h-full flex justify-center items-center border-r border-purple-600"> 
        <MdArrowDownward  className="text-3xl text-slate-300" />
      </div>
      <div className="w-[calc(100%-120px)] h-full flex items-center"> 
          <p className={`text-sm px-16 tracking-widest  ${audiowide.className}`}>Skills</p>
        </div>
      <div className="w-[60px] h-full border-l border-purple-600 flex justify-center items-center">
       <p className={`text-sm tracking-widest  ${audiowide.className}`}> #3
       </p>
      </div>

    </div>    
   </div>
  );
}