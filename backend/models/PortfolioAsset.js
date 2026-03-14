const mongoose = require("mongoose");

const portfolioAssetSchema = new mongoose.Schema(
{
    coinName: {
        type: String,
        required: true
    },

    symbol: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    buyPrice: {
        type: Number,
        required: true
    },

    currentPrice: {
        type: Number,
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("PortfolioAsset", portfolioAssetSchema);