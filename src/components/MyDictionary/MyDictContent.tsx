import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWords } from 'reducks/users/selectors'
import { push } from 'connected-react-router'
import { Label, OutlineLargeButton } from 'components/UIKit/index'
import { WordCards } from 'components/UIKit/index'
import { Word, Option } from 'types/types'
import { OrderOptions } from 'constants/Parts'
import { BrandingWatermarkTwoTone } from '@mui/icons-material'

type MyDictContentProps = {
  order: string
}

const MyDictContent = (props: MyDictContentProps): JSX.Element => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)

  const [words, setWords] = useState<Array<Word>>()

  const sortWords = (order: string) => {
    if (!words) return
    let sorted: Word[] = []
    const value = OrderOptions.filter((option) => option.key === order)[0].value
    switch (value) {
      case 'Alphabetical':
        sorted = words.sort((a, b) => alphabeticalSort(a, b))
        break
      case 'Parts of speech':
        sorted = words.sort((a, b) => partsSort(a, b))
        break
      default:
        sorted = [...words]
    }
    console.log('sort words', sorted)
    setWords(sorted)
  }

  const alphabeticalSort = (a: Word, b: Word): number => {
    if (a.title > b.title) return 1
    if (a.title < b.title) return -1
    return 0
  }

  const partsSort = (a: Word, b: Word): number => {
    if (Number.parseInt(a.pos) > Number.parseInt(b.pos)) return 1
    if (Number.parseInt(a.pos) < Number.parseInt(b.pos)) return -1
    return 0
  }

  useEffect(() => {
    const wordList = getWords(selector)
    setWords(wordList)
  })

  useEffect(() => {
    sortWords(props.order)
  }, [props.order])

  return <>{words ? <WordCards words={words} /> : <div>No Words</div>}</>
}

export default MyDictContent
