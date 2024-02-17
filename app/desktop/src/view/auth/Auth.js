Ext.define('JSDAYS.view.auth.Auth', {
    extend: 'Ext.Container',
    xtype: 'auth-view',
    requires: [
        'Ext.Responsive',
        'Ext.layout.VBox',
        'JSDAYS.view.auth.AuthController'
    ],
    
    controller: {
        type: 'Authcontroller'
    },    
    cls: 'auth-container',
    defaultFocus: 'auth-baseform', // Focus the Auth Form to force field focus as well
    weighted: true,
    platformConfig: {
        '!phone': {
            layout: {
                type: 'vbox',
                align: 'middle',
                pack: 'center'
            },
        },
        'phone': {
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'center'
            },
        }
    },
});