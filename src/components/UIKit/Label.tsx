import { Typography } from '@mui/material'

type LabelProps = {
  label: string
  variant: 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption'
  align: 'center' | 'right' | 'left'
  color?: 'error' | 'primary'
  uppercase?: boolean
  bold?: boolean
}

const Label = (props: LabelProps): JSX.Element => {
  return (
    <Typography
      variant={props.variant}
      align={props.align}
      color={props.color ? props.color : 'text'}
      sx={{ display: 'block', textTransform: props.uppercase ? 'uppercase' : 'none' }}
      fontWeight={props.bold ? '500' : '400'}
    >
      {props.label}
    </Typography>
  )
}

export default Label
