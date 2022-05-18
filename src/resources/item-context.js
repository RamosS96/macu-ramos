import { createContext, useState } from "react";
import { collection, query, getDocs, getFirestore } from 'firebase/firestore'


function getProducts(){
    const db = getFirestore();
    const productCollection = collection(db, 'items');

    const q = query(
        productCollection
    );

    return getDocs(q);
}

    

const itemContext = createContext({
    products : []


});

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    getProducts()
    .then(snapshot => {
        setProducts(snapshot.docs.map(doc => {
            return {...doc.data(), id: doc.id}
        }));
    })
    return (
        <itemContext.Provider value={ { productsList: products} }>
          {children}
        </itemContext.Provider>
      )
} 

export default itemContext;