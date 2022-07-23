import { Box } from '@mui/material'
import { useFieldArray, Control } from 'react-hook-form'
import { TextInputDeletable, Label, AddIconButton } from 'components/UIKit/index'
import { Feature, WordForm } from 'types/types'

type AddibleContentProps = {
  feature: Feature
  fullWidth: boolean
  diaryId: string
  control: Control<WordForm>
  wordIndex: number
}

const AddibleContent = (props: AddibleContentProps): JSX.Element => {
  const { fields, remove, append } = useFieldArray({
    control: props.control,
    name: `words.${props.wordIndex}.${props.feature}`,
  })

  const addFeature = () => append({})
  const deleteFeature = (featureIndex: number) => remove(featureIndex)

  return (
    <>
      <Box className="flex-center">
        <Label label={props.feature} variant="body1" align="left" capitalize={true} bold={true} />
        <AddIconButton feature={props.feature} onClick={addFeature} />
      </Box>
      {fields.map((field, index) => {
        return (
          <TextInputDeletable
            feature={props.feature}
            fullWidth={props.fullWidth}
            deleteFeature={deleteFeature}
            key={field.value}
            control={props.control}
            featureIndex={index}
            wordIndex={props.wordIndex}
            defaultValue={field.value}
          />
        )
      })}
    </>
  )
}

export default AddibleContent
