import React from 'react';

function CartCard({ props }) {


  return (
    <div>
      <div><img src={props.url} /></div>
      <div>
        <h5>{props.title}</h5>
        <p>{props.price}</p>
      </div>

    </div>
  );
}

export default CartCard;