import React from "react"

const CartContext = React.createContext({
  cartSize: "0",
  setCartSize: (size) => {},
})

export default CartContext
