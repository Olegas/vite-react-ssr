import App from './src/App'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { createStore } from './src/store'
import { Provider } from 'react-redux'
import { routes } from './src/routes'
import { UserService } from './src/api/UserService'

async function render(uri, repository) {
  const [pathname] = uri.split('?')
  const store = createStore(new UserService(repository))
  const currentRoute = routes.find(route => matchPath(pathname, route))
  const { loader } = currentRoute
  if (loader) {
    await loader(store.dispatch)
  }
  const initialState = store.getState()
  const renderResult = renderToString(
    <StaticRouter location={uri}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  )
  return [initialState, renderResult]
}

export { render }
