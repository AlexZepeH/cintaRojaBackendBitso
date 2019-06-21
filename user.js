const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://ezal:<password>@cluster0-1f3pk.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURL,{useNewUrlParser:true},(err)=>{
    if(!err) console.log('Base conectada !!');
});

const schema = mongoose.Schema;

const userSchema = new schema({
    correo:{type:String,required:true,unique:true},
    name:{ type:String, require:true},
    pass: String
});

const Users = mongoose.model('Users',userSchema);

module.exports = {Users};