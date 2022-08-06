import { Grid } from '@mui/material'
import { ReactNode, Children } from 'react'

type Props = {
  children: ReactNode
  spacing: number
  justifyContent: 'flex-start' | 'center'
}

const ColumnGridContainer = (props: Props): JSX.Element => {
  return (
    <Grid container spacing={props.spacing} justifyContent={props.justifyContent}>
      {Children.map(props.children, (child) => {
        return (
          <Grid item xs={12} justifyContent={props.justifyContent} display="flex">
            {child}
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ColumnGridContainer
