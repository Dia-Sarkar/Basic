
function confuseInParts()
{
	function ok()
	{
		console.log("OK");
	}
	return ok;
}

var f = confuseInParts();
f();

function confuse()
{
	return function()
	{
		console.log("Thoroughly confused")
	};
}
confuse()();

//Function as argument
function doSomething(something,anything){
	something();
	anything();
}

doSomething(function(){
	console.log("Leave us alone")
},
function()
{
	console.log("Trying this")
}
	);



