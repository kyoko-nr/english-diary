import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'

import { Grid, Container } from '@material-ui/core'

import { Header, ArchiveList, Viewer } from 'components/index'
import { Diary } from 'types/TypeList'
import { fetchDiaries, deleteDiary, fetchDiary } from 'utils/DiaryManager'

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
    fetchDiaries().then((diaries) => {
      setArchives(diaries)
      setDiary(diaries.find((diary) => diary.id === props.match.params.id))
    })
  }, [])

  return (
    <>
      <Header title="English Diary"></Header>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {diary ? <Viewer diary={diary} onDelete={deleteDiaryButton} /> : <div>No diary</div>}
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
