import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getWords } from 'reducks/users/selectors'
import { DictIndex } from 'components/MyDictionary/index'
import { WordCards } from 'components/UIKit/index'
import { Word, Option, SortOption } from 'types/types'
import { sortBy } from 'lodash'

type MyDictContentProps = {
  sortOption: SortOption
  defaultFilterOption: Option
}

const MyDictContent = (props: MyDictContentProps): JSX.Element => {
  const selector = useSelector((state) => state)

  const words = getWords(selector) as Word[]
  const [wordsToShow, setWordsToShow] = useState<Word[]>([])

  const filterWords = (filter: Option): void => {
    let filtered: Word[] = []
    switch (props.sortOption.key) {
      case '1':
        // Alphabetical
        filtered = words.filter((word) => word.title.startsWith(filter.value))
        setWordsToShow(sortBy(filtered, 'title'))
        break
      case '2':
        // Parts of speech
        filtered = words.filter((word) => word.pos === filter.key)
        setWordsToShow(sortBy(filtered, 'title'))
        break
      case '3':
        // Newer
        filtered = [...words]
        setWordsToShow(sortBy(filtered, 'createdAt').reverse())
        break
      case '4':
        // Older
        filtered = [...words]
        setWordsToShow(sortBy(filtered, 'createdAt'))
        break
      default:
        filtered = [...words]
        break
    }
  }

  useEffect(() => {
    filterWords(props.defaultFilterOption)
  }, [props.defaultFilterOption])

  return (
    <>
      <DictIndex sortOption={props.sortOption} onClick={filterWords} />
      <div className={'spacer-24'} />
      {wordsToShow.length > 0 ? <WordCards words={wordsToShow} withDate={true} /> : <div>No Words</div>}
    </>
  )
}

export default MyDictContent
