import Ember from 'ember';

export default Ember.Component.extend({

    options: Ember.computed(function() {
        return Ember.A([
            {name: 'a', label: 'A'},
            {name: 'b', label: 'B'},
            {name: 'c', label: 'C'},
            {name: 'd', label: 'D'},
            {name: 'e', label: 'E'}
        ]);
    }),

    selectedValues: Ember.computed(function() {
        return Ember.A(['a', 'd']);
    })

});
