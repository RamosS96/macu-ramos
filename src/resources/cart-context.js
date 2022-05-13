import { createContext, useState } from "react";

const CartContext = createContext({
  cartProducts: [],
  addProductCart: () => { },
  removeProductCart: () => { },
  clearCart: () => { },
  isInCart: () => { },
  getCartTotalPrice: () => { }
});

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addProductCart = (product) => {
    setCartList([product, ...cartList]) 
  };

  const removeProductCart = (product) => {
    const itemToRemove = cartList.findIndex(item => item.id === product.id);
    (itemToRemove !== -1) && setCartList(cartList.filter(i => i.id !== product.id))
  };

  const clearCart = () => {
    setCartList([])
  };

  const isInCart = (product) => {
    const itemSearchCart = cartList.find(product)
    itemSearchCart !== undefined && console.log("El item se encuentra en el carrito actualmente")
  };

  const getCartTotalPrice = () => {
    return cartList.reduce((total, value) => {
      return total + value.price
    },0)
  }

  return (
    <CartContext.Provider value={
      { cartProducts: cartList,
      addProductCart,
    removeProductCart,
  clearCart,
isInCart,
getCartTotalPrice }
    }>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;