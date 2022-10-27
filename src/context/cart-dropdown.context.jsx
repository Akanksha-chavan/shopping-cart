import {createContext, useState, useEffect} from 'react';

export const CartDropDownContext = createContext({
   isCartOpen:false,
   setIsCartOpen:()=>{},
   cartItems:[],
   AddItemstoCart:()=>{},
   cartCount:0,
   setCartCount:()=>{},
   RemoveItemsfromCart:()=>{},
   ClearItemfromCart:()=>{},
   total:0
});

const AddItemToCart=(cartItems,productToAdd)=>{
   let isItemExist= cartItems.find((item)=>item.id === productToAdd.id);
   if(isItemExist){
      return cartItems.map((item)=>item.id === productToAdd.id ? {...item, quantity:item.quantity+1}:item);
   }else{
      return [...cartItems,{...productToAdd,quantity:1}];
   }
}

const RemoveItemfromCart=(cartItems,itemToRemove)=>{
   let item= cartItems.find((item)=>item.id === itemToRemove.id);
      
   if(item.quantity>1){
         return cartItems.map((item)=>item.id === itemToRemove.id ? {...item, quantity:item.quantity-1}:item);
   }else{
         return cartItems.filter(item=>item.id !== itemToRemove.id);
   }
}

export const CartDropDownProvider= ({children})=>{

   const[isCartOpen,setIsCartOpen]=useState(false);
   const[cartItems,setCartItems]=useState([]);
   const[cartCount,setCartCount]=useState(0);
   const[total,setTotal]= useState(0);

   useEffect(()=>{
      const newCartCount= cartItems.reduce((total,item)=>total+item.quantity,0);
      setCartCount(newCartCount);
   },[cartItems])

   useEffect(()=>{
      const newCartTotal= cartItems.reduce((totalCost,item)=>totalCost+(item.quantity*item.price),0);
      setTotal(newCartTotal);
   },[cartItems])

   const AddItemstoCart=(productToAdd)=>{
      setCartItems(AddItemToCart(cartItems,productToAdd));
   }

   const RemoveItemsfromCart= (itemToRemove)=>{
      setCartItems(RemoveItemfromCart(cartItems,itemToRemove));
   }

   const ClearItemfromCart=(itemToClear)=>{
      let newCartItems= cartItems.filter(item=>item.id !== itemToClear.id);
      setCartItems(newCartItems);
   }

   const value={isCartOpen,setIsCartOpen,cartItems,AddItemstoCart,cartCount,RemoveItemsfromCart,ClearItemfromCart,total};
   return <CartDropDownContext.Provider value={value}> {children} </CartDropDownContext.Provider>
}



