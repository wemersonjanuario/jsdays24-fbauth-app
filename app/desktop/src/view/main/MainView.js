Ext.define('JSDAYS.desktop.view.main.MainView', {
    extend: 'Ext.Container',
    //xtype: 'main',
    controller: 'mainviewcontroller',
    viewModel: {
        type: 'mainviewmodel'
    },
    layout: 'fit',

    // cls: 'home',

    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            xtype: 'spacer',
            flex: 1
        }, {
            xtype: 'button',
            text: 'Logout',
            handler: 'onLogoutButtonTap'
        }]
    }, {
        xtype: 'container',
        padding: 50,
        style: 'text-align: center;',
        bind: {
            html: [
                '<h1>Welcome to JSDAYS24<br></h1>',
                // 'Name: {currentUser.displayName}<br>',
                'Email: {currentUser.email}<br>',
                '<img style="margin: 50px;" src="/resources/images/logo.png" height="500px" alt="Logo">',
                
            ].join(' '),
        }

    }]
});
