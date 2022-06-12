import { useEffect, useState } from 'react'
import { Box, Link } from '@mui/material'
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
    <>
      <div className={'spacer-8'} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', height: '64px' }}>
        {index &&
          index.map((option) => {
            return (
              <Link
                onClick={() => props.onClick(props.sortType, option)}
                variant="body1"
                sx={{
                  cursor: 'pointer',
                  margin: '0px 8px',
                  textTransform: 'uppercase',
                }}
              >
                {option.value}
              </Link>
            )
          })}
      </Box>
    </>
  )
}

export default DictIndex
