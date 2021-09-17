import { Archive } from 'components/index'

import { Diary } from 'types/TypeList'

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
