import { Card, CardContent, CardActions } from '@mui/material'
import { useForm } from 'react-hook-form'
import { TextInputStandard, AddibleContent, TextMidButton } from 'components/UIKit/index'
import { Addible } from 'reducks/users/types'

type NewWordProps = {
  id: string
  name: string
  meanings: Addible[]
  synonyms: Addible[]
  examples: Addible[]
  diaryId: string
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
    <Card className="wordcard" sx={{ color: '#4a4a4a', marginBottom: '16px' }}>
      <CardContent sx={{ padding: '8px 16px' }}>
        <TextInputStandard
          name={'name'}
          required={true}
          defaultValue={props.name}
          control={control}
          fullWidth={true}
          label={'New word'}
          noError={true}
          type={'text'}
        />
        <AddibleContent
          diaryId={props.diaryId}
          wordId={props.id}
          title="meanings"
          contents={props.meanings}
          fullWidth={true}
        />
        <AddibleContent
          diaryId={props.diaryId}
          wordId={props.id}
          title="synonyms"
          contents={props.synonyms}
          fullWidth={false}
        />
        <AddibleContent
          diaryId={props.diaryId}
          wordId={props.id}
          title="examples"
          contents={props.examples}
          fullWidth={true}
        />
      </CardContent>
      <CardActions>
        <TextMidButton label="delete this word" color="error" onClick={() => console.log('delete this word')} />
      </CardActions>
    </Card>
  )
}

export default NewWord
