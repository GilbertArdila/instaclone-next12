import Post from "./Post";


const Posts = () => {
    /**Dummy data */
    const posts = [
        {
         id:"1",
         userName:"sea lover",
         userImage:"https://avatars.githubusercontent.com/u/88728941?v=4",
         image:"https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
         caption:"diving deep"
        },
        {
         id:"2",
         userName:"sea lover",
         userImage:"https://avatars.githubusercontent.com/u/88728941?v=4",
         image:"https://images.unsplash.com/photo-1703696703525-2b4454dbd146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
         caption:"WOW! wonderful mountains"
        },
        {
         id:"3",
         userName:"sea lover",
         userImage:"https://avatars.githubusercontent.com/u/88728941?v=4",
         image:"https://plus.unsplash.com/premium_photo-1702910930523-897e2c217108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
         caption:"a cup of coffee every morning is good"
        },
        {
         id:"4",
         userName:"sea lover",
         userImage:"https://avatars.githubusercontent.com/u/88728941?v=4",
         image:"https://images.unsplash.com/photo-1682686581776-b6ebee7c150e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
         caption:"school of fish"
        }
    ]
  return (
    <div>
        {posts.map((post)=>(
            <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}

export default Posts;