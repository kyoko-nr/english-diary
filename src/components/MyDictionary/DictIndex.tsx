import { Option } from 'types/types'
import { SimpleLink } from 'components/UIKit'
import { Stack } from '@mui/material'

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
        <Stack spacing={2} direction="row">
          {props.options.map((option) => (
            <SimpleLink
              label={option.value}
              onClick={() => props.onClick(option)}
              color="primary"
              upperCase={true}
              variant="body1"
              disabled={option.key === props.selected.key}
            />
          ))}
        </Stack>
      )}
    </>
  )
}

export default DictIndex
