// Program Structure

// Binding or Variable.
let caught = 4 * 4;
console.log(caught);
var fName = "Mohamed";  // Differs from using 'let'.
const lName = "Hassan"; // Define a constant binding.
console.log(fName);
console.log(lName);

// Class Math.
console.log(Math.abs(-20));
console.log(Math.max(100, 99));
console.log(Math.min(0, -90));
console.log(Math.pow(3, 2));
console.log(Math.random());     // Random number between 0 and 1.

// Take input from the user.
// Number is a function converts the value to a number.
let usrNumber = Number(prompt("Pick a number: "));

// Conditional Statement.
if (!Number.isNaN()) {
    console.log(`Your number square root is: ${usrNumber * usrNumber}`);
} else {
    console.log('Why didn\'t you give me a number');
}
switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}

// While and Do Loops.
let x = 1;
while (x <= 10) {
    console.log(x);
    x++;
}
let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
for (let i = 1; i <= 10; i++) {
    if (i === 5)
        continue;   // Begin in the next iteration (5 isn't printed).
    console.log(i);
    if (i === 7)
        break;      // Jumpping out of the loop.
}

// This is a single-line comment.
/*
This
is
a
multi-line
comment.
*/