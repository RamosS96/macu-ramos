import { createContext } from "react";

const CartContext = createContext({
  cartProducts: []
});

export const CartContextProvider = ({ children }) => {
  return (
    <CartContext.Provider value={
      { cartProductos: cartProducts }
    }>
      {children}
    </CartContext.Provider>
  )
}