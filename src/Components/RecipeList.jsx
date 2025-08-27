import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, loading }) {
  if (loading) {
    return <p className="text-center text-gray-600 animate-pulse">Loading recipes...</p>;
  }

  if (recipes.length === 0) {
    return <p className="text-center text-gray-600">No recipes found 🍴</p>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {recipes.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
