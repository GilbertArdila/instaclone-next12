import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase.js";
import { getDownloadURL, ref, uploadString } from "firebase/storage";


async function upload(isLoading,setIsLoading, selectedFile, setSelectedFile,captionRef, setOpen, session) {
    
    if (isLoading) return;
    setIsLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
        caption: captionRef.current.value,
        userName: session.user.name.split(" ").join("").toLocaleLowerCase(),
        profileImage: session.user.image,
        timestamp: serverTimestamp(),
    })

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile, "data_url")
        .then(
            async (snapshot) => {
                const downloadURL = await getDownloadURL(imageRef);
                await updateDoc(doc(db, "posts", docRef.id), {
                    image: downloadURL
                });
            }
        );
    setOpen(false);
    setIsLoading(false);
    setSelectedFile(null);

}



export {upload}