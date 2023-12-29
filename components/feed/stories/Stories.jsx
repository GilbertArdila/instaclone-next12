import minifaker from 'minifaker'
import 'minifaker/locales/en';

import { useEffect, useState } from 'react';
import Story from './Story';

const Stories = () => {
    const [storyUsers, setStoryUsers] = useState([]);

    useEffect(() => {
      const stories = minifaker.array(20, (i) => (
        {
            userName:minifaker.username({locale:'en'}).toLowerCase(),
            image:`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id:i
        }
      ));
      setStoryUsers(stories);
     
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