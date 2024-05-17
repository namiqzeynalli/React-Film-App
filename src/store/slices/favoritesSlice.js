import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favorites: [],
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addList: (state, action) => {
            if (!state.favorites.find(f => f.id === action.payload.id)) {
                state.favorites = [action.payload, ...state.favorites]
            }
        },
        deleteList: (state, action) => {
            state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload)
            // console.log(state.favorites)
        },
        deleteAll: (state) => {
            state.favorites = [];
        }
    },
    // extraReducers: (builder) => {}
})

export const { addList, deleteList,deleteAll } = favoritesSlice.actions

export default favoritesSlice.reducer