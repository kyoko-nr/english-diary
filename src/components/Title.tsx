type TitleProps = {
  title: string
}

const Title = ( props: TitleProps ) => {
  return(
    <div>
      <h2>{ props.title }</h2>
    </div>
  )
}
export default Title