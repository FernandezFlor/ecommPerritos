import { useState } from "react";

const ItemCount=()=>{
    const [itemCount, setItemCount]=useState(0);
    const stock=10;
    const initial=0;
    const handleAdd=()=>{
        if(itemCount<stock){
            setItemCount(itemCount+1);
        }
        
    }

    const handleDelete=()=>{
        if(itemCount>initial){
            setItemCount(itemCount-1);
        } 
    }

    const handleAddCart=()=>{
        
        setItemCount(itemCount);
    }
    
    return(
        <>
        <button onClick={()=> handleAdd()}>+</button>

        <button onClick={()=> handleDelete()}>-</button>
        
        <span>{itemCount}</span>

        <button onClick={()=> handleAddCart}>Agregar carrito</button>
        </>
    );
}

export default ItemCount;