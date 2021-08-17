type TextareaProps = {
  rows: number
  cols: number
}

const TextArea = (props: TextareaProps): JSX.Element => {
  return <textarea rows={props.rows} cols={props.cols}></textarea>
}
export default TextArea
