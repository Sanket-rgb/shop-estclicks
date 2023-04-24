import Link from "next/link"
import classes from "../../styles/Image/ImageComponent.module.scss"

import { useState } from "react"
const ImageContainer = (props) => {
  const [hover, setHover] = useState(false)

  // useEffect(() => {
  //   setTimeout(function () {
  //     setHover(!hover);
  //   }, 2000);
  // }, [hover]);
  const gridCellInvisibile = () => {
    setHover(true)
    console.log()
  }

  const gridCellVisibile = () => {
    setHover(false)
  }

  return (
    <>
      {!hover && (
        <div
          onTouchStart={gridCellInvisibile}
          onMouseOver={gridCellInvisibile}
          onMouseOut={gridCellVisibile}
          style={{ background: props.data.background_color }}
          className={classes["grid-cell"]}
        >
          <div className={classes["image-container"]}>{props.children}</div>
        </div>
      )}
      {hover && (
        <Link
          href={{
            pathname: "/Product/ProductDetails",
            query: props.data,
          }}
          onTouchMove={gridCellVisibile}
          // onTouchEnd={gridCellVisibile}
          onMouseOver={gridCellInvisibile}
          onMouseOut={gridCellVisibile}
          className={classes.description}
          style={{ background: props.data.background_color }}
        >
          <div onMouseOver={gridCellInvisibile} onMouseOut={gridCellInvisibile}>
            {props.data.description}
          </div>
          <div className={classes.bar}></div>
          <div>${+props.data.price},00</div>
        </Link>
      )}
    </>
  )
}

export default ImageContainer
