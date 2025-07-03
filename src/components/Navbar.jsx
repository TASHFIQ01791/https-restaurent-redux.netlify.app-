import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsBookmarkFill } from "react-icons/bs";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // searh working function 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate("/search", { state: { searchTerm } });
      setSearchTerm("");
    }
  };

  return (
    <nav className="bg-slate-300 p-4 max-w-6xl flex items-center justify-between  mx-auto">
      {/* left and middle part  */}
      <Link
        to="/"
        className="flex items-center gap-2 hover:opacity-90 transition"
      >
        <img
          src="/fast-food.png"
          alt="Meal Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-2xl font-bold text-indigo-600">Foodie</span>
      </Link>

      <Link
        to="/bookmarks"
        className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-pink-500 text-white font-medium hover:bg-pink-600 transition"
      >
        <BsBookmarkFill className="w-5 h-5" />
        See Bookmarks
      </Link>

      {/* search functionality  */}
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Search meals..."
          className="px-4 py-2 border rounded-l-md focus:outline-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </form>
    </nav>
    
  );
}
