import ProductCard from '../product-card-component/product-card-component';
import './category-preview.styles.scss';
import {Link} from 'react-router-dom';

export const CategoryPreview=({title,products})=>{
    return(
        <div className='category-preview-container'>
            <h2> <Link to={title}>{title}</Link> </h2>
            <div className='preview'> 
                {products.filter((_,ind)=>ind<4)
                 .map((product)=>
                    <ProductCard key={product.id} product={product}/>
                )}
            </div>
        </div>
    );
}
