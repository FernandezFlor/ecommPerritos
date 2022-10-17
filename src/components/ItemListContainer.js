import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {db} from '../utils/firebaseConfig';
import {collection, getDocs, where, query} from "firebase/firestore";


const ItemListContainer=()=>{

   const [listProducts, setListProducts]=useState([]);
   const {categoria}=useParams();
   
   useEffect(()=>{
    if(categoria){
      const getData = async ()=>{
        const q = query(collection(db, "products"), where('categoria', '==', categoria))
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(product => ({
          id: product.id,
          ...product.data()
        }))
          setListProducts(dataFromFirestore)
      }
      getData();


    }else{
    const getData = async ()=>{
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFromFirestore = querySnapshot.docs.map(product => ({
      id: product.id,
      ...product.data()
    }))
      setListProducts(dataFromFirestore)
  }
  getData();
}
}, [categoria]);
    return(
        <>
        <div><ItemList listProducts={listProducts}/></div>
        </>
    )
}

export default ItemListContainer;