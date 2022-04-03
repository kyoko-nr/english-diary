import { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { TextInputDeletable } from 'components/UIKit/index'
import { Addible } from 'reducks/users/types'

type AddibleContentProps = {
  title: string
  fullWidth: boolean
}

const AddibleContent = (props: AddibleContentProps): JSX.Element => {
  const [contents, setContents] = useState<Addible[]>()

  const addInput = () => {
    let newContents = []
    if (contents) {
      newContents = [...contents]
      newContents.push({ id: '1222', value: '' })
    } else {
      newContents.push({ id: '1222', value: '' })
    }
    setContents(newContents)
  }

  useEffect(() => {
    const val = [
      { id: '123', value: 'aaa' },
      { id: '1456', value: 'ccc' },
    ]
    setContents(val)
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
        <Typography variant={'body1'} sx={{ marginRight: '16px', textTransform: 'uppercase' }}>
          {props.title}
        </Typography>
        <AddCircleIcon cursor="pointer" color="inherit" fontSize="small" onClick={() => addInput()} />
      </Box>
      {contents &&
        contents.map((val) => {
          return <TextInputDeletable content={val} fullWidth={props.fullWidth} onDelete={deleteInput} key={val.id} />
        })}
    </>
  )
}

export default AddibleContent
