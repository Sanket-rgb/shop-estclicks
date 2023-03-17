import Body from "@/components/Layout/Body"
import Footer from "@/components/Layout/Footer"
import Header from "@/components/Layout/Header"
import Link from "next/link"
import { Fragment } from "react"

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  )
}
