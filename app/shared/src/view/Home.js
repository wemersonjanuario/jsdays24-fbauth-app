Ext.define('JSDAYS.view.Home', {
    extend: 'Ext.Container',
    alias: 'widget.home',

    requires: [],
    //tabBarPosition: 'bottom',
     controller: 'home',
    // viewModel: {
    //     type: 'home'
    // },
    // cls: 'home',
    html: 'Welcome to JSDAYS24',
    items:[{
        xtype: 'button',
        text: 'Logout',
        handler: 'onLogoutButtonTap'
    }]
});


