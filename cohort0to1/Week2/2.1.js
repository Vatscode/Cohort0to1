//  //creating a http server

// //  const express = require('express')

// //  const port = 3000

// //  app.get('/', function(req, res) {
// //     res.send('Hello World!')

// //  })

// //  app.listen(port)

// const express = require("express");
// const app = express();
// function sum(n){
//     let ans = 0;
//     for(let i = 0; i<=n; i++){
//         ans = ans + i;

        
// }
// return ans;
// }


// app.get("/", function(req, res){ // here express says give me 2 arguements request and response
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("hi your ans is " + ans);
// })

// app.listen(1200);
const express = require("express");
const app = express(); 
const users = [{
    name: 'John',
    kidneys: [{
        healthy: false
        
}]
}];

app.get("/", function(req, res){
    //write logic
    const johnKidneys = users[0].kidneys;
    console.log(johnKidneys)
    const numberOfKidneys = kidneys.length;
    


})
app.listen(1300);



