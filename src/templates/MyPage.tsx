import { useSelector } from 'react-redux'
import { getUserId } from 'reducks/users/selectors'
import { Container } from '@material-ui/core'
import { Header } from 'components/Navs/index'

const MyPage = (): JSX.Element => {
  const selector = useSelector((state) => state)
  const uid = getUserId(selector)

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <div className={'content'}>
          <div className={'spacer-40'} />
          {uid ? <div>ID: {uid}</div> : <div>No user</div>}
        </div>
      </Container>
    </>
  )
}

export default MyPage
