import {getProviders, signIn} from "next-auth/react"
import Header from "../../components/header/Header";

const signIng = ({providers}) => {
    
  return (
    <>
    <Header/>
     <div className="flex justify-center space-x-7 mt-20">
      <img src="/smlogo.jpg" alt="instaclone logo" className="hidden md:inline-flex md:w-48 h-48 object-cover rotate-6" />
      <div className="flex flex-col  items-center">
      <img src="/lglogo.jpg" alt="instaclone logo" className="w-32 h-32 object-cover" />
              <p className="text-sm italic my-10 text-center">This app is only for educational purposes</p>
          {Object.values(providers).map((provider)=>(
            <div key={provider.name} className="flex space-x-2 items-center  my-4">
             
              <button 
              onClick={() => signIn(provider.id, {callbackUrl: "/"})}
              className={`rounded-lg p-3 text-white ${provider.id === 'google' ? 'bg-red-600':'bg-black'}`}>Sign in with {provider.name}</button>
              <img src={provider.id === 'google' ? 'https://cdn-icons-png.flaticon.com/256/2702/2702602.png' : 'https://cdn-icons-png.flaticon.com/256/25/25231.png'} alt="icon"  className="w-6 h-6"/>
            </div>
          ))}
      </div>
     </div>
    </>
  )
}

export default signIng;

export async function getServerSideProps(context){
    const providers = await getProviders();
    return {
        props: {providers}
    }
}