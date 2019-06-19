const express = require('express');
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const { check, validationResult } = require('express-validator/check');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private

router.get("/me", auth, async (req, res) => {

    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate("user", ["name", "avatar"]);

        if (!profile) {
            return res.json({ msg: "There is no profile for the user" })
        }

        res.json(profile)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/profile/
// @desc    Create or update profile
// @access  Private


module.exports = router;