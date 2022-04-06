import { Word } from 'reducks/users/types'
import { NewWordView } from 'components/Post/index'

type NewWordListViewProps = {
  words: Word[]
}

const NewWordListView = (props: NewWordListViewProps): JSX.Element => {
  return (
    <>
      {props.words.map((value) => {
        return <NewWordView word={value} key={value.id} />
      })}
    </>
  )
}

export default NewWordListView
