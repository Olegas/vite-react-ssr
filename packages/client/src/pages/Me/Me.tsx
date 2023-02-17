import { useSelector } from 'react-redux'
import { loadMe, selectUserSlice, useAppDispatch } from '../../store'
import { useEffect } from 'react'

export function Me() {
  const { profile } = useSelector(selectUserSlice)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!profile) {
      dispatch(loadMe())
    }
  }, [profile])

  return (
    <>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </>
  )
}
