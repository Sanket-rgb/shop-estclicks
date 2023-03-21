import { localDBSize } from "@/Utils/localStorage";
import React, { useEffect } from "react";

// useEffect(() => {
//   const cart = localDBSize();
//   console.log(cart);
// });
const CartContext = React.createContext({
  cartSize: "0",
  setCartSize: (size) => {},
});

export default CartContext;
