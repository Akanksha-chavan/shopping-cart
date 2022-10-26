import {ProductsContext} from '../../context/product.context';
import {useContext} from 'react';
import ProductCard from '../../components/product-card-component/product-card-component';
import './shop-component.scss';

const Shop=()=>{ 
    const {products}= useContext(ProductsContext);

    return(
        <div className='products-main-container'>
            {products.map((product)=> <ProductCard key={product.id} product={product}/>)}
        </div>
    );
}

export default Shop;