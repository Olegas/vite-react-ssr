import {
  configureStore,
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { doLoginWithCode, getMe, logoutUser } from '../api/yandex'
import { useDispatch } from 'react-redux'

const loadMe = createAsyncThunk<User>('root/loadGreeting', async () => {
  try {
    return await getMe()
  } catch (e) {
    return null
  }
})

const logout = createAsyncThunk('root/logout', async () => {
  try {
    return await logoutUser()
  } catch (e) {
    return null
  }
})

const authByCode = createAsyncThunk<void, string>(
  'root/authByCode',
  async (code, { dispatch }) => {
    await doLoginWithCode(code)
    dispatch(loadMe())
  }
)

interface User {
  id: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  avatar: string | null
  email: string
  phone: string | null
}

interface UserSlice {
  profile: User | null
  isLoaded: boolean
}

export interface StoreState {
  user: UserSlice
}

const selectUserSlice = (store: StoreState) => store.user
const selectIsAuthCompleted = createSelector(
  selectUserSlice,
  user => user.isLoaded
)
const selectIsAuthenticated = createSelector(
  selectUserSlice,
  selectIsAuthCompleted,
  (user, authCompleted) => [
    authCompleted,
    authCompleted && user.profile !== null,
  ]
)

function createStore(initialState?: StoreState) {
  const rootSlice = createSlice({
    name: 'user',
    initialState: {
      profile: null,
      isLoaded: false,
    } as UserSlice,
    reducers: {},
    extraReducers: builder => {
      builder.addCase(logout.fulfilled, store => {
        store.isLoaded = true
        store.profile = null
      })
      builder.addCase(loadMe.pending, store => {
        store.isLoaded = false
      })
      builder.addCase(loadMe.rejected, store => {
        store.isLoaded = true
        store.profile = null
      })
      builder.addCase(loadMe.fulfilled, (store, action) => {
        const { payload } = action
        store.profile = payload
        store.isLoaded = true
      })
    },
  })

  return configureStore({
    reducer: {
      user: rootSlice.reducer,
    },
    preloadedState: initialState,
  })
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
export const useAppDispatch: () => AppDispatch = useDispatch

export {
  createStore,
  loadMe,
  logout,
  authByCode,
  selectUserSlice,
  selectIsAuthenticated,
  selectIsAuthCompleted,
}
