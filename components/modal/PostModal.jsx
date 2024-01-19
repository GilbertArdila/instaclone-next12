import Modal from "react-modal";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { useState, useRef, useEffect } from "react";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.js";

import { postModalState, postId, postUser } from "../../atom/modalAtom.js";
import Loading from "../../pages/Loading";


const PostModal = () => {
  const { data: session } = useSession();

  const [open, setOpen] = useRecoilState(postModalState);
  const [user, setUser] = useRecoilState(postUser);
  const [id, setId] = useRecoilState(postId);
  const [isLoading, setIsLoading] = useState(false);
  const captionRef = useRef(null);

  async function uploadCaption() {
    if (isLoading) return;
    setIsLoading(true);
    await updateDoc(doc(db, "posts", id), {
      caption: captionRef.current.value
    })
    setOpen(false);
    setIsLoading(false);
    setId(null);
  }

  return (
    <div >
      {open && user == session?.user.username && (
        <Modal
          className="max-w-lg w-[90%] h-auto p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          ariaHideApp={false}
          isOpen={open}
          onRequestClose={() => { setOpen(false) }}
        >
          <div className="flex flex-col justify-center items-center  h-[100%]">
            <input
              ref={captionRef}
              type="text"
              maxLength={"150"}
              placeholder="Please enter your new caption"
              className="m-4 border-none text-center w-full focus:ring-0 " />

            {isLoading ? <Loading /> : <button
              onClick={uploadCaption}
              disabled={isLoading || !captionRef}
              className="w-full bg-red-500 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100">Upload Caption</button>
            }
          </div>

        </Modal>
      )}

    </div>
  )
}

export default PostModal;