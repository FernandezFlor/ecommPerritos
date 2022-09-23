import React, {useState} from 'react'
import Contador from './ItemCount'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

const ItemDetail = ({product}) =>{

    const [itemCount, setItemCount] = useState(0);
    
    const onAdd = (stock) => {
    alert("seleccionaste " + stock  + " productos.");
    setItemCount(stock);
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
            :<Link to='cart'><Button variant="container">verificacion</Button></Link>
        }
       
        </>
    )
}

export default ItemDetail;