module.exports = {
  description: '',

  normalizeEntityName: function() {
    // allows us to run ember -g emberek-multiselect and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('bootstrap-multiselect', '0.9.13');
  }
};
