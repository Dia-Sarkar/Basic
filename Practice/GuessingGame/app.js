Ext.application({
			name: "Guessing",
			appFolder : "app",//default
			controllers : [],
			models : [],
			stores : [],
			
			views : ["GuessingGame"], //file names
			launch : function(){
				//alert("All Set");
				
				this.viewport = Ext.create("Ext.container.Viewport", {
					renderTo : Ext.getBody(),
					layout : "card",
					reference : "mainpanel",
					items : [
						{
							xtype : "GuessingGame",
						},
						// {
						// 	xtype : "homeScreen",
						// }
					]


				});

			}

});