import { useSelector } from 'react-redux'
import { getUsername, getEmail } from 'reducks/users/selectors'
import { AppFrame } from 'components/Base/index'
import { OutlineMidButton, Label, OutlineLargeButton } from 'components/UIKit/index'
import { MyPageEditForm } from 'components/MyPageEdit'

const MyPageEdit = (): JSX.Element => {
  const selector = useSelector((state) => state)
  const username = getUsername(selector)
  const email = getEmail(selector)

  return (
    <AppFrame maxWidth={'sm'}>
      <MyPageEditForm />
      <div className={'flex flex-between'}>
        <Label label={username && username} variant={'h4'} align={'left'} />
        <OutlineMidButton className={'ml-16'} label={'edit'} color={'inherit'} onClick={() => console.log('clicked')} />
      </div>
      <div className={'spacer-16'} />
      <Label label={email && email} variant={'h5'} align={'left'} />
      <div className={'spacer-16'} />
      <div>emailの変更、ユーザ名の変更、パスワードの変更実装</div>
      <div>アカウントの削除実装</div>
      <div className={'spacer-40'} />
      <div className={'button-wrapper'}>
        <OutlineLargeButton label={'delete account'} color="error" onClick={() => console.log('clicked')} />
      </div>
    </AppFrame>
  )
}

export default MyPageEdit
