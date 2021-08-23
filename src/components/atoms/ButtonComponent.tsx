import Button from '@material-ui/core/Button'

type ButtonProps = {
  title: string
  size: 'small' | 'medium' | 'large'
  onClick: () => void
}

const ButtonComponent = (props: ButtonProps): JSX.Element => {
  return (
    <Button size={props.size} color="primary" onClick={props.onClick} variant="contained">
      {props.title}
    </Button>
  )
}
export default ButtonComponent
