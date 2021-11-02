import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from './counter'
import menuReducer from './menu'
import swiperReducer from './swiper'

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      menu: menuReducer,
      swiper: swiperReducer,
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store