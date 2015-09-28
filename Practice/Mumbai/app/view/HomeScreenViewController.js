Ext.define("Mumbai.view.HomeScreenViewController", {
	extend : "Ext.app.ViewController",
	alias : "controller.home",
	
	
	addPerson : function(){
		var name = this.lookupReference('nametext');
		var age = this.lookupReference('agetext');
		var PeopleStoreObj = Mumbai.getApplication().getStore("PeopleStore");
		console.log(name+ ""+ age);
		
		PeopleStoreObj.add({name : name.getValue() , age: age.getValue()});

		//alert(userName.getValue()+ " "+password.getValue());
		//this.getView().destroy();
		// Mumbai.getApplication().viewport.add({
		// 	xtype  : "homeScreen"
		// });
		//Mumbai.getApplication().viewport.setActiveItem(1);
		//this.lookupReference("Mumbai.mainpanel").setActiveItem(1);
	},
	removePerson : function(){
				var name = this.lookupReference('nametext');
				var PeopleStoreObj = Mumbai.getApplication().getStore("PeopleStore");
		
				var grid = Mumbai.getApplication().getView("PeopleGridPanel");
				console.log("inside"+grid);
				var sm = grid.getSelectionModel().getValue();
				var selections = sm.getSelection();
				alert("Do you want to ") 
				Ext.create('Ext.window.Window', {
    				title: 'Confirm',
    				height: 200,
    				width: 400,
    				id : 'window1',
    				layout : "vbox",
   				 items: [
					{
						xtype : "label",
						html : "Do you want to remove "+name,
						
					},
					],
					buttons :[
					{
						//xtype : "button",
						//buttonAlign : 'left',
						text : "Yes",
						id : "yes",
						listeners : {
							click : function()
							{
								for(var i=0;i<selections.length;i++){

								PeopleStoreObj.remove(selections[i]);
								}
							}
						}
					},

						{
						//xtype : "button",
						//buttonAlign : 'right',
						text : "No",
						id : "no",
						listeners : {
							click : function(){
								Ext.getCmp("window1").close();
							}
						}
					},
					],

					}).show();
			
				},
				
	

});

