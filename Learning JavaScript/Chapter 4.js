// Array in JavaScript.
let listOfNumbers = [10, 20, 30, 40, 50, 60, 40]
console.log(listOfNumbers);
listOfNumbers.push(80); // Push number at the end of the array.
listOfNumbers.push(5);
for (let i = 0; i < listOfNumbers.length; i++)
    console.log(listOfNumbers[i]);
listOfNumbers.pop();    // Pop number from the end of the array.
for (let i = 0; i < listOfNumbers.length; i++)
    console.log(listOfNumbers[i]);
for (let num of listOfNumbers)
    console.log("For each loop: ", num);
console.log(listOfNumbers.includes(50));    // → true.
console.log(listOfNumbers.includes(5));    // → false.
listOfNumbers.unshift(120);         // add element at the beginning of the array.
console.log(listOfNumbers[0]);
listOfNumbers.shift();              // remove element from the beginning of the array.
console.log(listOfNumbers[0]);
console.log(listOfNumbers.indexOf(40)); // return index of the first occurance of 40.
console.log(listOfNumbers.lastIndexOf(40)); // return the index of last occurance of 40.
console.log(listOfNumbers.indexOf(720));  // return -1;
console.log(listOfNumbers.slice(1, 6));   // start index is inclusive, end index is exclusive.
console.log(listOfNumbers.concat([-10, -20, -30]));
console.log(listOfNumbers);

// Properties.
// Get the length of a string.
let myName = "Mohamed";
let nameLength = myName.length;
//let nameLength = myName["length"]; Give you the same output.
console.log(nameLength);
console.log(myName.toUpperCase());
console.log(typeof myName.toUpperCase());

// Objects.
// Student here is an object that has many properties.
let student = {
    fName: "Mohamed",
    lNmae: "Hassan",
    age: 21,
    courses: ["Operating Systems", "Object-Oriented Programming", "Data Structures", "Databases"]
};
console.log(student.age);
console.log(student.courses[2]);
student.college = "FCI";    // Add new property.
console.log(student.college);
delete student.age;         // Delete property.
console.log(student.age);   // Prints undefiend.
//The binary in operator, when applied to a string and an object,
//   tells you whether that object has a property with that name.
console.log("age" in student);  // false.
console.log("fName" in student);// true.
console.log(Object.keys(student));
console.log(student);
// Array of Objects.
let students = [
    {
        fName: "Mohamed",
        lNmae: "Hassan",
        age: 22,
        courses: ["Operating Systems", "Object-Oriented Programming", "Data Structures", "Databases"]
    },
    {
        fName: "Ahmed",
        lNmae: "Ali",
        age: 22,
        courses: ["Networks", "Design Patterns", "Information Systems", "Information Technology"]
    },
    {
        fName: "Mostafa",
        lNmae: "Mahmoud",
        age: 23,
        courses: ["Cloud Computing", "Computer Graphics", "Discrete Mathematics", "Math II"]
    }
];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Mutability.
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 == object2);    // → true
console.log(object1 == object3);    // → false 
object1.value = 15;
console.log(object2.value);         // → 15 
console.log(object3.value);         // → 10
const score = { visitors: 0, home: 0 };
score.visitors = 1;                 // This is okay.
console.log(score);
//score = {visitors: 1, home: 1};     // Cause an error.

// String.
let welcome = "         Welcome, How're you?!       \n";
console.log(welcome.slice(10, 16));// slice the string.
console.log(welcome.indexOf("ow"));// return the index of the first character in the substring.
console.log(welcome.trim());       // removes whitespaces (spaces, newlines, tabs, etc).
let originalString = "H";
console.log(originalString.padStart(4, "i"));//  pad a string with another string until the resulting string reaches desired length.
console.log(originalString.padEnd(4, "i"));
let statement = "Hello, my name is Mohamed.";
let words = statement.split(' '); // split string into array of words according to the splitter.
console.log(words);
let word = words.join(' '); // join words into a string with adding the specified seperator. 
console.log(word);
console.log(word.repeat(4)); // repeat the word 4 times.

// Rest Parameters.
function max(...numbers) {
    // This function can take many arguments.
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
let num = [1, 2, 3, 4, 5, 6, 7, 1000];
console.log(max(...num));
console.log(max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
words = ['A', 'B', 'C', 'D', '... Z'];
console.log('English alphabets are:', ...words, '\nWe finished!');
function random() {
    // Generate random numbers between 0 and 1. 
    return Math.round(Math.random() * 10);
}
console.log(random());

// Destructuring
function showQ([Q1, Q2, Q3, Q4]) {
    if (Q1)
        return 'First Quarter';
    else if (Q2)
        return 'Second Quarter';
    else if (Q3)
        return 'Third Quarter';
    else
        return 'Fourth Quarter';
}
let q = [false, false, true, false];
console.log(showQ(q));

// JSON.
// A data storage and communication format on the Web, even in languages other than JavaScript.
let obj = {
    fName: 'Mohamed',
    lName: 'Hassan',
    college: 'FCI',
    age: 21
};
let jsonObject = JSON.stringify(obj);
console.log(jsonObject);    // print the object in a JSON format. 
console.log(JSON.parse(jsonObject).college);// print: FCI.