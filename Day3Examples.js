//closure example

function outerFunc() {
    var name = 'ReactJSTraining';
    function innerFunc() {
        console.log(name);
    }
    return innerFunc;
}

var outerFuncVar = outerFunc();
outerFuncVar();

//Immediately invoked functions.

(function () {
    var company = "Softvision";
    console.log(company);               //company isn't accessible anywhere outside the IIFE
})();     



// for of

let tens = [10, 20, 30];

for (let value of tens) {
  value += 1;
  console.log(value);                  // For of is used in arrays.
}


// For each

const items = ['cognizant', 'softvision', 'pods'];
const copy = [];


items.forEach(function(item){
  copy.push(item);
});
console.log(copy);

// For in

var obj = {a: 1, b: 2, c: 3};
    
for (const prop in obj) {                       // For in is used to iterate over object properties
  console.log(`obj.${prop} = ${obj[prop]}`);    
}


// Simple promise

var promise = new Promise(function(resolve, reject) { 
  const x = "randomvalue"; 
  const y = "randomvalue"
  if(x === y) { 
    resolve(); 
  } else { 
    reject(); 
  } 
}); 
  
promise. 
    then(function () { 
        console.log('Success, random values are the same!'); 
    }). 
    catch(function () { 
        console.log('Failed! random values are different'); 
    }); 


    // asynch and await example

    async function f() {

      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
      });
    
      let result = await promise; // wait till the promise resolves (*)
    
      console.log(result); // "done!"
    }
    
    f();