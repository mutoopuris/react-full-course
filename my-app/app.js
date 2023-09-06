const express = require('express');

const app = express();

app.get('/', (req, res)=>{
res.json({description: "Hello My World"});
})

app.listen(9000, ()=>{
console.log("Server started at port 9000");
})