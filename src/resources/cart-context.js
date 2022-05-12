import { createContext } from "react";

const CartContext = createContext({
  cartProducts: [],
  addProductCart: () => { },
  removeProductCart: () => { },
  clearCart: () => { },
  isInCart: () => { },
  getCartQuantity: () => { }
});

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addProductCart = (product) => {
    
  }

  return (
    <CartContext.Provider value={
      { cartProductos: cartProducts }
    }>
      {children}
    </CartContext.Provider>
  )
}