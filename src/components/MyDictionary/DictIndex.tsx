import { useEffect, useState } from 'react'
import { PosOptions, AlphabetOptions } from 'constants/Parts'
import { Option, SortOption } from 'types/types'
import { RowGridContainer, SimpleLink } from 'components/UIKit'

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
              <SimpleLink
                label={option.value}
                onClick={() => props.onClick(option)}
                color="primary"
                upperCase={true}
                variant="body1"
                disabled={option.key === props.sortOption.key}
              />
            )
          })}
        </RowGridContainer>
      )}
    </>
  )
}

export default DictIndex
