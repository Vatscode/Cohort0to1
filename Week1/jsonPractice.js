// JSON (Javascript object notation)
const users = {
name: "Vats", 
  age: 20, 
 gender: "male",
 isMarried: false
 }
 console.log(users.name)
/*Now if you wanted to send this to someone else for their use,
convert it into a string first.
*/
const users1 = '{"name": "vats", "age": 20, "gender": "male"}'   
console.log(users1["9"])

//  JSON.parse
//  JSON.stringify

// Using parse

// const user = JSON.parse(users1)
// console.log(user["gender"]);

// Using Stringify

const user = {
 name: "Vats",
   gender: "male"
}
const finalString = JSON.stringify(user)
console.log(finalString) // This is now a string