const express = require("express");

const {
  addProductController,
} = require("../controllers/addProductController.controller");

/* create router */
const router = express.Router();

/* routes */
router.post("/", addProductController);

module.exports = router;
