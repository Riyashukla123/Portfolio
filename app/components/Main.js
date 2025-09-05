'use client'
import Home from "./Home.js";
import Nav from  "./Nav.js";
import About from './About.js';
import {useState} from "react";
import { FiDownload } from 'react-icons/fi';
import { Varela_Round } from 'next/font/google';
import Services from "./Services.js";
import Skills from "./Skills.js";
import Contact from "./Contact.js";
import Projects from "./Projects.js";
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });
export default function Main(){
  const [menu, setMenu]= useState(false);
  const [proView, setProView]=useState(false);
  const [ind, setInd]=useState(null);
   
  return(
    <div className="flex flex-col ">
      
      <div className="relative w-full h-screen  overflow-hidden object-contain flex flex-col">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10">
          <source src="/V7.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute w-full h-[20%] bottom-0 right-0 z-10 bg-gradient-to-t from-black to-transparent via-transparent"></div>
        <Nav setMenu={setMenu} menu={menu}/>
        <Home/>
        <div className={`md:hidden fixed z-30 w-full h-[calc(100%-60px)] left-1/2 ${menu ? `-translate-x-1/2`: `translate-x-full`} transition duration-700 bg-purple-700/85 flex flex-col items-center top-[60px] justify-around  pt-10`}>
          <button className={`flex flex-row gap-2 justify-center items-center text-3xl hover:bg-purple-400/30 transition-colors duration-500 text-white/80 py-5 ${varelaRound.className} border-b-[3px] border-white/80  w-[200px]`}><FiDownload className=""/> Resume</button>
          <button className={`text-3xl hover:bg-purple-400/30   transition-colors duration-500 text-white/80 py-5 ${varelaRound.className} border-b-[3px] border-white/80 w-[200px]`}>Home</button>
          <button className={`text-3xl hover:bg-purple-400/30  transition-colors duration-500 text-white/80 py-5 ${varelaRound.className} border-b-[3px] border-white/80 w-[200px]`}>About</button>
          <button className={`text-3xl hover:bg-purple-400/30   transition-colors duration-500 text-white/80 py-5 ${varelaRound.className} border-b-[3px] border-white/80 w-[200px]`}>Projects</button>
          <button className={`text-3xl hover:bg-purple-400/30  transition-colors duration-500 text-white/80 py-5 ${varelaRound.className} border-b-[3px] border-white/80 w-[200px]`}>Skills</button>
          <button className={`text-3xl hover:bg-purple-400/30  transition-colors duration-500 text-white/80 py-5 ${varelaRound.className}   w-[200px]`}>Contact</button>

        </div>
      </div>
       <About/>
       <Services setProView={setProView} setInd={setInd}/>
       <Skills/>     
       <Contact/> 
       {proView && <Projects setProView={setProView} setInd={setInd}/>}
       
    </div>
  );
}