import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('contact');
  },

  actions: {
    createContact(contact) {
      contact.save().then(() => {
        this.transitionTo('contacts');
      }).catch(() => {
        alert("couldn't save contact.");
      });
    },

    cancelContact: function() {
      var contact = this.get('currentModel');

      contact.destroyRecord();
      this.transitionTo('contacts');
    },

    willTransition() {
      let contact = this.controller.get('model');
      contact.rollback();
    }
  }
});
