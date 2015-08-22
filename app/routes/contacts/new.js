import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('contact');
  },

  actions: {
    createContact: function() {
      var contact = this.get('currentModel');

      this.transitionTo('contacts');
			contact.save();
  		alert(contact.errors);
    },

    cancelContact: function() {
      var contact = this.get('currentModel');

      contact.destroyRecord();
      this.transitionTo('contacts');
    }
  }
});
