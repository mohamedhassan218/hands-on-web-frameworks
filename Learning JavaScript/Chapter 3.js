// Functions
// In JavaScript, function declerations (without let, const and var) aren't part of the
//       regular top-to-bottom flow of control.

// Defining a function
// We defines 'square' to refer to a function.
const square = function (x) {
    return x * x;
};
const power = function (base, exponent) {
    let result = 1;
    for (let i = 1; i <= exponent; i++)
        result *= base;
    return result;
};
console.log(square(3));     // Prints: 9.
console.log(power(3, 3));   // Prints: 27. 

// Difference between 'let, const' and 'var'.
var x = 90;     // Global Variable.
let y = 90;     // Local Variable.
const z = 0;    // Local Variable.

// Nested Scope.
// Blocks and functions can be created inside other blocks and functions,
//      producing multiple degrees of locality.
const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

// You can store function value in a new binding.
let launchMissiles = function () {
    console.log("Hello World!");
};
launchMissiles();
launchMissiles = function () {
    console.log("Hey World!");
};
launchMissiles();

// Another decleration.
// Easier to write and doesn't require a semicolon after the function.
fun("Mohamed");
function fun(name) {
    console.log("Hello ", name);
}

// Arrow Functions.
const pow = (base, exponent) => { return Math.pow(base, exponent); };
console.log(pow(3, 2));
const hey = () => { console.log("Hello World!") }; // With no parameters.
hey();
const heyUsr = usrName => { return `Hello ${usrName}`; }; // With one parameter.
console.log(heyUsr("Mohamed"));

// Optional Arguments.
function sq(x) { console.log(Math.pow(x, 2)); }
sq(3, "Mohamed", true);  // Ignore extra arguments and computes the square of the first one.
function sayHi(name = "User") { console.log(`Hello ${name}`); } // Put default value to the name.
sayHi(); // Prints: Hello User
sayHi("Mohamed"); // Prints: Hello Mohamed

// Closure.
function wrapValue(n) {
    let result = n;
    return () => result;
}
let wrap10 = wrapValue(10);
let wrap20 = wrapValue(20);
console.log(wrap10);// Show the content of the function.
console.log(wrap10()); // Show the value stored.
console.log(wrap20);
console.log(wrap20());
function multi(n) {
    return result => result * n;
}
let X = multi(3);
console.log(X(5)); // prints: 15.

// Recursion.
function myPow(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * myPow(base, exponent - 1);
}
console.log(myPow(3, 2));