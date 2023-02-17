import './App.css'
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'

export default function App() {
  return (
    <Switch>
      {routes.map(route => {
        const { loader: _, ...rest } = route
        return <Route key={rest.path} {...rest} />
      })}
    </Switch>
  )
}
