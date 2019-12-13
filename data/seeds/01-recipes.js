
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          name: 'Best Cookies Ever', 
          description: 'Best cookies ever. Made with love and care.'
        },
        {
          name: 'Peanut Butter and Banana Sandwich', 
          description: 'Worlds Greatest sandwich. Albus Dumbledores favorite meal!'
        },
        {
          name: 'Veggie Pizza', 
          description: 'Best Pizza in the universe. It is outta this world!'
        }
      ]);
    });
};
