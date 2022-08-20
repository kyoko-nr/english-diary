import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getWords } from 'reducks/users/selectors'
import { DictIndex } from 'components/MyDictionary/index'
import { WordCards } from 'components/UIKit/index'
import { Word, Option, SortOption } from 'types/types'
import { sortBy } from 'lodash'
import { AlphabetOptions, PosOptions } from 'constants/Parts'

type MyDictContentProps = {
  sortOption: SortOption
  defaultIndex: Option
}

const MyDictContent = (props: MyDictContentProps): JSX.Element => {
  const selector = useSelector((state) => state)

  const words = getWords(selector) as Word[]
  const [wordsToShow, setWordsToShow] = useState<Word[]>([])
  const [index, setIndex] = useState<Option>(AlphabetOptions[0])
  const [options, setOptions] = useState<Readonly<Option[]>>(AlphabetOptions)

  const filterWords = (index: Option): void => {
    let filtered: Word[] = []
    switch (props.sortOption.key) {
      case '1':
        // Alphabetical
        filtered = words.filter((word) => word.title.startsWith(index.value))
        setWordsToShow(sortBy(filtered, 'title'))
        setOptions(AlphabetOptions)
        setIndex(index)
        break
      case '2':
        // Parts of speech
        filtered = words.filter((word) => word.pos === index.key)
        setWordsToShow(sortBy(filtered, 'title'))
        setOptions(PosOptions)
        setIndex(index)
        break
      case '3':
        // Newer
        filtered = [...words]
        setWordsToShow(sortBy(filtered, 'createdAt').reverse())
        setOptions([])
        setIndex(index)
        break
      case '4':
        // Older
        filtered = [...words]
        setWordsToShow(sortBy(filtered, 'createdAt'))
        setOptions([])
        setIndex(index)
        break
      default:
        filtered = [...words]
        setOptions([])
        setIndex(index)
        break
    }
  }

  useEffect(() => {
    filterWords(props.defaultIndex)
  }, [props.defaultIndex])

  return (
    <>
      <DictIndex onClick={filterWords} options={options} selected={index} />
      <div className={'spacer-24'} />
      {wordsToShow.length > 0 ? <WordCards words={wordsToShow} withDate={true} /> : <div>No Words</div>}
    </>
  )
}

export default MyDictContent
