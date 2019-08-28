const express = require('express');
const { isEmpty } = require('lodash');
const User = require('../models/user');
const router = express.Router();

// Add
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

// Get All
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

// Get One
router.get('/edit/:email', async (req, res) => {

    try {
        const user = await User.findOne({
            email: req.params.email
        });

        return res.json({
            user
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }

});

// Update One
router.put('/edit/:email', async (req, res) => {
    // if (isEmpty(req.body)) {
    //     return res.status(403).json({
    //         message: 'Body should not be empty',
    //         statusCode: 403
    //     });
    // }
    console.log(req.body);
    console.log(req.data);

    const { firstName, lastName, email, phone, city, state, picture, link1, link2, link3, skillset } = req.body;

    try {
        const user = await User.update({
            email: { $eq: req.params.email},
            $set: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                city: city,
                state: state,
                picture: picture,
                link1: link1,
                link2: link2,
                link3: link3,
                skillset: skillset
            }
        });

        return res.json({
            user
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
});


// Delete One
router.delete('/delete/:email', async (req, res) => {

    try {
        const user = await User.deleteOne({
            email: req.params.email
        });

        console.log(user);

        return console.log("User deleted!");

    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }

});

module.exports = router;