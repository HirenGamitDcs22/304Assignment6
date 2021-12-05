const express = require("express");
const router=express.Router();

const productModel = require("../models/product");

router.get("/",(req,res)=> res.json("Product Home."));

//GET Product
router.get("/list",async(req,res)=>{
    const productList=await productModel.find();
    if(productList.length === 0){
        return res.json({"Message":"Record Not Found."});
    }
    return res.json({data:productList});
});

//POST  Add new Product
router.post("/addproduct",async(req,res)=>{
    const {newProduct} = req.body;
    const addedData=await productModel.create(newProduct);
    return res.json({"Message":"Product Data Add successfully...!",data:addedData});
});

//PUT Update Category
router.put("updateproduct/:id",async(req,res)=>{
    const rid=req.params.id;
    const name=req.body.name;
    const updatedData=await productModel.findOneAndUpdate(
        {id:rid},
        {name:name},
        {new:true}
    );
    return res.json({data:updatedData});
});

router.delete("delproduct/:id",async(req,res)=>{
    const id=req.params.id;
    const deldata=await productModel.findOneAndDelete({id:id});
    return res.json({data:deldata});
});

module.exports = router;