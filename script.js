//arrow function

let sum=(a,b)=>a+b;   //arrow function
console.log(sum(1,2));

let sum1=function(a,b){    //function declaration
return a+b;
}
console.log(sum1(6,8));


//array functions

var car = ["Audi", "Ferrari", "Porsche"];   //full array
console.log(car);
var test=car.toString();
console.log(test);


var arr=["mouse","keyboard","monitor"];     // by index
console.log(arr[2]);

 var arr=["mouse","keyboard","monitor"];   //changing array element
 arr[1]="cpu"; 
console.log(arr[1]);

//access element in array
var hero = ["Bruce", "Wayne", 21];
console.log(hero[0]);

//access element in object
var employee = {FirstName:"lalitha", LastName: "N",Age:21};
console.log(employee.LastName)

var car=["Audi", "Ferrari", "Porsche"];  //length
console.log(car.length)

var car=["Audi", "Ferrari", "Porsche"]; // adding element to array
console.log(car.push("Lamborghini"))

var car=["Audi", "Ferrari", "Porsche"];      //poping element from array
console.log(car.pop());

var person = [];
person[0] = "sagar";
person[1] = "r";
person[2] = 22; 
console.log(person[0] + " " + person.length)   //number index in array



//bind function 


  var person={
  personid:123,
  personname:"Benson",
  age:23,
  fullname:function()
  {
    console.log(" my name is "+this.personname+" " +"and I am " +this.age);
  }
}
var person1=person.fullname.bind(person);
person1();
