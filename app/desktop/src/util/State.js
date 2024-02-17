Ext.define('JSDAYS.util.State', {
    singleton: true,
    requires: [
        'Ext.util.LocalStorage'
    ],
    store: new Ext.util.LocalStorage({
        id: 'app-state'
    }),

    get: function (key, defaultValue) {
        var value = this.store.getItem(key);
        return value === undefined ? defaultValue : Ext.decode(value);
    },

    set: function (key, value) {
        var me = this;

        if (value == null) {    // !== undefined && !== null
            me.store.removeItem(key);
        } else {
            me.store.setItem(key, Ext.encode(value));
        }
    },

    clear: function (key) {
        this.set(key, null);
    }
});
