import Image from "next/image"

const Logo = () => {
  return (
    <>
      <div className="h-24 w-24 relative cursor-pointer hidden lg:inline-grid">
        <Image className="object-contain   " src="/SmallScreenLogo.jpg" alt="Small screens logo" layout="fill" />
      </div>

      <div className="h-24 w-10 relative cursor-pointer  lg:hidden">
        <Image className="object-contain  hidden sm:inline-block " src="/largeScreenLogo.jpg" alt="Small screens logo" layout="fill" />
      </div>
    </>

  )
}

export default Logo;