const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    role: {
        type: String,
        default: "user",
    },
    first_name: {
        type: String,
        required: "Please enter first name."
    },
    last_name: {
        type: String,
        required: "Please enter last name."
    },
    email: {
        type: String,
        required: "Please enter email."
    },
    password: {
        type: String,
        required: "Password required."
    },
    verified_email: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
