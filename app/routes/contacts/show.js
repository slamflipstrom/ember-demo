import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateContact: function(){
      var contact = this.get('currentModel');

      this.transitionTo('contacts');
      contact.save();
      alert('Contact Successfully Updated');
    }
  }
});
