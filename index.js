const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {Users} = require('./user');


const PORT = 8000;
const app = express();

app.use(cors());
app.options('*',cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res,next)=>{
    res.send({'message':'Server On'});
});


//Registra un usuario en la base de datos
app.post('/create/user',(req,res,next)=>{
    const {correo,nombre,pass} = req.body;
    let newUser = Users({correo,nombre,pass});
    newUser.save((err,user)=>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(201).send(user);
            console.log(user);
        }
    });
});

//Permite logear a un usuario
app.post('/user/login',(req,res)=>{
    const {correo,pass}=req.body;
     Users.findOne({correo : correo}).then( usuarioExistente => {

         console.log(usuarioExistente);
         if(usuarioExistente.pass === pass){
             res.send(true);
         }else{
             res.status(404).send({mensaje:"Usuario no encotrado"});
         }
     }) ;
});

// app.get('/user/bitcoins/:usuario',(req,res)=>{
//     const usuario = req.body.params.usuario;
//     Users.findOne({correo : usuario}).then( usuarioExistente => {
//         res.send(usuarioExistente.btc);
//     }).catch(err=>{})
// })
// app.get('/user/eth/:usuario',(req,res)=>{
//     const usuario = req.body.params.usuario;
//     Users.findOne({correo : usuario}).then( usuarioExistente => {
//         res.send(usuarioExistente.eth);
//     }).catch(err=>{

//     })
// })



app.listen(PORT,()=>{
    console.log(`Me levanté en el puerto ${PORT}`);
})