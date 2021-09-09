import { useState } from 'react'

import { Grid, Container } from '@material-ui/core'

import { Header, Editor, ArchiveList } from 'Components/index'
import { Diary } from 'Types/TypeList'

const TopPage = (): JSX.Element => {
  const initialDiary: Diary[] = [
    {
      id: '1',
      date: 'Sun 08/01/2021',
      title: 'My first diary',
      content: 'This is my first diary. I watched some dramas on Netflix today. I like Atypical the most.',
    },
    {
      id: '2',
      date: 'Mon 08/02/2021',
      title: 'My second diary',
      content:
        'This is my second diary. I went to Minatomirai to watch a movie. The title of the movie is "In the Hights."',
    },
    {
      id: '3',
      date: 'Tue 08/10/2021',
      title: 'My third diary',
      content: 'This is my third diary. I have nothing to write today."',
    },
  ]

  const [diaries, setDiaries] = useState<Array<Diary>>(initialDiary)

  const saveDiary = (date: string, title: string, content: string) => {
    const id = (Math.random() * 1000).toString()
    setDiaries([...diaries, { id, date, title, content }])
  }

  return (
    <>
      <Header title="English Diary"></Header>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Editor onSave={saveDiary}></Editor>
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
