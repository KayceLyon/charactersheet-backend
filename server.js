//  DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const session = require('express-session');

app.use(express.json());
app.use(cors());

const characterController = require('./Controllers/characterController')

app.use('/characters', characterController)


let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

app.listen(PORT, ()=>{
    console.log('Listening')
})

mongoose.connect('mongodb+srv://klyon:rEX42p0J9UVnLCEA@sheet.wxrwmjd.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('Linked')
})