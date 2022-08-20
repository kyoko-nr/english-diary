import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Diary } from 'types/types'
import { WordCards, ContainedMidButton, Label, OutlineMidButton, FormatDate } from 'components/UIKit/index'
import { Stack, Typography } from '@mui/material'

type ViewerProps = {
  diary: Diary
  onDelete: (id: string) => void
}

const Viewer = (props: ViewerProps): JSX.Element => {
  const dispatch = useDispatch()
  const splited = props.diary.content.split(/[\s]/)
  const count = splited.filter((w: string) => w !== '').length

  return (
    <>
      <FormatDate date={props.diary.date} format={'date'} variant={'body1'} align={'left'} />
      <div className={'spacer-24'} />
      <Label label={props.diary.title} variant={'h5'} align={'left'} />
      <div className={'spacer-24'} />
      <Label label={`${count} words`} variant={'caption'} align={'right'} />
      <div className={'spacer-8'} />
      <Typography
        variant={'body1'}
        align="left"
        sx={{
          display: 'block',
          whiteSpace: 'pre-wrap',
        }}
      >
        {props.diary.content}
      </Typography>
      <div className={'spacer-32'} />
      <WordCards words={props.diary.words} />
      <div className={'spacer-32'} />
      <Stack spacing={2} justifyContent="center" direction="row">
        <OutlineMidButton label={'delete'} color={'error'} onClick={() => props.onDelete(props.diary.id)} />
        <ContainedMidButton
          label={'edit'}
          color={'secondary'}
          onClick={() => dispatch(push(`/edit/${props.diary.id}`))}
        />
      </Stack>
    </>
  )
}

export default Viewer
