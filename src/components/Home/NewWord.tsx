import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent, CardActions, Box } from '@mui/material'
import { TextInputStandard, AddibleContent, TextMidButton, PosSelect } from 'components/UIKit/index'
import { Feature, Word } from 'types/types'

type NewWordProps = {
  word: Word
  diaryId: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any
  deleteWord: (index: string) => void
  index: string
  update: (index: number, value: Partial<Word>) => void
}

const NewWord = (props: NewWordProps): JSX.Element => {
  const addInput = (feature: Feature) => {
    const input = { value: '' }
    const word: Word = {
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

  const deleteInput = (feature: Feature, index: number) => {
    const word: Word = {
      title: props.word.title,
      meanings: [...props.word.meanings],
      synonyms: [...props.word.synonyms],
      examples: [...props.word.examples],
      pos: props.word.pos,
    }
    switch (feature) {
      case 'meanings':
        word.meanings = word.meanings.filter((m, idx) => idx !== index)
        break
      case 'examples':
        word.examples = word.examples.filter((m, idx) => idx !== index)
        break
      case 'synonyms':
        word.synonyms = word.synonyms.filter((m, idx) => idx !== index)
        break
    }
    props.update(parseInt(props.index), word)
  }

  // useEffect(() => {
  //   setWordId(props.word.wordId)
  // }, [props.word])

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
        <TextMidButton label="delete this word" color="error" onClick={() => props.deleteWord(props.index)} />
      </CardActions>
    </Card>
  )
}

export default NewWord
