function checkDriverAge(age) {
	if (Number(age) == 18) {
	return "Congratulations on your first year of driving. Enjoy the ride!";
} else if (Number(age) < 18) {
	return "Sorry, you are too young to drive this car. Powering off";
} else if (Number(age) > 18) {
	return "Powering On. Enjoy the ride!";
}
}

var age = prompt ("How old are you?")
if (Number(age) == 18) {
	alert ("Congratulations on your first year of driving. Enjoy the ride!");
} else if (Number(age) < 18) {
	alert ("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert ("Powering On. Enjoy the ride!");
}

var age = function checkDriverAge() {
	var age = prompt("What\'s your age?");
	if (Number(age) == 18) {
		return ("Congratulations on your first year of driving. Enjoy the ride!");
	} else if (Number(age) > 18) {
		return("Powering On. Enjoy the ride!");
	} else if (Number(age) < 18) {
		return("Sorry, you are too young to drive this car. Powering off!");
	}
}

console.log(age());

var cars = ["Saab", "Volvo", "BMW"];
console.log (cars[0]);


var myName = ["Boy", "Girl", "Man", "Woman"];
console.log (myName.lastIndexOf("Girl"));


var age = prompt("How old are you?") 
function checkDriverAge() {
	if (Number(age) == 18) {
		return "Congratulations! You're legal to drive.";
	} else if (Number(age) > 18) {
		return "You can enjoy your ride.";
	} else if (Number(age) < 18) {
		return "You're to young to drive.";
	}
}

console.log (checkDriverAge());

var materials =["books", "pens", "pencils", "rulers", "textbooks"];
// materials[1] = " jotters";
var text = "<ul>";
for (var i = 0; i < materials.length; i++) {
	text += "<li>" + materials[i] + "</li>"
} text +="</ul>"
document.getElementById('practice').innerHTML = text;

var fruits = ["mango", "orange", "banana", "grape", "guava"];
fruits = fruits.slice(1);
alert(fruits);

var me = !"request granted";
function mySelf(me) {
	if ("request granted" == me) {
		return "Thanks!";
	} else if (!"request granted" == me); {
		return "Please I'd love to code";
	}
	document.getElementById('practice').innerHTML = mySelf(me);
}