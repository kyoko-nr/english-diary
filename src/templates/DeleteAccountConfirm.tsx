import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { push } from 'connected-react-router'
import { AppFrame } from 'components/Base/index'
import { OutlineMidButton, Label } from 'components/UIKit/index'
import { deleteAccount, changeLoadingState } from 'reducks/users/operations'

const DeleteAccountConfirm = (): JSX.Element => {
  const dispatch = useDispatch()

  const onDelete = () => {
    dispatch(changeLoadingState(true))
    dispatch(deleteAccount())
  }

  useEffect(() => {
    dispatch(changeLoadingState(false))
  }, [])

  return (
    <AppFrame maxWidth={'sm'}>
      <Label label={'Are you sure to delete your account?'} variant={'h5'} align={'center'} />
      <div className={'spacer-40'} />
      <div className={'button-wrapper'}>
        <OutlineMidButton label={'cancel'} color="inherit" onClick={() => dispatch(push('/mypage'))} />
        <OutlineMidButton label={'delete'} color="error" onClick={() => onDelete()} />
      </div>
    </AppFrame>
  )
}

export default DeleteAccountConfirm
