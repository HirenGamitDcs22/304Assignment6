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
    return res.json({"Message":"Product Data Add successfully...!","Added Data is":addedData});
});

//PUT Update Price
router.put("/updateproduct/:id",async(req,res)=>{
    const pid=req.params.id;
    const price=req.body.price;
    const updatedData=await productModel.findOneAndUpdate(
        {id:pid},
        {price:price},
        {new:true}
    );
    return res.json({"Upadated Record Is ":updatedData});
});

router.delete("/delproduct/:id",async(req,res)=>{
    const id=req.params.id;
    const deldata=await productModel.findOneAndDelete({id:id});
    return res.json({"Deleted Data Is ":deldata});
});

module.exports = router;