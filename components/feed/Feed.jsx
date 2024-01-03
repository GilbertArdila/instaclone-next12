import MiniProfile from "./lateralSection/MiniProfile";
import Posts from "./posts/Posts";
import Stories from "./stories/Stories";


const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-auto max-w-[380px] ">
          {/**mini-profile */}
          <MiniProfile/>
        {/**suggestions */} 
        </div>
       
      </section>





    </main>
  )
}

export default Feed;