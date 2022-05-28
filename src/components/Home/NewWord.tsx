import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent, CardActions, Box } from '@mui/material'
import { TextInputStandard, AddibleContent, TextMidButton, PosSelect } from 'components/UIKit/index'
import { Feature, Word } from 'types/types'
import { getWordFeatureId } from 'reducks/users/operations'
import { getUserId } from 'reducks/users/selectors'

type NewWordProps = {
  word: Word
  diaryId: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any
  deleteWord: (index: string, wordId: string) => void
  index: string
  update: (index: number, value: Partial<Word>) => void
}

const NewWord = (props: NewWordProps): JSX.Element => {
  const selector = useSelector((state) => state)
  const [wordId, setWordId] = useState('')

  const addInput = (feature: Feature) => {
    const uid = getUserId(selector)
    const id = getWordFeatureId(uid, props.diaryId, wordId, feature)
    const input = { id: id, value: '' }
    const word: Word = {
      wordId: wordId,
      title: props.word.title,
      meanings: [...props.word.meanings],
      synonyms: [...props.word.synonyms],
      examples: [...props.word.examples],
      pos: props.word.pos,
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
      pos: props.word.pos,
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

  useEffect(() => {
    setWordId(props.word.wordId)
  }, [props.word])

  return (
    <Card sx={{ marginBottom: '16px' }} variant="outlined">
      <CardContent sx={{ padding: '8px 16px', boxShadow: 'none' }}>
        <Box sx={{ display: 'flex', alignItems: 'start' }}>
          <TextInputStandard
            name={`${props.name}.title`}
            required={true}
            defaultValue={props.word.title}
            control={props.control}
            fullWidth={true}
            label={'New word'}
            type={'text'}
          />
          <PosSelect name={`${props.name}.pos`} control={props.control} />
        </Box>
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
        <div className="spacer-8" />
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
        <div className="spacer-8" />
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
      <CardActions className="button-wrapper">
        <TextMidButton
          label="delete this word"
          color="error"
          onClick={() => props.deleteWord(props.index, props.word.wordId)}
        />
      </CardActions>
    </Card>
  )
}

export default NewWord
