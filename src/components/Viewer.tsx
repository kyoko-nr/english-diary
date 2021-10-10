import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Diary } from 'reducks/users/types'
import { ContainedMidButton, Label, OutlineMidButton, FormatDate } from 'components/UIKit/index'

type ViewerProps = {
  diary: Diary
  onDelete: (id: string) => void
}

const Viewer = (props: ViewerProps): JSX.Element => {
  const dispatch = useDispatch()
  const splited = props.diary.content.split(/[\s]/)
  const count = splited.filter((w: string) => w !== '').length

  return (
    <div className={'content'}>
      <div className={'spacer-8'} />
      {props.diary.date && <FormatDate date={props.diary.date} format={'date'} variant={'body1'} align={'left'} />}
      <div className={'spacer-24'} />
      <Label label={props.diary.title} variant={'h5'} align={'left'} />
      <div className={'spacer-24'} />
      <Label label={`${count} words`} variant={'caption'} align={'right'} />
      <div className={'spacer-8'} />
      <Label label={props.diary.content} variant={'body1'} align={'left'} />
      <div className={'spacer-32'} />
      <div className={'button-wrapper'}>
        <OutlineMidButton label={'delete'} onClick={() => props.onDelete(props.diary.id)} />
        <ContainedMidButton
          label={'edit'}
          color={'secondary'}
          onClick={() => dispatch(push(`/edit/${props.diary.id}`))}
        />
      </div>
    </div>
  )
}

export default Viewer
