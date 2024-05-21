import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    lists: [],
}

export const sendList = createAsyncThunk("sendFavorite", async (list) => {
    const response = await axios.post(`https://acb-api.algoritmika.org/api/movies/list`, list, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data;
});


export const sendFavoriteSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendList.fulfilled, (state, action) => {
            if (action.payload.movies.length > 0) {
                state.lists = [action.payload, ...state.lists];
                console.log("gonderdi")
            }
        })
    }
})

export const { } = sendFavoriteSlice.actions

export default sendFavoriteSlice.reducer