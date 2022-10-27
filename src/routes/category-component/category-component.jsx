import {useParams} from 'react-router-dom';
import {useContext,useState,useEffect} from 'react';
import './category-component.scss'
import {CategoriesContext} from '../../context/categories.context';
import ProductCard from '../../components/product-card-component/product-card-component';

export const CategoryComponent=()=>{
  const {category}= useParams();
  const {categoryMap}= useContext(CategoriesContext);
  const [products,setProducts]= useState([]);
  
  useEffect(()=>{
    setProducts(categoryMap[category]);
  },[category,categoryMap]);
  
  return(
    <>
        <div className='category-title'>{category.toUpperCase()}</div>
        <div className='category-main-container'> 
            { products && products.map((product)=>
                <ProductCard key={product.id} product={product}/>)
            }
        </div>
    </>
  );
}