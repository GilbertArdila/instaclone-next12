import MetaHead from "../components/MetaHead.jsx";
import Header from "../components/header/Header.jsx";


export default function Home() {
  return (
    <div>
      <MetaHead name={"Home"} content={"only for educational purposes"}/>

      <main>
        {/**Header */}
         <Header/>
        {/**Feed */}
        {/**Modal */}
      </main>
    </div>
  );
}
