import Image from "next/image"
import Link from "next/link"

import classes from "./ImageComponent.module.css"
import ImageContainer from "./ImageContainer"
const ImageComponent = (props) => {
  return (
    <ImageContainer data={props.data}>
      <Image
        className={classes.image}
        src={props.data.path}
        alt={props.data.category}
        fill
        sizes="(max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw"
      />
    </ImageContainer>
  )
}

export default ImageComponent
