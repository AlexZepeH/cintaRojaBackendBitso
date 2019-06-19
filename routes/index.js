const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Users = require('../scehmas/user');

const PORT = 8000;
const app = express();

app.use(cors());
app.options('*',cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/create/user',(req,res,next)=>{
    const {nombre,btc,eth} = req.body;
    let newUser = Users(req.body);

    
})