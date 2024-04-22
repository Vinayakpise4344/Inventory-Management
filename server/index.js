const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/User')
require('dotenv').config()

const app = express()
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://vinayak:vinayak@cluster0.fguqwhr.mongodb.net/employe?retryWrites=true&w=majority&appName=Cluster0s");


app.get("/login", (req, res) => {
  const { email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
            res.json("password is incorrect")
            }
        }else{
            res.json("no record exist")
        }
    }
)

})
app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            res.json("Already have an account")
        } else {
            EmployeeModel.create({name: name, email: email, password: password})
            .then(result => res.json(result))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running")
})