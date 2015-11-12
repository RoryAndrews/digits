/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
var contactSeeds = [
  {first: "John", last: "Doe", address: "123 Street", phone: "555-1234", email: "john@email.com"},
  {first: "Jane", last: "Doe", address: "123 Street", phone: "555-1234", email: "jane@email.com"},
  {first: "Guy", last: "Person", address: "456 Street", phone: "555-5678", email: "guyp@email.com"}
];

/**
 * Initialize the Contact collection if empty with seed data.
 */
if (Contact.find().count() === 0) {
  _.each(contactSeeds,  function(contact) {
    Contact.insert(contact);
  });
}
