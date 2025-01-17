//Middlewares
const express = require("express");
const app = express();

app.get("/health-check", function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.headers.kidneyId;

    if (username != "vats" || password != "pass"){
        res.status(400).json({"msg": "Somethings up with your inputs"})
        return 
    }
    if (kidneyId != 1 && kidneyId !=2){
        res.status(400).json({"msg": "Somethings up with your inputs"})
        return
    }
    //do something with kidney here
    res.json({
        msg: "Your kidney is fine"
    })
});

app.listen(4000);