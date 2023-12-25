import Logo from "./Logo";


const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-6xl">   
        <Logo/>           
        
        <h2 className="flex-1">Search</h2>             
        <h2 >Buttons</h2>            
    </header>
  )
}

export default Header;