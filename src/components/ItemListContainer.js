import React, {useState, useEffect} from 'react'
import productos from './products.js'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer=({greeting})=>{

   const [listProducts, setListProducts]=useState([]);
   const {categoria}=useParams();
   
   const customFetch=(products)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (categoria){
                resolve(productos.filter((item)=>item.categoria===categoria));
            }else resolve(products);
        },2000);
    });
   };
   
   useEffect(()=>{
    customFetch(productos).then((data)=>setListProducts(data));
   }, [categoria]);
    return(
        <>
        <div><ItemList listProducts={listProducts}/></div>
        </>
    )
}

export default ItemListContainer;