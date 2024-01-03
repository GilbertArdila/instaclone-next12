import minifaker from 'minifaker'
import 'minifaker/locales/en';


export function dataUser (setter,number)  {
   

    const data = minifaker.array(number, (i) => (
    {
        userName: minifaker.username({ locale: 'en' }).toLowerCase(),
        image: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
        jobTitle: minifaker.jobTitle(),
        id: i
    }
));


 return setter(data);
}

