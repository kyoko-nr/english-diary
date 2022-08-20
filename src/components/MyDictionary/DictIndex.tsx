import { Option } from 'types/types'
import { RowGridContainer, SimpleLink } from 'components/UIKit'

type DictIndexProps = {
  onClick: (option: Option) => void
  options: readonly Option[]
  selected: Option
}

const DictIndex = (props: DictIndexProps): JSX.Element => {
  return (
    <>
      <div className={'spacer-24'} />
      {props.options.length > 0 && (
        <RowGridContainer spacing={2} justifyContent="flex-start">
          {props.options.map((option) => (
            <SimpleLink
              label={option.value}
              onClick={() => props.onClick(option)}
              color="primary"
              upperCase={true}
              // variant="body1"
              variant="h6"
              disabled={option.key === props.selected.key}
            />
          ))}
        </RowGridContainer>
      )}
    </>
  )
}

export default DictIndex
