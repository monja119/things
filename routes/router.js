const express=require("express")
const app=express()

// routes
const things=require("./things.js")

app.use("/api/back", things)

app.use('', (req, res) => {
    res.send("Hello World")
});

app.use((req,res,next)=>{
    res.statusCode=404
    res.send("La page que vous cherchez n'existe pas")
})

// Exporting the app
module.exports=app