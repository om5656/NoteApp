// CALL MONGOOSE
const { User, Type, CaseLower } = require("lucide-react");
const mongoose = require ("mongoose");
// CREATE SCHEMA
const nodeSchema = new mongoose.Schema({
content:(
    Type:string,
    required:true,
),

iscompelted:{
    type:Boolean,
    default:false,  
},

user:{
  type:mongoose.Schema.Type.ObjectId,
  ref:"User",
  required:true,

}
},{timestamp:true});
// CREATE MODEL
const Note = mongoose.model("Note",NoteSchame);
// EXPORTS MODULE
model.exports = Note;