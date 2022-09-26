import { createContext, useState } from "react";

export const CartContext=createContext();

const CreateCartContext=({children})=>{
    const [cartList, setCartList]= useState(['Coca Cola','Cocucha']);
    const isInCart=(id)=>{
        return cartList.filter(product => product.id==parseInt(id)).length>0;
    }//true or false
    
   const addItem=(product,quantity)=>{
        
        if(isInCart(product.id)){
            let array = cartList.map(element=>(
                //Si el elemento no tiene ese id devuelve el mismo elemento 
                //De ser coincidir se envia el objeto con la cantidad incrementada
                (element.id!=product.id)? 
                element:
                {
                    id:element.id,
                    name:element.name,
                    stock:element.stock,
                    price:element.price,
                    quantity : element.quantity+quantity,
                    key: element.id
                }
            ))
            setCartList(array);
        }else{
            product.quantity=quantity;
            setCartList([...cartList, product]);   
            product.stock=product.stock-product.quantity;
        }
    }

    const clear = () =>{
        setCartList([]); //reescribe el cartList vacío 
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