import { useSelector } from 'react-redux';
import MealCard from '../components/MealCard';

export default function BookmarksPage() {
  const bookmarks = useSelector(state => state.bookmarks.items);

  if (bookmarks.length === 0) {
    return (
      <p className="text-center mt-20 text-gray-500 text-lg font-medium">
        No bookmarked food yet.
      </p>
    );
  }

  return (
    <main className="p-6 max-w-7xl mx-auto">
      
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Your Bookmarked Food
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {bookmarks.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </section>
    </main>
  );
}
