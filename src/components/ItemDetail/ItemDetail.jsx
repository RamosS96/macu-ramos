import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';


function ItemDetail({item}) {
    const [quantityProducts, setQuantityToAdd] = useState();

    function addHandler(quantityToAdd){
        setQuantityToAdd(quantityToAdd);
    }


    return (
        <>
         <div className='img-detailContainer'>
            <img className='img-itemDetail' src={item?.src} alt='img detail'/>
         </div>
         <div className='itemDetail-container'>
            <h4>{item?.name}</h4>
            <p>{item?.description}</p>
            <span>{item?.price}</span>
            <ItemCount initial={0} stock={item?.stock} onAdd={addHandler}></ItemCount>
         </div>     
        </>
    );
}

export default ItemDetail;