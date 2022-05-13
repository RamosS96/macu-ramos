import { useParams } from "react-router-dom";
import ShopCard from "../../components/Cards/ShopCard";
import { initializeApp } from "firebase/app";
import { collection, query, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyDBVA0d5eVRdLbiZ73c9rnVvdzxedAw7v4",
    authDomain: "macu-app-sr.firebaseapp.com",
    projectId: "macu-app-sr",
    storageBucket: "macu-app-sr.appspot.com",
    messagingSenderId: "1042740416483",
    appId: "1:1042740416483:web:d848412c2b6da7b63a1ad6",
    measurementId: "G-PXBC978P1D"
  };
  
  initializeApp(firebaseConfig);
const db = getFirestore();

async function getProducts(){
    
    const itemCollection = collection(db, 'items');
    const itemSnapshot = await getDocs(itemCollection);
    const itemList = itemSnapshot.docs.map(doc => {return {...doc.data(), id: doc.id}})

    return itemList;
    
}

function ItemListContainer({ title }) {
 const [productos, setProductos] = useState();
 const {categoryID} = useParams();

useEffect(()=>{ 
    getProducts()
    .then(res => setProductos(res));
    
},[categoryID]
)
console.log(productos)

    return (
        <div>
             { <h1>{title} </h1>}
            {productos.map((u) => <ShopCard item={u}/>)}  
        </div>
    );
}

export default ItemListContainer;