import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Label, OutlineLargeButton } from 'components/UIKit/index'
import { Stack } from '@mui/material'

type MyPageContentProps = {
  username: string
  email: string
}

const MyPageContent = (props: MyPageContentProps): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <>
      <Label label={'User name：'} variant={'body2'} align={'left'} />
      <Label label={props.username} variant={'h5'} align={'left'} />
      <div className={'spacer-16'} />
      <Label label={'Email：'} variant={'body2'} align={'left'} />
      <Label label={props.email} variant={'h5'} align={'left'} />
      <div className={'spacer-64'} />
      <Stack spacing={2} alignItems="center">
        <OutlineLargeButton label={'edit'} color={'inherit'} onClick={() => dispatch(push('/mypage/edit'))} />
        <OutlineLargeButton label={'delete account'} color={'error'} onClick={() => dispatch(push('/mypage/delete'))} />
      </Stack>
    </>
  )
}

export default MyPageContent
