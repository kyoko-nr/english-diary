import Button from '@mui/material/Button'

type OutlineMidButtonProps = {
  label: string
  onClick: () => void
  color: 'inherit' | 'error'
}

const OutlineMidButton = (props: OutlineMidButtonProps): JSX.Element => {
  return (
    <Button
      onClick={props.onClick}
      variant={'outlined'}
      color={props.color}
      sx={{
        width: 112,
        height: 40,
        borderRadius: 20,
        fontSize: 16,
      }}
    >
      {props.label}
    </Button>
  )
}

export default OutlineMidButton
