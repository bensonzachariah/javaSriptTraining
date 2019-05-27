//Promises
//Resolve
const delay = seconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
};

console.log("Zero Seconds");
delay(1).then(() => console.log("one second"));
delay(2).then(() => console.log("two second"));

//Resolve and Reject
const delay1 = seconds => {
    return new Promise((resolve, reject) => {
        if (typeof seconds !== "number") {
            reject(new Error("Argument seconds must be a number"))
        }
        setTimeout(() => {
            resolve("Whooo! Resolved");
        }, seconds * 1000);
    })
};

delay1(3).then((msg) => console.log("three second", msg));
delay1("4").then(() => console.log("four second"));



// Building Promises
const sayJoke = () => {
    return new Promise((resolves, rejects) => {
        const api = "http://api.icndb.com/jokes/random";
        const request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = () => {
            if (request.status === 200) {
                resolves(JSON.parse(request.response));
            } else {
                rejects(Error(request.statusText));
            }
        };
        request.onerror = err => rejects(err);
        request.send();
    });
};

sayJoke().then(
    joke => console.log("Here you go =>", joke.value.joke),
    err => console.error(
        new Error('Cannot load jokes')
    )
);

//fetch 
fetch("http://api.icndb.com/jokes/random")
    .then(res => res.json())
    .then(res => res.value.joke)
    .then(res => `Another joke => ${res}`)
    .then(console.log)


//fetch using a varialble
const getJoke = () => {
    fetch("http://api.icndb.com/jokes/random")
        .then(res => res.json())
        .then(res => res.value.joke)
        .then(res => `Another joke 2.0 => ${res}`)
        .then(console.log)
}

getJoke();


// Async Await

const delay3 = seconds => {
    return new Promise(
        resolve => setTimeout(resolve, seconds * 1000)
    )
};

const countToFive = async () => {
    console.log('zero seconds');
    await delay3(1);
    console.log('one second');
    await delay3(1);
    console.log('two seconds');
    await delay3(3);
    console.log('five seconds');
};

countToFive();

// Call and Apply

//bind objects of functions and include them as the this parameter.
// const speak = what => {
//     console.log(what);
//     console.log(this.cat, "cat");
// }

// const saySomething = { cat: "meow", dog: "wuff" };

// speak.call(saySomething);

function speak(what) {
    console.log(what);
    console.log(this.cat);
}

const saySomething = { cat: "Meow Meow", dog: "Wuff Wuff" };

speak.call(saySomething, "Hi"); //Hi is a Regular parameter 


const sounds = ["Hello"]

speak.apply(saySomething, sounds); // Takes parameter as array
