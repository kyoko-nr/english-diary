import { Typography } from '@mui/material'

type LabelProps = {
  label: string
  variant: 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption'
  align: 'center' | 'right' | 'left'
  color?: 'error' | 'primary'
  uppercase?: boolean
  capitalize?: boolean
  bold?: boolean
  overflowElipses?: boolean
}

const Label = (props: LabelProps): JSX.Element => {
  return (
    <Typography
      variant={props.variant}
      align={props.align}
      color={props.color ? props.color : 'text'}
      sx={{
        display: 'block',
        textTransform: props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none',
      }}
      fontWeight={props.bold ? '500' : '400'}
      textOverflow={props.overflowElipses ? 'ellipsis' : 'none'}
      overflow={props.overflowElipses ? 'hidden' : 'auto'}
      whiteSpace={props.overflowElipses ? 'nowrap' : 'normal'}
    >
      {props.label}
    </Typography>
  )
}

export default Label
