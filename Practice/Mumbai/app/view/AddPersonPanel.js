Ext.define("Mumbai.view.AddPersonPanel",{
			extend : "Ext.panel.Panel",
			xtype : "addpersonpanel",
			title : "Add Person",
			requires : [
			 	"Mumbai.view.HomeScreenViewController",
			 	
			 ],
			items : [
				{xtype:"textfield",reference:"nametext",fieldLabel:"Name"},
				{xtype:"textfield",reference:"agetext",fieldLabel:"Age"},
				{
					xtype:"button",
					text:"Add",
					listeners : {
						click : "addPerson"
					}
				}				
			]
		});