type InputProps = {
  title: string
  placeHolder: string
}

const Input = (props: InputProps): JSX.Element => {
  return (
    <div className="flex">
      <span>{props.title}</span>
      <input placeholder={props.placeHolder}></input>
    </div>
  )
}
export default Input
