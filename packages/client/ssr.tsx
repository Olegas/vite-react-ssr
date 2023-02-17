import App from './src/App'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { createStore } from './src/store'
import { Provider } from 'react-redux'

function render(uri, initialState) {
  return renderToString(
    <StaticRouter location={uri}>
      <Provider store={createStore(initialState)}>
        <App />
      </Provider>
    </StaticRouter>
  )
}

export { render }
