import BookmarkButton from './BookmarkButton';
import { Link } from 'react-router-dom';

export default function MealCard({ meal }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 flex flex-col max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-xl mb-5 object-cover h-48 w-full"
      />
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{meal.strMeal}</h3>

      <div className="mt-auto flex gap-3">
        {/* Bookmark button */}
        <BookmarkButton meal={meal} />

        {/* See Details Link */}
        <Link
          to={`/meal/${meal.idMeal}`}
          className="flex-1 text-center px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition"
        >
          See Details
        </Link>
      </div>
    </div>
  );
}
