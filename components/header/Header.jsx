import { useSession, signIn } from "next-auth/react";



import Logo from "./Logo";
import Menu from "./Menu";
import Searcher from "./Searcher";

const Header = () => {
  const {data: session} = useSession();
 
 
  return (
    <header className="shadow-sm bg-white border-b sticky top-0 z-20">
      <div className="flex items-center justify-around max-w-6xl mx-4 md:mx-auto  ">
        <Logo  />
        <Searcher />
        
           <Menu />
      
       
      </div>
      
    </header>
    )
}

export default Header;