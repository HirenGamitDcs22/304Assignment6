const mongoose = require('mongoose');

const productSchema=mongoose.Schema({
    id:String,
    name:String,
    gen_features:[{
        sim_size:String,
        sim_type:String,
        net_type:String,
        battery_type:String,
        sensors:String,
        rem_battery:String
    }],
    platform_performance:[{
        os:String,
        processor:String,
        RAM:String,
        graphics:String
    }],
    camera:[{ 
        primary_camera:String,
        front_camera:String,
        flash:String,
        zoom:String,
        video_rec:String
    }],
    display:[{ 
        resolution:String,
        feature:String
    }],
    storage:[{
        int_memory:String,
        exp_memory:String
    }],
    connectivity_features:[{ 
        usb:String,
        wifi:String,
        bluetooth:String
    }],
    price:String,
    variant:String,
    brand_id:String
});

const productModel = mongoose.model("product",productSchema,"product");

module.exports = productModel;