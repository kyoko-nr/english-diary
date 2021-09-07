import { Grid, Container } from '@material-ui/core'

import { Header, Editor, ArchiveList } from 'components/index'

type Diary = {
  date: string
  title: string
  content: string
}
const diaries: Diary[] = [
  {
    date: 'Sun 8/1/2021',
    title: 'My first diary',
    content: 'This is my first diary. I watched some dramas on Netflix today. I like Atypical the most.',
  },
  {
    date: 'Mon 8/2/2021',
    title: 'My second diary',
    content:
      'This is my second diary. I went to Minatomirai to watch a movie. The title of the movie is "In the Hights."',
  },
  {
    date: 'Tue 8/10/2021',
    title: 'My third diary',
    content: 'This is my third diary. I have nothing to write today."',
  },
]

const TopPage = (): JSX.Element => {
  return (
    <>
      <Header title="English Diary"></Header>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Editor></Editor>
          </Grid>
          <Grid item xs={12} md={4}>
            <ArchiveList list={diaries} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default TopPage
