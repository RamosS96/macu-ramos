import React from 'react';


function ItemDetail({item}) {
    return (
        <>
         <div className='img-detailContainer'>
            <img className='img-itemDetail' src={item?.src} alt='img detail'/>
         </div>
         <div className='itemDetail-container'>
            <h4>{item?.name}</h4>
            <p>{item?.description}</p>
            <span>{item?.price}</span>

         </div>     
        </>
    );
}

export default ItemDetail;