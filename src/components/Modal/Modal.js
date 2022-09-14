import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modalSlice";
import { clearCart } from "../../features/cartSlice";
import './style.css'


const Modal = () => {
    const dispatch = useDispatch()
    return(
        <div className="modal-container">
            <div className="modal">Remove all items?
            <div className="btn-container">
            <button className="btn confirm-btn" onClick={()=>{
                dispatch(clearCart())
                dispatch(closeModal())}}>yes</button>
            <button  className="btn clear-btn" onClick={()=> dispatch(closeModal())}>no</button>
            </div>
           </div>
       
        </div>
    )
}

export default Modal;