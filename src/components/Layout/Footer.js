import Button from "../UI/Button"
import classes from "../../styles/Layout/Footer.module.scss"
const Footer = () => {
  return (
    <footer className={classes.grid}>
      <form className={classes.form}>
        <input type="email" placeholder="Your email"></input>
        <Button className={classes.button}>sign up for shop news</Button>
      </form>
      <div className={classes["extra-info"]}>
        <p>Shipping</p>
        <p>Returns</p>
        <p>Contact</p>
      </div>
      <div className={classes["only-portrait"]}>
        <p>Shipping & Returns</p>
      </div>
    </footer>
  )
}

export default Footer
