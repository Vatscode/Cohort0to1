Topics to be covered

Interpreted vs complied languages
WHy JS>> Other languages in some use-cases
Strict vs dynamic languages
Single threaded nature of JSSimple primitive in JS (number, strings, booleans)
Complex primitives in JS (arrays, objects)
Functions in javascript
Practise problem solving
Callback functions,Event loop, callback queue,Asynchronous programming
Callback hell and Promises

Single threaded nature of JS

Unlike java,c++,rust js is not multi threaded meaning you cannot run two node js files at one time without using more then one core in cpu,
** The more core a machine has the more things/processes you can run on it.
** Context switching is when your applications/processes dont require cpu at all times so it switches context between different things
** JS only uses one core at a time unlike java 
*** You can use cluster model to make java multi threading.
** Functions can take other functions as input (callback functions) //fnToCall
** Calling a function as an argument is also callback.
** SetTimeout (A function which we use to print something after some seconds).
/* 
Strings
1. If the target string is not found, the indexOf method returns -1;
2. str.slice does not include the last index, for ex. (0, 10) will include index 0 to 9 but not 10.
   Difference betweeen str.slicd and str.substr is that str.substr will give you len of the string starting from the starting index, whereas str.slice will not.
   When you dont use return keyword in a function, it will return undefined.
3. parseInt is a global function and the starting index should be int for it to work, or else youll get NaN.

/* 
Arrays
1. In push second element is a number versus in concat the second element is an array.
2. function logWhatsPresent(fn){ // Used as a callback function and (fn) can be any name
  fn();
}
  logWhatsPresent(log2)
*/


