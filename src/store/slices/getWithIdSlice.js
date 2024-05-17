import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    movies: [],
    newMovies: []
    // loading: false,
    // error: false,
}

export const getDataWithId = createAsyncThunk("getDataWithId", async (id) => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=9feadf10&i=${id}`);
    // console.log(response.data);
    return response.data;
})

export const getSendingData = createAsyncThunk("getSendingData",async (id) => {
    const response = await axios.get(`https://acb-api.algoritmika.org/api/movies/list/${id}`);
    // console.log(response.data, "getSendingData");
    return response.data;
})


export const getWithIdSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(getSearchMovies.pending, (state, action) => {
        //     state.loading = true;
        // })
        builder.addCase(getDataWithId.fulfilled, (state, action) => {
            // state.loading = false;
                // if(state.movies.length > 0) {
                //     state.movies = []
                // }'
                // console.log(action.payload,'jozef')
                state.movies=[]
                state.movies = [action.payload];
            // state.movies = [action.payload,...state.movies];
        })
        builder.addCase(getSendingData.fulfilled, (state, action) => {
            // state.loading = false;
            state.newMovies = action.payload;
        })
        // builder.addCase(getSearchMovies.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = true;
        // })
    }
})

export const { } = getWithIdSlice.actions

export default getWithIdSlice.reducer