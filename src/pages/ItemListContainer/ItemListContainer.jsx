import { useParams } from "react-router-dom";
import ShopCard from "../../components/Cards/ShopCard";
import { collection, query, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";

const getProducts = () => {
    const db = getFirestore();
    const productCollection = collection(db, 'items');

    const q = query(
        productCollection
    );

    return getDocs(q);
}


function ItemListContainer({ title }) {
 const [productos, setProductos] = useState([]);
 const {categoryID} = useParams();

useEffect(()=>{ 
    getProducts(categoryID)
    .then(snapshot => {
        setProductos(snapshot.docs.map(doc => {
            return {...doc.data(), id: doc.id}
        }));
    })
},[categoryID]
)


    return (
        <div>
             { <h1>{title} </h1>}
            {productos.map((u) => <ShopCard item={u} key={u.id}/>)}  
        </div>
    );
}

export default ItemListContainer;