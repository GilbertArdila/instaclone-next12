import Logo from "./Logo";
import Searcher from "./Searcher";


const Header = () => {
  return (
    <header className="flex items-center justify-around max-w-6xl">   
        <Logo/>           
        <Searcher/>
                     
        <h2 >Button</h2>            
    </header>
  )
}

export default Header;