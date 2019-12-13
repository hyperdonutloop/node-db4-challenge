
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'butter'},
        {name: 'sugar'},
        {name: 'chocolate chips'},
        {name: 'bread'},
        {name: 'banana'},
        {name: 'peanut butter'},
        {name: 'flour'},
        {name: 'chicken'},
        {name: 'whole wheat crust'},
        {name: 'black olives'},
        {name: 'mushrooms'}
      ]);
    });
};
