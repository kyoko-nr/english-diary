import { useEffect, useState } from 'react'
import { Box, Link } from '@mui/material'
import { PosOptions, AlphabetOptions } from 'constants/Parts'
import { Option, SortOption } from 'types/types'

type DictIndexProps = {
  sortOption: SortOption
  onClick: (option: Option) => void
}

const DictIndex = (props: DictIndexProps): JSX.Element => {
  const [index, setIndex] = useState<Readonly<Option[]>>([])

  useEffect(() => {
    switch (props.sortOption.key) {
      case '1':
        setIndex(AlphabetOptions)
        break
      case '2':
        setIndex(PosOptions)
        break
      default:
        setIndex([])
    }
  }, [props.sortOption])

  return (
    <>
      <div className={'spacer-8'} />
      {index.length > 0 && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minHeight: '64px' }}>
          {index.map((option) => {
            return (
              <>
                <Link
                  onClick={() => props.onClick(option)}
                  variant="body1"
                  component="button"
                  sx={{
                    cursor: 'pointer',
                    margin: '0px 8px',
                    textTransform: 'uppercase',
                  }}
                >
                  {option.value}
                </Link>
              </>
            )
          })}
        </Box>
      )}
    </>
  )
}

export default DictIndex
