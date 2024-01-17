import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import favoritesSlice from './slices/favoritesSlice';

const store = configureStore({
    reducer: {
        search: searchSlice,
        favorites: favoritesSlice,
    },
});

export default store;
