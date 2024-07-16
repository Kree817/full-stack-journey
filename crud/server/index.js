const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
const StudentModel=require('./models/Students')

const app = express()
app.use(cors())
app.use(express.json)
mongoose.connect("mongodb://localhost:27017/studentdb")
app.listen(3001,() => {
    console.log("Server is running")
})



