import Logo from "./Logo";
import Menu from "./Menu";
import Searcher from "./Searcher";


const Header = () => {
  return (
    <header className="flex items-center justify-around max-w-6xl mx-4 md:mx-auto pt-2 border-b shadow-sm bg-white rounded-lg">   
        <Logo/>           
        <Searcher/>
        <Menu/>           
    </header>
  )
}

export default Header;