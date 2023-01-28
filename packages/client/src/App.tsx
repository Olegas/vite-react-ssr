import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Me } from './pages/Me'

function App() {
  return <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/me" element={<Me />}/>
  </Routes>
}

export default App
