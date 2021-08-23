import Header from 'components/organisms/Header'
import Editor from 'components/organisms/Editor'
import ButtonComponent from 'components/atoms/ButtonComponent'

const TopPage = (): JSX.Element => {
  return (
    <>
      <Header title="English Diary"></Header>
      <Editor></Editor>
      <ButtonComponent size="large" title="Submit" onClick={() => console.log('submit')}></ButtonComponent>
    </>
  )
}

export default TopPage
