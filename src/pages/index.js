import Body from "@/components/Layout/Body"
import Footer from "@/components/Layout/Footer"
import Head from "next/head"
import { Fragment, useState } from "react"

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Shop | estclicks</title>
        <meta
          name="description"
          content="Check out the collection of unique photographs."
          key="desc"
        />

        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Body />
      <Footer />
    </Fragment>
  )
}
