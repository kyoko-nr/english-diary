import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { TextInputDeletable, Label } from 'components/UIKit/index'
import { getWordFeatureId } from 'reducks/users/operations'
import { getUserId } from 'reducks/users/selectors'
import { Addible } from 'reducks/users/types'

type AddibleContentProps = {
  title: 'meanings' | 'examples' | 'synonyms'
  fullWidth: boolean
  contents: Addible[]
  diaryId: string
  wordId: string
}

const AddibleContent = (props: AddibleContentProps): JSX.Element => {
  const selector = useSelector((state) => state)
  const [contents, setContents] = useState<Addible[]>()

  const addInput = () => {
    const uid = getUserId(selector)
    const id = getWordFeatureId(uid, props.diaryId, props.wordId, props.title)
    const newContent = { id: id, value: '' }
    let newContents: Addible[] = []
    if (contents) {
      newContents = [...contents]
    }
    newContents.push(newContent)
    setContents(newContents)
  }

  useEffect(() => {
    setContents(props.contents)
  }, [])

  const deleteInput = (id: string) => {
    if (contents) {
      const newContents = contents.filter((val) => val.id !== id)
      setContents(newContents)
    }
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
        <Label label={props.title} variant="body1" align="left" uppercase={true} bold={true} />
        <AddCircleIcon
          cursor="pointer"
          color="inherit"
          fontSize="small"
          onClick={() => addInput()}
          sx={{ marginLeft: '8px' }}
        />
      </Box>
      {contents &&
        contents.map((val) => {
          return <TextInputDeletable content={val} fullWidth={props.fullWidth} onDelete={deleteInput} key={val.id} />
        })}
    </>
  )
}

export default AddibleContent
