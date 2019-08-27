const express = require('express');
const { isEmpty } = require('lodash');
const User = require('../models/user');
const router = express.Router();

// Add User
router.post('/add', async (req, res) => {
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    const { firstName, lastName, email, phone, city, state, picture, link1, link2, link3, skillset } = req.body;

    const newUser = new User({
        firstName,
        lastName,
        email,
        phone,
        city,
        state,
        picture,
        link1,
        link2,
        link3,
        skillset
    });
    try {
        await newUser.save();
        res.json({
            message: 'Data successfully saved',
            statusCode: 200,
            firstName,
            lastName,
            email,
            phone,
            city,
            state,
            picture,
            link1,
            link2,
            link3,
            skillset
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server error',
            statusCode: 500
        });
    }
});


// Get All Users
router.get('/users', async (req, res) => {

    try {
        const users = await User.find({});

        return res.json({
            users
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }

});

module.exports = router;