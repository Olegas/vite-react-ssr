import App from './src/App'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

function render(uri) {
  return renderToString(
    <StaticRouter location={uri}>
      <App />
    </StaticRouter>
  )
}

export {
  render
}
