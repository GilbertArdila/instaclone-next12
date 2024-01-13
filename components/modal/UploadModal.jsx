import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom.js";
import Modal from "react-modal";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";

import Loading from "../../pages/Loading.jsx";
import { upload } from "../../helpers/actions.js";

const UploadModal = () => {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const filePickerRef = useRef(null);
    const captionRef = useRef(null);


    function addImage(event) {
        const reader = new FileReader();
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }

    }

    async function uploadPost() {
       upload(isLoading,setIsLoading,selectedFile,setSelectedFile,captionRef,setOpen,session)

    }

    return (
        <div>
            {open && (
                <Modal
                    ariaHideApp={false}
                    isOpen={open}
                    onRequestClose={() => { setOpen(false); setSelectedFile(null); }}
                    className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
                >
                    <div className="flex flex-col justify-center items-center  h-[100%]">
                        {/**camera icon or selected image */}
                        {selectedFile ? (
                            <img src={selectedFile} alt="image" className="w-full max-h-[250px] object-cover cursor-pointer"
                                onClick={() => setSelectedFile(null)}
                            />
                        ) :
                            (<>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                    className="w-14 h-14 cursor-pointer border-2 rounded-full bg-red-200 p-2 text-red-500"
                                    onClick={() => filePickerRef.current.click()}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                </svg>
                            </>)}

                        {/**this input is connected to the camera logo thru the ref (filePickerRef) */}
                        <input type="file" hidden ref={filePickerRef}
                            onChange={addImage} />

                        <input
                            ref={captionRef}
                            type="text"
                            maxLength={"150"}
                            placeholder="Please enter your caption"
                            className="m-4 border-none text-center w-full focus:ring-0 " />

                        {isLoading ? <Loading /> : <button
                            onClick={uploadPost}
                            disabled={isLoading || !selectedFile}
                            className="w-full bg-red-500 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100">Upload Post</button>
                        }

                    </div>

                </Modal>
            )}
        </div>

    )
}

export default UploadModal;