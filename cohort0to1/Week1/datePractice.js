// Date
const currentDate = new Date();

console.log(currentDate.getMonth() + 1); // 0 Index therefore add plus 1 to get the actual month

console.log(currentDate.getFullYear());

console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getHours());
const currentDate2 = new Date();
console.log(currentDate2)




  const currentDate3 = new Date();
  
  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());
// epoch timestamp



// Example Usage for Date Methods

function calculateSum(n) {
  let a = 0;
  for (let i = 0; i < n; i++){
    a = a + i
  }
  return a;
}
const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum(10);

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs)


// Create a stopwatch or a counter

function currentTimePrint(){
console.log(new Date().toLocaleTimeString())
  }
setInterval(currentTimePrint, 1000)
