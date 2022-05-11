import { useSelector } from 'react-redux'
import { getLoading } from 'reducks/users/selectors'
import MoonLoader from 'react-spinners/MoonLoader'

const Spinner = (): JSX.Element => {
  const selector = useSelector((state) => state)
  const loading = getLoading(selector)

  return (
    <div className={`sweet-loading ${loading ? '' : 'inactive'}`}>
      <MoonLoader color={'#4283B8'} loading={loading} size={60} />
    </div>
  )
}

export default Spinner
