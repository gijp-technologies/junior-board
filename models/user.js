const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    city: String,
    state: String,
    picture: String,
    link1: String,
    link2: String,
    link3: String,
    skillset: String
    
});

const User = mongoose.model('User', UserSchema);


module.exports = User;