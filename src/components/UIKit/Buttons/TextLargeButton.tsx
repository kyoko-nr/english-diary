import { Button } from '@mui/material'

type TextLargeButtonProps = {
  label: string
  onClick: () => void
  color: 'primary'
}

const TextLargeButton = (props: TextLargeButtonProps): JSX.Element => {
  return (
    <Button
      onClick={props.onClick}
      variant="text"
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

export default TextLargeButton
