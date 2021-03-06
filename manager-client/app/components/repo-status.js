import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  upgradeDisabled: function() {
    const upgradingRepo = this.get('upgradingRepo');

    if (!upgradingRepo) {
      const managerRepo = this.get('managerRepo');
      if (!managerRepo) { return false; }
      return (!managerRepo.get('upToDate')) && managerRepo !== this.get('repo');
    }
    return true;
  }.property('upgradingRepo', 'repo', 'managerRepo', 'managerRepo.upToDate'),

  actions: {
    upgrade: function() {
      this.sendAction('upgrade', this.get('repo'));
    }
  }
});
