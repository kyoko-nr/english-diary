import { Box } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { TextInputDeletable, Label } from 'components/UIKit/index'
import { Addible, Feature } from 'reducks/users/types'

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
      <Box sx={{ marginTop: '16px' }} className="flex-center">
        <Label label={props.feature} variant="body1" align="left" uppercase={true} bold={true} />
        <AddCircleIcon
          cursor="pointer"
          color="inherit"
          fontSize="small"
          onClick={() => props.addInput(props.feature)}
          sx={{ marginLeft: '8px' }}
        />
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
