import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { getDiaries } from 'reducks/users/selectors'
import { Diary } from 'reducks/users/types'
import { Grid, Container } from '@material-ui/core'
import { Header, Editor, ArchiveList } from 'components/index'

type HomeProps = RouteComponentProps<{
  id: string
}>

const Home = (props: HomeProps): JSX.Element => {
  const selector = useSelector((state) => state)
  const [diaryToEdit, setDiaryToEdit] = useState<Diary>()

  useEffect(() => {
    const id = props.match.params.id
    const diaries = getDiaries(selector)
    const diary = diaries.filter((diary: Diary) => diary.id === id)
    setDiaryToEdit(diary[0])
  }, [props.match.params.id])

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={1} className={'content'}>
          <Grid item xs={12} md={8}>
            {diaryToEdit ? <Editor diary={diaryToEdit} /> : <Editor />}
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
