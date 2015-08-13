import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash( {
      contacts: this.store.findAll('contact'),
      newContact: this.store.createRecord('contact')
    })
  }
  });

  setupController: function(controller, model) {
    controller.setProperties(model);
  }
});
