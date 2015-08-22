import Ember from "ember";
import EmberValidations from 'ember-validations';

export default Ember.ArrayController.extend(EmberValidations, {
 validations: {
    firstName: {
      presence: true,
      presence: { message: 'First name must not be blank' },
      length: { minimum: 2 }
    },
    lastName: {
      presence: true,
      presence: { message: 'Last name must not be blank' }
    },
    phone: {
      presence: true,
      presence: { message: 'Phone number must not be blank' }
    },
    email:{
      presence: true,
      presence: { message: 'Email must not be blank' },
      format: { with: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, allowBlank: false , message: 'Must be a valid email address' }
    }
 }
});


