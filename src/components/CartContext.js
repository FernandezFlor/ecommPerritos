import { createContext, useState } from "react";

export const CartContext =createContext();

const CreateCartContext=({children})=>{
    const [cartList, setCartList]= useState(['Coca Cola','Cocucha']);
    const addItem=(product,qty)=>{
        setCartList([...cartList,product]);
    }

    const clear = () =>{
        setCartList([]);
    }

    const removeItem = (id) =>{
        setCartList(cartList.filter(product => product.id !== id))
    }


    return(
        <>
        
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
        </>
    );
    
}

export default CreateCartContext;