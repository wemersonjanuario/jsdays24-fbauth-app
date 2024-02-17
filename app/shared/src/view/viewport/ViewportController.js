Ext.define('JSDAYS.view.viewport.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport',
    equires: [        
        'Ext.util.History'
    ],
   
    listen: {
        controller: {
            '*': {
                login: 'onLogin',
                logout: 'onLogout',
                registered: 'onAccountCreated',
                passwordresetsent: 'onPassordResetEmailSent',
                unmatchedroute: 'handleUnmatchedRoute'
            }
        },
        global: {
            logout: 'onLogout',
            authstatechanged: 'onAuthstateChanged'
        }
    },
    routes: {
        'login': 'handleLoginRoute',
        'forgotpassword': 'handleForgotPasswordRoute',
        'register': 'handleRegisterRoute',
        'home': {
            action: 'handleHomeRoute',
            before: 'checkUserLoggedIn'
        }
    },

    onLaunch: function () {
        this.originalRoute = JSDAYS.getApplication().getDefaultToken();

        //this.restoreSession();
    },

    
    showView: function (config) {
        const me = this,
            xtype = config.xtype,
            viewport = me.getView();

        let view = me.lookup(xtype);

        if (!view) {
            viewport.removeAll(true);
            view = viewport.add(Ext.apply({
                // xtype: xtype,
                reference: xtype
            }, config));
        }

        viewport.setActiveItem(view);
        view.focus();
    },



    // ROUTING


    handleLoginRoute: function () {
        var me = this;

        Ext.auth.signOut()
            .then(() => {

                me.terminateSession();

                this.showView({
                    xtype: 'auth-login',
                    items: {
                        registerButton: {
                            hidden: true
                        }
                    }
                });
            }, function (error) {
                // An error happened.
            });


    },

    handleForgotPasswordRoute: function () {

        this.showView({
            xtype: 'auth-forgotpassword'
        });

    },

    handleRegisterRoute: function () {

        this.showView({
            xtype: 'auth-register'
        });

    },

    restoreSession: function (user) {
        if (user) {
            this.initiateSession(user);
        } else {
            this.terminateSession();
        }

    },

    initiateSession: function (user) {
        const me = this;

        me.saveSession(user);
        me.redirectTo(me.originalRoute, { replace: true });
        // const view = me.showView({
        // xtype: 'main'
        //});
    },

    terminateSession: function () {
        const me = this;

        me.saveSession(null);
        me.showView({
            xtype: 'auth-login'
        });
    },

    saveSession: function (user) {
        const me = this;

        JSDAYS.util.State.set('loggedIn', user ? true : false);
        me.getViewModel().set('currentUser', user);
        me.user = user;

    },

    // AUTHENTICATION

    onAccountCreated: function (user) {
        const me = this;


        me.initiateSession(user);
        me.redirectTo(JSDAYS.getApplication().getDefaultToken(), { replace: true });
        Ext.Msg.alert("Success", "Your account was created successfully!");
    },

    onPassordResetEmailSent: function (userCredentials) {
        const me = this;

        me.redirectTo('login');
        Ext.Msg.alert('Success', 'We have sent a link to your email address. Please check your inbox.');
    },

    onLogin: function (user) {
        const me = this;

        if (!user) {
            return false;
        }

        me.initiateSession(user);

        me.redirectTo(me.originalRoute, { replace: true });
    },

    onLogout: function () {
        const me = this,
            view = me.getView(),
            session = me.session;

        //if (!Ext.auth.currentUser) {
        //   return false;
        // }

        view.setMasked({ xtype: 'loadmask' });

        Ext.auth.signOut()
            .then(() => {
                me.originalRoute = Ext.History.getToken();
                me.terminateSession();
                view.setMasked(false);

                me.redirectTo('login', { replace: true });
            }, function (error) {
                // An error happened.
            });
    },

    checkUserLoggedIn: function (action) {
        if (JSDAYS.util.State.get('loggedIn') == true) {
            action.resume();
        } else {
            action.stop();
            this.redirectTo('login');
        }
    },

    handleHomeRoute: function () {
        this.showView({
            xtype: 'main'
        });
    },

    onAuthstateChanged: function (user) {
        var me = this;

        if (user) {   
            
            me.restoreSession(user);
                   
        } else {
            me.terminateSession();
        }
    },

    handleUnmatchedRoute: function (route) {
        const me = this;

        //  if (!me.session || !me.session.isValid()) {
        if (!Ext.auth.currentUser) {
            // There is no authenticated user, let's redirect to the login page but keep track
            // of the original route to restore the requested route after user authentication.
            me.originalRoute = route;
            me.redirectTo('login', { replace: true });
            return;
        } else {
            // There is an authenticated user, so let's simply redirect to the default token.
            var target = JSDAYS.getApplication().getDefaultToken();
            Ext.log.warn('Route unknown: ', route);
            if (route !== target) {
                me.redirectTo(target, { replace: true });
            }
        }
    }
});
