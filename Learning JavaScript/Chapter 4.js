// Array in JavaScript.
let listOfNumbers = [10, 20, 30, 40, 50, 60]
console.log(listOfNumbers);
listOfNumbers.push(80); // Push number at the end of the array.
listOfNumbers.push(5);
for (let i = 0; i < listOfNumbers.length; i++)
    console.log(listOfNumbers[i]);
listOfNumbers.pop();    // Pop number from the end of the array.
for (let i = 0; i < listOfNumbers.length; i++)
    console.log(listOfNumbers[i]);
for(let num of listOfNumbers)
    console.log("For each loop: ", num);
console.log(listOfNumbers.includes(50));    // → true.
console.log(listOfNumbers.includes(5));    // → false.

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
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);    // → true
console.log(object1 == object3);    // → false 
object1.value = 15;
console.log(object2.value);         // → 15 
console.log(object3.value);         // → 10
const score = {visitors: 0, home: 0};
score.visitors = 1;                 // This is okay.
console.log(score);
//score = {visitors: 1, home: 1};     // Cause an error.