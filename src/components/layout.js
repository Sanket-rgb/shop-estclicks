import React, { useState } from "react"
import Header from "./Layout/Header"
import CartContext from "./store/cart-context"

const Layout = ({ children }) => {
  const [cartSize, setCartSize] = useState("0")
  return (
    <>
      <CartContext.Provider value={{ cartSize, setCartSize }}>
        <Header />
        {children}
      </CartContext.Provider>
    </>
  )
}

export default Layout
