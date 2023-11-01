// Values, Types and Operators

console.log("Hello JavaScript")

// Special Numbers.
var x = Infinity;
var y = -Infinity;
var h = NaN;
console.log(x);
console.log(y);
console.log(h);

// String Types.
var s1 = "Hello Js";
var s2 = 'Hello Js';
var s3 = `Hello Js`;
console.log(s1);
console.log(s2);
console.log(s3);
console.log(`half of 100 is ${100 / 2}`); // Backtick strings called 'template literals'.

// Unary Operator.
console.log(typeof (s1));
console.log(typeof (x));

// Boolean Values.
var b = true;
console.log(b);
console.log(3 < 8);
console.log("Mohamed" < "Ali"); // Compare the Unicode codes for each character.
console.log(NaN == NaN); // There's only one value in JS that doesn't equal itself.

// Logical Operators.
// Note: these operators called 'short-circuit'.
console.log(true && false);
console.log(true || false);

// Ternary Operator.
console.log(b ? "b is true" : "b is false");

// Special Values.
// They're themselves values, but they carry no information.
var u = undefined;
var n = null;
console.log(n, u);

// Difference between '==' and '==='.
// With '===', there's no 'type coercion'.
console.log(true == 1);     // Prints: true.
console.log(true === 1);    // Prints: false.
console.log(false != 0);
console.log(false !== 0);