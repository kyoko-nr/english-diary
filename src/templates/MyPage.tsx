import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getUsername, getEmail } from 'reducks/users/selectors'
import { changeLoadingState } from 'reducks/users/operations'
import { clearErrors } from 'reducks/errors/operations'
import { AppFrame } from 'components/Base/index'
import { MyPageContent, MyPageEditForm } from 'components/MyPage/index'

const MyPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const location = useLocation()
  const isEdit = location.pathname.split('/mypage/')[1] === 'edit'
  const username = getUsername(selector)
  const email = getEmail(selector)

  useEffect(() => {
    dispatch(clearErrors())
    dispatch(changeLoadingState(false))
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
