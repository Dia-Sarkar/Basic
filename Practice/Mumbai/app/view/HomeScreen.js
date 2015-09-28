//var PeopleStoreObj = Ext.create("Mumbai.store.PeopleStore");
//var PeopleStoreObj = Mumbai.getApplication().getStore("PeopleStore");



Ext.define("Mumbai.view.HomeScreen",{
			extend : "Ext.panel.Panel",
			xtype : "homeScreen",
			title : "Welcome",
			requires : [
			 	//"Mumbai.view.HomeScreenViewController",
			 	"Mumbai.view.PeopleGridPanel",
			 	"Mumbai.view.AddPersonPanel",
			 	"Mumbai.view.RemovePersonPanel"
			 ],
			 controller : "home",

									items : [
									{
							xtype : "addpersonpanel",
							height : 200,
							width : 500
						},
						{
							xtype : "removepersonpanel",
							height : 200,
							width : 500
						},

						{
							xtype : "peoplegridpanel",
							height : 400,width:300,
							store : "PeopleStore",
						},
						
			
			],
			renderTo : Ext.getBody()
		});