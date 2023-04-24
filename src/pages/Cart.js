import CartContext from "@/components/store/cart-context"
import Button from "@/components/UI/Button"
import getStripe from "@/lib/getStripe"
import {
  addItemToCart,
  cartTotal,
  decrementItemFromCart,
  deleteItemFromCart,
  getInstance,
} from "@/Utils/localStorage"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, { useContext, useEffect, useState } from "react"

import classes from "../styles/Cart/Cart.module.scss"
const Cart = () => {
  const [cartList, setCartList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [valueChange, setValueChange] = useState("")
  const { setCartSize } = useContext(CartContext)
  // const [cartTotal, setCartTotal]

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"))
    if (!cart) {
      setCartList([])
    } else {
      setCartList(JSON.parse(localStorage.getItem("cart")))
    }
    setIsLoading(false)
  }, [valueChange])

  const decrementItemHandler = (name) => {
    decrementItemFromCart(name)
    setCartSize((prevState) => {
      return (+prevState - 1).toString()
    })
    setValueChange(Math.random().toString())
  }

  const incrementItemHandler = (name, price) => {
    addItemToCart(name, price, "1")
    setCartSize((prevState) => {
      return +prevState + 1
    })
    setValueChange(Math.random().toString())
  }

  const removeItemHandler = (name, quantity) => {
    deleteItemFromCart(name)
    setCartSize((prevState) => {
      return (+prevState - +quantity).toString()
    })
    setValueChange(Math.random().toString())
  }

  const handleCheckout = async () => {
    const stripe = await getStripe()
    // console.log(cartList)
    const response = await fetch("/api/stripe", {
      // mode: "no-cors",
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(cartList),
    })

    if (response.status === 500) return

    console.log(response)
    const data = await response.json()

    console.log(data)
    // toast.loading("Redirecting...")

    stripe.redirectToCheckout({
      sessionId: data.id,
    })
  }

  return (
    <div className={classes.cart}>
      <Head>
        <title>Cart | estclicks</title>
        <meta name="description" content="estclicks cart summary." key="desc" />
      </Head>
      <h1>cart</h1>
      {isLoading && <div>Loading...</div>}
      {cartList.length === 0 && (
        <div className={classes["empty-cart"]}>Your cart is empty!</div>
      )}

      {!isLoading &&
        cartList !== 0 &&
        cartList.map((cartlist, idx) => (
          <div key={idx} className={classes["cart-contents"]}>
            <div className={classes["inc-dec-button-container"]}>
              <Button
                className={classes["inc-dec-buttons"]}
                onClick={() => decrementItemHandler(cartlist.name)}
              >
                <Image
                  fill
                  alt="decrease"
                  src="https://cdn.shopify.com/s/files/1/0516/4082/8070/t/2/assets/minus.svg"
                ></Image>
              </Button>
              <Button
                className={classes["inc-dec-buttons"]}
                onClick={() =>
                  incrementItemHandler(cartlist.name, cartlist.price)
                }
              >
                <Image
                  fill
                  alt="increase"
                  src="https://cdn.shopify.com/s/files/1/0516/4082/8070/t/2/assets/plus.svg"
                ></Image>
              </Button>
            </div>
            <div className={classes["product-details"]}>
              <div className={classes["item-count"]}>
                {cartlist.quantity} x {cartlist.name}
              </div>
              <div className={classes["item-subtotal"]}>
                ${+cartlist.price * +cartlist.quantity},00
              </div>
            </div>

            <Button
              className={classes["inc-dec-buttons"]}
              onClick={() =>
                removeItemHandler(cartlist.name, cartlist.quantity)
              }
            >
              <Image
                fill
                alt="delete"
                src="https://cdn.shopify.com/s/files/1/0516/4082/8070/t/2/assets/x.svg"
              ></Image>
            </Button>
          </div>
        ))}

      {cartList.length !== 0 && (
        <div className={classes["cart-total"]}> ${cartTotal()},00</div>
      )}
      <div className={classes["checkout-buttons"]}>
        {cartList.length !== 0 && (
          <Button className={classes.button} onClick={handleCheckout}>
            checkout now
          </Button>
        )}
        <Link href="/" className={classes["button-wrapper"]}>
          <Button className={classes.button}>keep shopping</Button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
