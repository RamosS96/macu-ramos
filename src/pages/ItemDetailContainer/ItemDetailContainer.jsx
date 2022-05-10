import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pantalon001 from "../../resources/img/Pantalon001.jpg";
import Pantalon002 from "../../resources/img/Pantalon002.jpg";
import Pantalon003 from "../../resources/img/Pantalon003.jpg";
import Pantalon004 from "../../resources/img/Pantalon004.jpg";
import ItemDetailMini from '../../components/ItemDetail/ItemDetailMini';

function getItem(id) {
  const myPromise = new Promise((resolve, reject) => {
    const productos = [
      {
          name: "Pantalon001",
          src: Pantalon001,
          stock:"5",
          id: 1,
          description: "Pantalon",
          price: "$550"
      },
      {
          name: "Pantalon002",
          src: Pantalon002,
          stock:"5",
          id: 2,
          description: "Pantalon",
          price: "$550"
      }, {
          name: "Pantalon003",
          src: Pantalon003,
          stock:"5",
          id: 3,
          description: "Pantalon",
          price: "$550"
      }, {
          name: "Pantalon004",
          src: Pantalon004,
          stock:"5",
          id: 4,
          description: "Pantalon",
          price: "$550"
      }
    ];
    const item = productos.filter(item => item.id ==id);
    setTimeout(() => {
      resolve(item[0]);
    }, 2000);
  });
  return myPromise;
}
function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
      getItem(id)
          .then(res => {
              setItem(res);
          })
          .catch(err => {
              console.log(err);
              alert('Ocurrio un error, revisar la consola!');
          });
  }, [id]);
  
  return (
    <div>
      <ItemDetailMini item={item} />
    </div>
  );
}

export default ItemDetailContainer;