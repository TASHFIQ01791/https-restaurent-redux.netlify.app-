# 🍽️ Online Restaurant Meal Explorer

A responsive React application to **explore, search, and discover meals** using the free [MealDB API](https://www.themealdb.com/api.php).  
Built with **React**, **Redux Toolkit**, and **Tailwind CSS** for modern UI and state management.

🚀 **Live Demo**: [*(live link)*  ](https://restaurent-redux.netlify.app/)
📁 **API Used**: [MealDB API](https://www.themealdb.com/api.php)

---

## ⚙️ Features

- 🔍 **Meal Search**: Search meals by name or keyword with instant results.  
- 🍲 **Meal Display**: Show meals categorized by their type (e.g., Seafood, Dessert).  
- 🎲 **Random Meal Discovery**: Find a random meal for inspiration.  
- ⭐ **Bookmark Favorites**: Save your favorite meals locally and revisit anytime.  
- 🗂️ **Filter Panel**: Filter meals by category for easy browsing.  
- ⏳ **Load More & Pagination**: Load meals incrementally for better performance.  
- 🛠️ **Error Handling**: User-friendly error messages on API failures.  
- 🎨 **Interactive UI**: Smooth hover effects, transitions, and responsive layouts.

---

## 📂 Project Structure

```plaintext
src/
│
├── api/
│   └── fetchMeals.js          # API calls using Redux middleware
│
├── components/
│   ├── Navbar.jsx             # Navigation bar with search & bookmarks link
│   ├── Hero.jsx               # Hero banner with call to action
│   ├── CategorySection.jsx    # Display meals by category with Load More
│   ├── MealCard.jsx           # Single meal card component
│   ├── FilterPanel.jsx        # Category filter UI
│   ├── BookmarksPage.jsx      # Page to view bookmarked meals
│   ├── Loader.jsx             # Loading spinner component
│   └── Error.jsx              # Error display component
│
├── features/
│   └── mealsSlice.js          # Redux Toolkit slice & async thunks
│
├── pages/
│   ├── HomePage.jsx           # Home page with hero, filter, categories
│   └── BookmarksPage.jsx      # Bookmarked meals page
│
├── App.jsx                    # Main app with routes
├── main.jsx                   # React app entry point
└── index.css                  # Tailwind CSS import & global styles



---

---


---

## 🚀 Live Demo

Check out the live project here: [https://restaurent-redux.netlify.app/](https://restaurent-redux.netlify.app/)


---

## 🛠️ Technologies Used

- ⚛️ React  
- 🗃️ Redux Toolkit  
- 🎨 Tailwind CSS  
- 🔗 MealDB API (Free)  
- 💾 LocalStorage for bookmarks  
- 🏗️ Vite (or Create React App) for build tooling

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/restaurant-meal-explorer.git
cd restaurant-meal-explorer




