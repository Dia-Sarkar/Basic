Ext.application({
			name: "Mumbai",
			appFolder : "app",//default
			controllers : [],
			models : ["PeopleModel"],
			stores : ["PeopleStore"],
			
			views : ["LoginScreen","HomeScreen","AddPersonPanel","RemovePersonPanel","PeopleGridPanel"], //file names
			launch : function(){
				//alert("All Set");
				
				this.viewport = Ext.create("Ext.container.Viewport", {
					renderTo : Ext.getBody(),
					layout : "card",
					reference : "mainpanel",
					items : [
						{
							xtype : "loginScreen",
						},
						// {
						// 	xtype : "homeScreen",
						// }
					]


				});

			}

});