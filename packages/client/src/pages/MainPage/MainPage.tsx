import {
  authByCode,
  loadMe,
  logout,
  selectIsAuthenticated,
  useAppDispatch,
} from '../../store'
import { useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom'

export default function MainPage() {
  const dispatch = useAppDispatch()
  const [completed, isAuthenticated] = useSelector(selectIsAuthenticated)

  useEffect(() => {
    dispatch(loadMe())
  }, [])

  const logoutHandler = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  const { search } = useLocation()
  const history = useHistory()

  useEffect(() => {
    const sp = new URLSearchParams(search)
    const code = sp.get('code')

    if (code) {
      dispatch(authByCode(code))
        .unwrap()
        .then(() => history.push('/me'))
    }
  }, [search, history])

  return (
    <>
      <h1>Hi!</h1>
      <p>
        {isAuthenticated ? (
          <>
            <NavLink to={'/me'}>User info</NavLink>,{' '}
            <a href="#" onClick={logoutHandler}>
              Logout
            </a>
          </>
        ) : completed ? (
          <NavLink to={'/login'}>Authenticate</NavLink>
        ) : (
          <>Loading...</>
        )}
      </p>
    </>
  )
}
