const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require('cors')


const app = express();
//app.use(express.json()) is used to get data into json format

app.use(express.json());

const PORT = process.env.PORT || 5500;

app.use(cors());

//importing routes 
const TodoItemRoute = require('./routes/toDoItems.js')

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('database connected'))
.catch(err => console.log(err))

app.use('/', TodoItemRoute)



app.listen(PORT, ()=> console.log("Server connected"));
