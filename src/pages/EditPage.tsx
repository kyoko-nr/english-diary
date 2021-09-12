import { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'

import { Grid, Container } from '@material-ui/core'

import { Header, Editor, ArchiveList } from 'Components/index'
import { Diary, SaveFunc } from 'Types/TypeList'
import { fetchDiaries, updateDiary, insertDiary } from 'Utils/DiaryManager'

type EditPageProps = RouteComponentProps<{
  id: string
}>

const EditPage = (props: EditPageProps): JSX.Element => {
  const [archives, setArchives] = useState<Array<Diary>>()

  const saveDiary: SaveFunc = (date, title, content, id?) => {
    if (id) {
      setArchives(updateDiary({ id, date, title, content }))
    } else {
      const newId = (Math.random() * 1000).toString()
      setArchives(insertDiary({ id: newId, date, title, content }))
    }
  }

  useEffect(() => {
    const diaries = fetchDiaries()
    setArchives(diaries)
  }, [])

  return (
    <>
      <Header title="English Diary"></Header>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Editor onSave={saveDiary}></Editor>
          </Grid>
          <Grid item xs={12} md={4}>
            {archives ? <ArchiveList list={archives} /> : <div>No diaries</div>}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default EditPage
