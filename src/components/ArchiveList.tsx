import { Archive } from 'Components/index'

import { Diary } from 'Types/TypeList'

type ArchiveListProps = {
  list: Diary[]
}

const ArchiveList = (props: ArchiveListProps): JSX.Element => {
  return (
    <>
      {props.list.map((value) => {
        return <Archive date={value.date} title={value.title} content={value.content} id={value.id} key={value.id} />
      })}
    </>
  )
}

export default ArchiveList
