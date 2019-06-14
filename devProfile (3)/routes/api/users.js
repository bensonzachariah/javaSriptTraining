const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../models/User");


// @route   POST api/users
// @desc    Register the user
// @access  Public 

router.post("/", [
    check("FirstName", "Name is required").not().isEmpty(),
    check("LastName", "Name is required").not().isEmpty(),
    check('email', "Please enter a valid email id ").isEmail(),
    check("password", 'password should be more the 6 char').isLength({ min: 6 })
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }
    const { FirstName, LastName, email, password } = req.body;
    try {

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: [{ msg: "User is existed" }] })
        }

        const avatar = gravatar.url('email', {
            s: "200",
            r: "pg",
            d: "mm"
        })

        user = new User({
            FirstName,
            LastName,
            email,
            avatar,
            password
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get("jwtSecret"),
            { expiresIn: 36000 },
            (err, token) => {
                if (err) throw err;
                return res.json({ token });
            }
        )

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: [{ msg: "Server error" }] })
    }

});

module.exports = router;
