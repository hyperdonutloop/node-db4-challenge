
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1, measurement: 'sticks'},
        {recipe_id: 1, ingredient_id: 2, quantity: 2, measurement: 'cups'},
        {recipe_id: 1, ingredient_id: 3, quantity: 20, measurement: 'chips'},
        {recipe_id: 2, ingredient_id: 4, quantity: 2, measurement: 'slices'},
        {recipe_id: 2, ingredient_id: 5, quantity: 1, measurement: 'banana'},
        {recipe_id: 2, ingredient_id: 6, quantity: 2, measurement: 'scoops'},
        {recipe_id: 3, ingredient_id: 7, quantity: 2, measurement: 'cups'},
        {recipe_id: 3, ingredient_id: 8, quantity: 1, measurement: 'cups'},
        {recipe_id: 3, ingredient_id: 9, quantity: 1, measurement: 'package'},
        {recipe_id: 3, ingredient_id: 10, quantity: 1, measurement: 'cup'},
        {recipe_id: 3, ingredient_id: 11, quantity: 1, measurement: 'cup'} 
      ]);
    });
};
