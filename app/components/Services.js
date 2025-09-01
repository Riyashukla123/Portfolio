'use client'
import { MdArrowDownward } from "react-icons/md";
import {Audiowide, Varela_Round } from 'next/font/google';
import Card from "./Card.js";
import Data from "../Data.js";
import { LuFocus } from "react-icons/lu";

const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });


export default function Services(){
  return(
   <div className="flex flex-col w-full h-screen bg-purple-700">
    <div className="flex flex-row w-full h-[calc(100%-60px)]">
      <div className="h-full w-[60px] border-r border-slate-700"></div>
      <div className="h-full w-[calc(100%-120px)] flex flex-col relative">
        <div className="hidden md:flex z-40 absolute left-2/3 top-[66px] xl:top-[120px] -translate-x-1/2">
          <LuFocus className="bg-transparent text-6xl text-yellow-100"/>
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row  md:px-4 lg:px-16 py-4 justify-between border-b border-slate-700">
          <p className={`text-2xl px-4 py-4 md:p-0 border-b border-slate-700 md:border-none md:text-3xl lg:4xl xl:text-6xl tracking-widest leading-none  ${audiowide.className} w-full md:w-[200px] xl:w-[300px]`}>My Projects</p>
          <div className=" w-full md:w-[500px] flex items-center object-contain">
            <p className={`text-[12.3px] px-4 md:p-0 text-justify lg:text-[14px] inline  tracking-widest text-white/80 ${varelaRound.className}`}> My protfolio showcases a curated collection of my projects, highlithing my skills in full stack development, via projects for a variety of purpose.</p>
          </div>
        </div>
        <div className="h-full w-full flex flex-col md:flex-row">
          <div className="h-full w-full flex border-b md:border-b-0 md:border-r border-slate-700">
            <Card {...Data[0]}/>
          </div>
          <div className="h-full w-full flex border-b md:border-b-0 md:border-r border-slate-700">
            <Card {...Data[1]}/>
          </div>
          <div className="h-full w-full flex">
            <Card {...Data[2]}/>
          </div>         
        </div>
      </div>
      <div className="h-full w-[60px] border-l border-slate-700"></div>
    </div>
    <div className="flex flex-row w-full h-[60px] justify-between border-y border-slate-700">
      <div className="w-[60px] h-full flex justify-center items-center border-r border-slate-700"> 
        <MdArrowDownward  className="text-3xl text-slate-300" />
      </div>
      <div className="w-[calc(100%-120px)] h-full"></div>
      <div className="w-[60px] h-full border-l border-slate-700 flex justify-center items-center">
       <p className={`text-sm tracking-widest  ${audiowide.className}`}> #3
       </p>
      </div>

    </div>    
   </div>
  );
}