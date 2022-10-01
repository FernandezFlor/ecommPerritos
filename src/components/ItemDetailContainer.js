import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.js'
import { db } from '../utils/firebaseConfig';
import { doc, getDoc ,query} from "firebase/firestore";

const ItemDetailContainer =() =>{
    const [item, setItem] = useState({})

    const {id} = useParams()
    console.log(id)

    useEffect(()=>{ 
        async function GetFBData(){
            const product = query(doc(db, "products",id))
            const docSnap = await getDoc(product);
            setItem({...docSnap.data(),id:id})
        }
        GetFBData()
    }, [id]);

    return(
        <>
            <ItemDetail product = {item}/>
        </>
    )
}


export default ItemDetailContainer;