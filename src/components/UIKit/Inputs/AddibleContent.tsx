import { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { TextInputDeletable } from 'components/UIKit/index'
import { Addible } from 'reducks/users/types'

type AddibleContentProps = {
  title: string
}

const AddibleContent = (props: AddibleContentProps): JSX.Element => {
  const [contents, setContents] = useState<Addible[]>()

  const addInput = () => {
    // let newContent: Addible[]
    // if(contents) {
    //   newContent = [...contents]
    // }
    // newContent.push({id:'123456', value: ''})
    // setContents(newContent)
    console.log('add')
  }

  useEffect(() => {
    const val = [
      { id: '123', value: 'aaa' },
      { id: '1456', value: 'ccc' },
    ]
    setContents(val)
  }, [])

  const deleteInput = (id: string) => {
    console.log('id is ', id)
    if (contents) {
      const newContents = contents.filter((val) => val.id !== id)
      setContents(newContents)
    }
  }

  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '16px' }}>
        <Typography variant={'body1'} sx={{ marginRight: '16px' }}>
          {props.title}
        </Typography>
        <AddCircleIcon cursor="pointer" color="primary" onClick={() => addInput()} />
      </Box>
      {contents &&
        contents.map((val) => {
          return <TextInputDeletable content={val} onDelete={deleteInput} key={val.id} />
        })}
    </>
  )
}

export default AddibleContent
