import React, {useEffect, useState} from 'react';

function ShopCart({item,stock,imgsrc}) {
  let [itemCount, setCount] = useState(0);

  function useAddItem (){

  if (itemCount< stock && itemCount> 0){
    alert(item+" agregado correctamente")
  } else if (itemCount == 0){
    alert("No ha seleccionado productos")
  } else {
    alert("Ha dejado sin stock a la empresa")
  }
}

  return (
    <div className='shop-card'>
        <h4>{item}</h4>
        <img className='card-img' src={imgsrc} alt="Item Image"/>
        <div className='card-btns'>
          <button onClick={()=>setCount((itemCount>0 ? itemCount-1 : itemCount=0))}> - </button>
          <span>{itemCount}</span>
          <button onClick={()=>setCount((itemCount<stock ? itemCount+1 : itemCount=itemCount))} > + </button>
        <button onClick={useAddItem}>Agregar al Carrito</button>
        </div>
    </div>
  );
}


export default ShopCart;
