import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { TextInput, ContainedMidButton, OutlineMidButton, Label, FormatDate } from 'components/UIKit/index'
import { Diary } from 'reducks/users/types'
import { saveDiary } from 'reducks/users/operations'

type EditorProps = {
  diary?: Diary
}

const Editor = (props: EditorProps): JSX.Element => {
  const dispatch = useDispatch()

  const [id, setId] = useState('')
  const [date, setDate] = useState(new Date())
  const [title, setTitle] = useState('')
  const [titleErr, setTitleErr] = useState(false)
  const [content, setContent] = useState('')
  const [contentErr, setContentErr] = useState(false)
  const [counter, setCounter] = useState(0)

  const inputTitle = useCallback(
    (event) => {
      const value = event.target.value
      setTitle(value)
      const isTitleError = value.length === 0
      setTitleErr(isTitleError)
    },
    [setTitle, setTitleErr]
  )

  const inputContent = useCallback(
    (event) => {
      const value = event.target.value
      setContent(value)
      setCounter(countWords(value))
      const isContentErr = value.length === 0
      setContentErr(isContentErr)
    },
    [setContent, setCounter, setContentErr]
  )

  const countWords = (value: string): number => {
    const splited = value.split(/[\s]/)
    const count = splited.filter((w: string) => w !== '').length
    return count
  }

  const initFields = () => {
    setId('')
    setDate(new Date())
    setTitle('')
    setContent('')
    setCounter(0)
  }

  useEffect(() => {
    if (props.diary) {
      setId(props.diary.id)
      setDate(props.diary.date)
      setTitle(props.diary.title)
      setContent(props.diary.content)
      setCounter(countWords(props.diary.content))
    } else {
      initFields()
    }
  }, [props.diary])

  return (
    <div className={'content'}>
      <div className={'spacer-8'} />
      <FormatDate date={date} format={'date'} variant={'body1'} align={'left'} />
      <div className={'spacer-24'} />
      <TextInput
        fullWidth={true}
        label={'Title'}
        multiline={false}
        rows={1}
        value={title}
        type={'text'}
        onChange={inputTitle}
        variant={'outlined'}
        required={true}
        error={titleErr}
        helperText={'Title is required!'}
      />
      <div className={'spacer-8'} />
      <Label label={`${counter} words`} variant={'caption'} align={'right'} />
      <div className={'spacer-8'} />
      <TextInput
        label={'Content'}
        fullWidth={true}
        multiline={true}
        rows={16}
        value={content}
        type={'text'}
        placeholder={'Describe your day here!'}
        onChange={inputContent}
        variant={'outlined'}
        required={true}
        error={contentErr}
        helperText={'Content is required!'}
      />
      <div className={'spacer-16'} />
      <div className={'button-wrapper'}>
        <OutlineMidButton label={'clear'} onClick={initFields} />
        <ContainedMidButton
          color={'primary'}
          onClick={() => dispatch(saveDiary({ id, date, title, content }))}
          label={'save'}
        />
      </div>
    </div>
  )
}

export default Editor
