const express=require("express");



const {connect}=require("./db")
const app=express();
const{tripRouter}=require("./routers/trip")
const cors = require('cors');

app.use(express.json());

app.use("/",tripRouter)

app.use(cors({ origin: '*' }));

app.listen(8998,async()=>{
    try{
        await connect
        console.log("connected to DB")
    }catch(error){
     console.log(error)
    }
    console.log("Server is Up!")

})