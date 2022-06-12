import { useEffect, useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import { useDispatch } from 'react-redux'
import { changeLoadingState } from 'reducks/users/operations'
import { clearErrors } from 'reducks/errors/operations'
import { AppFrame } from 'components/Base/index'
import { MyDictContent, SortSelection } from 'components/MyDictionary/index'
import { AlphabetOptions, PosOptions, SortOptions } from 'constants/Parts'
import { SortType, Option } from 'types/types'

const MyDictionary = (): JSX.Element => {
  const dispatch = useDispatch()

  const [sortType, setSortType] = useState<SortType>('Alphabetical')
  const [filterWord, setFilterWord] = useState<Option>(AlphabetOptions[0])

  const sortSelect = (event: SelectChangeEvent): void => {
    const newSortType = SortOptions.filter((o) => o.key === event.target.value)[0]
    setSortType(newSortType.sort)

    switch (newSortType.sort) {
      case 'Alphabetical':
        setFilterWord(AlphabetOptions[0])
        break
      case 'Parts of speech':
        setFilterWord(PosOptions[0])
        break
      default:
        break
    }
  }

  useEffect(() => {
    dispatch(clearErrors())
    dispatch(changeLoadingState(false))
  }, [])

  return (
    <AppFrame maxWidth={'lg'}>
      <SortSelection onChange={sortSelect} value={sortType} name={'Sort'} />
      <MyDictContent sortType={sortType} defaultFilterWord={filterWord} />
    </AppFrame>
  )
}

export default MyDictionary
