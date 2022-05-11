import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeLoadingState } from 'reducks/users/operations'
import { BaseFrame } from 'components/Base/index'
import { ResetForm } from 'components/Reset/index'

const Reset = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeLoadingState(false))
  }, [])

  return (
    <BaseFrame>
      <ResetForm />
    </BaseFrame>
  )
}

export default Reset
