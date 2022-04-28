import Button from '@mui/material/Button'

type OutlineLargeButtonProps = {
  label: string
  onClick: () => void
  color: 'primary' | 'secondary' | 'error' | 'inherit'
}

const OutlineLargeButton = (props: OutlineLargeButtonProps): JSX.Element => {
  return (
    <Button
      onClick={props.onClick}
      variant={'outlined'}
      color={props.color}
      sx={{
        width: 240,
        height: 40,
        borderRadius: 20,
        fontSize: 16,
      }}
    >
      {props.label}
    </Button>
  )
}

export default OutlineLargeButton
