import React, { createContext, useEffect, useState } from "react";
import { toast } from 'react-hot-toast';

export const CartContext=createContext();

export const CartProvider=({children})=>{

    // const [isAuthenticate,setIsAuthenticate]=();
    const [cartItems,setCartItems]=useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
    
    const notifySuccess=()=>
    toast('Add to Cart Successfull!',{
        position:"top-center",
        style:{
            backgroundImage:'linear-gradient(to right,red,white)',
            color:'black',
            // duration:1000,
        },
    });
    const notifyRemove=()=>
        toast('remove from Cart',{
            position:"top-center",
            style:{
                backgroundImage:'linear-gradient(to right,red,orange)',
                color:'white',
            },
        });
    
    // const notifySuccess=()=>toast.success('Operation successfull!');
    // const notifyError=()=>toast.error('Something went wrong!');
    // const [count,setCount]=useState(0); 

    const addToCart=(item)=>{
        const isItem=cartItems.find((cart)=>cart._id===item._id);
        if(isItem){
            setCartItems(
                cartItems.map((cartt)=>
                    cartt._id===item._id
                    ? {...cartt,quantity:cartt.quantity+1}
                    : cartt
                )
            );
        }
        else{
            setCartItems([...cartItems,{...item,quantity:1}]);
        }
        // setCartItems([...cartItems,item])
        notifySuccess();
    };

    const removeFromCart=(items)=>{
        const isItem=cartItems.find((cart)=>cart._id===items._id);
        if(isItem.quantity===1){
            setCartItems(cartItems.filter((cartt)=>cartt._id !== items._id));
        }else{
            setCartItems(
                cartItems.map((cartt)=>
                cartt._id === items._id ? {...cartt,quantity: cartt.quantity-1}
                :cartt
                )
            );
        }
        // setCartItems(cartItems.filter((item) => item._id !== items._id));
        notifyRemove();
    };

    const clearCart = () =>{
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total,item) => total+item.ticketprice * item.quantity,0);
    }
        
    useEffect(()=>{
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
    },[cartItems]);

    useEffect(()=>{
        const cartItems=localStorage.getItem("cartItems");
        if(cartItems){
            setCartItems(JSON.parse(cartItems));
        }
    },[]);

    

    return(
        <>
            <CartContext.Provider value={{notifySuccess,cartItems,addToCart,removeFromCart,getCartTotal,clearCart}}>
                {children}
            </CartContext.Provider>
        </>
    );
};