import { Box } from '@mui/material'
import { WordChip } from 'components/UIKit/index'
import { Parts } from 'constants/Parts'

type PosViewProps = {
  pos: string
}

const PosView = (props: PosViewProps): JSX.Element => {
  const part = Parts.filter((p) => p.key === props.pos)
  return <Box sx={{ marginLeft: '8px' }}>{part && part.length > 0 && <WordChip label={part[0].value} />}</Box>
}

export default PosView
