import Button from "../UI/Button"
import classes from "./Footer.module.css"
const Footer = () => {
  return (
    <footer className={classes.grid}>
      <form className={classes.form}>
        <input type="email" placeholder="Your email"></input>
        <button className={classes.button}>sign up for shop news</button>
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
