Ext.define('JSDAYS.profile.Desktop', {
    extend: 'Ext.app.Profile',

    views: {
        main: 'JSDAYS.desktop.view.main.MainView'
    },

    isActive: function (app) {
        return !Ext.platformTags.phone;
    },

    launch: function () {
        Ext.getBody().addCls('desktop-profile');
    }
});

