const express = require("express");
const router = express.Router();

const { getAllPortfolios } = require("../controllers/portfolioController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

router.get("/portfolios", protect, authorize("admin"), getAllPortfolios);

module.exports = router;