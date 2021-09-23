import { useState, useEffect } from 'react'

import { Grid, Container } from '@material-ui/core'

import { Header, Editor, ArchiveList } from 'components/index'

const Home = (): JSX.Element => {
  // const [archives, setArchives] = useState<Array<Diary>>()
  const id = window.location.pathname.split('/')[1]

  // useEffect(() => {
  // }, [])

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Editor idToEdit={id}></Editor>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* {archives ? <ArchiveList list={archives} /> : <div>No diaries</div>} */}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
