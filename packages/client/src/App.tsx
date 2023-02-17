import './App.css'
import { Route, Switch } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { Me } from './pages/Me'
import { Login } from './pages/Login'

export default function App() {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/me" exact>
        <Me />
      </Route>
      <Route path="/">
        <MainPage />
      </Route>
    </Switch>
  )
}
