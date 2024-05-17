import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
movies: [],
loading: false,
error: false,
}

export const getMovies = createAsyncThunk("movie", async () => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=9feadf10&s=godfather`)
    return response.data.Search;
});

export const getSearchMovies = createAsyncThunk("search", async (inputValue) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=9feadf10&s=${inputValue}`)
    return response.data.Search;
})


export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getMovies.fulfilled, (state,action) => {
            state.loading = false;
            state.movies = action.payload;
        })
        builder.addCase(getMovies.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
        builder.addCase(getSearchMovies.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getSearchMovies.fulfilled, (state,action) => {
            state.loading = false;
            state.movies = action.payload;
        })
        builder.addCase(getSearchMovies.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
})

export const {} = movieSlice.actions

export default movieSlice.reducer