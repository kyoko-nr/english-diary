import { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import { Diary } from 'Types/TypeList'

type ViewerProps = {
  diary: Diary
  onDelete: (id: string) => void
}

const Viewer = (props: ViewerProps): JSX.Element => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const splited = props.diary.content.split(/[\s]/)
    const count = splited.filter((w) => w !== '').length
    setCounter(count)
  }, [])

  return (
    <div className={'content diary'}>
      <div className={'date'}>{props.diary.date}</div>
      <Typography className={'title title-label'}>{props.diary.title}</Typography>
      <div className={'word-counter'}>{counter} words</div>
      <div className={'diary-content'}>{props.diary.content}</div>
      <div className={'button-wrapper'}>
        <Button className={'second'} onClick={() => props.onDelete(props.diary.id)}>
          delete
        </Button>
        <Button className={'edit'} href={`/edit/${props.diary.id}`}>
          edit
        </Button>
      </div>
    </div>
  )
}

export default Viewer
