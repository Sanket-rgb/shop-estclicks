import classes from "../../styles/UI/Button.module.scss"
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${props.className}`}
    >
      {props.children}
    </button>
  )
}

export default Button
