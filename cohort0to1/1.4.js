//Q. Create a function to find sum of numbers from 1 to 100
let total=0;
function sum(){
    for (let i = 0; i <=100;i++){
        total = total + i;
    }
    console.log(total)
       
}
    sum()

    //Q. Create a function to find sum of numbers from 1 to n

    function findSum(n){
        let ans = 0;
        for( let i = 0;i <= n; i++){
            ans += i;

        }
        return ans;
    }
  

    const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
let total = findSum(100);
console.log("Sum of the value entered is " + total)

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log("Time it took to produce the output:",afterTimeInMs - beforeTimeInMs)

function square(n) {
    return n * n
}
function sumOfSquares(a, b){
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;

}
console.log("Sum of the squares are:",sumOfSquares(1, 2));
