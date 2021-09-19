import { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'

import { Grid, Container } from '@material-ui/core'

import { Header, Editor, ArchiveList } from 'components/index'
import { Diary, SaveFunc } from 'types/TypeList'
import { fetchDiaries, updateDiary, insertDiary } from 'utils/DiaryManager'

type HomeProps = RouteComponentProps<{
  id: string
}>

const Home = (props: HomeProps): JSX.Element => {
  const [archives, setArchives] = useState<Array<Diary>>()

  const saveDiary: SaveFunc = (date, title, content, id?) => {
    if (id) {
      setArchives(updateDiary({ id, date, title, content, userId: 'kyoko' }))
    } else {
      insertDiary({ id: '', date, title, content, userId: 'kyoko' }).then((updated) => {
        setArchives(updated)
      })
    }
  }

  useEffect(() => {
    fetchDiaries().then((diaries) => {
      setArchives(diaries)
    })
  }, [])

  return (
    <>
      <Header title="English Diary"></Header>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Editor onSave={saveDiary} idToEdit={props.match.params.id}></Editor>
          </Grid>
          <Grid item xs={12} md={4}>
            {archives ? <ArchiveList list={archives} /> : <div>No diaries</div>}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
