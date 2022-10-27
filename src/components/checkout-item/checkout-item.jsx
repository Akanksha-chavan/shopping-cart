import {useContext} from 'react';
import {CartDropDownContext} from '../../context/cart-dropdown.context';
import './checkout-item.scss';

export const CheckoutItem=({item})=>{
    const {name,quantity, imageUrl, price} = item;
    const {AddItemstoCart,RemoveItemsfromCart,ClearItemfromCart}= useContext(CartDropDownContext);
    return(
        <div className='checkout-item-container'> 
            <div className='image-container'>        
                <img src={imageUrl} alt={`${name}`} />
            </div>   
            <div className='checkout-item-name' > {name} </div>
            <div className='checkout-item-quantity'>
                <div className='quantity' onClick={()=>RemoveItemsfromCart(item)}> &#10094; </div>
                <div className='quantity'> {quantity} </div>
                <div className='quantity' onClick={()=>AddItemstoCart(item)}> &#10095;</div> 
            </div>
            <div className='checkout-item-price' > {price} </div>
            <div onClick={()=>ClearItemfromCart(item)}> &#10005;</div>
        </div>
    )
}
