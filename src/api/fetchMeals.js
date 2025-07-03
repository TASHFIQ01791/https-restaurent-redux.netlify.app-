const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Fetch All Categories 
export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories.php`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return await res.json();
};

// fetch Meals ByCategory
export const fetchMealsByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  if (!res.ok) throw new Error('Failed to fetch meals by category');
  return await res.json();
};

// search food based on search 
export const fetchMealsByName = async (name) => {
  const res = await fetch(`${BASE_URL}/search.php?s=${name}`);
  if (!res.ok) throw new Error('Failed to fetch meals by name');
  return await res.json();
};

// food details 
export const fetchMealById = async (id) => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  if (!res.ok) throw new Error('Failed to fetch meal details');
  return await res.json();
};
