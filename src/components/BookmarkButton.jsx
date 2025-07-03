import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../features/bookmarkSlice';

export default function BookmarkButton({ meal }) {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmarks.items);

  const isBookmarked = bookmarks.some(b => b.idMeal === meal.idMeal);

  const toggleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(meal.idMeal));
    } else {
      dispatch(addBookmark(meal));
    }
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`px-3 py-1 rounded ${
        isBookmarked ? 'bg-yellow-400 text-black' : 'bg-gray-300 text-gray-700'
      } hover:bg-yellow-500 transition`}
    >
      {isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
    </button>
  );
}
