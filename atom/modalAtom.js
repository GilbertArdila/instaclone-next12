import {atom} from "recoil";

const modalState = atom({
    key: 'modalState', 
    default: false, 
  });
  const commentState = atom({
    key:'addComment',
    default: false
  });

  export{modalState,commentState}