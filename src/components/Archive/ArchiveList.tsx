import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getDiaries, getCurrentYM } from 'reducks/users/selectors'
import { changeCurrentYM } from 'reducks/users/operations'
import { Diary } from 'types/types'
import { Archive, YMControl } from './index'
import { isSameMonth } from 'date-fns'

const scrollHeight = window.innerHeight - 160 - 48 // padding = 40 * 4, YMControl height = 48

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
    <Box className={'archivelist-container'}>
      <YMControl date={currentYM} onClick={changeYM} />
      <div className={'spacer-8'} />
      <Box
        sx={{
          height: Math.max(scrollHeight, 320),
          overflowY: 'auto',
        }}
      >
        {diaries && diaries.length > 0 ? (
          diaries.map((value: Diary) => <Archive diary={value} key={value.id} />)
        ) : (
          <div className={'txt-center'}>No diary</div>
        )}
      </Box>
    </Box>
  )
}

export default ArchiveList
