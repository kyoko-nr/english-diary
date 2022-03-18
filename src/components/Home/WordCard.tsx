import { Typography, Card, CardContent, CardActions, Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { useForm } from 'react-hook-form'
import { TextInputStandard, AddibleContent } from 'components/UIKit/index'

const WordCard = (): JSX.Element => {
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
      <CardContent>
        <TextInputStandard
          name={'name'}
          required={true}
          defaultValue={''}
          control={control}
          fullWidth={true}
          label={'New word'}
          type={'text'}
        />
        <AddibleContent title="Meanings" />
        <AddibleContent title="Synonyms" />
        <AddibleContent title="Examples" />
      </CardContent>
      <CardActions>
        <Button>Delete</Button>
      </CardActions>
    </Card>
    // <div className="spacer-24"></div>
  )
}

export default WordCard
