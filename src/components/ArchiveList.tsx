import { Archive } from 'components/index'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiaries } from 'reducks/users/selectors'
import { Diary } from 'reducks/users/types'

const ArchiveList = (): JSX.Element => {
  const selector = useSelector((state) => state)
  const diaries = getDiaries(selector)
  console.log('archive list diaries: ', diaries)

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
