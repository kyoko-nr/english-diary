import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getDiaries } from 'reducks/users/selectors'
import { changeLoadingState } from 'reducks/users/operations'
import { Diary } from 'types/types'
import { Grid } from '@material-ui/core'
import { Editor } from 'components/Home/index'
import { ArchiveList } from 'components/Archive/index'
import { AppFrame } from 'components/Base/index'

type HomeProps = RouteComponentProps<{
  id: string
}>

const Home = (props: HomeProps): JSX.Element => {
  const selector = useSelector((state) => state)
  const dispatch = useDispatch()
  const [diaryToEdit, setDiaryToEdit] = useState<Diary>()

  useEffect(() => {
    const id = props.match.params.id
    const diaries = getDiaries(selector)
    const diary = diaries.filter((diary: Diary) => diary.id === id)
    setDiaryToEdit(diary[0])
    dispatch(changeLoadingState(false))
  }, [props.match.params.id])

  return (
    <AppFrame maxWidth={'lg'}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {diaryToEdit ? <Editor diary={diaryToEdit} /> : <Editor />}
        </Grid>
        <Grid item xs={12} md={4}>
          <ArchiveList />
        </Grid>
      </Grid>
    </AppFrame>
  )
}

export default Home
