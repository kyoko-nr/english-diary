import { useCallback, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getDiaries } from 'reducks/users/selectors'
import { changeLoadingState } from 'reducks/users/operations'
import { Diary } from 'reducks/users/types'
import { Grid } from '@material-ui/core'
import { Viewer } from 'components/Post/index'
import { ArchiveList } from 'components/Archive/index'
import { deleteDiary } from 'reducks/users/operations'
import { AppFrame } from 'components/Base/index'

type PostProps = RouteComponentProps<{
  id: string
}>

const Post = (props: PostProps): JSX.Element => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const [diaryToShow, setDiaryToShow] = useState<Diary>()

  const deleteDiaryButton = useCallback(
    (id: string): void => {
      if (confirm('Are you sure to delete this diary?')) {
        dispatch(changeLoadingState(true))
        dispatch(deleteDiary(id))
      }
    },
    [diaryToShow]
  )

  useEffect(() => {
    const id = props.match.params.id
    const diaries = getDiaries(selector)
    const diary = diaries.filter((diary: Diary) => diary.id === id)
    setDiaryToShow(diary[0])
    window.scrollTo(0, 0)
    dispatch(changeLoadingState(false))
  }, [props.match.params.id])

  return (
    <AppFrame maxWidth={'lg'}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          {diaryToShow ? <Viewer diary={diaryToShow} onDelete={deleteDiaryButton} /> : <div>No diary</div>}
        </Grid>
        <Grid item xs={12} md={4}>
          <ArchiveList />
        </Grid>
      </Grid>
    </AppFrame>
  )
}

export default Post
