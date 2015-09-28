
Ext.define("Mumbai.view.PeopleGridPanel",{
			extend : "Ext.grid.Panel",
			xtype : "peoplegridpanel",
			title : "People",
			selModel : "rowmodel",
			plugins : {
				ptype : "rowediting",
				clicksToEdit : 2
			},
			columns : [
				{
					text : "Name",
					dataIndex:"name",
					editor : {
						xtype : "textfield"
					}
				},
				{
					text : "Age",dataIndex:"age",
					editor : {
						xtype : "textfield"
					}
				}
			]
		});