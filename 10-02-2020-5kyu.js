function cakes(recipe, available) {
  let recipeKeys = Object.keys(recipe);
  let availKeys = Object.keys(available);
  const quantities = {};

  for (const key of recipeKeys) {
    if (availKeys.includes(key)) {
      quantities[key] = Math.floor(available[key] / recipe[key]);
    } else {
      return 0;
    }
  }

  console.log(quantities);

  let lowest = Number.MAX_SAFE_INTEGER;

  for (const key of recipeKeys) {
    if (quantities[key] < lowest)
      lowest = quantities[key];
  }

  return lowest;
}

console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));