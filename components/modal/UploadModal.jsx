import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom.js";

const UploadModal = () => {
    const [open, setOpen] = useRecoilState(modalState);
    
  return (
    <div>
        <h1>UploadModal</h1>
      {open && <h1>Modal open</h1>}  
    </div>
    
  )
}

export default UploadModal;