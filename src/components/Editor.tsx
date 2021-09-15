import { ChangeEvent, useState, useEffect, useDebugValue } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

import { TextInput } from 'Components/index'
import { formatDate } from 'Utils/DateFormatUtils'
import { Diary, SaveFunc } from 'Types/TypeList'

type EditorProps = {
  onSave: SaveFunc
  diary?: Diary
}

type InputFunction = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void

const Editor = (props: EditorProps): JSX.Element => {
  const [date, setDate] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [counter, setCounter] = useState(0)

  const handleTitle: InputFunction = (event) => {
    setTitle(event.target.value)
  }

  const handleContent: InputFunction = (event) => {
    const value = event.target.value
    setContent(event.target.value)
    const splited = value.split(/[\s]/)
    const count = splited.filter((w) => w !== '').length
    setCounter(count)
  }

  const crearFields = () => {
    setTitle('')
    setContent('')
  }

  useEffect(() => {
    if (props.diary) {
      setDate(props.diary.date)
      setTitle(props.diary.title)
      setContent(props.diary.content)
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
        onChange={handleTitle}
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
        onChange={handleContent}
      />
      <div className={'button-wrapper'}>
        <Button className={'second'} onClick={() => crearFields()}>
          clear
        </Button>
        <Button
          className={'save'}
          onClick={() => {
            props.diary ? props.onSave(date, title, content, props.diary.id) : props.onSave(date, title, content)
            crearFields()
          }}
        >
          save
        </Button>
      </div>
    </div>
  )
}

export default Editor
