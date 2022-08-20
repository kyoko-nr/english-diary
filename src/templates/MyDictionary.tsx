import { useEffect, useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import { useDispatch } from 'react-redux'
import { changeLoadingState } from 'reducks/users/operations'
import { clearErrors } from 'reducks/errors/operations'
import { AppFrame } from 'components/Base/index'
import { MyDictContent, SortSelection } from 'components/MyDictionary/index'
import { AlphabetOptions, PosOptions, SortOptions } from 'constants/Parts'
import { Option, SortOption } from 'types/types'

const MyDictionary = (): JSX.Element => {
  const dispatch = useDispatch()

  const [sortOption, setSortOption] = useState<SortOption>({ key: '1', value: 'Alphabetical' })
  const [filterWord, setFilterWord] = useState<Option>(AlphabetOptions[0])

  const sortSelect = (event: SelectChangeEvent): void => {
    const newSortType = SortOptions.filter((o) => o.key === event.target.value)[0]
    setSortOption(newSortType)

    switch (newSortType.key) {
      case '1':
        setFilterWord(AlphabetOptions[0])
        break
      case '2':
        setFilterWord(PosOptions[0])
        break
      case '3':
      case '4':
        setFilterWord(newSortType)
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
      <SortSelection onChange={sortSelect} sortOption={sortOption} />
      <MyDictContent sortOption={sortOption} defaultIndex={filterWord} />
    </AppFrame>
  )
}

export default MyDictionary
