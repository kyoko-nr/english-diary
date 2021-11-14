import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { AppFrame } from 'components/Base/index'
import { OutlineMidButton, Label } from 'components/UIKit/index'
import { deleteAccount } from 'reducks/users/operations'

const DeleteAccountConfirm = (): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <AppFrame maxWidth={'sm'}>
      <Label label={'Are you sure to delete your account?'} variant={'h5'} align={'center'} />
      <div className={'spacer-40'} />
      <div className={'button-wrapper'}>
        <OutlineMidButton label={'cancel'} color="inherit" onClick={() => dispatch(push('/mypage'))} />
        <OutlineMidButton label={'delete'} color="error" onClick={() => dispatch(deleteAccount())} />
      </div>
    </AppFrame>
  )
}

export default DeleteAccountConfirm
