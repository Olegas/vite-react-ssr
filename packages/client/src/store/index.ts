import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchServerData } from '../api'

const loadGreeting = createAsyncThunk('root/loadGreeting', async () => {
  const { data } = await fetchServerData();
  return {
    greeting: data
  }
})

interface StoreState {
  root: {
    greeting: string
  }
}

function createStore(initialState?: StoreState) {
  const rootSlice = createSlice({
    name: 'root',
    initialState: {
      greeting: ''
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(loadGreeting.fulfilled, (store, action) => {
        const { payload: { greeting }} = action;
        store.greeting = greeting
      })
    }
  })

  return configureStore({
    reducer: {
      root: rootSlice.reducer
    },
    preloadedState: initialState
  })

}

export { createStore, loadGreeting }
