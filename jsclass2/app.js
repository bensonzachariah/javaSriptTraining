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
