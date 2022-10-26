import './cart-dropdown.scss';
import Button from '../buttonComponent/buttonComponent';

export const CartDropdown = ()=>{
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>

            </div>
            <Button>Go to Checkout</Button>
        </div>
    );
}
