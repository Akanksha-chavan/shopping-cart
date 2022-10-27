import {useContext} from 'react';
import {CartDropDownContext} from '../../context/cart-dropdown.context';
import './checkoutPage.scss';
import {CheckoutItem} from '../../components/checkout-item/checkout-item';

const CheckoutPage=()=>{
    const {cartItems,total}= useContext(CartDropDownContext);
    return(
        <div className='checkout-container'>
                <div className='header-block'>
                    <div className='block'>
                        <span> Product </span>
                    </div>

                    <div className='block'>
                        <span> Description </span>
                    </div>

                    <div className='block'>
                        <span> Quantity </span>
                    </div>

                    <div className='block'>
                        <span> Price </span>
                    </div>

                    <div className='block'>
                        <span> Remove </span>
                    </div>
                </div>

                {cartItems.map((item)=>{
                    return(
                        <CheckoutItem key={item.id} item={item}/>
                    );
                    })
                }
                <div className='total'>Total:${total}</div>
        </div>
    );
}

export default CheckoutPage;