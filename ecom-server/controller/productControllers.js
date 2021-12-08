const Product = require("../model/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const getProduct = await Product.findById(req.params.id);

    res.json(getProduct);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
