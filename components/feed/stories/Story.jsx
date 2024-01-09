

const Story = ({user}) => {
  

  return (
    <div className="">
     <img 
     className="storyImage"
     src={user.image} 
     alt={user.userName} />
     <p className="truncate text-xs w-14">{user.userName}</p>
    </div>
  )
}

export default Story;