import { useContext, useState } from "react"
import CartContext from "../../components/store/cart-context"
import Button from "../../components/UI/Button"

import classes from "./ProductQuantitySelector.module.css"
const ProductQuantitySelector = (props) => {
  const [quantity, setQuantity] = useState("0")

  const { setCartSize } = useContext(CartContext)

  const decrementQuantity = () => {
    if (+quantity <= 0) {
      return
    }
    setQuantity((+quantity - 1).toString())
  }

  const increaseQuantity = () => {
    if (+quantity >= props.quantity / 2) {
      return
    }
    setQuantity((+quantity + 1).toString())
  }
  const addToCart = () => {
    setCartSize((prevState) => {
      return +prevState + +quantity
    })
    setQuantity("0")
  }
  return (
    <>
      <div className={classes.wrapper}>
        <Button onClick={decrementQuantity}>-</Button>
        <h4>{quantity}</h4>
        <Button onClick={increaseQuantity}>+</Button>
      </div>
      <Button className={classes.button} onClick={addToCart}>
        add to cart
      </Button>
    </>
  )
}

export default ProductQuantitySelector
