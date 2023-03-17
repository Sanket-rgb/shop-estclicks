import Link from "next/link"
import classes from "./ImageComponent.module.css"
const ImageContainer = (props) => {
  return (
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
  )
}

export default ImageContainer
