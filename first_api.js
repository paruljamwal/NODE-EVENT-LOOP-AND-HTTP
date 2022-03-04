const express=require("express");
// console.log(express);
const app=express()
console.log(app);
// Create server ------->
app.get("/",function(req,res){
    res.send("hello");
    
});

app.listen(7000,()=>{
    console.log("listener on port 7000");
});