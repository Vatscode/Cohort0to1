const express = require("express");
const app = express();


const users = [{
    name: "John",
    kidneys: [{
        healthy: false


    }]
}];

 




app.get("/", function(req, res){
    //write logic
    const johnKidneys = users[0].kidneys;
   
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for(let i=0; i < johnKidneys.length; i++){
        if (johnKidneys[i].healthy){
            numberOfHealthyKidneys+=1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        johnKidneys,
        numberOfKidneys,
        numberOfHealthyKidneys
    })

})
app.listen(4000)