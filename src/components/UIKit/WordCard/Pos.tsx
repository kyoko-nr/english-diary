import { Box } from '@mui/material'
import { WordChip } from 'components/UIKit/index'
import { PosOptions } from 'constants/Parts'

type PosProps = {
  pos: string
}

const Pos = (props: PosProps): JSX.Element => {
  const part = PosOptions.filter((p) => p.key === props.pos)
  return <Box sx={{ marginLeft: '8px' }}>{part && part.length > 0 && <WordChip label={part[0].value} />}</Box>
}

export default Pos
