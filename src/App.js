import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartContainer from './components/CartContainer/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { totals } from './features/cartSlice';
import Modal from './components/Modal/Modal';

function App() {
  const {cartItems} = useSelector((state)=> state.cart)
  const {isOpen} = useSelector((state)=> state.modal)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(totals());

  },[cartItems])
  return (
    <div className="App">
      {isOpen && <Modal />}
      <NavBar/>
      <CartContainer/>
    </div>
  );
}

export default App;
