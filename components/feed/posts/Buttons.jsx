import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { commentState } from "../../../atom/globalStates.js";
import { setDoc, doc, orderBy, onSnapshot, query, collection, deleteDoc } from "firebase/firestore";

import { db } from "../../../firebase.js";



const Buttons = ({ id }) => {
    const { data: session } = useSession();
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState([]);
    const [isOpen, setIsOpen] = useRecoilState(commentState);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "posts", id, "likes"), (snapshot) => setLikes(snapshot.docs)
        )
    }, [db])


    useEffect(() => {
        setIsLiked(
            likes.findIndex(like => like.id === session?.user.uid) !== -1
        )
    }, [likes])


    async function likePost() {
        if (isLiked) {
            await deleteDoc(doc(db, "posts", id, "likes", session.user.uid))
        } else {
            await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
                userName: session.user.username
            })
        }
    }

    return (
        <div className="flex items-center justify-between px-4 pt-4">
            <div className="flex space-x-4">
                {/**like icon */}
                {isLiked ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-red-400 headerMenu"
                    onClick={likePost}
                >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg> : <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="headerMenu"
                    onClick={likePost}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>}
                {/**globe icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="headerMenu"
                    onClick={() => setIsOpen(!isOpen)}
                    onMouseOver={() => setShowMessage(true)}
                    onMouseOut={() => setShowMessage(false)}
                >

                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
                {showMessage && <p className="text-gray-400 ">Click to write a comment</p>}

            </div>


            {likes.length > 0 && <p className="font-bold">{likes.length} {likes.length === 1 ? "like" : "likes"}</p>}





        </div>
    )
}

export default Buttons;