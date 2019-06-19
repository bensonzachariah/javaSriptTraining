const express = require('express');
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');

// @route   GET api/auth
// @desc    gets the auth user
// @access  Public

router.get("/", auth, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user)
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public 

router.post("/", [
    check('email', "Please enter a valid email id ").isEmail(),
    check("password", 'password should be more the 6 char').isLength({ min: 6 })
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }
    const { email, password } = req.body;
    try {

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
        }

        const isMacth = await bcrypt.compare(password, user.password);

        if (!isMacth) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
        }

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


