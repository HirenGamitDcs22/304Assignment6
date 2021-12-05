require("dotenv").config();
const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = process.env.PORT || 5000

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(console.log("MongoDB Connected...!"));

const brandRoutes=require("./routes/brand");
const productRoutes=require("./routes/product");

app.use("/brand",brandRoutes);
app.use("/product",productRoutes);

app.get('/', (req, res) => res.send('Welcome to Mobile App !'))
app.listen(port, () => console.log(`Server started on port ${port}!`))