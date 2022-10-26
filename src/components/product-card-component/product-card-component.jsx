import './product-card-component.scss'
import Button from '../buttonComponent/buttonComponent';

const ProductCard=({product})=>{
    const {name,price,imageUrl}= product;
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={console.log("clicked")}> Add to cart </Button>
        </div>
    );
}

export default ProductCard;