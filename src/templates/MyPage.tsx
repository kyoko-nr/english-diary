import { useSelector } from 'react-redux'
import { getUsername, getEmail } from 'reducks/users/selectors'
import { Container } from '@material-ui/core'
import { Header } from 'components/Navs/index'

const MyPage = (): JSX.Element => {
  const selector = useSelector((state) => state)
  const username = getUsername(selector)
  const email = getEmail(selector)

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <div className={'content'}>
          <div className={'spacer-40'} />
          {username && <div>{username}</div>}
          {email && <div>{email}</div>}
          <div>TODO</div>
          <div>emailをusersのカラムから抜く</div>
          <div>emailの変更、ユーザ名の変更、パスワードの変更実装</div>
          <div>アカウントの削除実装</div>
        </div>
      </Container>
    </>
  )
}

export default MyPage
