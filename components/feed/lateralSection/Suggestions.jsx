import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";
import { dataUser } from "../../../minifaker";



const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        dataUser(setSuggestions,5)

       
    }, []);

    return (
        <div className="flex flex-col justify-center mx-5 mt-4">
            <div className="flex items-center justify-between mb-5 text-sm">
                <h3 className="text-gray-400 font-bold">Suggestions for you</h3>
                <button className="btn">See All</button>
            </div>
            {suggestions.map((item) => (
                <Suggestion key={item.id} data={item} />
            ))}

        </div>
    )
}

export default Suggestions;