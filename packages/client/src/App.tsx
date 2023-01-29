import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Me } from './pages/Me'
import { WithAuthProtection } from './components/WithAuthProtection'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadMe, selectIsAuthCompleted } from './store'

function App() {
  const dispatch = useDispatch()
  const isAuthCompleted = useSelector(selectIsAuthCompleted)

  useEffect(() => {
    if (!isAuthCompleted) {
      dispatch(loadMe());
    }
  }, [isAuthCompleted])

  return <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="/me" element={
      <WithAuthProtection>
        <Me />
      </WithAuthProtection>
    }/>
  </Routes>
}

export default App
