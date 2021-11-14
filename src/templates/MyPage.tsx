import { useSelector, useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { getUsername, getEmail } from 'reducks/users/selectors'
import { AppFrame } from 'components/Base/index'
import { OutlineMidButton, Label, OutlineLargeButton } from 'components/UIKit/index'

const MyPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const username = getUsername(selector)
  const email = getEmail(selector)

  return (
    <AppFrame maxWidth={'sm'}>
      <div className={'flex flex-between'}>
        <Label label={username && username} variant={'h4'} align={'left'} />
        <OutlineMidButton className={'ml-16'} label={'edit'} color={'inherit'} onClick={() => console.log('clicked')} />
      </div>
      <div className={'spacer-16'} />
      <Label label={email && email} variant={'h5'} align={'left'} />
      <div className={'spacer-16'} />
      <div>emailの変更、ユーザ名の変更、パスワードの変更実装</div>
      <div className={'spacer-40'} />
      <div className={'button-wrapper'}>
        <OutlineLargeButton label={'delete account'} color="error" onClick={() => dispatch(push('/mypage/delete'))} />
      </div>
    </AppFrame>
  )
}

export default MyPage
