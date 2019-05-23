//for in
var obj = {a:1, b:2, c:3,d:4,e:5};  
for (var prop in obj) { 
   console.log(obj[prop]); 
}

//for of
for (let val of[12 , 173 , 1293]) {   
   console.log(val) 
} 

//counter dilemma
var counter = 0;
function add() {
  counter += 1;
}
add();
add();
add();
console.log(counter);


//counter will not increment because  of global and local declaring
var counter = 0;
function add() {
var counter = 0;
counter += 1;
}
add();
add();
add();
console.log(counter);

//using the return we can access local counter
function add() {
  var counter = 0; 
  counter += 1;
  return counter;
}
add();
add();
add();