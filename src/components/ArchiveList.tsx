import { useSelector } from 'react-redux'
import { getDiaries } from 'reducks/users/selectors'
import { Diary } from 'reducks/users/types'
import { Archive } from 'components/index'

const ArchiveList = (): JSX.Element => {
  const selector = useSelector((state) => state)
  const diaries = getDiaries(selector)

  return (
    <div className={'content'}>
      {diaries &&
        diaries.map((value: Diary) => {
          return <Archive diary={value} key={value.id} />
        })}
    </div>
  )
}

export default ArchiveList
