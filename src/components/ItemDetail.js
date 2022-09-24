import React, {useState} from 'react'
import Contador from './ItemCount'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import { useContext } from 'react';
import {CartContext} from './CartContext.js'



const ItemDetail = ({product}) =>{
    const ctx=useContext(CartContext);
    const [itemCount, setItemCount] = useState(0);
    
    const onAdd = (qty) => {
    alert("seleccionaste " + qty  + " "+product.name+" teniendo que pagar un total de: $"+qty*product.price);
    setItemCount(qty);
    ctx.addItem(product,qty)
}

    return(
        <>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <img src={product.img} alt="asdsd"/>
        <div>{product.details}</div>  
        {
            itemCount === 0
            ?<Contador stock={product.stock} initial={itemCount} onAdd={onAdd}/>
            :<Link to='cart'><Button variant="container">Checkout</Button></Link>
        }
       
        </>
    )
}

export default ItemDetail;