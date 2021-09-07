import { Archive } from './index'

type ArchiveProps = {
  date: string
  title: string
  content: string
}

type ArchiveListProps = {
  list: ArchiveProps[]
}

const ArchiveList = (props: ArchiveListProps): JSX.Element => {
  return (
    <>
      {props.list.map((value, index) => {
        return <Archive date={value.date} title={value.title} content={value.content} key={index.toString()} />
      })}
    </>
  )
}

export default ArchiveList
