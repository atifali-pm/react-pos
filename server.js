import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import morgon from 'morgan';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import productRouter from "./routes/productRouter.js";

//require('color');

dotenv.config();

// Connect with MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected")
}).catch((err) => {
    console.log("MongoDB not connected")
})

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgon("dev"));

// routes
// app.get("/", (req, res) => {
//     res.send("Hello POS");
// })

app.use('/api/products', productRouter)


// Create Port
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
})

