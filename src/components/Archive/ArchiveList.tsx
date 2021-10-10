import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiaries, getCurrentYM } from 'reducks/users/selectors'
import { changeCurrentYM } from 'reducks/users/operations'
import { Diary } from 'reducks/users/types'
import { Archive, YMControl } from './index'
import { isSameMonth } from 'date-fns'

const ArchiveList = (): JSX.Element => {
  const selector = useSelector((state) => state)
  const dispatch = useDispatch()

  const [diaries, setDiaries] = useState<Array<Diary>>()
  const [currentYM, setCurrentYM] = useState(getCurrentYM(selector))

  useEffect(() => {
    const all: Array<Diary> = getDiaries(selector)
    const filterd = all.filter((diary) => isSameMonth(diary.date, currentYM))
    setDiaries(filterd)
  }, [currentYM])

  const changeYM = (date: Date) => {
    dispatch(changeCurrentYM(date))
    setCurrentYM(date)
  }

  return (
    <div className={'content'}>
      <YMControl date={currentYM} onClick={changeYM} />
      <div className={'spacer-8'} />
      {diaries &&
        diaries.map((value: Diary) => {
          return <Archive diary={value} key={value.id} />
        })}
    </div>
  )
}

export default ArchiveList
