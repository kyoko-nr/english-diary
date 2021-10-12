import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiaries, getCurrentYM } from 'reducks/users/selectors'
import { changeCurrentYM } from 'reducks/users/operations'
import { Diary } from 'reducks/users/types'
import { Archive, YMControl } from './index'
import { isSameMonth } from 'date-fns'
import { createStyles, makeStyles } from '@material-ui/styles'

const scrollHeight = window.innerHeight - 160 - 48 // padding = 40 * 4, YMControl height = 48
const useStyles = makeStyles(() =>
  createStyles({
    scrollBox: {
      height: scrollHeight,
      overflowY: 'auto',
    },
  })
)

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

  const classes = useStyles()

  return (
    <div className={'content'}>
      <YMControl date={currentYM} onClick={changeYM} />
      <div className={'spacer-8'} />
      <div className={classes.scrollBox}>
        {diaries &&
          diaries.map((value: Diary) => {
            return <Archive diary={value} key={value.id} />
          })}
      </div>
    </div>
  )
}

export default ArchiveList
