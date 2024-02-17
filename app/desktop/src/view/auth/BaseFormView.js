Ext.define('JSDAYS.view.auth.BaseFormView', {
    extend: 'Ext.form.Panel',
    alias: [
        'widget.auth-baseform'
    ],
    requires: [
        'Ext.Responsive',
        'Ext.layout.HBox'
    ],
    ui: 'auth',
    weighted: true,
    defaultFocus: 'textfield:focusable:not([hidden]):not([disabled]):not([inputValue])',
    responsiveConfig: {
        'phone': {
            width: '100%',
            flex: 1

        },
        'desktop': {
            width: 380,
            flex: null
            // flex: 1
        }
    },
    bodyPadding: 25,    
    layout: {
        type: 'vbox',
        //align: 'stretch'
    },
    items: {
        logo: {
            xtype: 'component',
            cls: 'auth-header-logo',
            responsiveConfig: {
                '!desktop && portrait': {
                    hidden: false
                },
                '!desktop && landscape': {
                    hidden: true
                }
            },
            html: [
                '<a href="javascript:void(0)">',
                '<img src="/resources/images/logo.png" height="100px" alt="Logo">',
                '</a>',
            ].join(' ')
        },
        authHeader: {
            xtype: 'container',
            html: '<h2>Welcome</h2>',
            cls: 'auth-header'
        }
    }
});