/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('JSDAYS.view.auth.AuthController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.Authcontroller',

    onLoginTap: function () {
        var me = this,
            form = me.lookup('auth-loginform'),
            values = form.getValues(),
            session;


        if (form.validate()) {
            form.clearErrors();

            Ext.Viewport.setMasked({ xtype: 'loadmask' });

            Ext.firebaseAuth.signInWithEmailAndPassword(Ext.auth, values.email, values.password)
                .then(userCredentials => {
                    Ext.Viewport.setMasked(false);
                    me.fireEvent('login', userCredentials.user);
                })
                .catch((error) => {
                    // An error occurred
                    Ext.Viewport.setMasked(false);
                    switch (error.code) {
                        case 'auth/missing-password':
                            Ext.Msg.alert('Failure', 'Missing password. Please check and try again!');
                            break;
                        case 'auth/missing-email':
                            Ext.Msg.alert('Failure', 'Missing email. Please check and try again!');
                            break;
                        case 'auth/invalid-credential':
                            Ext.Msg.alert('Failure', 'Invalid credential. Please check and try again!');
                            break;
                        default:
                            Ext.Msg.alert('Failure', 'Error: ' + error.message);
                            break;
                    }
                });
        }
    },

    onCreateAccountButtonTap: function () {
        var me = this,
            form = me.lookup('auth-registerform'),
            values = form.getValues();

        if (form.validate()) {
            form.clearErrors();

            Ext.Viewport.setMasked({ xtype: 'loadmask' });

            Ext.firebaseAuth.createUserWithEmailAndPassword(Ext.auth, values.email, values.password)
                .then(userCredentials => {
                    Ext.Viewport.setMasked(false);

                    Ext.firebaseAuth.updateProfile(userCredentials.user, {
                        displayName: values.full_name
                    }).then((a) => {
                        // Profile updated!
                        me.fireEvent('registered', userCredentials.user);
                        //res(a);
                    }).catch((error) => {

                        // An error occurred
                        //setErrorMessage(error.message);
                        //rej(error)
                    });
                })
                .catch((error) => {
                    // An error occurred
                    Ext.Viewport.setMasked(false);
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            Ext.Msg.alert('Failure', `Email address ${values.email} is already registered.`);
                            break;
                        case 'auth/invalid-email':
                            Ext.Msg.alert('Failure', `Email address ${values.email} is invalid.`);
                            break;
                        case 'auth/operation-not-allowed':
                            Ext.Msg.alert('Failure', 'Failure on account creation.');
                            break;
                        case 'auth/weak-password':
                            Ext.Msg.alert('Failure', 'Password is not strong enough. Add special characters and numbers.');
                            break;
                        default:
                            Ext.Msg.alert('Failure', 'Error: ' + error.message);
                            break;
                    }
                    //rej(error)
                });
        }
    },

    onForgotPasswordButtonTap: function () {
        var me = this,
            form = me.lookup('auth-forgotpasswordform'),
            values = form.getValues();

        if (form.validate()) {
            form.clearErrors();

            Ext.Viewport.setMasked({ xtype: 'loadmask' });
            Ext.firebaseAuth.sendPasswordResetEmail(Ext.auth, values.email)
                .then(res => {
                    Ext.Viewport.setMasked(false);
                    me.fireEvent('passwordresetsent', res);
                })
                .catch((error) => {
                    // An error occurred
                    Ext.Viewport.setMasked(false);
                    switch (error.code) {
                        case 'auth/missing-email':
                            Ext.Msg.alert('Failure', 'Missing email. Please check and try again!');
                            break;
                        case 'auth/invalid-email':
                            Ext.Msg.alert('Failure', 'Invalid email. Please check and try again!');
                            break;
                        default:
                            Ext.Msg.alert('Failure', 'Error: ' + error.message);
                            break;
                    }
                });
        }


    },

    onGoogleLoginTap: function () {
        const me = this,
            googleProvider = new Ext.firebaseAuth.GoogleAuthProvider();

        // Example: Sign in with Google
        Ext.firebaseAuth
            .signInWithPopup(Ext.auth, googleProvider)
            .then((userCredentials) => {
                // Handle successful sign-in
                me.fireEvent('login', userCredentials.user);
            })
            .catch((error) => {
                // Handle errors
                Ext.Msg.alert('Failure', 'Error: ' + error.message);
            });
    },

    showRegister: function () {
        this.redirectTo('register');
    },

    showForgotPassword: function () {
        this.redirectTo('forgotpassword');
    },

    showLogin: function () {
        this.redirectTo('login');
    }
});
