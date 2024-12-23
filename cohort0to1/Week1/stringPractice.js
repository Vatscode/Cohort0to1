function getLength(str) {
    console.log("Original string is: " , str);
     console.log("The length of the string is: " , str.length);
   }
  
   getLength("Vats Upadhyay")
  
  function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
  }
  getLength("Hello World");
  
  const str = "Vats Upadhyay";
  console.log(str.length)
  
  var string = "Harkirat singh";
  console.log(str.length)
  
  function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
  }
  findIndexOf("Hello World", "World");
  
  function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
  }
  findIndexOf("Vats Upadhyay Upadhyay Upadhyay Upadhyay", "Upadhyay");
  
  //If the target string is not found, the indexOf method returns -1;
  
  str.length, str.indexOf, str.lastIndexOf
  
  
  function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 0, 7);
  
  function getSlice(str, start, end){
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello Vats Upadhyay", 0, 10);
  
  /*str.slice does not include the last index, for ex. (0, 10) will include index 0 to 9 but not 10.
  Difference betweeen str.slicd and str.substr is that str.substr will give you len of the string starting from the starting index, whereas str.slice will not.
  When you dont use return keyword in a function, it will return undefined.*/
  
  function cutIt(str, startIndex, endIndex){
    let newStr = "";
    for (let i = 0; i< str.length; i++){
      if (i >= startIndex && i < endIndex){
        newStr += str[i];
      }
    }
   return(newStr);
  
  }
  
  console.log(cutIt("Vats Upadhyay", 0, 6));
  
  const value = "Vats Upadhyay";
  
  let ans2 = value.slice(0, 6)
  console.log(ans2);
  
  const str1 = "hello cohort";
  console.log(str1.replace("cohort", "world"));
  
  const introduction = "Hello, my, name, is, Vats, Upadhyay";
  console.log(introduction.split(","))
  
  const value1 = "     Vats Upadhyay      ";
  console.log(value1.trim());
  
  const value2 = "Vats Upadhyay";
  console.log(value2.toUpperCase())
  
  const value3 = "Vats Upadhyay";
  console.log(value3.toLowerCase())
  

  
  
  
  
  
  