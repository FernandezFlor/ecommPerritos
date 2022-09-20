import React from 'react'


const ItemDetail = ({item}) => {

    return(
        <>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <img src={item.img} alt="asdsd"/>
        <div>{item.details}</div>       
        </>
    )
}
export default ItemDetail;