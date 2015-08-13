import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    createContact: function(){
    var firstname = this.get('newFirstname');
    var lastname = this.get('newLastname');
    var address = this.get('newAddress');
    var country = this.get('newCountry');
    var state = this.get('newState');
    var city = this.get('newCity');
    var zip = this.get('newZip');
    var phone = this.get('newPhone');
    var email = this.get('newEmail');

    if(!firstname){return false;}
    if(!firstname.trim()) {return;}

    var contact = this.store.createRecord('contact', {
      firstname: firstname,
      lastname: lastname,
      address: address,
      country: country,
      state: state,
      city: city,
      zip: zip,
      phone: phone,
      email: email
    });

    // Clears text field
    this.set('newFirstname', '');
    this.set('newLastname', '');
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
