const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("<h1> Welcome to awa class </h1>");
})
app.get("/new", (req,res)=>{
    res.send("New route is working");
});

app.listen(5000,()=>{
    console.log("app is working");
});

module.exports = app;
