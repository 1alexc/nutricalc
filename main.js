// Define ingredient objects with their nutritional information
const ingredients = {
    apple: { 
      protein: 0.5, 
      carbohydrates: 25, 
      fat: 0.3, 
      calories: 95 
    },
    banana: { 
      protein: 1.3, 
      carbohydrates: 27, 
      fat: 0.4, 
      calories: 105 
    },
    chickenBreast: { 
      protein: 31, 
      carbohydrates: 0, 
      fat: 3.6, 
      calories: 165 
    },
    rice: { 
      protein: 4.25, 
      carbohydrates: 45, 
      fat: 0.4, 
      calories: 205 
    }
  };
  
  // Function to calculate total nutritional value of a meal
  function calculateMeal(nutrition) {
    let total = { protein: 0, carbohydrates: 0, fat: 0, calories: 0 };
  
    for (const ingredient of nutrition) {
      const ingredientInfo = ingredients[ingredient.name];
      const grams = ingredient.grams;
  
      total.protein += (ingredientInfo.protein / 100) * grams;
      total.carbohydrates += (ingredientInfo.carbohydrates / 100) * grams;
      total.fat += (ingredientInfo.fat / 100) * grams;
      total.calories += (ingredientInfo.calories / 100) * grams;
    }
  
    return total;
  }
  
  // Example usage
  const mealIngredients = [
    { name: 'apple', grams: 100 },
    { name: 'banana', grams: 150 },
    { name: 'chickenBreast', grams: 200 }
  ];
  
  const mealNutrition = calculateMeal(mealIngredients);
  console.log('Total meal nutrition:', mealNutrition);