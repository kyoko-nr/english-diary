import { Archive } from 'components/index'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDiaries } from 'reducks/diaries/operations'
import { getDiaries } from 'reducks/diaries/selectors'
import { diaryState } from 'reducks/diaries/types'
import { getUserId } from 'reducks/users/selectors'

const ArchiveList = (): JSX.Element => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  let diaries = getDiaries(selector)
  console.log('archive list diaries: ', diaries)

  // const [diaries, setDiaries] = useState<diaryState[]>()

  useEffect(() => {
    const userId = getUserId(selector)
    dispatch(fetchDiaries(userId))
    diaries = getDiaries(selector)
  }, [])

  return (
    <div className={'content'}>
      {diaries &&
        diaries.map((value: diaryState) => {
          return <Archive diary={value} key={value.id} />
        })}
    </div>
  )
}

export default ArchiveList
