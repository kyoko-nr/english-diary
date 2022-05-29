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

  const [words, setWords] = useState<Array<Word>>()
  const [wordsToShow, setWordsToShow] = useState<Array<Word>>()

  const filterWords = (sortType: SortType, filter: Option): void => {
    console.log('filter words')
    if (!words) return

    let filtered: Word[] = []
    switch (sortType) {
      case 'Alphabetical':
        filtered = words.filter((word) => word.title.startsWith(filter.value))
        break
      case 'Parts of speech':
        filtered = words.filter((word) => word.pos === filter.key)
        break
      default:
        filtered = [...words]
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

  // useEffect(() => {
  //   filterWords(props.filter, props.defaultFilterWord)
  // }, [props.filter])

  return (
    <>
      <DictIndex sortType={props.sortType} onClick={filterWords} />
      {wordsToShow ? <WordCards words={wordsToShow} /> : <div>No Words</div>}
    </>
  )
}

export default MyDictContent
