// Higher-order functions
//  → functions that operate on other functions, either by taking them as arguments or by returning them.
// Abstractions → hide details and give us the ability to talk about problems at a higher level.
// In JavaScript, functions are not overloaded in the traditional sense.
// If you define a function with the same name twice, the second definition will overwrite the first one.
function repeatLog1(n) {
    for (var i = n; i >= 1; i--) {
        console.log(i);
    }
}
function repeatLog2(n, action) {
    for (var i = 1; i <= n; i++) {
        action(i);
    }
}
repeatLog2(6, console.log);
repeatLog1(5);
let numbers = [];
repeatLog2(7, i => { numbers.push(`Unit ${i}`) });
console.log(numbers);

// Example of higher-order functions:
// This function takes a parameter 'n' and returns another function that,
// takes a parameter 'm' and checks whether 'm' is greater than 'n'.
// The inner function is created using an arrow function (m => m > n), and
// it captures the value of 'n' from the outer function's scope through a closure.
//       Closure → when a function is defined inside another function (the outer function) and
//                 has access to variables from the outer function, even after the outer function has finished executing.
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));