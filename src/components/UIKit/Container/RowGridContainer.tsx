import { Grid } from '@mui/material'
import { ReactNode, Children } from 'react'

type Props = {
  children: ReactNode
  spacing: number
  justifyContent: 'center' | 'flex-start'
}

const RowGridContainer = (props: Props): JSX.Element => {
  return (
    <Grid container spacing={props.spacing} justifyContent={props.justifyContent}>
      {Children.map(props.children, (child) => {
        return <Grid item>{child}</Grid>
      })}
    </Grid>
  )
}

export default RowGridContainer
