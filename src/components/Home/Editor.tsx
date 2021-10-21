import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ContainedMidButton, OutlineMidButton, Label, FormatDate, TextInputOutlined } from 'components/UIKit/index'
import { Diary } from 'reducks/users/types'
import { saveDiary } from 'reducks/users/operations'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type EditorProps = {
  diary?: Diary
}

const ContentRegExp = /^[a-zA-Z0-9!-/:-@¥[-`{-~\s]*$/
const ContentErrMsg = "Please write 'English' diary!"
const schema = yup.object().shape({
  title: yup.string().required().matches(ContentRegExp, ContentErrMsg),
  content: yup.string().required().matches(ContentRegExp, ContentErrMsg),
})

const Editor = (props: EditorProps): JSX.Element => {
  const dispatch = useDispatch()
  const { control, handleSubmit, watch, setValue } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const [counter, setCounter] = useState(0)

  const id = props.diary ? props.diary.id : ''
  const date = props.diary ? props.diary.date : new Date()

  interface IFormInput {
    title: string
    content: string
  }

  const onSubmit = (data: IFormInput) => {
    dispatch(
      saveDiary({
        id: id,
        date: date,
        title: data.title,
        content: data.content,
      })
    )
  }

  const countWords = (): number => {
    const splited = watch('content').split(/[\s]/)
    const count = splited.filter((w: string) => w !== '').length
    return count
  }

  const initFields = () => {
    setValue('title', '')
    setValue('content', '')
    setCounter(0)
  }

  useEffect(() => {
    if (props.diary) {
      setValue('title', props.diary.title)
      setValue('content', props.diary.content)
      setCounter(countWords())
    }
  }, [props.diary])

  useEffect(() => {
    setCounter(countWords())
  }, [watch('content')])

  return (
    <div className={'content'}>
      <div className={'spacer-8'} />
      <FormatDate date={date} format={'date'} variant={'body1'} align={'left'} />
      <div className={'spacer-24'} />
      <TextInputOutlined
        name={'title'}
        required={true}
        defaultValue={props.diary ? props.diary.title : ''}
        control={control}
        fullWidth={true}
        label={'Title'}
        multiline={false}
        rows={0}
      />
      <div className={'spacer-8'} />
      <Label label={`${counter} words`} variant={'caption'} align={'right'} />
      <div className={'spacer-8'} />
      <TextInputOutlined
        name={'content'}
        required={true}
        defaultValue={props.diary ? props.diary.content : ''}
        control={control}
        fullWidth={true}
        label={'Content'}
        multiline={true}
        rows={16}
      />
      <div className={'spacer-16'} />
      <div className={'button-wrapper'}>
        <OutlineMidButton label={'clear'} onClick={initFields} />
        <ContainedMidButton color={'primary'} onClick={handleSubmit(onSubmit)} label={'save'} />
      </div>
    </div>
  )
}

export default Editor
