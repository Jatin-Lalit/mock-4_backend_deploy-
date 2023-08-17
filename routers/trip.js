const express=require("express");

const {triptModel}=require("../model/trip.model");
const tripRouter=express.Router();


tripRouter.get("/RetrieveAPI",async(req,res)=>{
    
    try{
        const trip=await triptModel.find();
        res.status(200).send(trip)
    } catch(err){
        res.send({"msg":err})
    }

    
});
///////////////////////////////////////////
/////////////////////////////////////

tripRouter.post("/PostAPI",async(req,res)=>{
    const payload=req.body;
    try{
        const trip=new triptModel(payload)
        await trip.save();
        res.status(201).send("data posted")
        
    } catch(err){
        res.send({"msg":err})
    }

    
});

///////////////////////////////////
/////////////////////////////////

tripRouter.delete("/delete/:id",async(req,res)=>{
   
    const id=req.params.id;
    const flight= await triptModel.findOne({_id:id})
    
    try{
        await triptModel.findByIdAndDelete({_id:id});
        res.status(202).send("deleted");
        
    } catch(err){
        res.send({"msg":err})
    }

    
});
///////////////////////////
tripRouter.get("/FilterAPI", async (req, res) => {
    const { destination } = req.query;

    try {
        const trips = await triptModel.find({ destination: destination });
        res.status(200).send(trips);
    } catch (err) {
        res.send({ "msg": err });
    }
});
///////////////////////////////////////
tripRouter.get("/SortAPI", async (req, res) => {
    const { sortBy } = req.query;

    try {
        const trips = await triptModel.find().sort(sortBy);
        res.status(200).send(trips);
    } catch (err) {
        res.send({ "msg": err });
    }
});

module.exports={
    tripRouter
}
