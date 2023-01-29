import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from './store'

const initialState = window.initialState;

delete window.initialState;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <Provider store={createStore(initialState)}>
      <App />
    </Provider>
  </BrowserRouter>
)
