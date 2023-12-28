import MetaHead from "../components/MetaHead.jsx";
import Feed from "../components/feed/Feed.jsx";
import Header from "../components/header/Header.jsx";


export default function Home() {
  return (
    <div>
      <MetaHead name={"Home"} content={"only for educational purposes"}/>

      <main>
       
         <Header/>
         <Feed/>
      
        {/**Modal */}
      </main>
    </div>
  );
}
