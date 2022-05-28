import { useEffect, useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import { useDispatch } from 'react-redux'
import { changeLoadingState } from 'reducks/users/operations'
import { clearErrors } from 'reducks/errors/operations'
import { AppFrame } from 'components/Base/index'
import { MyDictContent } from 'components/MyDictionary/index'
import { Selection } from 'components/UIKit/index'
import { OrderOptions } from 'constants/Parts'

const MyDictionary = (): JSX.Element => {
  const dispatch = useDispatch()

  const [order, setOrder] = useState<string>('1')

  const orderSelect = (event: SelectChangeEvent) => {
    setOrder(event.target.value)
  }

  useEffect(() => {
    dispatch(clearErrors())
    dispatch(changeLoadingState(false))
  }, [])

  return (
    <AppFrame maxWidth={'lg'}>
      <Selection onChange={orderSelect} options={OrderOptions} value={order} name={'Order'} />
      <MyDictContent order={order} />
    </AppFrame>
  )
}

export default MyDictionary
