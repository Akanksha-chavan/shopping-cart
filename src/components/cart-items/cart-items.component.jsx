import './cart-items.styles.scss';

export const CartItem=({item})=>{
    const {name,imageUrl,price,quantity}= item;
    return (
        <div className='cart-items-container'>
            <img className='cart-image' src={imageUrl} alt={`${name}`}/>
            <div className='cart-text'>
                <span>{name}</span>
                <span>{quantity} x {price}</span>
            </div>
        </div>
    );
}
