const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Ji there, thanks for turning up, how you doing?");
});

app.listen('8080',()=>{
console.log('Listening on port 8080');
});
