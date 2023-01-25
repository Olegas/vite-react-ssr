import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './pages/Login'
import { Me } from './pages/Me'

const router = createBrowserRouter([{
  path: "/",
  element: <Login />
}, {
  path: "/me",
  element: <Me />
}])

function App() {
  return <RouterProvider router={router} />
}

export default App
