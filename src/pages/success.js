import Button from "@/components/UI/Button"
import Link from "next/link"
import React, { useEffect } from "react"

import classes from "../styles/SuccessPage/success.module.scss"
const Success = () => {
  useEffect(() => {
    localStorage.clear()
  })
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes["payment-successful-message"]}>
          <h2>
            Thank you for your order! Your purchase has been successfully
            processed and will be shipped to you as soon as possible.
            <br></br> You will receive a confirmation email shortly.
          </h2>
          <p>
            If you have any further questions or concerns, please do not
            hesitate to contact us at{" "}
            <Link href="mailto:estclicksofficial@gmail.com">
              estclicksofficial@gmail.com
            </Link>
          </p>
        </div>
        <Link href="/">
          <Button>keep shopping</Button>
        </Link>
      </div>
    </section>
  )
}

export default Success
