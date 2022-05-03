import React from 'react';

function ItemDetail({props}) {
    return (
        <>
         <div className='img-itemDetail'>
            <img src={props.src} alt='img detail'/>
         </div>
         <div className='itemDetail-container'>
            <h4>{props.name}</h4>
            <p>{props?.description}</p>
            <span>{props.price}</span>
         </div>     
        </>
    );
}

export default ItemDetail;