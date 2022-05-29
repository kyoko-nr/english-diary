import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { PosOptions, AlphabetOptions } from 'constants/Parts'
import { SortType, Option } from 'types/types'

type DictIndexProps = {
  sortType: SortType
  onClick: (sortType: SortType, filter: Option) => void
}

const DictIndex = (props: DictIndexProps): JSX.Element => {
  const [index, setIndex] = useState<Readonly<Option[]>>()

  useEffect(() => {
    switch (props.sortType) {
      case 'Alphabetical':
        setIndex(AlphabetOptions)
        break
      case 'Parts of speech':
        setIndex(PosOptions)
        break
      default:
    }
  }, [props.sortType])

  return (
    <Box>
      <div className={'spacer-8'} />
      <Box sx={{ height: '60px' }}>
        {index &&
          index.map((option) => {
            return (
              <button onClick={() => props.onClick(props.sortType, option)}>
                <div key={option.key}>{option.value}</div>
              </button>
            )
          })}
      </Box>
    </Box>
  )
}

export default DictIndex
