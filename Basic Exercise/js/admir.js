var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

var sandata = JSON.parse(sandwiches);
var fridata = JSON.parse(fries);

document.write(
	"My favorite sandwich is a Hamburger which has approximately "+
	sandata.calories+" calories, along with it I enjoy eating "+
	fridata.fries_size+" which have about "+
	fridata.calories+" calories."
)