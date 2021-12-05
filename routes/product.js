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
    productList.forEach(item=>{
        //res.send("Product data:",item.storage[0]["int_memory"]);
    })
    return res.json({data:productList});
});

//POST  Add new Product
router.post("/addproduct",async(req,res)=>{
    const {newProduct} = req.body;
    const addedData=await productModel.create(newProduct);
    return res.json({"Message":"Product Data Add successfully...!","Added Data is":addedData});
});

//PUT Update Category
router.put("/updateproduct/:id",async(req,res)=>{
    const pid=req.params.id;
    const ram=req.body.ram;
    const updatedData=await productModel.findOneAndUpdate(
        {id:pid},
        {platform_performance:{$push:{RAM:ram}}},
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