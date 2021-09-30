import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextInput, ContainedMidButton, OutlineMidButton, Label } from 'components/UIKit/index'
import { getDiaries } from 'reducks/users/selectors'
import { Diary } from 'reducks/users/types'
import { saveDiary } from 'reducks/users/operations'

type EditorProps = {
  idToEdit?: string
}

const Editor = (props: EditorProps): JSX.Element => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const diaries = getDiaries(selector)

  const [id, setId] = useState('')
  const [date, setDate] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [counter, setCounter] = useState(0)

  const inputTitle = useCallback(
    (event) => {
      setTitle(event.target.value)
    },
    [setTitle]
  )

  const inputContent = useCallback(
    (event) => {
      const value = event.target.value
      setContent(event.target.value)
      setCounter(countWords(value))
    },
    [setContent, setCounter]
  )

  const countWords = (value: string): number => {
    const splited = value.split(/[\s]/)
    const count = splited.filter((w: string) => w !== '').length
    return count
  }

  const initFields = () => {
    setId('')
    setDate(new Date().toDateString())
    setTitle('')
    setContent('')
    setCounter(0)
  }

  useEffect(() => {
    if (props.idToEdit) {
      console.log('id to edit : ', props.idToEdit)
      const diary = diaries.filter((diary: Diary) => diary.id == props.idToEdit)[0]
      setId(diary.id)
      setDate(diary.date)
      setTitle(diary.title)
      setContent(diary.content)
      setCounter(countWords(diary.content))
    } else {
      initFields()
    }
  }, [id])

  return (
    <div className={'content'}>
      <div className={'spacer-8'}></div>
      <Label label={date} variant={'body1'} align={'left'} />
      <div className={'spacer-24'}></div>
      <TextInput
        fullWidth={true}
        label={'Title'}
        multiline={false}
        rows={1}
        value={title}
        type={'text'}
        onChange={inputTitle}
        variant={'outlined'}
      />
      <div className={'spacer-24'}></div>
      <Label label={`${counter} words`} variant={'caption'} align={'right'} />
      <div className={'spacer-8'}></div>
      <TextInput
        fullWidth={true}
        multiline={true}
        rows={16}
        value={content}
        type={'text'}
        placeholder={'Describe your day here!'}
        onChange={inputContent}
        variant={'outlined'}
      />
      <div className={'spacer-32'}></div>
      <div className={'button-wrapper'}>
        <OutlineMidButton label={'clear'} onClick={initFields} />
        <ContainedMidButton
          color={'primary'}
          onClick={() => {
            dispatch(saveDiary({ id, date, title, content }))
            initFields()
          }}
          label={'save'}
        />
      </div>
    </div>
  )
}

export default Editor
