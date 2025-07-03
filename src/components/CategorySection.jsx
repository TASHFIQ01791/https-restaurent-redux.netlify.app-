import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMealsByCategory } from '../features/mealsSlice';
import MealCard from './MealCard';
import Loader from './Loader';

export default function CategorySection({ category }) {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals.categoryMeals[category]);
  const loading = useSelector((state) => state.meals.loading);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    if (!meals || meals.length === 0) {
      dispatch(loadMealsByCategory(category));
    }
  }, [dispatch, category]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const displayMeals = meals || [];

  return (
    <section className="my-8 max-w-7xl mx-auto px-4 py-4">
      <h2 className="text-2xl font-extrabold mb-8 text-gray-900 border-b-4 border-indigo-600 inline-block pb-2 tracking-wide">
        {category}
      </h2>

      {loading && displayMeals.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      ) : displayMeals.length === 0 ? (
        <p className="text-center text-gray-500 text-xl mt-16">No meals found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {displayMeals.slice(0, visibleCount).map((meal) => (
              <div
                key={meal.idMeal}
                className="transform transition duration-300 hover:scale-105 hover:shadow-2xl rounded-xl"
              >
                <MealCard meal={meal} />
              </div>
            ))}
          </div>

          {visibleCount < displayMeals.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-indigo-400 hover:scale-105 transition transform duration-300 font-semibold text-lg"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
