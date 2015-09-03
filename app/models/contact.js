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
      lastName: 'Elway',
      address: '4529 Bronco Blvd',
      city: 'Denver',
      state: 'Colorado',
      country: 'USA',
      zip: '80205',
      phone: '303-555-5555',
      email: 'jelway@broncos.com'
    },
    {
      id: 2,
      firstName: 'Leslie',
      lastName: 'Knope',
      address: '7233 Franklin St.',
      city: 'Pawnee',
      state: 'Indiana',
      country: 'USA',
      zip: '78136',
      phone: '888-234-5555',
      email: 'lknope@pawnee.net'
    },
    {
      id: 3,
      firstName: 'Donald',
      lastName: 'Trump',
      address: '4529 Valley Ln',
      city: 'Las Vegas',
      state: 'Nevada',
      country: 'USA',
      zip: '48943',
      phone: '555-555-5555',
      email: 'trumpbamf@trump.com'
    },
    {
      id: 4,
      firstName: 'Alex',
      lastName: 'Morgan',
      address: '7233 Franklin St.',
      city: 'Los Angeles',
      state: 'California',
      country: 'USA',
      zip: '90285',
      phone: '651-777-5555',
      email: 'amorgan@ussoccer.com'
    }
  ]
});

export default Contact;
