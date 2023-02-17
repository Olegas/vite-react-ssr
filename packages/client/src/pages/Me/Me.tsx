import { useSelector } from 'react-redux'
import { loadMe, selectUserSlice, useAppDispatch } from '../../store'
import { useEffect } from 'react'

export function Me() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadMe())
  }, [])

  const { profile } = useSelector(selectUserSlice)

  return (
    <>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </>
  )
}
