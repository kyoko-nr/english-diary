import { useSelector } from 'react-redux'
import { Card, CardContent, CardActions } from '@mui/material'
import { TextInputStandard, AddibleContent, TextMidButton, EnglishPartsSelect } from 'components/UIKit/index'
import { Feature, Word } from 'reducks/users/types'
import { getWordFeatureId } from 'reducks/users/operations'
import { getUserId } from 'reducks/users/selectors'

type NewWordProps = {
  word: Word
  diaryId: string
  name: string
  control: any
  deleteWord: (index: string) => void
  index: string
  update: (index: number, value: Partial<Word>) => void
}

const NewWord = (props: NewWordProps): JSX.Element => {
  const selector = useSelector((state) => state)

  const addInput = (feature: Feature) => {
    const uid = getUserId(selector)
    const id = getWordFeatureId(uid, props.diaryId, props.word.wordId, feature)
    const input = { id: id, value: '' }
    const word: Word = {
      wordId: props.word.wordId,
      title: props.word.title,
      meanings: [...props.word.meanings],
      synonyms: [...props.word.synonyms],
      examples: [...props.word.examples],
    }
    switch (feature) {
      case 'meanings':
        word.meanings.push(input)
        break
      case 'examples':
        word.examples.push(input)
        break
      case 'synonyms':
        word.synonyms.push(input)
        break
    }
    props.update(parseInt(props.index), word)
  }

  const deleteInput = (feature: Feature, id: string) => {
    const word: Word = {
      wordId: props.word.wordId,
      title: props.word.title,
      meanings: [...props.word.meanings],
      synonyms: [...props.word.synonyms],
      examples: [...props.word.examples],
    }
    switch (feature) {
      case 'meanings':
        word.meanings = word.meanings.filter((m) => m.id !== id)
        break
      case 'examples':
        word.examples = word.examples.filter((m) => m.id !== id)
        break
      case 'synonyms':
        word.synonyms = word.synonyms.filter((m) => m.id !== id)
        break
    }
    props.update(parseInt(props.index), word)
  }

  return (
    <Card className="wordcard" sx={{ color: '#4a4a4a', marginBottom: '16px' }}>
      <CardContent sx={{ padding: '8px 16px' }}>
        <TextInputStandard
          name={`${props.name}.title`}
          required={true}
          defaultValue={props.word.title}
          control={props.control}
          fullWidth={true}
          label={'New word'}
          noError={true}
          type={'text'}
        />
        <EnglishPartsSelect />
        <AddibleContent
          diaryId={props.diaryId}
          wordId={props.word.wordId}
          feature="meanings"
          contents={props.word.meanings}
          fullWidth={true}
          name={`${props.name}.meanings`}
          control={props.control}
          index={props.index}
          addInput={addInput}
          deleteInput={deleteInput}
        />
        <AddibleContent
          diaryId={props.diaryId}
          wordId={props.word.wordId}
          feature="synonyms"
          contents={props.word.synonyms}
          fullWidth={false}
          name={`${props.name}.synonyms`}
          control={props.control}
          index={props.index}
          addInput={addInput}
          deleteInput={deleteInput}
        />
        <AddibleContent
          diaryId={props.diaryId}
          wordId={props.word.wordId}
          feature="examples"
          contents={props.word.examples}
          fullWidth={true}
          name={`${props.name}.examples`}
          control={props.control}
          index={props.index}
          addInput={addInput}
          deleteInput={deleteInput}
        />
      </CardContent>
      <CardActions>
        <TextMidButton label="delete this word" color="error" onClick={() => props.deleteWord(props.index)} />
      </CardActions>
    </Card>
  )
}

export default NewWord
