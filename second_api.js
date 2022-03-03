const express=require("express");
// console.log(express);
const app=express()
// console.log(app);
// Create server ------->

const books=[{ Computer:"parul"},
              {English:"paras"},
              { Maths:"Akshu"},
              {Science:"Akshit"}]
app.get("/books",function(req,res){
    res.send(JSON.stringify(books));
})


app.listen(8000,()=>{
    console.log("listener on port 8000");
});