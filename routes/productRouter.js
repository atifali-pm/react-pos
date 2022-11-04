import express from "express";
import {addProductController, getProductController} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/all", getProductController);
productRouter.post("/add", addProductController);

export default productRouter;