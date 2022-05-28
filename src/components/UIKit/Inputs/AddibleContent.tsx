import { Box } from '@mui/material'
import { TextInputDeletable, Label, AddIconButton } from 'components/UIKit/index'
import { Addible, Feature } from 'types/types'

type AddibleContentProps = {
  feature: Feature
  fullWidth: boolean
  contents: Addible[]
  diaryId: string
  wordId: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any
  index: string
  addInput: (feature: Feature) => void
  deleteInput: (feature: Feature, id: string) => void
}

const AddibleContent = (props: AddibleContentProps): JSX.Element => {
  return (
    <>
      <Box className="flex-center">
        <Label label={props.feature} variant="body1" align="left" capitalize={true} bold={true} />
        <AddIconButton feature={props.feature} onClick={props.addInput} />
      </Box>
      {props.contents &&
        props.contents.map((val, index) => {
          return (
            <TextInputDeletable
              feature={props.feature}
              name={`${props.name}.${index}`}
              fullWidth={props.fullWidth}
              onDelete={props.deleteInput}
              key={val.id}
              control={props.control}
              id={val.id}
              value={val.value}
            />
          )
        })}
    </>
  )
}

export default AddibleContent
