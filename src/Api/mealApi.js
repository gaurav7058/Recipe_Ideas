const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function fetchMealsByIngredient(ingredient) {
  try {
    const res = await fetch(`${BASE_URL}/filter.php?i=${ingredient}`);
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
