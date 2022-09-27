import { createContext, useState } from "react";

export const CartContext=createContext();

const CreateCartContext=({children})=>{
    const [cartList, setCartList]= useState([]);
    const isInCart=(id)=>{
        return cartList.filter(product => product.id==parseInt(id)).length>0;
    }//true or false
    
   const addItem=(product,quantity)=>{
        
        if(isInCart(product.id)){
            let array = cartList.map(element=>(
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

    const qtyProd=()=>{
        let qtys=cartList.map(product=>product.quantity);
        return qtys.reduce(((previousValue, currentValue)=>previousValue+currentValue), 0);
    }

    return(
        <>
        
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, qtyProd}}>
            {children}
        </CartContext.Provider>
        </>
    );
}
    


export default CreateCartContext;