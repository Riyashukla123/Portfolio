import Image from "next/image";
import {Audiowide, Varela_Round } from 'next/font/google';

const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });


const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full fixed bg-black">
      <div className="object-contain flex justify-center items-center">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
      </div>
      <p className={`text-[15px] sm:text-lg md:text-xl tracking-widest text-justify text-white/80 ${varelaRound.className}`}>The Portfolio is Loding. Thank you for your patience.</p>
    </div>
  );
};

export default Loading;
