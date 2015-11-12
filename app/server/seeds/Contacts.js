/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var contactSeeds = [
  {name: "Basket", quantity: 3},
  {name: "Bicycle", quantity: 2}
];

/**
 * Initialize the Contact collection if empty with seed data.
 */
if (Contact.find().count() === 0) {
  _.each(stuffSeeds,  function(stuff) {
    Contact.insert(contact);
  });
}
