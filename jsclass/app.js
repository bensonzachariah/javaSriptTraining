//Normal Functions
function sayHello(name) {
  return console.log(`Hello, ${name}`);
}

sayHello('Sandy');

//Arrow Function
const sayHi = name => console.log(`Hi, ${name}`);
//For single parameter parentheses is not necessary

sayHi('Sandy');

//ForEach

const fruits = new Array('Apples', 'Grapes', 'Mangos');
//forEach using normal function
fruits.forEach(function (fruit) {
  //console.log(fruit);
});
//forEach using Arrow Function
fruits.forEach(fruit => {
  console.log(fruit);
});

//MAP
const singleFruit = fruits.map(fruit => fruit.slice(0, -1));
console.log(singleFruit);

// FILTER
const fruits2 = fruits.filter(fruit => fruit !== 'Apples');
console.log(fruits2);

//Example2
const people = [
  { id: 1, name: 'Benson' },
  { id: 2, name: 'Chandana' },
  { id: 3, name: 'Priyanka' },
  { id: 4, name: 'Sandeep' }
];

const people2 = people.filter(person => person.id !== 4);
console.log(people2);

// SPREAD
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr2.filter(num => num !== 2)];
//arr3 has all the element form the arr2 except 2
console.log(arr2);
console.log(arr3);

//Example2
const person1 = {
  name: 'Sandeep',
  age: 23
};

const person2 = {
  ...person1,
  email: 'sm@sandeepmohan.com'
};

console.log(person2);

// DESTRUCTURING
const profile = {
  name: 'John Doe',
  address: {
    state: 'Karnataka',
    city: 'Mysore'
  },
  hobbies: ['Photography', 'Fitness']
};

const { name, address, hobbies } = profile;
const { street, city } = profile.address;

console.log(name, city);

// CLASSES
class Friend {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const friend1 = new Friend('Sagar', 23);
const friend2 = new Friend('Benson', 22);

console.log(friend1.greet());
console.log(friend2.greet());

// SUBCLASSES;
class Colleague extends Friend {
  constructor(name, age, place) {
    super(name, age);
    this.place = place;
  }

  info() {
    return `${this.name} is from ${this.place}`;
  }
}

const colleague1 = new Colleague('Chandana', 22, 'Mysore');
const colleague2 = new Colleague('Priyanka', 22, 'Banglore');
console.log(colleague1.info());
console.log(colleague2.info());

// MODULES
// file 1 (file1.js)
// export const name = 'Jeff';
// export const nums = [1, 2, 3];
// export default Friend;

// file 2 (file2.js)
// import { name, nums } from './file1'; //assuming file 1 is in the same folder
// import Friend from './file1';


//BIND 

const profile1 = {
  name: "John Doe",
  age: 23,
  location: "India"
}

const test = function () {
  console.log(`My name is ${this.name} and I'm ${this.age}`);
}

test.bind(profile1)();

