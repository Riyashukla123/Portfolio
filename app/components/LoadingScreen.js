import Image from "next/image.js";
import { Audiowide } from 'next/font/google';
const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });
export default function Background(){
    return(
        <>
            <div></div>
            <div className="object contain flex justify-center items-center">
              <Image src="/yellow_logo.png" alt="logo" width={120} height={120}/>
            </div>
            <div className={`text-white  ${audiowide.className} text-2xl md:text-5xl w-full px-10 mb-10`}>
              <span>LOADING</span>
              <div className=" mt-5 w-full h-6 rounded-2xl bg-purple-400  relative">
                <div className=" w-1/3 h-full rounded-2xl bg-white left-0 top-0 loader-animation"/>
              </div>
            </div>
        </>
    )
}