Ext.define("Mumbai.view.LoginScreenViewController", {
	extend : "Ext.app.ViewController",
	alias : "controller.login",
	onLoginButtonClicked : function(){
		var userName = this.lookupReference('usernametext');
		var password = this.lookupReference('passwordtext');
		//alert(userName.getValue()+ " "+password.getValue());
		this.getView().destroy();
		Mumbai.getApplication().viewport.add({
			xtype  : "homeScreen"
		});
		//Mumbai.getApplication().viewport.setActiveItem(1);
		//this.lookupReference("Mumbai.mainpanel").setActiveItem(1);
	}

});