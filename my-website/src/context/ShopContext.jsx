import React from 'react';
import {createContext, useState} from 'react'
import { PRODUCTS } from '../products';
export const ShopContext = createContext(null);

export const getDefaultCart = ()=>{
    let cart = {};
    for(let i = 1 ; i < PRODUCTS.length + 1 ; i++){
        cart[i] = 0;
    }
    return cart;
}
export const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart());
    const getTotalAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product)=>product.id === Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
    }
    const removeToCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}));
    }
    const updateAmount = (itemId,value)=>{
        setCartItems((prev)=>({...prev,[itemId]:value}));
    }
    const contextValue = {cartItems,addToCart,removeToCart,updateAmount,getTotalAmount };

    console.log(cartItems);

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}