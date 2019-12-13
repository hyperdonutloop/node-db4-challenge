const db = require('../dbConfig.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
   return db('recipes');
}

function getShoppingList(id) {
  return db('recipe_ingredients')
    .select('ingredients.name', 'recipe_ingredients.quantity')
    .join('ingredients', 'recipe_ingredients.ingredient_id, ingredients.id')
    .where({ recipe_id: id });
}

function getInstructions(id) {
  return db('recipe_instructions')
    .select('recipe_instructions.step_number', 'recipe_instructions.instructions')
    .where({ recipe_id: id });
}