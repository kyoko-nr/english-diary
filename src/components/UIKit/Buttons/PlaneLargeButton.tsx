import Button from '@mui/material/Button'

type PlaneLargeButtonProps = {
  label: string
  onClick: () => void
}

const PlaneLargeButton = (props: PlaneLargeButtonProps): JSX.Element => {
  return (
    <Button
      onClick={props.onClick}
      sx={{
        width: 240,
        height: 40,
        borderRadius: 20,
        fontSize: 16,
        backgroundColor: '#fff',
        color: '#4a4a4a',
        boxShadow:
          '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
        marginTop: 4,
        ':hover': {
          backgroundColor: 'rgb(243, 243, 243)',
          boxShadow:
            '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        },
      }}
    >
      {props.label}
    </Button>
  )
}

export default PlaneLargeButton
