import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    createContact: function(){
    var firstName = this.get('newFirstName');
    var lastName = this.get('newLastName');
    var address = this.get('newAddress');
    var country = this.get('newCountry');
    var state = this.get('newState');
    var city = this.get('newCity');
    var zip = this.get('newZip');
    var phone = this.get('newPhone');
    var email = this.get('newEmail');

    if(!firstName && !lastName && !phone && !email){return false;}

    var contact = this.store.createRecord('contact', {
      firstName: firstName,
      lastName: lastName,
      address: address,
      country: country,
      state: state,
      city: city,
      zip: zip,
      phone: phone,
      email: email
    });

    // Clears text field
    this.set('newFirstName', '');
    this.set('newLastName', '');
    this.set('newAddress', '');
    this.set('newCountry', '');
    this.set('newState', '');
    this.set('newCity', '');
    this.set('newZip', '');
    this.set('newPhone', '');
    this.set('newEmail', '');
    }
  }
});

// Contact = Ember.Object.extend({
//   say(thing) {
//     alert(thing);
//   }
// });
