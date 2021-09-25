import { Archive } from 'components/index'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDiaries } from 'reducks/diaries/operations'
import { getUserId } from 'reducks/users/selectors'
import { getDiaries } from 'reducks/diaries/selectors'
import { diaryState } from 'reducks/diaries/types'

const ArchiveList = (): JSX.Element => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const userId = getUserId(selector)
  const diaries = getDiaries(selector)

  useEffect(() => {
    dispatch(fetchDiaries(userId))
  }, [])
  return (
    <div className={'content'}>
      {diaries.map((value: diaryState) => {
        return <Archive diary={value} key={value.id} />
      })}
    </div>
  )
}

export default ArchiveList
