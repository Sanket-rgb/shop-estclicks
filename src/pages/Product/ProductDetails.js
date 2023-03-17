import Image from "next/image"
import { useRouter } from "next/router"
import Button from "../../components/UI/Button"
import classes from "./ProductDetails.module.css"
const ProductDetails = (props) => {
  const router = useRouter()
  const query = router.query
  console.log(query)

  return (
    <section className={classes["product-grid-container"]}>
      <div className={classes["primary-image"]}>
        <div className={classes["image-container"]}>
          <Image
            className={classes.image}
            src={query.path}
            alt={query.category}
            fill
            sizes="(max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw"
          />
        </div>
      </div>
      <div className={classes["secondary-image1"]}></div>
      <div className={classes["secondary-image2"]}>
        <Image
          className={classes.image}
          src={query.path}
          alt={query.category}
          fill
          sizes="(max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw"
        />
      </div>

      <div className={classes["info"]}>
        <div className={classes["info-description"]}>
          <h4>NAME OF PAINTING</h4>
          <div>
            <p>40x50cm screenprint</p>
            <p>Comes in 3 sizes</p>
            <p>Limited edition of 20 each</p>
            <p>Digital Print</p>
          </div>
          <p>Signed and numbered</p>
          <p>@estClicks original</p>
          <div className={classes.price}>
            <p>$150,00</p>
          </div>
        </div>
        <div className={classes["info-buttons"]}>
          <Button>add to cart</Button>
        </div>
      </div>
      <div className={classes["navigation"]}></div>
    </section>
  )
}

export default ProductDetails
