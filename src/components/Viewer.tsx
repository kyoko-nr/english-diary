import { useState, useEffect } from 'react'

import { ContainedMidButton, Label, OutlineMidButton } from 'components/UIKit/index'
import { Diary } from 'reducks/users/types'

type ViewerProps = {
  diary: Diary
  onDelete: (id: string) => void
}

const Viewer = (props: ViewerProps): JSX.Element => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const content = props.diary.content
    const splited = content.split(/[\s]/)
    const count = splited.filter((w) => w !== '').length
    setCounter(count)
  }, [])

  return (
    <div className={'content'}>
      <div className={'spacer-8'}></div>
      {props.diary.date && <Label label={props.diary.date.toDate().toDateString()} variant={'body1'} align={'left'} />}
      <div className={'spacer-24'}></div>
      <Label label={props.diary.title} variant={'h5'} align={'left'} />
      <div className={'spacer-24'}></div>
      <Label label={`${counter} words`} variant={'caption'} align={'right'} />
      <div className={'spacer-8'}></div>
      <Label label={props.diary.content} variant={'body1'} align={'left'} />
      <div className={'spacer-32'}></div>
      <div className={'button-wrapper'}>
        <OutlineMidButton label={'delete'} onClick={() => console.log('delete')} />
        <ContainedMidButton label={'edit'} onClick={() => console.log('edit')} color={'secondary'} />
      </div>
    </div>
  )
}

export default Viewer
