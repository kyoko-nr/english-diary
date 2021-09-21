import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listenAuthState } from 'reducks/users/operations'
import { getIsSignedIn } from 'reducks/users/selectors'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Auth = ({ children }: any) => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const isSignedIn = getIsSignedIn(selector)

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState())
    }
  }, [])

  if (!isSignedIn) {
    return <></>
  } else {
    return children
  }
}

export default Auth
