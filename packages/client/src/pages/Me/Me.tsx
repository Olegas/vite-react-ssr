import { useSelector } from 'react-redux'
import { selectUserSlice } from '../../store'

export function Me() {
  const { profile } = useSelector(selectUserSlice);

  return <>
    <pre>
      {JSON.stringify(profile, null, 2)}
    </pre>
  </>
}
