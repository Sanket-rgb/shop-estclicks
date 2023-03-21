import Link from "next/link";
import classes from "./ImageComponent.module.css";

import { useState } from "react";
const ImageContainer = (props) => {
  const [hover, setHover] = useState(false);

  const gridCellInvisibile = () => {
    setHover(true);
    // console.log()
  };

  const gridCellVisibile = () => {
    setHover(false);
  };

  return (
    <>
      {!hover && (
        <div
          onMouseOver={gridCellInvisibile}
          onMouseOut={gridCellVisibile}
          style={{ background: props.data.color }}
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
          onMouseOver={gridCellInvisibile}
          onMouseOut={gridCellVisibile}
          className={classes.description}
          style={{ background: props.data.color }}
        >
          <div onMouseOver={gridCellInvisibile} onMouseOut={gridCellInvisibile}>
            {props.data.description}
          </div>
          <div className={classes.bar}></div>
          <div>${+props.data.price},00</div>
        </Link>
      )}
    </>
  );
};

export default ImageContainer;

{
  /* <Link
            href={{
              pathname: "/Product/ProductDetails",
              query: props.data,
            }}
          >
            hello
          </Link> */
}
