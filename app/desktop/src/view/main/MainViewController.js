Ext.define('JSDAYS.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainviewcontroller',

	onLogoutButtonTap: function () {
        Ext.fireEvent('logout');
    }

});
