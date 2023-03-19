import ProductQuantitySelector from "@/pages/Product/ProductQuantitySelector"
import Image from "next/image"
import { useRouter } from "next/router"
import Button from "../../components/UI/Button"
import classes from "./ProductDetails.module.css"
const ProductDetails = () => {
  const router = useRouter()
  const query = router.query

  return (
    <section className={classes["product-grid-container"]}>
      <div
        style={{ background: query.color }}
        className={classes["primary-image"]}
      >
        <div className={classes["image-container"]}>
          <Image
            className={classes.image}
            src={query.path}
            alt={query.category}
            fill
            sizes="(max-width: 768px) 100vw,
    (max-width: 1120px) 50vw,
    33vw"
          />
        </div>
      </div>
      <div className={classes["secondary-image1"]}>
        <Image
          className={classes.image}
          src={query.path}
          alt={query.category}
          fill
          sizes="(max-width: 768px) 100vw,
    (max-width: 1120px) 50vw,
    33vw"
        />
      </div>
      <div className={classes["secondary-image2"]}>
        <div className={classes["secondary-image2-container"]}>
          <Image
            className={classes.image2}
            src={query.path}
            alt={query.category}
            fill
            sizes="(max-width: 768px) 100vw,
    (max-width: 1120px) 50vw,
    33vw"
          />
        </div>
      </div>

      <div style={{ background: query.color }} className={classes["info"]}>
        <div className={classes["info-description"]}>
          <h4>{query.description}</h4>
          <div>
            <p>Comes in 2 sizes</p>
            <p>Framed 40x50cm and 50x40cm</p>
            <br></br>
            <p>Digital Print</p>

            <p>Limited edition of {query.quantity} each</p>
          </div>
          <div>
            <p>Signed and numbered</p>
            <p>@estClicks original</p>
          </div>

          <div className={classes.price}>
            <p>{query.price}</p>
          </div>
        </div>
        <div className={classes["info-buttons"]}>
          <ProductQuantitySelector quantity={query.quantity} />
        </div>
      </div>
      <div className={classes["navigation"]}>
        <Image
          src="https://cdn.shopify.com/s/files/1/0516/4082/8070/t/2/assets/prev.svg"
          width={12}
          height={12}
          alt="left-arrow"
        ></Image>
        <p>Browse all items</p>
        <Image
          src="https://cdn.shopify.com/s/files/1/0516/4082/8070/t/2/assets/next.svg"
          width={12}
          height={12}
          alt="left-arrow"
        ></Image>
      </div>
    </section>
  )
}

export default ProductDetails
