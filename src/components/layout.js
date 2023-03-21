import { localDBSize } from "@/Utils/localStorage";
import React, { useEffect, useState } from "react";
import Header from "./Layout/Header";
import CartContext from "./store/cart-context";

const Layout = ({ children }) => {
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    setCartSize(localDBSize());
  }, [cartSize]);

  // console.log(cartSize);
  return (
    <>
      <CartContext.Provider value={{ cartSize, setCartSize }}>
        <Header />
        {children}
      </CartContext.Provider>
    </>
  );
};

export default Layout;
