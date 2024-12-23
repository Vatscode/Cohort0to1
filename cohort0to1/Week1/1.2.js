// // // // // /*Storing a value to a variable and then printing it
// // // // //   var x= 12;
// // // // //   console.log(x);
// // // // //  */
 
// // // // //   // //1. Write the program to greet a person given their first and last name.
// // // // //   //   var first_name = "Vats";
// // // // //   //   var last_name = "Upadhyay";

// // // // //   //   console.log("Hello, " + first_name + " " + last_name +  " how are you?")

// // // // //     // //2. Write a program that greets a person based on their gender.(If else)
// // // // //     // const gender = "male";

// // // // //     // if(gender=="male"){
// // // // //     //   console.log("Hello Mr. how are you?")
// // // // //     // }
// // // // //     // else if(gender=="female"){
// // // // //     //   console.log("Hello Ms. how are you?")
// // // // //     // }


   
  






//    //3. Write a program that counts from 0 - 1000 and prints (for loop)

//    for (var i = 0; i < 1000; i++) {
//  //     process.stdout.write(i + " "); // Prints without adding new lines
//  // //   }
// // // // //   console.log(); // Adds a final newline after the loop
// // // //   let a =1;
// // // //   console.log(a);

// / // Arrays
// // // // const personArray = ["harkirat", "vats", "kushal"];
// // // // const ages = [22, 26, 23, 24];
// // // // let result = " ";
// // // // for(let i=0; i<ages.length;i++){
//  //   if(ages[i]% 2==0){
// // // //     result+= ages[i] + " ";

// // // //    }
// // // // }
//  // console.log(result.trim()); // keep the output outside the loop or else it will print after every iteration

// // // // console.log(personArray[0])
// // // // console.log(personArray[1])

//  // // console.log(personArray[2])

// // // // Objects

// // // const users1 = {
//  //   firstName: "Harkirat", 
// // //   gender:  "male"
// // // }

//  // console.log(users1["firstName"])
// // // console.log(users1["gender"]) // Objects can be as nested as yout like, you can have arrays inside of you object just like python


// // const allUsers = [{
// //   firstName : "Harkirat",
// //   gender: "male",
// //   age: 24
// // }, {
// //   firstName: "Vats",
// //   gender: "male",
// //   age: 20 ,
// //   metadata: {
// //     // 
// //     address: 1919
// //   }
// // }, {
// //   firstName: "sapna",
// //   gender: "female",
// //   age: 27
// // }]

// // for(let i=0; i<allUsers.length;i++){
// //   if(allUsers[i]["gender"]== "male"){
// //     console.log(allUsers[i]["age"])
// //   }
// // }

// // Functions
// function sum(a, b){
//    return a + b;
//  }
//  const value = sum(1, 2)
//  console.log(value);

 //Array in js
//  const personArray= ["vats", "abc", "xyz"]
// console.log(personArray[0])
// console.log(personArray[1])
// console.log(personArray[2])
// Q. Write a program to print all the even numbers in an array
// const ages = [21, 22, 23, 24, 25, 26, 100];
// const numberOfPeople = ages.length;

// for(let i = 0 ; i < numberOfPeople;i++) {
// if (ages[i] % 2 == 0){
//     console.log(ages[i]);
// }
// }
//Q. Write a program to print the largest number in an array
// const numberArray = [2, 4, 5, 6, 100, 121000, 12000];
// let largest = 0;

// for (let i = 0; i < numberArray.length ; i++){
//   if ( largest < numberArray[i]){
//    largest = numberArray[i];

//   }


//  }
//  console.log(largest);
 // objects
//  const allusers = [{
//   firstName: "vats",
//   gender: "male"
//  },{
//   firstName: "raman",
//   gender: "male"
//  }, {
//   firstName: "layla",
//   gender: "female"
//  } ]

//  for(let i = 0 ; i< allusers.length ; i++){
//   if (allusers[i]["gender"] == "male") {
//     console.log(allusers[i]["firstName"])
//   }
// }

// function sum(a, b) {
//   // do things with the input and return an output
//   const sumValue = a + b;
//   return sumValue;
// }

// const value = sum(1,2)
// const value2 = sum(1,10)

// console.log(value);
// console.log(value2);


// function (prompt) {
//   //heavy machine learning
//   return output
// }
// function sum(num1, num2, fnToCall) {
//   let result = num1 + num2;
//   fnToCall(result)
// }

// function displayResult(data) {
//   console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//   console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum
// const ans = sum(1, 2, displayResult);
// //callbacks

//settimeout (A function which we use to print something after some seconds)
function greet() {
  console.log("hello world");

}

// setTimeout(greet, 3 * 1000)
// setInterval (Runs the program at an interval)
setInterval(greet, 1 * 1000)




























  

