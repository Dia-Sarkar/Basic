function add()
{
console.log("***Adding***")
var sum = 0;
for (var i = 0; i < arguments.length; i++) {
	sum = sum + arguments[i];
}
console.log("Addition : "+sum);
console.log("\n");
}
function largest()  
{
	console.log("***Largest***")
	var large= arguments[0];
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] > large)
		{
			large = arguments[i];
		}
	};
	console.log("Largest : "+ large);
	console.log("\n");
}

add(1,23,2,3,4,545,6,5);
add(1,23);
largest(234,234,4235,235,23,324,234,234,23423);
largest(234,234,5,6,7);