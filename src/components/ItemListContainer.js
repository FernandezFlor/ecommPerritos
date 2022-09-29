import React, {useState, useEffect} from 'react'
import productos from './products.js'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where } from "firebase/firestore";
import { db } from '../utils/firebaseConfig.js';
import {customFetch} from "./customFetch"

const ItemListContainer=({greeting})=>{

   const [listProducts, setListProducts]=useState([]);
   const {categoria}=useParams();
   
   useEffect(async()=>{
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFromFirestore = querySnapshot.docs.map(item=>({
        id: item.id,
        ...item.data()
    }))
    setListProducts(dataFromFirestore)
    }, [categoria]);

  
   
   useEffect(()=>{
    return(()=>{
        setListProducts([]);
    })
   }, []);
    return(
        <>
        <div><ItemList listProducts={listProducts}/></div>
        </>
    )
}

export default ItemListContainer;