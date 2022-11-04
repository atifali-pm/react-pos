import Product from "../models/productModel.js"

export const getProductController = async (req, res) => {
    try {

        const products = await Product.find();
        res.status(200).send(products);

    } catch (err) {
        console.log(err)
    }
}

export const addProductController = async (req, res) => {
    try {
        const newProducts = new Product(req.body);
        await newProducts.save();
        res.status(200).send("Products created successfully");

    } catch (err) {
        console.log(err)
    }
}