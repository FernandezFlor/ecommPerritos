import React from 'react'


const ItemDetail = ({awa}) => {

    console.log(awa);
    return(
        <>
        <div>{awa.name}</div>
        <div>{awa.price}</div>
        <img src={awa.img} alt="asdsd"/>
        <div>{awa.details}</div>       
        </>
    )
}
export default ItemDetail;