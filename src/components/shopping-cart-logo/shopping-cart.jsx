import {ReactComponent as ShoppingCartImg} from '../../assets/shoppingBag.svg';
import './shopping-cart.scss';
import {useContext} from 'react';
import {CartDropDownContext} from '../../context/cart-dropdown.context';

export const ShopCart=()=>{
 const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartDropDownContext);

 const handleClick= ()=>{
    setIsCartOpen(!isCartOpen);
 }

 return(
    <div className='cart-icon-container' onClick={handleClick}>  
        <ShoppingCartImg className='shop-icon'/>
        <span className='item-count'>{cartCount}</span>
    </div>
 );
}

