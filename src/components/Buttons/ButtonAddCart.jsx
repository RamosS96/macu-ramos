import React from 'react';
import './ButtonAddCart.css';

function ButtonAddCart({content, fn}) {
  return (
    <button className='btn-add-cart' onClick={fn}>
        {content}
    </button>
  );
}

export default ButtonAddCart;