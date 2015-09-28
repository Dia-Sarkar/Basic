Ext.define("Mumbai.view.RemovePersonPanel",{
			extend : "Ext.panel.Panel",
			xtype : "removepersonpanel",
			title : "Add Person",
			requires : [
			 	"Mumbai.view.HomeScreenViewController",
			 	
			 ],
			items : [
				
				{
					xtype:"button",
					text:"Remove",
					listeners : {
						click : "removePerson"
					}
				}				
			]
		});