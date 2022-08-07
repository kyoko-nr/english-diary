import { useEffect, useState } from 'react'
import { Box, Link } from '@mui/material'
import { PosOptions, AlphabetOptions } from 'constants/Parts'
import { Option, SortOption } from 'types/types'
import { RowGridContainer } from 'components/UIKit'

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
      <div className={'spacer-24'} />
      {index.length > 0 && (
        <RowGridContainer spacing={2} justifyContent="flex-start">
          {index.map((option) => {
            return (
              <Link
                onClick={() => props.onClick(option)}
                variant="body1"
                component="button"
                sx={{
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                {option.value}
              </Link>
            )
          })}
        </RowGridContainer>
      )}
    </>
  )
}

export default DictIndex
