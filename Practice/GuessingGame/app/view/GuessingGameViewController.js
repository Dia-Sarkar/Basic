Ext.define("Guessing.view.GuessingGameViewController", {
	extend : "Ext.app.ViewController",
	alias : "controller.game",
	playButtonClicked : function(){
		this.getViewModel().play();
	}


	});