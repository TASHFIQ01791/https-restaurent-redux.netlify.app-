import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { loadMealDetails } from '../features/mealsSlice';
import Loader from '../components/Loader';

export default function MealDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedMeal, loading, error } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(loadMealDetails(id));
  }, [dispatch, id]);

  if (loading || !selectedMeal)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-600 font-semibold mt-16 text-lg">
        {error}
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-gray-300 rounded-xl shadow-sm mt-8 mb-12">
      <div className="flex flex-col md:flex-row md:space-x-10">
       {/* Image section  */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            className="w-full rounded-lg shadow-sm  max-h-[550px]"
          />
        </div>

        {/* Details  */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-2xl font-extrabold mb-2 text-gray-900 tracking-tight">
            {selectedMeal.strMeal}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full font-semibold text-sm">
              Category: {selectedMeal.strCategory}
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full font-semibold text-sm">
              Area: {selectedMeal.strArea}
            </span>
          </div>

          <h2 className="text-1xl font-semibold mb-2 text-gray-800">Instructions</h2>
          <p className="text-gray-700 text-sm flex-wrap mb-2">
            {selectedMeal.strInstructions}
          </p>

          {/* Go Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mt-8 self-start px-8 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-indigo-400 hover:scale-105 transition transform duration-300 font-semibold text-lg"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
