import { Typography } from '@mui/material'

type LabelProps = {
  content: string
  align: 'center' | 'right' | 'left'
}

const ContentBody = (props: LabelProps): JSX.Element => {
  return (
    <Typography
      variant={'body1'}
      align={props.align}
      sx={{
        display: 'block',
        whiteSpace: 'pre-wrap',
        lineHeight: '1.6em',
        fontSize: '1.1rem',
      }}
    >
      {props.content}
    </Typography>
  )
}

export default ContentBody
