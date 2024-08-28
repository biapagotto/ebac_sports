import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './redux/carrinhoSlice'
import favoritosReducer from './redux/favoritosSlice'
import { api } from '../services/api'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
