import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateContact: function(){
      var contact = this.get('currentModel');

      this.transitionTo('contacts');
      contact.save();
      alert('Contact Successfully Updated');
    },
    countrySelected(country) {
      let contact = this.controller.get('model');
      contact.set('country', country);
    },

    stateSelected(state) {
      let contact = this.controller.get('model');
      contact.set('state', state);
    }
  }
});
