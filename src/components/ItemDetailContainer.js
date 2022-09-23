import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.js'
import products from './products.js'

const ItemDetailContainer =() =>{
    const [item, setItem] = useState({})

    const {id} = useParams()
    console.log(id)

    const customFetch =(productos) =>{
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                if(id){
                    resolve(products.find((item) => item.id == id));  
                }else resolve(productos);
            }, 2000);
        });
    };
    
    useEffect(()=>{
        setTimeout(()=>{
            customFetch(id)
            .then(data => {setItem(data)})
        },2000);
    }, [id])
    console.log(item)
    return(
        <>
            <ItemDetail product = {item}/>
        </>
    )
}


export default ItemDetailContainer;