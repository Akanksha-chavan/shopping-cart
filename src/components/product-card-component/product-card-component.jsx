import './product-card-component.scss'
import Button from '../buttonComponent/buttonComponent';
import {CartDropDownContext} from '../../context/cart-dropdown.context';
import {useContext} from 'react';

const ProductCard=({product})=>{

    const {AddItemstoCart}= useContext(CartDropDownContext);
    const {name,price,imageUrl}= product;

    const handleClick=()=>{
        AddItemstoCart(product);
    }

    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={handleClick}> Add to cart </Button>
        </div>
    );
}

export default ProductCard;