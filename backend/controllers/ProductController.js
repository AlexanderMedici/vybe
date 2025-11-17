import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/ProductModel.js";

//@desc fetch all products
//@route Get /api/products
//@ access public not portected
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
//@desc fetch a products
//@route Get /api/products/:id
//@ access public not portected
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("product not found ");
  }
});

export { getProducts, getProductById };
