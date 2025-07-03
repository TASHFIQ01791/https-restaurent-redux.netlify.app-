import { createSlice } from '@reduxjs/toolkit';

// Load bookmark from local storage 
const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    items: storedBookmarks,  // bookmarked meals 
  },
  reducers: {
    addBookmark(state, action) {
      // One time bookmark only 
      if (!state.items.find(meal => meal.idMeal === action.payload.idMeal)) {
        state.items.push(action.payload);
        localStorage.setItem('bookmarks', JSON.stringify(state.items));
      }
    },
    removeBookmark(state, action) {
      state.items = state.items.filter(meal => meal.idMeal !== action.payload);
      localStorage.setItem('bookmarks', JSON.stringify(state.items));
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
