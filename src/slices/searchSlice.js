import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 비동기 작업을 처리하는 createAsyncThunk 생성
export const fetchSearchResults = createAsyncThunk(
    'search/fetchSearchResults',
    async (searchTerm) => {
        try {
            const response = await axios.get(
                `https://api.datamuse.com/words?rel_rhy=${searchTerm}`
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
        searchResults: [],
        status: 'idle', // 추가된 상태
        error: null, // 추가된 상태
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.searchResults = action.payload;
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
