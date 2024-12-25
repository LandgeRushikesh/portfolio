const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

let port = 5000

app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

// mongoose connected
mongoose.connect("mongodb://localhost:27017/test",)
    .then(() => {
        console.log("MongoDB is connected");
    });


let schema = mongoose.Schema;

// database schema created
let messageSchema = new schema({
    Name:String,
    Email:String,
    Message:String
});

// message model
const message = mongoose.model("message",messageSchema)

app.post("/submit",(req,res)=>{
    console.log(req.body)
    const {Name,Email,Message} = req.body

    const newData = new message({
        Name,
        Email,
        Message
    })
    newData.save();

    setTimeout(()=>{
        res.redirect('/#Contact-sec')
    },3000)

    
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})