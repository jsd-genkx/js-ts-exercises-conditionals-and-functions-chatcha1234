// TODO-05: Convert this if to switch/case (You can add more options.)
// TODO BONUS: Use object lookup

const fruit: string = "orange";

if (fruit === "apple") {
	console.log("An apple a day keeps the doctor away.");
} else if (fruit === "banana") {
	console.log("Banana is good for potassium.");
} else if (fruit === "orange") {
	console.log("Oranges are full of vitamin C.");
} else {
	console.log("Unknown fruit.");
}


let result1 = ""
switch (fruit) {
	case "apple":
	result1 = "An apple a day keeps the doctor away." ;
	break;

	case "banana":
	result1 = "Banana is good for potassium." ;
	break;

	case "orange":
	result1 = "Oranges are full of vitamin C." ;
	break;

	default :
	result1 = "Unknown fruit." ;

}

console.log(result1);