
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          step_number: 1,
          instructions: 'Mix flour, butter, sugar, and chocolate chips in bowl',
          recipe_id: 1
        },
        {
          step_number: 2,
          instructions: 'Place on cookie sheet and bake at 350 degrees for 15 min or until golden brown',
          recipe_id: 1
        },
        {
          step_number: 3,
          instructions: 'Let cool. Get milk. Dip and be glorious.',
          recipe_id: 1
        },
        {
          step_number: 1,
          instructions: 'Slice bananas and spread peanut butter (crunchy style) on bread',
          recipe_id: 2
        },
        {
          step_number: 2,
          instructions: 'Carefully lay out sliced bananas on the bread.',
          recipe_id: 2
        },
        {
          step_number: 3,
          instructions: 'Slam sandwich together carefully and enjoy.',
          recipe_id: 2
        },
        {
          step_number: 1,
          instructions: 'Spread some sauce on the pizza crust',
          recipe_id: 3
        },
        {
          step_number: 2,
          instructions: 'Add all toppings.',
          recipe_id: 3
        },
        {
          step_number: 3,
          instructions: 'Bake until crust is golden brown.',
          recipe_id: 3
        }, 
      ]);
    });
};
