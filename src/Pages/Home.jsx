import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import RecipeList from "../Components/RecipeList";
import useFetch from "../Hooks/useFetch";
import { fetchMealsByIngredient } from "../Api/mealApi";

export default function Home() {
  const [ingredient, setIngredient] = useState("");
  const { data: recipes, loading, fetchData } = useFetch(fetchMealsByIngredient);

  const handleSearch = () => {
    if (ingredient) {
      fetchData(ingredient);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        🍳 Taylor’s Recipe Finder
      </h1>

      <SearchBar
        ingredient={ingredient}
        setIngredient={setIngredient}
        onSearch={handleSearch}
      />

      <RecipeList recipes={recipes} loading={loading} />
    </div>
  );
}
