//promise resolve
let promise= new Promise(function(resolve,reject){
  setTimeout(()=>resolve("done!!!!"),2000);
});
promise.then(
  result=>alert(result),
  error=>alert(error)
);

//promise reject
let promise=new Promise(function(resolve,reject){
  setTimeout(()=>reject(new Error("whoopS!!")),1000);
});
promise.then(
  result=>alert(result),
  error=>alert(error)
);

//async
async function f(){
  return 1;
}
f().then(alert);

//Returning promise explicitly using async
async function f(){
  return Promise.resolve(1);
}
f().then(alert);

//await
async function f(){
  let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("done"),1000)
  });
  let result=await promise;
  alert(result);
}
f();
