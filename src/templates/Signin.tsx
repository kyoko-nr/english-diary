import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeLoadingState } from 'reducks/users/operations'
import { Logo } from 'components/UIKit/index'
import { SigninForm } from 'components/Signin/index'
import { BaseFrame } from 'components/Base/index'
import { Scene } from 'components/three/index'

const signin = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeLoadingState(false))
  }, [])

  return (
    <BaseFrame>
      <Logo variant={'h4'} component={'h1'} />
      <Scene />
      <SigninForm />
    </BaseFrame>
  )
}

export default signin
