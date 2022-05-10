import { Typography } from '@mui/material'

type LabelProps = {
  content: string
}

const ContentBody = (props: LabelProps): JSX.Element => {
  return (
    <Typography
      variant={'body1'}
      align="left"
      sx={{
        display: 'block',
        textIndent: 8,
      }}
    >
      {props.content}
    </Typography>
  )
}

export default ContentBody
