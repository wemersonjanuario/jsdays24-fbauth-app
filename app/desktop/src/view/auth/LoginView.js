Ext.define('JSDAYS.view.auth.LoginView', {
    extend: 'JSDAYS.view.auth.Auth',
    alias: [
        'widget.auth-login'
    ],
    requires: [
        'Ext.Button',
        'Ext.field.Password',
        'Ext.field.Text',
        'Ext.layout.HBox',
        'JSDAYS.view.auth.BaseFormView'
    ],    
    items: {
        form: {
            xtype: 'auth-baseform',
            reference: 'auth-loginform',
            keyMap: {
                ENTER: {
                    fn: 'onLoginTap'
                }
            },
            items: {
                userField: {
                    xtype: 'textfield',
                    name: 'email',
                    label: 'Username',
                    errorTarget: 'under',
                    placeholder: 'Enter your email',
                    clearable: false,
                    validators: [{
                        type: 'email'
                    }],                   
                    required: true
                },
                passwordField: {
                    xtype: 'passwordfield',
                    errorTarget: 'under',
                    revealable: true,
                    clearable: false,
                    name: 'password',
                    label: 'Password',
                    placeholder: 'Enter your password',                   
                    required: true
                },
                loginButton: {
                    margin: '7 0',
                    xtype: 'button',
                    text: 'Login',
                    ui: 'action',
                    handler: 'onLoginTap'
                },
                register: {
                    xtype: 'component',
                    cls: 'auth-clickable',
                    listeners: {
                        click: {
                            element: 'element',
                            delegate: 'a',
                            fn: 'showRegister'
                        }
                    },
                    html: "Don't have an acount? <a href='javascript:void(0)'>Register here?</a>"
                },
                forgotPassword: {
                    xtype: 'component',
                    cls: 'auth-clickable',
                    listeners: {
                        click: {
                            element: 'element',
                            delegate: 'a',
                            fn: 'showForgotPassword'
                        }
                    },
                    html: '<a href="javascript:void(0)">Forgot your password?</a>'
                },
                googleLoginButton: {
                    margin: '7 0',
                    xtype: 'button',
                    iconCls: 'x-fab fa-google',
                    text: 'Login with Google',
                    ui: 'action',
                    handler: 'onGoogleLoginTap'
                }
            }
        }
    }
});