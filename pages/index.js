import MetaHead from "../components/MetaHead.jsx";
import Feed from "../components/feed/Feed.jsx";
import Header from "../components/header/Header.jsx";
import PostMenuModal from "../components/modal/PostMenuModal.jsx";
import PostModal from "../components/modal/PostModal.jsx";
import UploadModal from "../components/modal/UploadModal.jsx";


export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <MetaHead name={"Home"} content={"only for educational purposes"}/>

      <main>
       
         <Header/>
         <Feed/>
        <UploadModal/>
        <PostModal/>
        <PostMenuModal/>
      </main>
    </div>
  );
}
