import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slices/movieSlice'
import favoriteReducer from './slices/favoritesSlice'
import sendFavoriteReducer from './slices/sendFavoriteSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    favorite: favoriteReducer,
    sendList: sendFavoriteReducer
  },
})