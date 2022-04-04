import { Card, CardContent, CardActions, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { TextInputStandard, AddibleContent } from 'components/UIKit/index'
import { Addible } from 'reducks/users/types'

type NewWordProps = {
  id: string
  name: string
  meanings: Addible[] | undefined
  synonyms: Addible[] | undefined
  examples: Addible[] | undefined
}

const NewWord = (props: NewWordProps): JSX.Element => {
  const { control, handleSubmit, watch, setValue } = useForm<IFormInput>({
    // resolver: yupResolver(schema),
  })
  interface IFormInput {
    name: string
    // meanings: Addble
    // synonyms: Addble
    // examples: Addble
  }

  return (
    <Card sx={{ color: '#4a4a4a' }}>
      <CardContent sx={{ padding: '8px 16px' }}>
        <TextInputStandard
          name={'name'}
          required={true}
          defaultValue={''}
          control={control}
          fullWidth={true}
          label={'New word'}
          noError={true}
          type={'text'}
        />
        <AddibleContent title="Meanings" fullWidth={true} />
        <AddibleContent title="Synonyms" fullWidth={false} />
        <AddibleContent title="Examples" fullWidth={true} />
      </CardContent>
      <CardActions>
        <Button color="error">delete this word</Button>
      </CardActions>
    </Card>
  )
}

export default NewWord
