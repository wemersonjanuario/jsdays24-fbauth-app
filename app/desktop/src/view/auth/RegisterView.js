/**
 * Created by Wemerson Januario wemerson.januario@novanti.com.br.
 */
Ext.define('JSDAYS.view.auth.RegisterView', {
    extend: 'JSDAYS.view.auth.Auth',
    alias: 'widget.auth-register',
    requires: [
        'Ext.Button',
        'Ext.field.Checkbox',
        'Ext.field.Email',
        'Ext.field.Password',
        'Ext.field.Text',
        'Ext.layout.HBox',
        'JSDAYS.view.auth.BaseFormView',
        'Ext.data.validator.Length'
    ],

    items: {
        form: {
            xtype: 'auth-baseform',
            reference: 'auth-registerform',
            // maxHeight: '90%',
            keyMap: {
                ENTER: {
                    fn: 'onCreateAccountButtonTap'
                }
            },

            items: {
                authHeader: {
                    html: [
                        '<h3>Create your account!</h3>'
                    ].join(' ')
                },
                nameField: {
                    xtype: 'textfield',
                    errorTarget: 'under',
                    name: 'full_name',
                    label: 'Name',
                    placeholder: 'Enter your name',
                    required: true
                },
                emailField: {
                    xtype: 'emailfield',
                    name: 'email',
                    label: 'Email',
                    placeholder: 'Enter your email',
                    errorTarget: 'under',
                    validators: [{
                        type: 'email'
                    }],
                    required: true
                },
                passwordField: {
                    xtype: 'passwordfield',
                    name: 'password',
                    label: 'Password',
                    placeholder: 'Enter a strong password',
                    errorTarget: 'under',
                    required: true,
                    validators: [{
                        type: 'length',
                        min: 6
                    }]
                },
                // passwordConfirmationField: {
                //     xtype: 'passwordfield',
                //     name: 'password_confirmation',
                //     label: 'Confirmação da senha',
                //     placeholder: 'Confirme a senha',
                //     errorTarget: 'under',
                //     required: true,
                //     validators: [{
                //         type: 'length',
                //         min: 6
                //     }]
                // },                
                submitButton: {
                    xtype: 'button',
                    margin: '7 0',
                    text: 'Register',
                    handler: 'onCreateAccountButtonTap',
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
                    html: 'Have an account? <a href="javascript:void(0)"> <strong>Go to Login</strong></a>'
                }
            }
        }
    }
});
