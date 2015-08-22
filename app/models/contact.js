import DS from "ember-data";


//define the Contact model
var Contact = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  zip: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string')
});

//Create Contact fixtures
Contact.reopenClass({
  FIXTURES: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      address: '4529 Valley Ln',
      city: 'Denver',
      state: 'CO',
      country: 'USA',
      zip: '80205',
      phone: '303-555-5555',
      email: 'jdoe@jdoe.com'
    },
    {
      id: 2,
      firstName: 'Mike',
      lastName: 'Smith',
      address: '7233 Franklin St.',
      city: 'Omaha',
      state: 'NE',
      country: 'USA',
      zip: '68136',
      phone: '308-234-5555',
      email: 'msmith@gmail.com'
    },
    {
      id: 3,
      firstName: 'Barry',
      lastName: 'Doe',
      address: '4529 Valley Ln',
      city: 'Denver',
      state: 'CO',
      country: 'USA',
      zip: '80205',
      phone: '303-555-5555',
      email: 'jdoe@jdoe.com'
    },
    {
      id: 4,
      firstName: 'Merp',
      lastName: 'Smith',
      address: '7233 Franklin St.',
      city: 'Omaha',
      state: 'NE',
      country: 'USA',
      zip: '68136',
      phone: '308-234-5555',
      email: 'msmith@gmail.com'
    }
  ]
});

// Contact.reopen({
//   validations: {
//     firstName: {
//       presence: true,
//       presence: { message: 'First name must not be blank' },
//       length: { minimum: 2 }
//     },
//     lastName: {
//       presence: true,
//       presence: { message: 'Last name must not be blank' }
//     },
//     phone: {
//       presence: true,
//       presence: { message: 'Phone number must not be blank' }
//     },
//     email:{
//       presence: true,
//       presence: { message: 'Email must not be blank' },
//       format: { with: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, allowBlank: false , message: 'Must be a valid email address' }
//     }
//   }
// });

export default Contact;
