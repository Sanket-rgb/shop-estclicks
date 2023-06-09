import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import CartContext from "../store/cart-context"
import classes from "../../styles/Layout/Header.module.scss"
const Header = () => {
  const { cartSize } = useContext(CartContext)

  return (
    <header className={classes.header}>
      <Link href="/" className={classes["logo-container"]}>
        <Image
          placeholder="blur"
          blurDataURL="default"
          src="/CartIcon/skyline5.jpeg"
          alt="Cart - estclicks"
          fill
          sizes="(max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw"
        ></Image>
      </Link>

      <Link href={{ pathname: "/Cart" }} className={classes["cart-wrapper"]}>
        <div className={classes.quantity}>{cartSize}</div>

        <Image
          src="https://cdn.shopify.com/s/files/1/0516/4082/8070/t/2/assets/cart.svg"
          alt="Cart - estclicks"
          width={30}
          height={23}
        ></Image>
      </Link>
    </header>
  )
}

export default Header
