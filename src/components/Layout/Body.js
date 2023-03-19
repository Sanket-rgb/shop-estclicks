import classes from "./Body.module.css"

import { images } from "@/Utils/Photos"
import ImageComponent from "../Images/ImageComponent"

const Body = () => {
  return (
    <div className={classes["grid-container"]}>
      {images.map((image) => (
        <ImageComponent key={Math.random().toString()} data={image} />
      ))}
    </div>
  )
}

export default Body
