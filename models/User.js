// CALL MONGOOSE
const mongoose = require ("mongoose");
// CREATE SCHEMA
const userSchema = new mongoose.Schema({
Username:(
    Type:string,
    required:true,
    trim:true, // علشان تمسح مسافات
),

email:{
    ype:string,
    required:true,
    unique:true,
    LowerCase:true // بتحفظ الايميل بشكل حروف صغيرة
    
},
passoword:{
    Type:string,
    required:true,
},

},{timestamp:true},);
// CREATE MODEL
const User = mongoose.model("user",userSchame);
// EXPORTS MODULE
model.exports = User;