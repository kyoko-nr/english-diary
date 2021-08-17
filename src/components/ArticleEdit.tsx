import Title from './Title'
import Input from './Input'
import TextArea from './TextArea'

const ArticleEdit = (): JSX.Element => {
  return (
    <>
      <Title title="あああ" />
      <Input placeHolder="プレースホルダ" />
      <TextArea cols={60} rows={10} />
    </>
  )
}
export default ArticleEdit
