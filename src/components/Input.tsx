type InputProps = {
  placeHolder: string
}

const Input = ( props: InputProps ) => {
  return (
    <div>
      <input placeholder={ props.placeHolder }></input>
    </div>
  )
}
export default Input