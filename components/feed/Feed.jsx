import Posts from "./posts/Posts";
import Stories from "./stories/Stories";


const Feed = () => {
  return (
    <div>
      <section><Stories /> <Posts/> </section>
      <section> {/**mini-profile */}</section>
      <section>{/**suggestions */}</section>




    </div>
  )
}

export default Feed;