 //creating a http server

 const express = require('express')

 const port = 3000

 app.get('/', function(req, res) {
    res.send('Hello World!')

 })

 app.listen(port)

const express = require("express");

function CalculateSum(a, b) {
  return a + b;
}

const app = express();

app.get("/", function (req, res) {
  const a = parseFloat(req.query.a); // Convert query parameter to a number
  const b = parseFloat(req.query.b); // Convert query parameter to a number

  if (isNaN(a) || isNaN(b)) {
    // Handle invalid query parameters
    return res.status(400).send("Both 'a' and 'b' must be valid numbers");
  }

  const ans = CalculateSum(a, b);
  res.send(`The sum of ${a} and ${b} is ${ans}`);
});

app.listen(3002, () => {
  console.log("Server is running on http://localhost:3002");
});

const express = require("express");

function calculateSum(n) {
   let ans = 0;
   for (let i = 0; i<n; i++){
      ans +=i;
   }
   return ans;
}

const app = express();

app.get("/", function(req, res) {
   const n = req.query.n;
   const ans = calculateSum(n);
   res.send(ans.toString());
})
app.listen(3010);
