const { localDBSize } = require("@/Utils/localStorage");
const { useEffect, useState, default: React } = require("react");

export const CartList = () => {
  const [cartSize, setCartSize] = useState(0);
  useEffect(() => {
    setCartSize(localDBSize());
  }, []);

  return cartSize;
};

// export const Cart = React.createContext({
//   cartSize: 0,
//   setCartList: () => {},
// });
