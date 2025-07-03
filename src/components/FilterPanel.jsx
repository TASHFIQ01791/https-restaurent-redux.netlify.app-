// import { useState } from 'react';

export default function FilterPanel({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-6 max-w-7xl mx-auto flex flex-wrap gap-4">
      <button
        onClick={() => onCategoryChange('')}
        className={`px-4 py-2 rounded ${
          selectedCategory === '' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
        }`}
      >
        All Categories
      </button>
      {categories.map((cat) => (
        <button
          key={cat.strCategory}
          onClick={() => onCategoryChange(cat.strCategory)}
          className={`px-4 py-2 rounded ${
            selectedCategory === cat.strCategory ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          }`}
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
}
