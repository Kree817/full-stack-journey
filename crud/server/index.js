const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const StudentModel=require('./models/Students')

const app=express()
app.use(cors())
app.use(express.json())

mongooscxe.connect("mongodb://127.0.0.1:27017/studentdb")

//For Create

app.post("/createStudent",(req,res)=>{
    StudentModel.create(req.body)
    .then(students=>res.json(students))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("Server is running")
})
