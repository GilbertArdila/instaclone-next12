

const Suggestion = ({data}) => {
  return (
    <div className="flex items-center justify-between mt-3">
        <img 
        src={data.image} 
        alt={data.userName}
        className="storyImage h-10 w-10"/>

        <div className="flex-1 ml-4">
            <h2 className=" font-semibold text-sm ">{data.userName}</h2>
            <h3 className="text-gray-400 text-sm truncate w-[120px]">{data.jobTitle}</h3>
        </div>
        <button className="btn">Follow</button>
        
    </div>
  )
}

export default Suggestion;