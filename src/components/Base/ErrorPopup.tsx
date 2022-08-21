import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getErrors } from 'reducks/errors/selectors'
import { changeLoadingState } from 'reducks/users/operations'
import { Alert, Snackbar } from '@mui/material'

const ErrorPopup = (): JSX.Element => {
  const selector = useSelector((state) => state)
  const dispatch = useDispatch()
  const errors = getErrors(selector)
  const msgs: string[] = errors.errorMsgs
  const open = msgs.length > 0

  useEffect(() => {
    dispatch(changeLoadingState(false))
  }, [open])

  return (
    <>
      {msgs && (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open}>
          <div>
            {msgs.map((msg: string, idx: number) => (
              <Alert severity="error" key={idx} sx={{ marginBottom: '8px' }}>
                {msg}
              </Alert>
            ))}
          </div>
        </Snackbar>
      )}
    </>
  )
}

export default ErrorPopup
