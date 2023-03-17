import classes from "./Header.module.css"
const Header = () => {
  return (
    <header className={classes.header}>
      <h2>My-Shop</h2>
      <button className={classes.button}>Cart</button>
    </header>
  )
}

export default Header
