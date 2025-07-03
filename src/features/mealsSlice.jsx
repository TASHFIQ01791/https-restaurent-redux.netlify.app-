import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCategories,
  fetchMealsByCategory,
  fetchMealsByName,
  fetchMealById,
} from '../api/fetchMeals';

// load category thunk
export const loadCategories = createAsyncThunk('meals/loadCategories', async () => {
  const data = await fetchCategories();
  return data.categories || [];
});

// category  thunk
export const loadMealsByCategory = createAsyncThunk(
  'meals/loadMealsByCategory',
  async (category) => {
    const data = await fetchMealsByCategory(category);
    return { category, meals: data.meals || [] };
  }
);

// search thunk
export const searchMeals = createAsyncThunk('meals/searchMeals', async (query) => {
  const data = await fetchMealsByName(query);
  return data.meals || [];
});


export const loadMealDetails = createAsyncThunk('meals/loadMealDetails', async (id) => {
  const data = await fetchMealById(id);
  return data.meals[0];
});

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    categories: [],
    categoryMeals: {}, // { categoryName: [meals] }
    searchResults: [],
    selectedMeal: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSearchResults(state) {
      state.searchResults = [];
      state.error = null;
    },
    clearSelectedMeal(state) {
      state.selectedMeal = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // loadCategories
      .addCase(loadCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(loadCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // loadMealsByCategory
      .addCase(loadMealsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMealsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryMeals[action.payload.category] = action.payload.meals;
      })
      .addCase(loadMealsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // searchMeals
      .addCase(searchMeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMeals.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchMeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // loadMealDetails
      .addCase(loadMealDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMealDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedMeal = action.payload;
      })
      .addCase(loadMealDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSearchResults, clearSelectedMeal } = mealsSlice.actions;
export default mealsSlice.reducer;
