'use client'
import {Audiowide, Varela_Round } from 'next/font/google';
import Image from "next/image"

const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });

export default function Card({stack, name, index, image, activeCard, setActiveCard}){
  return(
    <div className={`h-full w-full flex flex-col justify-between relative group overflow-hidden`} onMouseEnter={()=>setActiveCard(index)}>
      <Image src={image} fill alt='projectPic' className={`flex absolute  ${activeCard == index ? 'translate-y-0 md:translate-x-0' : 'translate-y-[-100%] md:translate-x-[100%] md:translate-y-0'} transition duration-900 inset-0 w-full h-full object-cover z-10`}/>
      <div className="flex flex-col justify-center items-center py-4 md:px-16 md:py-8">
        <p className={`z-20 text-[14px] text-center inline tracking-widest text-white/80 ${varelaRound.className}`}>{stack}</p>
        <p className={`z-20 text-[14px] text-center inline tracking-widest text-white/80`}>{name}</p>
      </div>
      <div className="flex  md:px-16 md:py-8 justify-end">
        <p className={`z-20 text-[14px] inline tracking-widest text-white/80 ${varelaRound.className}`}>#0{index}</p>
      </div>
    </div>

  );
}