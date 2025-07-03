import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from '../features/mealsSlice';
import bookmarkReducer from '../features/bookmarkSlice';

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    bookmarks: bookmarkReducer,
  },
});
