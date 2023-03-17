import classes from "./Body.module.css"

import { images } from "@/Utils/Photos"
import ImageComponent from "../Images/ImageComponent"
import ProductDetails from "../../pages/Product/ProductDetails"
import Link from "next/link"
const Body = () => {
  //   const photoList =
  return (
    // <ProductDetails />
    <div className={classes["grid-container"]}>
      {images.map((image, idx) => (
        <ImageComponent key={idx} data={image} />
      ))}
    </div>
  )
}

export default Body
