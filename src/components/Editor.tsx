import { ChangeEvent, useState } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

import { TextInput } from './index'

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

const Editor = (): JSX.Element => {
  const classes = useStyles()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitle: InputFunction = (event) => {
    setTitle(event.target.value)
  }

  const handleContent: InputFunction = (event) => {
    setContent(event.target.value)
  }

  return (
    <div className={classes.content}>
      <Typography variant="h5">2021/8/26</Typography>
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
      <Button size="large" title="submit" onClick={() => console.log('submit')} />
    </div>
  )
}

export default Editor
