Ext.define("Guessing.view.GuessingGame",{
			extend : "Ext.panel.Panel",
			xtype : "GuessingGame",
			title : "Welcome to the Guessing game",
			requires : [
			"Guessing.view.GuessingGameViewController",
		    "Guessing.view.GuessingGameViewModel",

			],
			viewModel : "game",
			controller : "game",
					items : [
						{
							xtype : "textfield",
							fieldLabel : "Enter you Guess",
							bind : "{guess}"
						},
						{
							xtype : "button",
							text : "Play",
							
							listeners : {
								click : "playButtonClicked"
							}
						},
						{
							xtype : "label",
							bind : "{attemptstext}"
						},
						{
							xtype : "label",
							bind : "{messagetext}"
						}
					],
					renderTo : Ext.getBody()
				});
		
