import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },
        deleteFavorite: (state, action) => {
            state.favorites.splice(action.payload, 1);
        },
    },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
