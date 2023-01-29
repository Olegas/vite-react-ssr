import { StoreState } from './store'

export {};

declare const __SERVER_PORT__: number

declare global {
  interface Window {
    initialState?: StoreState;
  }
}
