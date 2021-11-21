import { useDispatch, useSelector } from 'react-redux'
import { getUsername, getEmail } from 'reducks/users/selectors'
import { AppFrame } from 'components/Base/index'
import { MyPageContent, MyPageEditForm } from 'components/MyPage/index'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import { clearErrors } from 'reducks/errors/operations'

const MyPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const location = useLocation()
  const isEdit = location.pathname.split('/mypage/')[1] === 'edit'
  const username = getUsername(selector)
  const email = getEmail(selector)

  useEffect(() => {
    dispatch(clearErrors())
  }, [])

  return (
    <AppFrame maxWidth={'sm'}>
      {isEdit ? (
        <MyPageEditForm username={username} email={email} />
      ) : (
        <MyPageContent username={username} email={email} />
      )}
    </AppFrame>
  )
}

export default MyPage
