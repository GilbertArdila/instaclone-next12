import {atom} from "recoil";

const modalState = atom({
    key: 'modalState', 
    default: false, 
  });
  const commentState = atom({
    key:'addComment',
    default: false
  });
  const postModalState = atom({
    key: 'postModalState', 
    default: false, 
  });
  const postId = atom({
    key: 'postId', 
    default: null, 
  });
  const postUser = atom({
    key: 'postUser', 
    default: null, 
  });

  export{modalState,commentState,postModalState,postId,postUser}