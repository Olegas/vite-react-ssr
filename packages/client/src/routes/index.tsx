import { AppDispatch, loadMe } from '../store'
import { Me } from '../pages/Me'
import { MainPage } from '../pages/MainPage'
import { Login } from '../pages/Login'

export const routes = [
  {
    path: '/',
    exact: true,
    component: MainPage,
  },
  {
    path: '/me',
    exact: true,
    component: Me,
    loader: (dispatch: AppDispatch) => {
      return dispatch(loadMe())
    },
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
]
