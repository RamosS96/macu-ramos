import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailMini from '../../components/ItemDetail/ItemDetailMini';
import { collection, query, getDocs, getFirestore } from 'firebase/firestore';

const getProducts = () => {
  const db = getFirestore();
  const productCollection = collection(db, 'items');

  const q = query(
      productCollection
  );

  return getDocs(q);
}


function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
      getProducts(id)
          .then(snapshot => {
            (snapshot.docs.map(doc => { 
              if (doc.id === id){
               setItem({...doc.data(), id : doc.id});
              }
              
              
            }));
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