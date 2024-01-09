import MetaHead from "../components/MetaHead.jsx";
import Feed from "../components/feed/Feed.jsx";
import Header from "../components/header/Header.jsx";
import UploadModal from "../components/modal/UploadModal.jsx";


export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <MetaHead name={"Home"} content={"only for educational purposes"}/>

      <main>
       
         <Header/>
         <Feed/>
      
        {/**Modal */}
        <UploadModal/>
      </main>
    </div>
  );
}
