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
  email: DS.attr('string'),
  isCompleted: DS.attr('boolean')
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
      id: 4,
      firstName: 'Mike',
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

export default Contact;
