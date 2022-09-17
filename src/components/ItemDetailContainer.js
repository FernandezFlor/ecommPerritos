import React, {useState, useEffect} from 'react'
import {customFetch} from './customFetch.js'
import ItemDetail from './ItemDetail.js'
const {products}=require('./products');

const ItemDetailContainer=()=>{

    const [dato, setDato] =useState({});
   useEffect(()=>{
    customFetch(2000, products[2])
    .then(result=>setDato(result))
    .catch(err=>console.log(err))
   }, [])

    return(
        <>
        <div><ItemDetail item={dato}/></div>
        </>
    );
}

export default ItemDetailContainer;