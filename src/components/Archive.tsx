type ArchiveProps = {
  date: string
  title: string
  content: string
}

const Archive = (props: ArchiveProps): JSX.Element => {
  return (
    <>
      <div>{props.date}</div>
      <div>{props.title}</div>
      <div>{props.content}</div>
    </>
  )
}

export default Archive
