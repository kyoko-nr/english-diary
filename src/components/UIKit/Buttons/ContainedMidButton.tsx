import Button from '@mui/material/Button'

type ContainedMidButtonProps = {
  label: string
  onClick: () => void
  color: 'primary' | 'secondary'
}

const ContainedMidButton = (props: ContainedMidButtonProps): JSX.Element => {
  return (
    <Button
      onClick={props.onClick}
      variant={'contained'}
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

export default ContainedMidButton
