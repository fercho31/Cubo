const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userID: String,
    premium: {type: String, default: ""},
})

const model = mongoose.model("user", userSchema);

module.exports = model;