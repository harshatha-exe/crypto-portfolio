const express = require("express");
const router = express.Router();

const {
  createAsset,
  getPortfolio,
  updateAsset,
  deleteAsset
} = require("../controllers/portfolioController");

const { protect } = require("../middleware/authMiddleware");


// CREATE
router.post("/", protect, createAsset);

// READ
router.get("/", protect, getPortfolio);

// UPDATE
router.put("/:id", protect, updateAsset);

// DELETE
router.delete("/:id", protect, deleteAsset);

module.exports = router;