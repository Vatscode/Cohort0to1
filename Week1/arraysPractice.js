//push
const initialArray = [1, 2, 3];
initialArray.push(2);
console.log(initialArray);

//pop

const initialArray2 = [1, 2, 3];
initialArray2.pop();
console.log(initialArray2);

//shift
const initialArray3 = [1, 2, 3];
initialArray3.shift();
console.log(initialArray3);

//unshift
const initialArray4 = [1, 2, 3];
initialArray4.unshift(1);
console.log(initialArray4);

// concat
/* const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const thirdArray = firstArray.concat(secondArray);
console.log(thirdArray); */

//or directly

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const finalArray = firstArray.concat(secondArray)

console.log(finalArray)
// in push second element is a number versus in concat the second element is an array

const intialArray = [1, 2, 3];

function logThing(str){
  console.log(str)
}

 intialArray.forEach(logThing) //callback
//same as 
logThing(1)
logThing(2)
logThing(3)

// Callback Example

function log1(){
  console.log("Hello World 1")
}


function log2(){
  console.log("Hello World 2")
}


function logWhatsPresent(fn){ // Used as a callback function and (fn) can be any name
  fn();
}
  logWhatsPresent(log2)






 





