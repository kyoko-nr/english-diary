import { Container, Grid } from '@mui/material'
import { ReactNode, Children } from 'react'

type Props = {
  children: ReactNode
}

const XsColumnGridContainer = (props: Props): JSX.Element => {
  return (
    <Container maxWidth="xs">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {Children.map(props.children, (child) => {
            return child
          })}
        </Grid>
      </Grid>
    </Container>
  )
}

export default XsColumnGridContainer
