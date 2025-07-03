import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories, loadMealsByCategory } from "../features/mealsSlice";
import CategorySection from "../components/CategorySection";
import Loader from "../components/Loader";
import FilterPanel from "../components/FilterPanel";
import Navbar from "../components/Navbar";
import Hero from "../Hero";


export default function HomePage() {
  // loading and error state
  const dispatch = useDispatch();
  const { categories, loading, error, categoryMeals } = useSelector(
    (state) => state.meals
  );
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      if (!categoryMeals[selectedCategory]) {
        dispatch(loadMealsByCategory(selectedCategory));
      }
    }
  }, [dispatch, selectedCategory, categoryMeals]);

  // condition for loading and error 
  if (loading && categories.length === 0) return <Loader />;
  if (error)
    return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    
    // filtering property is here 
  <div className="p-4 max-w-6xl mx-auto">

     <Hero />

    <div className="mb-6">
      <FilterPanel
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    </div>
    {/* category  */}
    <div className="grid gap-6">
      {selectedCategory ? (
        <CategorySection category={selectedCategory} />
      ) : (
        categories.map((cat) => (
          <CategorySection
            key={cat.strCategory}
            category={cat.strCategory}
          />
        ))
      )}
    </div>
  </div>
  );
}
