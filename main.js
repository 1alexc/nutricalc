// // Define ingredient objects with their nutritional information
// const ingredients = {
//     apple: { 
//       protein: 0.5, 
//       carbohydrates: 25, 
//       fat: 0.3, 
//       calories: 95 
//     },
//     banana: { 
//       protein: 1.3, 
//       carbohydrates: 27, 
//       fat: 0.4, 
//       calories: 105 
//     },
//     chickenBreast: { 
//       protein: 31, 
//       carbohydrates: 0, 
//       fat: 3.6, 
//       calories: 165 
//     },
//     rice: { 
//       protein: 4.25, 
//       carbohydrates: 45, 
//       fat: 0.4, 
//       calories: 205 
//     }
//   };
  
//   // Function to calculate total nutritional value of a meal
//   function calculateMeal(nutrition) {
//     let total = { protein: 0, carbohydrates: 0, fat: 0, calories: 0 };
  
//     for (const ingredient of nutrition) {
//       const ingredientInfo = ingredients[ingredient.name];
//       const grams = ingredient.grams;
  
//       total.protein += (ingredientInfo.protein / 100) * grams;
//       total.carbohydrates += (ingredientInfo.carbohydrates / 100) * grams;
//       total.fat += (ingredientInfo.fat / 100) * grams;
//       total.calories += (ingredientInfo.calories / 100) * grams;
//     }
  
//     return total;
//   }
  
//   // Example usage
//   const mealIngredients = [
//     { name: 'apple', grams: 100 },
//     { name: 'banana', grams: 150 },
//     { name: 'chickenBreast', grams: 200 }
//   ];
  
//   const mealNutrition = calculateMeal(mealIngredients);
//   console.log('Total meal nutrition:', mealNutrition);

const ingredients = [];

document.getElementById('addIngredient').addEventListener('click', function() {
  const ingredientDiv = document.createElement('div');
  ingredientDiv.classList.add('ingredient');
  ingredientDiv.innerHTML = `
    <label for="ingredientName">Ingredient Name:</label>
    <input type="text" class="name">
    <label for="grams">Grams:</label>
    <input type="number" class="grams">
    <label for="calories">Calories:</label>
    <input type="number" class="calories">
  `;
  document.getElementById('ingredients').appendChild(ingredientDiv);
});

document.getElementById('calculate').addEventListener('click', function() {
  const ingredientElements = document.getElementsByClassName('ingredient');
  ingredients.length = 0;

  for (const ingredientElement of ingredientElements) {
    const name = ingredientElement.querySelector('.name').value;
    const grams = parseFloat(ingredientElement.querySelector('.grams').value);
    const calories = parseFloat(ingredientElement.querySelector('.calories').value);
    ingredients.push({ name, grams, calories });
  }

  const total = calculateMeal(ingredients);
  document.getElementById('result').innerHTML = `
    <h2>Total Nutrition:</h2>
    <p>Protein: ${total.protein.toFixed(2)} grams</p>
    <p>Carbohydrates: ${total.carbohydrates.toFixed(2)} grams</p>
    <p>Fat: ${total.fat.toFixed(2)} grams</p>
    <p>Calories: ${total.calories.toFixed(2)}</p>
  `;
});

function calculateMeal(nutrition) {
  let total = { protein: 0, carbohydrates: 0, fat: 0, calories: 0 };

  for (const ingredient of nutrition) {
    total.protein += (ingredient.grams / 100) * (ingredient.calories / 100);
    total.carbohydrates += (ingredient.grams / 100) * (ingredient.calories / 100);
    total.fat += (ingredient.grams / 100) * (ingredient.calories / 100);
    total.calories += ingredient.calories * (ingredient.grams / 100);
  }

  return total;
}