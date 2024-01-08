import Logo from "./Logo";
import Menu from "./Menu";
import Searcher from "./Searcher";
import { useSession, signIn } from "next-auth/react";


const Header = () => {
  const {data: session} = useSession();
 
  return (
    <header className="shadow-sm bg-white border-b sticky top-0 z-20">
      <div className="flex items-center justify-around max-w-6xl mx-4 md:mx-auto  ">
        <Logo />
        <Searcher />
        {session ? 
           <Menu />
      :<button className="btn text-sm" onClick={() => signIn()}>Sig In</button>}
       
      </div>
      
    </header>
    )
}

export default Header;