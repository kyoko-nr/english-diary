type ButtonProps = {
  title: string
  onClick: () => void
}

const Button = (props: ButtonProps): JSX.Element => {
  return <button onClick={props.onClick}>{props.title}</button>
}
export default Button
