import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.js'
import products from './products.js'
const ItemDetailContainer=()=>{

    const [item, setItem]=useState({})

    const {id}=useParams()
    console.log(id)

    const customFetch=(products)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(id){
                    resolve(products.find(item=>item.id==id));
                }else resolve(products);
            }, 2000)
        })
    }

    useEffect(()=>{
        setTimeout(()=>{
            customFetch(products).then((data)=>{
                setItem(data);
            });
        }, 2000)
    }, [id]);

    return(
        <>
        <div><ItemDetail item={item}/></div>
        </>
    );
}

export default ItemDetailContainer;