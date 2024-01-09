import MiniProfile from "./lateralSection/MiniProfile";
import Suggestions from "./lateralSection/Suggestions";
import Posts from "./posts/Posts";
import Stories from "./stories/Stories";
import { useSession } from "next-auth/react";


const Feed = () => {
  const {data: session} = useSession();
  return (
    <main className={`grid grid-cols-1  mx-auto ${session ? 'md:grid-cols-3  md:max-w-6xl' : 'md:grid-cols-2  md:max-w-3xl'}`}>
      <section className="md:col-span-2">
        <Stories />
        <Posts />
      </section>
      {session ? <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-auto lg:w-[380px] ">
          {/**mini-profile */}
          <MiniProfile/>
        {/**suggestions */} 
        <Suggestions/>
        </div>
       
      </section>: null }
     





    </main>
  )
}

export default Feed;