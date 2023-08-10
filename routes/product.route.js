const express = require("express");

const {
  addProductController,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/addProductController.controller");

/* create router */
const router = express.Router();

/* routes */
router.post("/", addProductController);
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

module.exports = router;
