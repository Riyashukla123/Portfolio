
import Image from "next/image"
import { MdOutlineLocalDining } from "react-icons/md"
const loading=()=>{
  return(
    <div className="flex z-[10000] flex-col justify-center items-center h-screen w-full fixed bg-purple-700">
      <div className="object contain flex justify-center items-center">
        <Image src="/logo.png" alt="logo" width={200} height={200}/>
      </div>
    </div>
  )
}
export default MdOutlineLocalDining