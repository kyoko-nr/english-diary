import { Button } from '@mui/material'

type TextMidButtonProps = {
  label: string
  onClick: () => void
  color: 'primary' | 'error'
}

const TextMidButton = (props: TextMidButtonProps): JSX.Element => {
  return (
    <Button
      onClick={props.onClick}
      variant={'text'}
      color={props.color}
      sx={{
        width: 164,
        height: 32,
        borderRadius: 20,
        fontSize: 14,
      }}
    >
      {props.label}
    </Button>
  )
}

export default TextMidButton
