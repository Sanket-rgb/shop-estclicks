import classes from "./Button.module.css"
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      // disabled={true}
      className={`${classes.button} ${props.className}`}
    >
      {props.children}
    </button>
  )
}

export default Button
