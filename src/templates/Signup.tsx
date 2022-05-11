import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeLoadingState } from 'reducks/users/operations'
import { BaseFrame } from 'components/Base/index'
import { SignupForm } from 'components/Signup/index'

const Signup = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeLoadingState(false))
  }, [])

  return (
    <BaseFrame>
      <SignupForm />
    </BaseFrame>
  )
}

export default Signup
