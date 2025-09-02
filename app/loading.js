
import Image from "next/image"
const loading=()=>{
  return(
    <div className="flex flex-col justify-center items-center h-screen w-full fixed bg-purple-700">
      <div className="object contain flex justify-center items-center">
        <Image src="/logo.png" alt="logo" width={200} height={200}/>
      </div>
    </div>
  )
}
export default loading