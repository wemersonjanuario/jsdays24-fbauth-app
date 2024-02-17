Ext.define('JSDAYS.view.auth.ForgotPassword', {
    extend: 'JSDAYS.view.auth.Auth',
    alias: 'widget.auth-forgotpassword',
    requires: [
        'Ext.Button',
        'Ext.field.Email',
        'JSDAYS.view.auth.BaseFormView',
        'Ext.data.validator.Email'
    ],

    items: {
        form: {
            xtype: 'auth-baseform',
            reference: 'auth-forgotpasswordform',
            keyMap: {
                ENTER: {
                    fn: 'onForgotPasswordButtonTap'
                }
            },
            items: {
                authHeader: {
                    html: [
                        '<h3>Reset your password</h3>',
                        '<p >Type your email address and check your email inbox for instructions! </p>'
                    ].join(' ')
                },
                emailField: {
                    xtype: 'emailfield',
                    label: 'Email',
                    placeholder: 'Type your email address',
                    errorTarget: 'under',
                    //required: true,
                    validators: [{
                        type: 'email'
                    }],
                    name: 'email'
                },
                submitButton: {
                    xtype: 'button',
                    margin: '7 0',
                    text: 'Send',
                    handler: 'onForgotPasswordButtonTap',
                    ui: 'action'
                },
                loginLink: {
                    xtype: 'component',
                    margin: '7 0',
                    cls: 'auth-clickable',
                    listeners: {
                        click: {
                            element: 'element',
                            delegate: 'a',
                            fn: 'showLogin'
                        }
                    },
                    html: '<a href="javascript:void(0)">Go to login</a>'
                }
            }
        }
    }
});
