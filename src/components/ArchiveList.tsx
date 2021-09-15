import { Archive } from 'Components/index'

import { Diary } from 'Types/TypeList'

type ArchiveListProps = {
  list: Diary[]
}

const ArchiveList = (props: ArchiveListProps): JSX.Element => {
  return (
    <div className={'content'}>
      {props.list.map((value) => {
        return <Archive diary={value} key={value.id} />
      })}
    </div>
  )
}

export default ArchiveList
