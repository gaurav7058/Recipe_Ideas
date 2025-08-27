import React from "react";

export default function SearchBar({ ingredient, setIngredient, onSearch }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
      <input
        type="text"
        placeholder="Enter an ingredient (e.g. chicken, egg)"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        className="p-2 border rounded-lg w-full md:w-1/3"
      />
      <button
        onClick={onSearch}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
      >
        Search
      </button>
    </div>
  );
}
