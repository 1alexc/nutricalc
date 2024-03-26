// const ingredients = [];

// document.getElementById('addIngredient').addEventListener('click', function() {
//   const ingredientDiv = document.createElement('div');
//   ingredientDiv.classList.add('ingredient');
//   ingredientDiv.innerHTML = `
//     <label for="ingredientName">Ingredient Name:</label>
//     <input type="text" class="name">
//     <label for="grams">Grams:</label>
//     <input type="number" class="grams">
//     <label for="protein">Protein (g):</label>
//     <input type="number" class="protein">
//     <label for="carbohydrates">Carbohydrates (g):</label>
//     <input type="number" class="carbohydrates">
//     <label for="fats">Fats (g):</label>
//     <input type="number" class="fats">
//     <label for="calories">Calories:</label>
//     <input type="number" class="calories">
//   `;
//   document.getElementById('ingredients').appendChild(ingredientDiv);
// });

// document.getElementById('calculate').addEventListener('click', function() {
//   const ingredientElements = document.getElementsByClassName('ingredient');
//   ingredients.length = 0;

//   for (const ingredientElement of ingredientElements) {
//     const name = ingredientElement.querySelector('.name').value;
//     const grams = parseFloat(ingredientElement.querySelector('.grams').value);
//     const protein = parseFloat(ingredientElement.querySelector('.protein').value);
//     const carbohydrates = parseFloat(ingredientElement.querySelector('.carbohydrates').value);
//     const fats = parseFloat(ingredientElement.querySelector('.fats').value);
//     const calories = parseFloat(ingredientElement.querySelector('.calories').value);
//     ingredients.push({ name, grams, protein, carbohydrates, fats, calories });
//   }

//   const total = calculateMeal(ingredients);
//   document.getElementById('result').innerHTML = `
//     <h2>Total Nutrition:</h2>
//     <p>Protein: ${total.protein.toFixed(2)} grams</p>
//     <p>Carbohydrates: ${total.carbohydrates.toFixed(2)} grams</p>
//     <p>Fats: ${total.fats.toFixed(2)} grams</p>
//     <p>Calories: ${total.calories.toFixed(2)}</p>
//   `;
// });

// function calculateMeal(nutrition) {
//   let total = { protein: 0, carbohydrates: 0, fats: 0, calories: 0 };

//   for (const ingredient of nutrition) {
//     total.protein += ingredient.protein;
//     total.carbohydrates += ingredient.carbohydrates;
//     total.fats += ingredient.fats;
//     total.calories += ingredient.calories;
//   }

//   return total;
// }

// Function to calculate total nutritional value of a meal
function calculateMeal(ingredients) {
    let total = { 
      protein: 0, 
      carbohydrates: 0, 
      fat: 0, 
      calories: 0 
    };
  
    for (const ingredient of ingredients) {
      total.protein += parseFloat(ingredient.protein);
      total.carbohydrates += parseFloat(ingredient.carbohydrates);
      total.fat += parseFloat(ingredient.fat);
      total.calories += parseFloat(ingredient.calories);
    }
  
    return total;
  }
  
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
      <label for="protein">Protein:</label>
      <input type="number" class="protein">
      <label for="carbohydrates">Carbohydrates:</label>
      <input type="number" class="carbohydrates">
      <label for="fat">Fat:</label>
      <input type="number" class="fat">
    `;
    document.getElementById('ingredients').appendChild(ingredientDiv);
  });
  
  document.getElementById('calculate').addEventListener('click', function() {
    const ingredientElements = document.getElementsByClassName('ingredient');
    const ingredients = [];
  
    for (const ingredientElement of ingredientElements) {
      const name = ingredientElement.querySelector('.name').value;
      const grams = parseFloat(ingredientElement.querySelector('.grams').value);
      const calories = parseFloat(ingredientElement.querySelector('.calories').value);
      const protein = parseFloat(ingredientElement.querySelector('.protein').value);
      const carbohydrates = parseFloat(ingredientElement.querySelector('.carbohydrates').value);
      const fat = parseFloat(ingredientElement.querySelector('.fat').value);
  
      ingredients.push({ name, grams, calories, protein, carbohydrates, fat });
    }
  
    const total = calculateMeal(ingredients);
    const mealName = prompt("Please enter a nickname for this combination of ingredients:");
  
    document.getElementById('result').innerHTML = `
      <h2>${mealName}</h2>
      <p>Protein: ${total.protein.toFixed(2)} grams</p>
      <p>Carbohydrates: ${total.carbohydrates.toFixed(2)} grams</p>
      <p>Fat: ${total.fat.toFixed(2)} grams</p>
      <p>Calories: ${total.calories.toFixed(2)}</p>
    `;
  });
  