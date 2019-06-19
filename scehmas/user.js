const mongoose = require('mongoose');

const mongoURL = 'URL de mongoDB';

mongoose.connect(mongoURL,{useNewUrlParser:true},(err)=>{
    if(!err) console.log('Base conectada !!');
});

const Schema = new mongoose.Schema;

const userSchema = new Schema({
    name:{ type:String, require:true},
    btc:{type : Number, min : 0},
    eth:{type: Number, min: 0}
    // cartera: [{type: Object}]
});

const Users = mongoose.model('Users',userSchema);

module.exports = {Users};