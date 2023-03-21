import { localDBSize } from "@/Utils/localStorage";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import { CartList } from "../store/cart-list";
import classes from "./Header.module.css";
const Header = () => {
  const { cartSize, setCartSize } = useContext(CartContext);

  return (
    <header className={classes.header}>
      <Link href="/" className={classes["logo-container"]}>
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

      <Link href={{ pathname: "/Cart" }} className={classes["cart-wrapper"]}>
        <div className={classes.quantity}>{cartSize}</div>

        <Image
          // className={classes.image}
          src="https://cdn.shopify.com/s/files/1/0516/4082/8070/t/2/assets/cart.svg"
          alt="Cart - estclicks"
          width={30}
          height={23.93}
        ></Image>
      </Link>
    </header>
  );
};

export default Header;
