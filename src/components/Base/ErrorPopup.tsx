import { Snackbar } from '@material-ui/core'
import { Alert } from '@mui/material'
import { useSelector } from 'react-redux'
import { getErrors } from 'reducks/errors/selectors'

const ErrorPopup = (): JSX.Element => {
  const selector = useSelector((state) => state)
  const errors = getErrors(selector)
  const msgs: string[] = errors.errorMsgs
  const open = msgs.length > 0

  return (
    <>
      {msgs && (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open}>
          <div>
            {msgs.map((msg: string, idx: number) => {
              return (
                <>
                  <div className={'spacer-8'} />
                  <Alert severity="error" key={idx}>
                    {msg}
                  </Alert>
                </>
              )
            })}
          </div>
        </Snackbar>
      )}
    </>
  )
}

export default ErrorPopup
