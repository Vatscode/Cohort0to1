function findSum(n){
    let ans = 0;
    for ( let i = 0;i <=n;i++){
        ans+=i;

    }
    return ans;
}
function findSumTill100() 
{
    console.log(findSum(100));
}

setTimeout(findSumTill100, 3000)

console.log("hello world");

const fs = require("fs");
 // filesystem module

fs.readFile("README.txt", "utf-8", function(err, data) {
console.log(data);
})
console.log("hi there")

// async functions without promises

function findSum(n){
    let ans = 0; 
    for ( let i = 0; i < n; i++){
        ans +=i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100))
}
setTimeout(findSumTill100, 1000)
console.log("hello world")

// Ugly way
const fs = require('fs');

function vatsReadFile(cb){
    fs.readFile("README.txt", "utf-8" /* encoding*/, function(err, data){
        cb(data);
    });
}


//callback function to call
function onDone(data){
    console.log(data)
}

vatsReadFile(onDone)

    
// Using promises
const fs  = require('fs');

// my own async function
function vatsReadFile(){
    return new Promise(function(resolve){ // creates instance of the promise class
        fs.readFile("README.txt", "utf-8", function(err, data){
            resolve(data);
        })
    })
}

//callback function to call
function onDone(data){
    console.log(data)
}

//  var a = vatsReadFile()
//  a.then(onDone);
//  a.then(onDone); or 

vatsReadFile().then(onDone);

function vatsAsyncFunction() {
    let p = new Promise(function (resolve) {
      // do some async logic here
      setTimeout(function(){
        resolve("hi there!")
      }, 1000)
    
    });
    return p;
  }
  // usually the caller func needs to have async in syntax not the called function but there are ways to add async to a called func.
  async function main() {
    // no callbacks, no .then
    let value = await vatsAsyncFunction();
    console.log(value); // then this gets resolved and runs everything inside ( thread gets stuck here)
  
    console.log("hello engineer!");
  
    
  }
  
  main();
  console.log("after main"); // this runs immediately 
  
  // await needs to be wrapped inside a main function then you call main, it cannot be at the top level.

