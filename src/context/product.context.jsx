import {createContext,useState} from 'react';
import productsArr from '../shop-Data.json';

export const ProductsContext= createContext({
    products:[]
});

export const ProductsProvider=({children})=>{
    const [products,setProducts]= useState(productsArr);
    const value= {products};
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}