const mongoose=require("mongoose");
const tripSchema=mongoose.Schema({
    name: String,
    email: String,
    destination: String,
    travelers: Number,
    budget: Number
    
});

const triptModel=mongoose.model("trip",tripSchema);
module.exports={
    triptModel
}