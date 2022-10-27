import './cart-dropdown.scss';
import Button from '../buttonComponent/buttonComponent';
import {CartItem} from '../cart-items/cart-items.component';
import {useContext} from 'react';
import {CartDropDownContext} from '../../context/cart-dropdown.context';
import {useNavigate} from "react-router-dom"

export const CartDropdown = ()=>{
    const {cartItems,setIsCartOpen} = useContext(CartDropDownContext);
    const navigate= useNavigate();

    const handleCheckout=()=>{
        navigate('/checkout');
        setIsCartOpen(false);
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item)=><CartItem key={item.id} item={item}/>)}
            </div>
            <Button onClick={handleCheckout}>Go to Checkout</Button>
        </div>
    );
}
