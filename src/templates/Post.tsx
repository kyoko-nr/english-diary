import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { getDiaries } from 'reducks/users/selectors'
import { Diary } from 'reducks/users/types'
import { Grid, Container } from '@material-ui/core'
import { Header, ArchiveList, Viewer } from 'components/index'

type PostProps = RouteComponentProps<{
  id: string
}>

const Post = (props: PostProps): JSX.Element => {
  const selector = useSelector((state) => state)
  const [diaryToShow, setDiaryToShow] = useState<Diary>()

  const deleteDiaryButton = (id: string): void => {
    // setArchives(deleteDiary(id))
  }

  useEffect(() => {
    const id = props.match.params.id
    const diaries = getDiaries(selector)
    const diary = diaries.filter((diary: Diary) => diary.id === id)
    setDiaryToShow(diary[0])
  }, [props.match.params.id])

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={1} className={'content'}>
          <Grid item xs={12} md={8}>
            {diaryToShow ? <Viewer diary={diaryToShow} onDelete={deleteDiaryButton} /> : <div>No diary</div>}
          </Grid>
          <Grid item xs={12} md={4}>
            <ArchiveList />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Post
