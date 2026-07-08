const shortid = require("shortid");
const validator = require("validator");

const URL = require("../src/models/url.model");

// Create Short URL

exports.createShortUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;

        if (!originalUrl) {
            return res.status(400).json({
                message: "URL is required",
            });
        }

        if (!validator.isURL(originalUrl)) {
            return res.status(400).json({
                message: "Invalid URL",
            });
        }

        // Check if already exists

        let existing = await URL.findOne({ originalUrl });

        if (existing) {
            return res.json({
                shortUrl: `${req.protocol}://${req.get("host")}/${existing.shortCode}`,
            });
        }

        const shortCode = shortid.generate();

        const newUrl = await URL.create({
            originalUrl,
            shortCode,
        });

        res.status(201).json({
            message: "Short URL Created",
            shortUrl: `${req.protocol}://${req.get("host")}/${newUrl.shortCode}`,
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

// Redirect

exports.redirectUrl = async (req, res) => {
    try {
        const { shortCode } = req.params;

        const url = await URL.findOne({ shortCode });

        if (!url) {
            return res.status(404).json({
                message: "Short URL not found",
            });
        }

        return res.redirect(url.originalUrl);

    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};