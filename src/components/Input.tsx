type InputProps = {
  placeHolder: string
}

const Input = (props: InputProps): JSX.Element => {
  return (
    <div>
      <input placeholder={props.placeHolder}></input>
    </div>
  )
}
export default Input
