import React, {useState, useEffect} from 'react'
import products from './products.js'
import {customFetch} from './customFetch.js'
import ItemList from './ItemList'

const ItemListContainer=({greeting})=>{

    const [listProducts, setListProducts] =useState([])
   useEffect(()=>{
    customFetch(products).then(data=>setListProducts(data))
   }, [])
    console.log(listProducts)
    return(
        <>
        <div><ItemList listProducts={listProducts}/></div>
        </>
    )
}

export default ItemListContainer;