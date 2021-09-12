import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'

import { Grid, Container } from '@material-ui/core'

import { Header, ArchiveList, Viewer } from 'Components/index'
import { Diary } from 'Types/TypeList'
import { fetchDiaries, fetchDiary, deleteDiary } from 'Utils/DiaryManager'

type ViewPageProps = RouteComponentProps<{
  id: string
}>

const ViewPage = (props: ViewPageProps): JSX.Element => {
  const [diary, setDiary] = useState<Diary>()
  const [archives, setArchives] = useState<Array<Diary>>()

  const deleteDiaryButton = (id: string): void => {
    setArchives(deleteDiary(id))
  }

  useEffect(() => {
    setDiary(fetchDiary(props.match.params.id))
    setArchives(fetchDiaries())
  }, [])

  return (
    <>
      <Header title="English Diary"></Header>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {diary ? (
              <Viewer diary={diary} onDelete={deleteDiaryButton} />
            ) : (
              <div> undefined : {props.match.params.id}</div>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            {archives ? <ArchiveList list={archives} /> : <div>No diaries</div>}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ViewPage
