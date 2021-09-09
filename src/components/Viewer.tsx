import { Diary } from 'Types/TypeList'

const Viewer = (props: Diary) => {
  return (
    <>
      <div>{props.date}</div>
      <div>{props.title}</div>
      <div>{props.content}</div>
    </>
  )
}

export default Viewer
