import ProductQuantitySelector from "@/pages/Product/ProductQuantitySelector"
import Image from "next/image"
import Link from "next/link"
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
            placeholder="blur"
            blurDataURL="default"
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
          placeholder="blur"
          blurDataURL="default"
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
            placeholder="blur"
            blurDataURL="default"
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
          <div className={classes.details}>
            <p>Framed</p>
            <p>40x50cm Digital Print</p>

            <br></br>

            <p>Limited edition of {query.quantity} each</p>
            <br></br>
            <p>Signed and numbered</p>
            <p>
              @
              <Link
                href={"https://www.instagram.com/estclicks/"}
                className={classes["social-media-link"]}
                target="_blank"
              >
                estclicks
              </Link>{" "}
              original
            </p>
          </div>

          <div className={classes.price}>
            <p>${+query.price},00</p>
          </div>
        </div>

        <ProductQuantitySelector data={query} />
      </div>
      <div className={classes["navigation"]}>
        <Image
          style={{ cursor: "pointer" }}
          src="https://cdn.shopify.com/s/files/1/0516/4082/8070/t/2/assets/prev.svg"
          width={12}
          height={12}
          alt="left-arrow"
        ></Image>
        <p>Browse all items</p>
        <Image
          style={{ cursor: "pointer" }}
          src="https://cdn.shopify.com/s/files/1/0516/4082/8070/t/2/assets/next.svg"
          width={12}
          height={12}
          alt="right-arrow"
        ></Image>
      </div>
    </section>
  )
}

export default ProductDetails
