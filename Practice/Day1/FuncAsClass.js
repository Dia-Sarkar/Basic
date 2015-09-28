function Book(theTitle,thePrice)
{
	this.title = theTitle;
	this.price = thePrice;
	this.buy = function (store)
	{
		console.log("Buying " + this.title + " from " + store);
	}
}
var b1 = new Book("ABC",1200);
console.log(b1.title + " , " + b1.price);
b1.buy("FlipKart");
var b2 = new Book("XYZ",1500);
console.log(b2.title + " , " + b1.price);
b2.buy("Amazon");
