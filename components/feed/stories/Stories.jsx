import { useEffect, useState } from 'react';
import Story from './Story';
import { dataUser } from '../../../minifaker';

const Stories = () => {
    const [storyUsers, setStoryUsers] = useState([]);

    useEffect(() => {
      dataUser(setStoryUsers,20)
     
    }, [])
    
    
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll scrollbar-none rounded-sm">
        {storyUsers.map((story)=>(
           <Story key={story.id} user={story}/>
        ))}
    </div>
  )
}

export default Stories;