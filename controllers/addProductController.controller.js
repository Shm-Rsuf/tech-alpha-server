const Product = require("../models/product.model");

const addProductController = async (req, res) => {
  console.log({ ...req.body });
  try {
    const product = await Product.create({
      ...req.body,
    });
    res.status(200).json({ product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addProductController,
};
