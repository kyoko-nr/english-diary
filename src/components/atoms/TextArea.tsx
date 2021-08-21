type TextareaProps = {
  placeHolder: string
  rows: number
}

const TextArea = (props: TextareaProps): JSX.Element => {
  return <textarea placeholder={props.placeHolder} rows={props.rows}></textarea>
}
export default TextArea
