import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchMeals } from "../features/mealsSlice";
import MealCard from "../components/MealCard";
import Loader from "../components/Loader";

export default function SearchPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { searchResults, loading, error } = useSelector((state) => state.meals);

  // Get searchTerm from navigation state
  const searchTerm = location.state?.searchTerm;

  useEffect(() => {
    if (!searchTerm) {
      navigate("/");
      return;
    }
    dispatch(searchMeals(searchTerm));
  }, [dispatch, searchTerm, navigate]);

  if (loading) return <Loader />;

  if (error)
    return <div className="text-center text-red-500 mt-10">{error}</div>;

  if (!searchResults || searchResults.length === 0)
    return (
      <div className="text-center mt-10 text-gray-600">
        No results found for "{searchTerm}"
      </div>
    );

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {searchResults.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </main>
  );
}
