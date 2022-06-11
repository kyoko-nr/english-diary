import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getWords } from 'reducks/users/selectors'
import { DictIndex } from 'components/MyDictionary/index'
import { WordCards } from 'components/UIKit/index'
import { Word, Option, SortType } from 'types/types'

type MyDictContentProps = {
  sortType: SortType
  defaultFilterWord: Option
}

const MyDictContent = (props: MyDictContentProps): JSX.Element => {
  const selector = useSelector((state) => state)

  const [words, setWords] = useState<Word[]>()
  const [wordsToShow, setWordsToShow] = useState<Word[]>()

  const filterWords = (sortType: SortType, filter: Option, wordList?: Word[]): void => {
    const toFilter = words ? words : wordList ? wordList : []

    let filtered: Word[] = []
    switch (sortType) {
      case 'Alphabetical':
        filtered = toFilter.filter((word) => word.title.startsWith(filter.value))
        break
      case 'Parts of speech':
        filtered = toFilter.filter((word) => word.pos === filter.key)
        break
      default:
        filtered = [...toFilter]
        break
    }
    setWordsToShow(filtered.sort((a, b) => alphabeticalSort(a, b)))
  }

  const alphabeticalSort = (a: Word, b: Word): number => {
    if (a.title > b.title) return 1
    if (a.title < b.title) return -1
    return 0
  }

  useEffect(() => {
    const wordList = getWords(selector)
    setWords(wordList)
    filterWords(props.sortType, props.defaultFilterWord)
  }, [])

  useEffect(() => {
    filterWords(props.sortType, props.defaultFilterWord)
  }, [props.defaultFilterWord])

  return (
    <>
      <DictIndex sortType={props.sortType} onClick={filterWords} />
      {wordsToShow ? <WordCards words={wordsToShow} /> : <div>No Words</div>}
    </>
  )
}

export default MyDictContent
