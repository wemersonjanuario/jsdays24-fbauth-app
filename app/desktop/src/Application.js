Ext.define('JSDAYS.Application', {
	extend: 'Ext.app.Application',
	name: 'JSDAYS',
	requires: [
		'JSDAYS.*',
		'Ext.util.LocalStorage'
	],
	defaultToken: 'home',
	// defaultToken: 'home',
	profiles: [
		'Desktop'
	],

	viewport: {
		controller: 'viewport',
		viewModel: 'viewport'
	},


	destroyLoader: function () {
		const top = Ext.get('loadingSplashTop'),
			wrapper = Ext.fly('loadingSplash');

		top.on('transitionend', wrapper.destroy, wrapper, { single: true });

		wrapper.addCls('app-loaded');
	},

	init: function () {
		Ext.firebaseAuth.onAuthStateChanged(Ext.auth, async (user) => {
			Ext.GlobalEvents.fireEvent('authstatechanged', user);
		});
	},


	onBeforeLaunch: function () {
		Ext.state.Provider.register(new Ext.state.LocalStorage());
		this.callParent();
	},


	launch: function (profile) {
		Ext.Viewport.getController().onLaunch();
		this.destroyLoader();
		this.callParent([profile]);
	},


	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
