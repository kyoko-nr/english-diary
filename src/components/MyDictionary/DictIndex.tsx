import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getDiaries, getCurrentYM } from 'reducks/users/selectors'
import { changeCurrentYM } from 'reducks/users/operations'
import { Word } from 'types/types'

const scrollHeight = window.innerHeight - 160 // padding = 40 * 4

const DictIndex = (): JSX.Element => {
  const selector = useSelector((state) => state)
  const dispatch = useDispatch()

  const [words, setWords] = useState<Array<Word>>()
  const [order, setOrder] = useState()
  // const [currentYM, setCurrentYM] = useState(getCurrentYM(selector))

  useEffect(() => {
    // const all: Array<Diary> = getDiaries(selector)
    // setDiaries(filterd)
  }, [])

  const changeYM = (date: Date) => {
    dispatch(changeCurrentYM(date))
  }

  return (
    <Box className={'archivelist-container'}>
      <div className={'spacer-8'} />
      <Box
        sx={{
          height: Math.max(scrollHeight, 320),
          overflowY: 'auto',
        }}
      >
        {/* {diaries && diaries.length > 0 ? (
          diaries.map((value: Diary) => <Archive diary={value} key={value.id} />)
        ) : (
          <div className={'txt-center'}>No diary</div>
        )} */}
      </Box>
    </Box>
  )
}

export default DictIndex
