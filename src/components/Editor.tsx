import { useState, useEffect, useCallback } from 'react'

import { TextInput, PrimaryMidButton, OutlineMidButton } from 'components/UIKit/index'
import { formatDate } from 'utils/DateFormatUtils'
import { fetchDiary } from 'utils/DiaryManager'
import { SaveFunc } from 'types/TypeList'

type EditorProps = {
  onSave: SaveFunc
  idToEdit?: string
}

const Editor = (props: EditorProps): JSX.Element => {
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
      const splited = value.split(/[\s]/)
      const count = splited.filter((w: string) => w !== '').length
      setCounter(count)
    },
    [setContent, setCounter]
  )

  const clearFields = () => {
    setTitle('')
    setContent('')
  }

  useEffect(() => {
    console.log('editor props:', props)
    if (props.idToEdit) {
      fetchDiary(props.idToEdit).then((diary) => {
        setDate(diary.date)
        setTitle(diary.title)
        setContent(diary.content)
      })
    } else {
      const today = new Date()
      const str = formatDate(today)
      setDate(str)
    }
  }, [])

  return (
    <div className={'content diary'}>
      <div className={'date'}>{date}</div>
      <TextInput
        className={'title'}
        fullWidth={true}
        label={'Title'}
        multiline={false}
        rows={1}
        value={title}
        type={'text'}
        onChange={inputTitle}
        variant={'outlined'}
      />
      <div className={'word-counter'}>{counter} words</div>
      <TextInput
        className={'diary-content'}
        fullWidth={true}
        multiline={true}
        rows={20}
        value={content}
        type={'text'}
        placeholder={'Describe your day here!'}
        onChange={inputContent}
        variant={'outlined'}
      />
      <div className={'button-wrapper'}>
        <OutlineMidButton label={'clear'} onClick={clearFields} />
        <PrimaryMidButton onClick={clearFields} label={'save'} />

        {/* <Button className={'second'} onClick={() => crearFields()}>
          clear
        </Button> */}
        {/* <Button
          className={'save'}
          onClick={() => {
            props.idToEdit ? props.onSave(date, title, content, props.idToEdit) : props.onSave(date, title, content)
            crearFields()
          }}
        >
          save
        </Button> */}
      </div>
    </div>
  )
}

export default Editor
