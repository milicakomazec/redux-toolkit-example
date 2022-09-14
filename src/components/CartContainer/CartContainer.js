import CartItem from "../CartItem/CartItem";
import { useSelector , useDispatch} from "react-redux";
import "./style.css"
import { openModal } from "../../features/modalSlice";

const CartContainer = () =>{
    const {cartItems, total, amount} = useSelector((store)=>store.cart)
    const dispatch = useDispatch()


    if(amount<1) return(<div>CARD IS EMPTY</div>)

     return (
     <div className="cart-container"> 
        <div>
             {cartItems.map((item)=>{
             return <CartItem key={item.id} {...item}/>
         })}
        </div>
        <div> Total: {total.toFixed(2)} $</div>
        <button onClick={()=>dispatch(openModal())}>CLEAR CART</button>
    </div>
    )
}

export default CartContainer;