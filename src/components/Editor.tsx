import { ChangeEvent, useState, useEffect } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

import { TextInput } from 'Components/index'
import { Format } from 'Utils/DateFormatUtils'

import { Diary } from 'Types/TypeList'

type EditorProps = {
  onSave: (value: Diary) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(3),
      '& .MuiTextField-root': {
        marginBottom: theme.spacing(3),
      },
    },
  })
)

type InputFunction = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void

const Editor = (props: EditorProps): JSX.Element => {
  const classes = useStyles()

  const [date, setDate] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitle: InputFunction = (event) => {
    setTitle(event.target.value)
  }

  const handleContent: InputFunction = (event) => {
    setContent(event.target.value)
  }

  const crearFields = () => {
    setTitle('')
    setContent('')
  }

  useEffect(() => {
    const today = new Date()
    const str = Format(today)
    setDate(str)
  }, [])

  return (
    <div className={classes.content}>
      <Typography variant="h5">{date}</Typography>
      <TextInput
        fullWidth={true}
        label={'Title'}
        multiline={false}
        rows={1}
        value={title}
        type={'text'}
        onChange={handleTitle}
      />
      <TextInput
        fullWidth={true}
        label={'Content'}
        multiline={true}
        rows={20}
        value={content}
        type={'text'}
        onChange={handleContent}
      />
      <Button size="large" variant="outlined" onClick={() => crearFields()}>
        delete
      </Button>
      <Button
        size="large"
        variant="contained"
        onClick={() => {
          props.onSave({ date, title, content })
          crearFields()
        }}
      >
        save
      </Button>
    </div>
  )
}

export default Editor
