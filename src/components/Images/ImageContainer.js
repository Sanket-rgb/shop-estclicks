import Link from "next/link"
import classes from "./ImageComponent.module.css"

import { colors } from "@/Utils/Photos"
const ImageContainer = (props) => {
  // var random_color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div
      style={{ background: props.data.color }}
      className={classes["grid-cell"]}
    >
      <div className={classes["image-container"]}>
        <Link
          href={{
            pathname: "/Product/ProductDetails",
            query: props.data,
          }}
        >
          {props.children}
        </Link>
      </div>
    </div>
  )
}

export default ImageContainer
