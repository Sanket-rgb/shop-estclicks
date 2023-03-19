import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import CartContext from "../store/cart-context"
import classes from "./Header.module.css"
const Header = (props) => {
  const { cartSize } = useContext(CartContext)

  return (
    <header className={classes.header}>
      <div className={classes["logo-container"]}>
        <Link href="/">
          <Image
            className={classes.image}
            src="/CartIcon/skyline5.jpeg"
            alt="Cart - estclicks"
            fill
            sizes="(max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw"
          ></Image>
        </Link>
      </div>
      <a className={classes["cart-wrapper"]}>
        <div className={classes.quantity}>{cartSize}</div>
        <div className={classes["image-container"]}>
          <Image
            className={classes.image}
            src="https://cdn.shopify.com/s/files/1/0516/4082/8070/t/2/assets/cart.svg"
            alt="Cart - estclicks"
            fill
          ></Image>
        </div>
      </a>
    </header>
  )
}

export default Header
