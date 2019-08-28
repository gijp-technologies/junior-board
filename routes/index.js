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
            email: email
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





// todoRoutes.route('/update/:id').post(function (req, res) {
//     Todo.findById(req.params.id, function (err, todo) {
//         if (!todo) {
//             res.status(400).send('Data was not found!');
//         } else {
//             todo.todo_description = req.body.todo_description;
//             todo.todo_responsibility = req.body.todo_responsibility;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;

//             todo.save().then(todo => {
//                 res.json('Todo has been updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("There was an error updating.");
//             });
//         }
//     });
// });



module.exports = router;