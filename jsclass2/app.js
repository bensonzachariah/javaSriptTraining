//VAR
function doMath(a, b) {
    var result = a + b; //Local scope
    return result;
}

var firstValue = 5; //Global scope
var otherValue = 4; //Global scope

const x = doMath(firstValue, otherValue);

//Constant 
//Can't be changed once defined 

const myConst = 101;
//const myConst; 
//myConst = 121; // this is an error

//LET
//Block scope variable 
//Smaller scope than var 

function logScope() {

    var localVar = 2;

    if (localVar) {
        let localVar = "I'm different!"; // if we don't use let here, logScope localVar will be changed and o/p is same as nested localVar
        console.log("Nested localVar: ", localVar);
    }

    console.log("LogScope localVar: ", localVar);
}

logScope();

//Closer
//Closer is a function inside a function, that relies on variables in the outside function to work.
function doSomeMath() {
    var a = 5;
    var b = 4;
    function multiply() {
        var result = a * b;
        return result;
    }
    return multiply;
}

var xy = doSomeMath();

console.log(xy());

//Default function parameters

function add(x = 1, y = 2) {
    console.log(x + y);
}

add();

function todo(name = "walk the dog") {
    console.log(`Your todo is ${name}`)
}

todo();//default
todo("Creact an awesome application");

//Immediately Invoked Function(IIF)
//An IIF expression that runs as soon as the browser encounters it

const theBiggest = (function (a, b) {
    var result;
    a > b ? result = ["a", a] : result = ["b", b];
    return result;
})(10, 11);

console.log(theBiggest);

//MAP
//Use something other than a string as a key
//Utilize key value paris that are always the same value
//Use map when we need to iterate in order

var course = new Map();
course.set("JavaScript", { description: "interactivity" });
course.set("react", { description: "ui" });

console.log(course);
console.log(course.react) //dot notation dosen't work in map to return whatever the value of react.
console.log(course.get("react"))

//We can insert the items as soon as we declare the MAP
var details = new Map([
    [new Date(), "today"],
    ["items", [1, 2]]

]);

console.log(details.size);


//SET 
//Are collections of values
//Can be of any type
//Each value must be unique

var books = new Set();
books.add("JavaScript"),
    books.add("React")
        .add("Node");

console.log(books);
console.log("How many books?", books.size);
console.log("Has React", books.has("React"));
books.delete("Node");
console.log("Has Node", books.has("Node"))

var data = [2, 4, 4, 6, 7, 2, 1, 5, 7, 0, 2, 5, 3, 1, 6];
var set = new Set(data);
console.log("data.length", data.length);
console.log("set.size", set.size);
//by the time data array turned in to a set, all of the duplicates are removed



//for...of
//we can use to loop over iterable objects like arrays, strings, maps, and sets. 

//strings
for (let letter of "React") {
    console.log(letter);
}

//arrays
var topics = ["JavaScript", "Node", "React"]

for (let topic of topics) {
    console.log(topic);
}

//the most likely use case for a for-of loop is to iterate through those new data types : maps and sets.

var topics = new Map();
topics.set("HTML", "class/html");
topics.set("CSS", "class/css");
topics.set("JavaScript", "class/javascript");
topics.set("React", "class/react");

for (let topic of topics) {
    console.log(topic);
}

//iterate over keys
for (let topic of topics.keys()) {
    console.log("Keys", topic);
}

//iterate over values
for (let topic of topics.values()) {
    console.log("Values", topic);
}

//For...in
//used to loop through an object's properties.
const person = {
    Name: "Sandeep Mohan",
    Age: 23,
    Place: "Mysore"
}

for (let prop in person) {
    // console.log(prop);
    console.log(prop + ": " + person[prop]);
}



