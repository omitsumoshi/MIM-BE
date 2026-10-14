const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }
});
UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword
});
UserSchema.methods.generateAuthToken = (user) => {
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_KEY, { expiresIn: "1h" });

    return token;
}


module.exports = mongoose.model('User', UserSchema)