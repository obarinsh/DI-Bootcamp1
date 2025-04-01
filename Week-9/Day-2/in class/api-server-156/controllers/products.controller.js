const {
  _getAllProducts,
  _getProductById,
  _createProduct,
} = require("../models/products.model.js");

const getAllProducts = (req, res) => {
  // res.json(products);
  _getAllProducts()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const getProductById = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const data = await _getProductById(id);
    res.json(data);
  } catch (error) {
    res.status(404).json({ mesaage: "no product with this if was found" });
  }
};

const createProduct = async (req, res) => {
  console.log(req.body);
  const { name, price, description } = req.body;
  try {
    const data = await _createProduct(name, price, description);
    getAllProducts(req, res);
  } catch (error) {
    res.status(402).json({ message: "somthing is wrong" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
