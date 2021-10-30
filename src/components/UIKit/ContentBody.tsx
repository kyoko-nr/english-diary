import { createStyles, makeStyles, Typography } from '@material-ui/core'

type LabelProps = {
  content: string
  align: 'center' | 'right' | 'left'
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'block',
      whiteSpace: 'pre-wrap',
      lineHeight: '1.6em',
      fontSize: '1.1rem',
    },
  })
)

const ContentBody = (props: LabelProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Typography className={classes.root} variant={'body1'} align={props.align}>
      {props.content}
    </Typography>
  )
}

export default ContentBody
