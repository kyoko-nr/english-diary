import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDiaryId, saveDiary, changeLoadingState } from 'reducks/users/operations'
import { getUserId } from 'reducks/users/selectors'
import { useForm, useFieldArray } from 'react-hook-form'
import { NewWordList } from 'components/Home'
import { ContainedMidButton, OutlineMidButton, Label, FormatDate, TextInputOutlined } from 'components/UIKit/index'
import { Diary, Word, WordForm } from 'types/types'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type EditorProps = {
  diary?: Diary
}

const ContentRegExp = /^[a-zA-Z0-9!-/:-@¥[-`{-~\s]*$/
const ContentErrMsg = "Please write 'English' diary!"
const schema = yup.object().shape({
  title: yup.string().label('Title').required().matches(ContentRegExp, ContentErrMsg),
  content: yup.string().label('Content').required().matches(ContentRegExp, ContentErrMsg),
  words: yup.array(
    yup.object({
      title: yup.string().label('New word').required().trim(),
    })
  ),
})

const Editor = (props: EditorProps): JSX.Element => {
  const selector = useSelector((state) => state)
  const dispatch = useDispatch()
  const { control, handleSubmit, watch, setValue } = useForm<WordForm>({
    resolver: yupResolver(schema),
  })

  const { fields, append, remove } = useFieldArray({
    name: 'words',
    control,
  })
  const addWord = () => append({})
  const deleteWord = (wordIndex: number) => remove(wordIndex)

  const [counter, setCounter] = useState(0)
  const [diaryId, setDiaryId] = useState('')

  const uid = getUserId(selector)
  const date = props.diary ? props.diary.date : new Date()

  const onSubmit = (data: WordForm) => {
    dispatch(changeLoadingState(true))
    dispatch(
      saveDiary({
        id: diaryId,
        date: date,
        title: data.title,
        content: data.content,
        words: data.words,
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
    setValue('words', [])
    setCounter(0)
  }

  useEffect(() => {
    if (props.diary) {
      setValue('title', props.diary.title)
      setValue('content', props.diary.content)
      setValue('words', props.diary.words)
      setCounter(countWords())
      setDiaryId(props.diary.id)
    } else {
      const did = getDiaryId(uid)
      setDiaryId(did)
      const words: Word[] = []
      setValue('words', words)
    }
  }, [props.diary])

  useEffect(() => {
    setCounter(countWords())
  }, [watch('content')])

  return (
    <>
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
        type={'text'}
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
        rows={12}
        type={'text'}
      />
      <div className={'spacer-8'} />
      <NewWordList diaryId={diaryId} control={control} fields={fields} addWord={addWord} deleteWord={deleteWord} />
      <div className={'spacer-32'} />
      <div className={'button-wrapper'}>
        <OutlineMidButton label={'clear'} color={'inherit'} onClick={initFields} />
        <ContainedMidButton color={'primary'} onClick={handleSubmit(onSubmit)} label={'save'} />
      </div>
    </>
  )
}

export default Editor
