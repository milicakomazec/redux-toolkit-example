import { useSelector } from "react-redux"
import './style.css'

const NavBar = () =>{

    const {amount} = useSelector((store) => store.cart) 
    // console.log(useSelector((store)=>{console.log(store)}))
    //umesto store.cart.amount, destructuring objecta {amount}

 return (
        <div className="nav-container">
            <div className="nav-title">REDUX TOOLKIT example</div>
            <div>Total items: {amount}</div>
        </div>
    )
   
}

   

export default NavBar;