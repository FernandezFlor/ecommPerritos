import { useState } from "react";

const ItemCount=({initial, stock, onAdd})=>{
    const [itemCount, setItemCount]=useState(0);
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

    return(
        <>
        <button onClick={()=> handleAdd()}>+</button>

        <button onClick={()=> handleDelete()}>-</button>
        
        <span>{itemCount}</span>

        <button onClick={()=> onAdd(itemCount)}>Agregar carrito</button>
        </>
    );
}

export default ItemCount;