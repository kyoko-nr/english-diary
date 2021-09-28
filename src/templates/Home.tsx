import { Grid, Container } from '@material-ui/core'

import { Header, Editor, ArchiveList } from 'components/index'
import { useEffect, useState } from 'react'

const Home = (): JSX.Element => {
  // const [id, setId] = useState(window.location.pathname.split('/posts/')[1])
  const id = window.location.pathname.split('/edit/')[1]

  useEffect(() => {
    // const param = window.location.pathname.split('/posts/')[1]
    // setId(param)
  }, [])

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={1} className={'content'}>
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
