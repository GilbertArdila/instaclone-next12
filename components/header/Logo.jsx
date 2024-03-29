import Image from "next/image"
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-24 w-24 relative cursor-pointer hidden lg:inline-grid">
        <Image 
        onClick={()=>router.push("/")}
        className="object-contain   " 
        src="/lglogo.jpg" 
        alt="Large screens logo" 
        layout="fill" />
      </div>

      <div className="h-20 w-16 relative cursor-pointer  lg:hidden">
        <Image 
        onClick={()=>router.push("/")}
        className="object-contain  " 
        src="/smlogo.jpg" 
        alt="Small screens logo" 
        layout="fill" />
      </div>
    </>

  )
}

export default Logo;