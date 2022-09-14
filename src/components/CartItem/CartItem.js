import "./style.css"
import { removeItem,increase,decrease } from "../../features/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({id,img,title,price,amount}) =>{
  const dispatch = useDispatch();
  return(
    <div className="cart-item-container">  
    <div><img src={img} width="60" height="60"></img></div>
      <div>{title}</div>
      <div> {price}</div>
      <button onClick={()=> dispatch(removeItem(id))}>remove</button>
      <button onClick={()=>dispatch(increase({id}))}>+</button>
      <div>{amount}</div>
      <button onClick={()=> {
        if(amount===1){
        dispatch(removeItem(id))
        return;
        }
        dispatch(decrease({id}))}}>-</button>
    </div>

  )
}

export default CartItem;