

const Story = ({user}) => {
  return (
    <div>
     <img 
     className="rounded-full h-14 w-14 p-[1.5px] border-2 border-t-red-500 border-b-blue-500 border-r-green-500 border-l-yellow-500 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in "
     src={user.image} 
     alt={user.userName} />
     <p className="truncate text-xs w-14">{user.userName}</p>
    </div>
  )
}

export default Story;