import { addItemToCart } from "@/Utils/localStorage";
import { useContext, useState } from "react";
import CartContext from "../../components/store/cart-context";
import Button from "../../components/UI/Button";

import classes from "./ProductQuantitySelector.module.css";
const ProductQuantitySelector = (props) => {
  const [quantity, setQuantity] = useState("0");

  const { setCartSize } = useContext(CartContext);

  const decrementQuantity = () => {
    if (+quantity <= 0) {
      return;
    }

    setQuantity((+quantity - 1).toString());
  };

  const increaseQuantity = () => {
    if (+quantity >= props.data.quantity / 2) {
      return;
    }

    setQuantity((+quantity + 1).toString());
  };
  const addToCart = (name, price) => {
    addItemToCart(name, price, quantity);

    setCartSize((prevState) => {
      return (+prevState + +quantity).toString();
    });
    setQuantity("0");
  };

  return (
    <div className={classes["info-buttons"]}>
      <div className={classes["inc-dec-buttons"]}>
        <Button onClick={decrementQuantity}>-</Button>
        <h4>{quantity}</h4>
        <Button onClick={increaseQuantity}>+</Button>
      </div>
      <Button
        className={classes["add-to-cart"]}
        onClick={() => addToCart(props.data.description, props.data.price)}
      >
        buy now
      </Button>
    </div>
  );
};

export default ProductQuantitySelector;
