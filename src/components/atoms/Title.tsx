type TitleProps = {
  title: string
}

const Title = (props: TitleProps): JSX.Element => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  )
}
export default Title
