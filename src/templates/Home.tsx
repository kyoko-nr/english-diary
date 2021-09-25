import { Grid, Container } from '@material-ui/core'

import { Header, Editor, ArchiveList } from 'components/index'

const Home = (): JSX.Element => {
  const id = window.location.pathname.split('/')[1]

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={2} className={'content'}>
          <Grid item xs={12} md={8}>
            <Editor idToEdit={id}></Editor>
          </Grid>
          <Grid item xs={12} md={4}>
            <ArchiveList />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
