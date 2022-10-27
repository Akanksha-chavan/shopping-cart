import {createContext,useState,useEffect} from 'react';
import {addCollectionAndDocuments,getCollectionAndDocuments} from '../utils/firebase/firebase.utils';
import {SHOP_DATA} from '../shop-Data.js';

export const CategoriesContext= createContext({
    categoryMap:[]
});

export const CategoriesProvider=({children})=>{
    const [categoryMap,setCategoryMap]= useState([]);

    // need only for 1 time to add values in firebase db
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA);
    // },[]);

    useEffect(()=>{
        const getCategoriesMap= async()=>{
            const categoryMap= await getCollectionAndDocuments();
            setCategoryMap(categoryMap);
        }

        getCategoriesMap();
    },[]);

    const value= {categoryMap};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}