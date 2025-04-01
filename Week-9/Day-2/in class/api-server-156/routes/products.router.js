const express = require("express");
const {
  getAllProducts,
  getProductById,

  createProduct,
} = require("../controllers/products.controller.js");

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);

module.exports = router;
