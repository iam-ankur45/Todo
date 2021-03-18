const { json } = require("express")
const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())


const db = "mongodb://localhost:27017/todoapp"

mongoose.connect(db,({useNewUrlParser:true}, {useUnifiedTopology: true})).then(console.log("Connected to Mongo")).catch(err=>console.log(err))

const todoSchema = new mongoose.Schema({
    work:String,
    completed:{type:Boolean, default:false}
})

const Todo = mongoose.model('todo', todoSchema)

app.get("/todos", (req,res)=>{
    Todo.find().then(todo=>res.json(todo))
})

app.post("/todos", (req,res)=>{
    const newTodo = new Todo({
        work:req.body.work
    })
    newTodo.save().then(todo=>res.json(todo))
})

app.delete("/todos/:id", (req,res)=>{
    Todo.findByIdAndDelete(req.params.id).then(()=>res.json({remove:true}))
})

app.listen(5000,()=>{
    console.log("Server Running at 5000")
})