const express = require("express");
const router=express.Router();

const brandModel = require("../models/brand");

router.get("/",(req,res)=> res.send("Brand Home."));

//GET Brand
router.get("/list",async(req,res)=>{
    const brandList=await brandModel.find();
    if(brandList.length === 0){
        return res.json({"Message":"Record Not Found."});
    }
    return res.send({"Record in Brand :":brandList});
});

//POST  Add new Brand
router.post("/addbrand",async(req,res)=>{
    const {newBrand} = req.body;
    await brandModel.create(newBrand);
    return res.json({"Message":"Brand Data Add successfully...!"});
});

//PUT Update Brand
router.put("/updatebrand/:id",async(req,res)=>{
    const bid=req.params.id;
    const name=req.body.name;
    const updatedData=await brandModel.findOneAndUpdate(
        {id:bid},
        {name:name},
        {new:true}
    );
    return res.json({"Update Record in Brand":updatedData});
});

//Delete Brand
router.delete("/delbrand/:id",async(req,res)=>{
    const id=req.params.id;
    const deldata=await brandModel.findOneAndDelete({id:id});
    return res.json({"Deleted Record from Brand Data: ":deldata});
});

module.exports = router;