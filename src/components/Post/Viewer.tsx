import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Diary } from 'reducks/users/types'
import { ContainedMidButton, Label, OutlineMidButton, FormatDate, ContentBody } from 'components/UIKit/index'
import { NewWordListView } from 'components/Post/index'

type ViewerProps = {
  diary: Diary
  onDelete: (id: string) => void
}

const Viewer = (props: ViewerProps): JSX.Element => {
  const dispatch = useDispatch()
  const splited = props.diary.content.split(/[\s]/)
  const count = splited.filter((w: string) => w !== '').length
  const contentLines = props.diary.content.split(/\n/)

  return (
    <>
      {props.diary.date && <FormatDate date={props.diary.date} format={'date'} variant={'body1'} align={'left'} />}
      <div className={'spacer-24'} />
      <Label label={props.diary.title} variant={'h5'} align={'left'} />
      <div className={'spacer-24'} />
      <Label label={`${count} words`} variant={'caption'} align={'right'} />
      <div className={'spacer-8'} />
      {contentLines.map((line, idx) => (
        <ContentBody content={line} key={idx} />
      ))}
      <div className={'spacer-32'} />
      <NewWordListView words={props.diary.words} />
      <div className={'spacer-32'} />
      <div className={'button-wrapper'}>
        <OutlineMidButton label={'delete'} color={'error'} onClick={() => props.onDelete(props.diary.id)} />
        <ContainedMidButton
          label={'edit'}
          color={'secondary'}
          onClick={() => dispatch(push(`/edit/${props.diary.id}`))}
        />
      </div>
    </>
  )
}

export default Viewer
