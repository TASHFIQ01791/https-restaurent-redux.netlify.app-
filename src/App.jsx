import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MealDetailsPage from "./pages/MealDetailsPage";
import Navbar from "./components/Navbar";
import BookmarksPage from "./pages/BookmarksPage";
import ErrorPage from "./pages/ErrorPage";
import Hero from "./Hero";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/" element={<Hero />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/meal/:id" element={<MealDetailsPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
