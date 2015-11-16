/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
    name: 'emberek-multiselect',

    isDevelopingAddon: function() {
        return true;
    },

    included: function(app) {
        this._super.included(app);

        app.import(path.join(app.bowerDirectory, 'bootstrap-multiselect', 'dist', 'js', 'bootstrap-multiselect.js'));
        app.import(path.join(app.bowerDirectory, 'bootstrap-multiselect', 'dist', 'css', 'bootstrap-multiselect.css'));
    }
};
