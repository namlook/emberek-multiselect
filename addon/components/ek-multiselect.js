import Ember from 'ember';
import layout from '../templates/components/ek-multiselect';

export default Ember.Component.extend({
    tagName: 'select',
    attributeBindings: ['disabled', 'tabindex', 'multiple', 'form', 'name', 'autofocus', 'required', 'size', 'title'],
    layout: layout,

    multiple: true,
    placeholder: 'select',
    selection: null,

    initComponent: Ember.on('init', function() {
        if (!this.get('selection')) {
            this.set('selection', Ember.A());
        }
    }),

    didInsertElement() {
        let that = this;
        let placeholder = this.get('placeholder');
        let $elem = this.$();
        $elem.multiselect({
            includeSelectAllOption: true,
            nonSelectedText: placeholder,
            onChange(option, checked, select) {

                // "select all" is clicked
                if (option === undefined) {
                    let values = that.$('option').map((idx, item) => item.value).toArray();
                    if (checked) {
                        that.get('selection').setObjects([]);
                        for (let value of values) {
                            that.get('selection').pushObject(value);
                        }
                    } else {
                        that.get('selection').setObjects([]);
                    }

                // a regular option is clicked
                } else {

                    let value = Ember.$(option).val();
                    if (checked) {
                        that.get('selection').pushObject(value);
                    } else {
                        that.get('selection').removeObject(value);
                    }
                }
            }
        });

        this.get('selection').forEach((value) => {
            $elem.multiselect('select', value);
        });

        this.$elem = $elem;
    },

    willDestroyElement() {
        this.$elem.multiselect('destroy');
    }

});
