const PortfolioAsset = require("../models/PortfolioAsset");


// CREATE ASSET
exports.createAsset = async (req, res) => {
  try {

    const { coinName, symbol, quantity, buyPrice, currentPrice } = req.body;

    const asset = await PortfolioAsset.create({
      coinName,
      symbol,
      quantity,
      buyPrice,
      currentPrice,
      userId: req.user._id
    });

    res.status(201).json(asset);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// GET USER PORTFOLIO
exports.getPortfolio = async (req, res) => {
  try {

    const assets = await PortfolioAsset.find({ userId: req.user._id });

    res.json(assets);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// UPDATE ASSET
exports.updateAsset = async (req, res) => {
  try {

    const asset = await PortfolioAsset.findById(req.params.id);

    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    if (asset.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const updatedAsset = await PortfolioAsset.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedAsset);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// DELETE ASSET
exports.deleteAsset = async (req, res) => {
  try {

    const asset = await PortfolioAsset.findById(req.params.id);

    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    if (asset.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await asset.deleteOne();

    res.json({ message: "Asset removed" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL PORTFOLIOS (ADMIN ONLY)

exports.getAllPortfolios = async (req, res) => {

  try {

    const assets = await PortfolioAsset.find().populate("userId", "name email");

    res.json(assets);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};