map, filter, arrows, fns
Until now we have writtern func like this 
function sum(a, b){
    return a + b;
}

const ans = sum(1, 2)
console.log(ans);

const sum = (a, b) =>{
    return a + b;
}
const ans = sum(1, 2);
console.log(ans);
console.log(ans);

app.get("/", (req, res)=>{

})

app.get("/", function(req, res){

})

// map and filter

const input = [1, 2, 3, 4, 5];
const  newArray = [];

for(let i = 0; i<input.length;i++){
    newArray.push(input[i] * 2);
}

console.log(newArray);
other solution

const input = [1, 2, 3, 4, 5];

function transform(i){
return i * 2;
}

const ans = input.map(transform);
console.log(ans);

const ans = input.map(function (i){
    return i * 2;
});
console.log(ans);

/* create a map function that takes 2 inputs 
an array, and a transformation callback/fn
and transforms the array into a new one using the transformation fn */

// filter
// ugly way
const inputArray = [1, 2, 3, 4, 5];
const evenArray = []; 

for(let i = 0; i < inputArray.length; i++) {
    if(inputArray[i] % 2 == 0) {
        evenArray.push(inputArray[i]);  
    }
}
console.log(evenArray);  // Will output: [2, 4]

//Using filter
const arr = [1, 2, 3, 4, 5];


 const ans = arr.filter(function (n){
    if (n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
 });
 console.log(ans);

 const nameArr = ["vats", "harkirat", "pranjal"]

 const answer = nameArr.filter(function (n){
    if (n.startsWith("v")){
        return true;
    }
    else{
        return false;
    }
 });
    
 console.log(answer);
