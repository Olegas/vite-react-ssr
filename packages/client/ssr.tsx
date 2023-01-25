import App from './src/App'
import { renderToString } from 'react-dom/server'
import { createStore } from './src/store'
import { Provider } from 'react-redux'

function render(store) {
  return renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export {
  createStore,
  render
}
