import Ember from 'ember';

export default Ember.Controller.extend({
  autoRefresh: false,

  init: function() {
    this._super();
    var self = this;

    window.setInterval(function() {
      self.performRefresh();
    }, 5000);
  },

  performRefresh: function() {
    if (this.get('autoRefresh')) {
      this.get('model').refresh();
    }
  }

});

