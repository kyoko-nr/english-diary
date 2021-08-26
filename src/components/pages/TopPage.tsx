import Grid from '@material-ui/core/Grid'

import Header from 'components/organisms/Header'
import Editor from 'components/organisms/Editor'

type Diary = {
  date: string
  title: string
  content: string
}
const diaries: Diary[] = [
  {
    date: '2021/8/01',
    title: 'My first diary',
    content: 'This is my first diary. I watched some dramas on Netflix today. I like Atypical the most.',
  },
  {
    date: '2021/8/02',
    title: 'My second diary',
    content:
      'This is my second diary. I went to Minatomirai to watch a movie. The title of the movie is "In the Hights."',
  },
  {
    date: '2021/8/10',
    title: 'My third diary',
    content: 'This is my third diary. I have nothing to write today."',
  },
]

const TopPage = (): JSX.Element => {
  return (
    <>
      <Header title="English Diary"></Header>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Editor></Editor>
        </Grid>
        <Grid item xs={12} md={4}>
          アーカイブ
        </Grid>
      </Grid>
    </>
  )
}

export default TopPage
